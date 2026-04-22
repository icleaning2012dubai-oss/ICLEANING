import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const BITRIX_WEBHOOK_URL = 'https://sladikmladik.bitrix24.ru/rest/19494/pswzhpup008nfd6i/crm.lead.add';

function getStripeClient() {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeSecretKey) {
    throw new Error('STRIPE_SECRET_KEY is not configured');
  }

  return new Stripe(stripeSecretKey, {
    apiVersion: '2025-12-15.clover',
  });
}

// Функция для создания лида в Bitrix24
async function createBitrixLead(session: Stripe.Checkout.Session) {
  try {
    const customerName = session.metadata?.customerName || session.customer_details?.name || 'No name';
    const customerPhone = session.metadata?.customerPhone || session.customer_details?.phone || '';
    const customerEmail = session.customer_email || '';
    const amount = session.amount_total ? (session.amount_total / 100).toFixed(2) : '0';

    const bitrixData = {
      fields: {
        TITLE: `Оплаченный заказ - ${amount} AED`,
        NAME: customerName,
        PHONE: customerPhone ? [{ VALUE: customerPhone, VALUE_TYPE: 'WORK' }] : [],
        EMAIL: customerEmail ? [{ VALUE: customerEmail, VALUE_TYPE: 'WORK' }] : [],
        SOURCE_ID: 'WEB',
        SOURCE_DESCRIPTION: 'Оплата через сайт (Stripe)',
        OPPORTUNITY: amount,
        CURRENCY_ID: 'AED',
        STATUS_ID: 'CONVERTED', // Статус "Конвертирован" (оплачено)
        COMMENTS: `Stripe Session ID: ${session.id}\nСумма: ${amount} AED\nEmail: ${customerEmail}\nАдрес: ${session.metadata?.customerAddress || 'Не указан'}\nПримечания: ${session.metadata?.notes || 'Нет'}`,
        ASSIGNED_BY_ID: 1,
      }
    };

    console.log('📤 Sending to Bitrix24:', JSON.stringify(bitrixData, null, 2));
    
    const response = await fetch(BITRIX_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bitrixData),
    });

    const result = await response.json();
    
    console.log('📥 Bitrix24 response status:', response.status);
    console.log('📥 Bitrix24 response:', JSON.stringify(result, null, 2));

    if (result.result) {
      console.log('✅ Lead created in Bitrix24 with ID:', result.result);
      return result.result;
    } else {
      console.error('❌ Bitrix24 error:', JSON.stringify(result, null, 2));
      if (result.error_description) {
        console.error('❌ Error description:', result.error_description);
      }
      return null;
    }
  } catch (error) {
    console.error('❌ Error creating Bitrix lead:', error);
    return null;
  }
}

export async function POST(req: NextRequest) {
  try {
    const stripe = getStripeClient();
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!webhookSecret) {
      throw new Error('STRIPE_WEBHOOK_SECRET is not configured');
    }

    const body = await req.text();
    const signature = req.headers.get('stripe-signature');
    if (!signature) {
      return NextResponse.json({ error: 'Missing stripe-signature header' }, { status: 400 });
    }

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err: any) {
      console.error('Webhook signature verification failed:', err.message);
      return NextResponse.json({ error: 'Webhook Error' }, { status: 400 });
    }

    // Обработка различных событий
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session;
        
        console.log('💳 Payment successful:', {
          sessionId: session.id,
          customerEmail: session.customer_email,
          amountTotal: session.amount_total,
          metadata: session.metadata,
        });

        // Создаём лид в Bitrix24
        const leadId = await createBitrixLead(session);
        
        if (leadId) {
          console.log(`✅ Order recorded in CRM with Lead ID: ${leadId}`);
        } else {
          console.error('⚠️ Failed to create lead in CRM, but payment was successful');
        }

        // TODO: Отправить email подтверждения клиенту
        // TODO: Уведомить администратора
        
        break;

      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('PaymentIntent succeeded:', paymentIntent.id);
        break;

      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object as Stripe.PaymentIntent;
        console.log('Payment failed:', failedPayment.id);
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: error.message || 'Webhook handler failed' },
      { status: 500 }
    );
  }
}
