# Пример использования Stripe в корзине

## Быстрый старт

### 1. Установка зависимостей
```bash
npm install
```

### 2. Настройка переменных окружения

Создайте или обновите файл `.env.local`:

```env
# Next.js
NEXT_TELEMETRY_DISABLED=1

# Stripe Keys (получите на https://dashboard.stripe.com/apikeys)
STRIPE_SECRET_KEY=sk_test_51xxxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51xxxxxxxxxxxxx

# Webhook Secret (для production)
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxx
```

### 3. Запуск dev сервера
```bash
npm run dev
```

### 4. Тестирование оплаты

1. Откройте http://localhost:3000
2. Перейдите в раздел "Services"
3. Добавьте любую услугу в корзину
4. Нажмите "Proceed to Checkout"
5. Заполните форму
6. Выберите "Credit/Debit Card"
7. Нажмите "Place Order"

Вы будете перенаправлены на Stripe Checkout. Используйте тестовую карту:
- **Номер карты:** 4242 4242 4242 4242
- **Дата:** любая будущая (например, 12/25)
- **CVC:** любые 3 цифры (например, 123)
- **Имя:** любое имя
- **Почтовый индекс:** любой (например, 12345)

После успешной оплаты вы будете перенаправлены на страницу успеха.

## Архитектура

```
┌─────────────────┐
│  Клиент (Next)  │
│                 │
│  1. Добавляет   │
│     товары в    │
│     корзину     │
│                 │
│  2. Checkout    │
│     страница    │
└────────┬────────┘
         │
         │ POST /api/create-checkout-session
         │ { items, customerInfo }
         ▼
┌─────────────────────────────┐
│  API Route                  │
│  /api/create-checkout-      │
│  session/route.ts           │
│                             │
│  - Создает line items       │
│  - Создает Stripe Session   │
│  - Возвращает sessionId     │
└─────────────┬───────────────┘
              │
              │ stripe.checkout.sessions.create()
              ▼
┌─────────────────────────────┐
│  Stripe API                 │
│                             │
│  Создает Checkout Session   │
│  и возвращает URL           │
└─────────────┬───────────────┘
              │
              │ Redirect URL
              ▼
┌─────────────────────────────┐
│  Stripe Checkout Page       │
│  (hosted by Stripe)         │
│                             │
│  - Безопасная форма оплаты  │
│  - Обработка карты          │
│  - 3D Secure если нужен     │
└─────────────┬───────────────┘
              │
              │ После оплаты
              ▼
┌─────────────────────────────┐
│  Success Page               │
│  /checkout/success          │
│                             │
│  - Показывает статус        │
│  - Очищает корзину          │
└─────────────────────────────┘
              │
              │ Параллельно
              ▼
┌─────────────────────────────┐
│  Webhook                    │
│  /api/webhooks/stripe       │
│                             │
│  События:                   │
│  - checkout.session.        │
│    completed                │
│  - payment_intent.          │
│    succeeded                │
│                             │
│  TODO:                      │
│  - Сохранить заказ в БД     │
│  - Отправить email          │
│  - Уведомить админа         │
└─────────────────────────────┘
```

## Потоки данных

### Успешная оплата

```javascript
// 1. Клиент отправляет запрос
fetch('/api/create-checkout-session', {
  method: 'POST',
  body: JSON.stringify({
    items: [
      {
        id: 'service-1',
        name: 'Carpet Cleaning',
        price: 299.00,
        quantity: 1,
        category: 'Cleaning',
        image: '/images/carpet.jpg'
      }
    ],
    customerInfo: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phone: '+971501234567',
      address: 'Dubai, UAE'
    }
  })
})

// 2. API создает Stripe Session
const session = await stripe.checkout.sessions.create({
  payment_method_types: ['card'],
  line_items: [{
    price_data: {
      currency: 'aed',
      product_data: {
        name: 'Carpet Cleaning',
        description: 'Cleaning',
        images: ['/images/carpet.jpg']
      },
      unit_amount: 29900 // 299.00 AED в центах
    },
    quantity: 1
  }],
  mode: 'payment',
  success_url: 'http://localhost:3000/checkout/success?session_id={CHECKOUT_SESSION_ID}',
  cancel_url: 'http://localhost:3000/checkout'
})

// 3. Возвращает URL для редиректа
return { url: session.url }

// 4. Клиент перенаправляется
window.location.href = session.url

// 5. После оплаты webhook получает событие
{
  type: 'checkout.session.completed',
  data: {
    object: {
      id: 'cs_test_xxxxx',
      payment_status: 'paid',
      customer_email: 'john@example.com',
      amount_total: 29900,
      metadata: {
        customerName: 'John Doe',
        customerPhone: '+971501234567',
        customerAddress: 'Dubai, UAE'
      }
    }
  }
}
```

## Кастомизация

### Изменить валюту

Файл: `app/api/create-checkout-session/route.ts`

```typescript
price_data: {
  currency: 'usd', // Измените на нужную валюту
  // ...
}
```

### Добавить доставку

```typescript
const session = await stripe.checkout.sessions.create({
  // ...существующий код
  shipping_options: [
    {
      shipping_rate_data: {
        type: 'fixed_amount',
        fixed_amount: {
          amount: 2000, // 20.00 в минимальных единицах
          currency: 'aed',
        },
        display_name: 'Standard delivery',
        delivery_estimate: {
          minimum: {
            unit: 'business_day',
            value: 1,
          },
          maximum: {
            unit: 'business_day',
            value: 3,
          },
        },
      },
    },
  ],
})
```

### Добавить скидку

```typescript
const session = await stripe.checkout.sessions.create({
  // ...существующий код
  discounts: [{
    coupon: 'SUMMER20', // ID купона созданного в Stripe Dashboard
  }],
})
```

### Сохранение заказа в БД

Обновите webhook `app/api/webhooks/stripe/route.ts`:

```typescript
case 'checkout.session.completed':
  const session = event.data.object as Stripe.Checkout.Session;
  
  // Пример с Prisma
  await prisma.order.create({
    data: {
      stripeSessionId: session.id,
      customerEmail: session.customer_email,
      customerName: session.metadata.customerName,
      customerPhone: session.metadata.customerPhone,
      amount: session.amount_total / 100,
      currency: session.currency,
      status: 'paid',
      createdAt: new Date()
    }
  });
  
  // Отправить email
  await sendOrderConfirmationEmail(session);
  
  break;
```

## Troubleshooting

### Ошибка: "No API key provided"

Проверьте что переменные окружения правильно настроены:
```bash
echo $STRIPE_SECRET_KEY
```

Убедитесь что сервер перезапущен после изменения `.env.local`.

### Webhook не работает

1. Проверьте что webhook secret правильный
2. Для локальной разработки используйте Stripe CLI
3. Проверьте логи webhook в Stripe Dashboard

### Redirect не работает

Проверьте что URL в `success_url` и `cancel_url` правильные и соответствуют вашему домену.

### Оплата не проходит

Убедитесь что используете тестовые карты для test mode или реальные карты для live mode.

## Дополнительные ресурсы

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Testing](https://stripe.com/docs/testing)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- [Stripe Dashboard](https://dashboard.stripe.com)
