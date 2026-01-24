# 📊 SEO Документация - iCleaning Website

## 🌍 Мультиязычность

Сайт поддерживает 3 языка:
- 🇬🇧 **English (en)** - основной язык
- 🇷🇺 **Русский (ru)**
- 🇦🇪 **العربية (ar)** - арабский

---

## 📁 Структура сайта

```
app/
├── page.tsx                    # Главная страница (/)
├── layout.tsx                  # Главный layout со структурой HTML
├── about/
│   └── page.tsx               # Страница "О нас" (/about)
├── contact/
│   └── page.tsx               # Страница "Контакты" (/contact)
├── services/
│   ├── [slug]/
│   │   └── page.tsx          # Динамические страницы услуг
│   │                          # /services/carpet-cleaning
│   │                          # /services/sofa-mattresses
│   │                          # /services/curtains-blinds
│   │                          # /services/regular-cleaning
│   │                          # /services/air-conditioner
│   └── serviceData.ts         # Данные всех услуг
├── checkout/
│   ├── page.tsx               # Страница оформления заказа
│   └── success/
│       └── page.tsx           # Страница успешного заказа
├── privacy/
│   └── page.tsx               # Политика конфиденциальности
└── terms/
    └── page.tsx               # Условия использования
```

---

## 🎯 Где находятся Titles и Meta Descriptions

### 1. **Главная страница** (`app/page.tsx`)

```tsx
export const metadata: Metadata = {
  title: 'iCleaning Dubai - Professional Cleaning Services | Carpets, Sofas, AC Cleaning',
  description: 'Professional cleaning services in Dubai. Expert carpet cleaning, sofa cleaning...',
  keywords: ['cleaning services Dubai', 'carpet cleaning Dubai', ...],
}
```

**Где изменить:**
- Откройте: [`app/page.tsx`](app/page.tsx)
- Найдите блок `export const metadata` (строки 11-26)
- Измените `title`, `description`, `keywords`

---

### 2. **Страница "О нас"** (`app/about/layout.tsx`)

```tsx
export const metadata: Metadata = {
  title: 'About Us - iCleaning Dubai | Professional Cleaning Company',
  description: 'Learn about iCleaning Dubai. Professional cleaning company...',
}
```

**Где изменить:**
- [`app/about/layout.tsx`](app/about/layout.tsx) - строки 4-14

---

### 3. **Страница "Контакты"** (`app/contact/layout.tsx`)

```tsx
export const metadata: Metadata = {
  title: 'Contact Us - iCleaning Dubai | Get Free Quote Today',
  description: 'Contact iCleaning Dubai for professional cleaning services...',
}
```

**Где изменить:**
- [`app/contact/layout.tsx`](app/contact/layout.tsx) - строки 4-14

---

### 4. **Privacy Policy** (`app/privacy/layout.tsx`)

```tsx
export const metadata: Metadata = {
  title: 'Privacy Policy - iCleaning Dubai',
  description: 'Privacy policy for iCleaning Dubai...',
  robots: { index: false, follow: true }, // Не индексируется
}
```

**Где изменить:**
- [`app/privacy/layout.tsx`](app/privacy/layout.tsx) - строки 4-12

---

### 5. **Terms of Service** (`app/terms/layout.tsx`)

```tsx
export const metadata: Metadata = {
  title: 'Terms of Service - iCleaning Dubai',
  description: 'Terms and conditions for iCleaning Dubai services...',
  robots: { index: false, follow: true }, // Не индексируется
}
```

**Где изменить:**
- [`app/terms/layout.tsx`](app/terms/layout.tsx) - строки 4-12

---

### 4. **Динамические страницы услуг** (`app/services/[slug]/page.tsx`)

Meta данные генерируются динамически на основе slug:

```tsx
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = serviceData.find(s => s.slug === params.slug);
  
  return {
    title: `${service?.title} - iCleaning Dubai`,
    description: service?.description || 'Professional cleaning service',
  };
}
```

**Где изменить данные услуг:**
- [`app/services/serviceData.ts`](app/services/serviceData.ts)

Пример структуры:
```typescript
{
  slug: 'carpet-cleaning',
  title: 'Carpet Cleaning',
  description: 'Professional carpet cleaning service',
  price: 'от 299 AED',
  // ...
}
```

---

## 🌐 Где находятся переводы

### Папка с переводами: [`app/locales/`](app/locales/)

Все тексты на сайте хранятся в JSON файлах:

```
app/locales/
├── en.json    # 🇬🇧 Английский (593 строки)
├── ru.json    # 🇷🇺 Русский (595 строк)
└── ar.json    # 🇦🇪 Арабский
```

### Структура файлов переводов

Каждый файл содержит ключи в формате `category.key`:

```json
{
  "nav.home": "Home",
  "nav.about": "About",
  "nav.services": "Services",
  "nav.contact": "Contact",
  
  "hero.title1": "Reliable Cleanliness",
  "hero.title2": "Is Our Mission!",
  "hero.subtitle": "We clean sofas, carpets, curtains...",
  
  "about.title": "About Us",
  "services.carpet": "Carpet Cleaning",
  
  "footer.company": "Company",
  "footer.rights": "All rights reserved"
}
```

### Как использовать переводы в коде

```tsx
import { useLanguage } from '@/app/contexts/LanguageProvider';

function Component() {
  const { t } = useLanguage();
  
  return (
    <h1>{t('hero.title1')}</h1>
  );
}
```

---

## 🔍 SEO важные разделы переводов

### 1. **Навигация и меню**
```json
"nav.home": "Home",
"nav.about": "About",
"nav.services": "Services",
"nav.contact": "Contact"
```
**Файлы:** [`app/locales/en.json`](app/locales/en.json) (строки 1-5)

### 2. **Hero секция (главная страница)**
```json
"hero.title1": "Reliable Cleanliness",
"hero.title2": "Is Our Mission!",
"hero.subtitle": "We clean sofas, carpets, curtains..."
```
**Файлы:** [`app/locales/en.json`](app/locales/en.json) (строки 7-10)

### 3. **Услуги**
```json
"services.badge": "Our Services",
"services.title": "What We Can Do For You?",
"services.carpet": "Carpet Cleaning",
"services.carpetDesc": "Professional deep cleaning",
"services.sofa": "Sofa & Mattresses",
"services.curtains": "Curtains & Blinds"
```
**Файлы:** [`app/locales/en.json`](app/locales/en.json) (строки 27-44)

### 4. **О компании**
```json
"about.badge": "About Us",
"about.title": "Bringing Freshness, Comfort...",
"about.description": "At HomyClean, we go beyond..."
```
**Файлы:** [`app/locales/en.json`](app/locales/en.json) (строки 12-18)

### 5. **Футер (важно для SEO)**
```json
"footer.company": "Company",
"footer.aboutUs": "About Us",
"footer.services": "Services",
"footer.contact": "Contact",
"footer.rights": "All rights reserved"
```
**Файлы:** [`app/locales/en.json`](app/locales/en.json) (строки 106-111)

### 6. **Хлебные крошки (Breadcrumbs)**
```json
"breadcrumb.home": "HOME",
"breadcrumb.about": "ABOUT",
"breadcrumb.contact": "CONTACT"
```
**Файлы:** [`app/locales/en.json`](app/locales/en.json) (строки 121-123)

---

## 📝 Как добавить/изменить перевод

### Пример: Добавить новый текст

1. **Откройте все 3 файла переводов:**
   - [`app/locales/en.json`](app/locales/en.json)
   - [`app/locales/ru.json`](app/locales/ru.json)
   - [`app/locales/ar.json`](app/locales/ar.json)

2. **Добавьте ключ в каждый файл:**

**en.json:**
```json
{
  "seo.newTitle": "New SEO Title"
}
```

**ru.json:**
```json
{
  "seo.newTitle": "Новый SEO заголовок"
}
```

**ar.json:**
```json
{
  "seo.newTitle": "عنوان SEO الجديد"
}
```

3. **Используйте в коде:**
```tsx
{t('seo.newTitle')}
```

---

## 🎨 Где находятся шаблоны страниц

### Главный Layout (обёртка для всех страниц)
**Файл:** [`app/layout.tsx`](app/layout.tsx)

Содержит:
- `<html>` и `<head>` теги
- Meta теги по умолчанию
- Open Graph теги
- Favicon
- Шрифты
- Провайдеры (язык, корзина)

```tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://icleaning.ae'),
  title: {
    default: 'iCleaning - Professional Cleaning Services',
    template: '%s | iCleaning Dubai'
  },
  description: 'Professional cleaning services in Dubai...',
  keywords: ['cleaning', 'Dubai', 'carpet cleaning', 'sofa cleaning'],
  // Open Graph
  openGraph: {
    title: 'iCleaning Dubai',
    description: '...',
    images: ['/images/og-image.jpg'],
  },
}
```

---

## 📍 Карта сайта (Sitemap)

**Файл:** [`app/sitemap.ts`](app/sitemap.ts)

Генерирует XML sitemap автоматически для всех страниц.

**Доступна по адресу:** `https://yourdomain.com/sitemap.xml`

Включает:
- Главную страницу
- Страницу "О нас"
- Страницу "Контакты"
- Все страницы услуг
- Checkout
- Privacy & Terms

---

## 🖼️ Open Graph изображения

Для социальных сетей (Facebook, LinkedIn и т.д.):

**Файл:** [`app/opengraph-image.tsx`](app/opengraph-image.tsx)

Генерирует динамическое изображение 1200x630px с логотипом и текстом.

---

## 🔧 Структурированные данные (Schema.org)

### LocalBusiness Schema

Добавлено в [`app/layout.tsx`](app/layout.tsx):

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "iCleaning Dubai",
      "description": "Professional cleaning services",
      "url": "https://icleaning.ae",
      "telephone": "+971-50-123-4567",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jebel Ali Industrial Area",
        "addressLocality": "Dubai",
        "addressCountry": "UAE"
      }
    })
  }}
/>
```

---

## 🛠️ Чеклист для SEO оптимизации

### Meta теги (в каждом page.tsx)
- [ ] `title` - уникальный для каждой страницы
- [ ] `description` - 150-160 символов
- [ ] `keywords` - релевантные ключевые слова
- [ ] Open Graph теги (`og:title`, `og:description`, `og:image`)

### Контент
- [ ] H1 заголовок на каждой странице (только один)
- [ ] H2, H3 подзаголовки по иерархии
- [ ] Alt теги для всех изображений
- [ ] Внутренние ссылки между страницами

### Переводы
- [ ] Все тексты переведены на 3 языка
- [ ] Ключи в `locales/*.json` совпадают во всех файлах
- [ ] Мета-теги также локализованы (если нужно)

### Технические аспекты
- [ ] Sitemap.xml доступен
- [ ] robots.txt настроен
- [ ] Structured Data (Schema.org) добавлен
- [ ] Canonical URLs настроены
- [ ] Mobile-friendly (responsive design)

---

## 🚀 Быстрые команды

### Поиск текста во всех переводах
```bash
# Найти текст "Carpet Cleaning" во всех локализациях
grep -r "Carpet Cleaning" app/locales/
```

### Проверка всех meta titles
```bash
# Найти все metadata блоки
grep -r "export const metadata" app/
```

### Проверка структуры переводов
```bash
# Сравнить количество ключей в файлах
wc -l app/locales/*.json
```

---

## 📞 Контакты для вопросов

Если нужно добавить новые страницы, изменить структуру или добавить переводы - обращайтесь к разработчику.

**Основные файлы для SEO:**
- Meta теги: `app/**/page.tsx` (metadata блоки)
- Переводы: `app/locales/*.json`
- Sitemap: `app/sitemap.ts`
- Layout: `app/layout.tsx`
- Услуги: `app/services/serviceData.ts`

---

**Последнее обновление:** 16 января 2026
