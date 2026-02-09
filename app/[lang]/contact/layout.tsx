import { Metadata } from 'next';
import type { Locale } from '@/app/i18n/config';

const baseUrl = 'https://icleaning.ae';

const metaByLang: Record<Locale, { title: string; description: string; keywords: string[] }> = {
  en: {
    title: 'Contact Us - iCleaning Dubai | Get Free Quote Today',
    description: 'Contact iCleaning Dubai for professional cleaning services. Get a free quote, book online or call us. Available 7 days a week in Dubai, UAE.',
    keywords: ['contact iCleaning', 'cleaning quote Dubai', 'book cleaning service', 'Dubai cleaners contact'],
  },
  ru: {
    title: 'Контакты - iCleaning Дубай | Бесплатная оценка',
    description: 'Свяжитесь с iCleaning Дубай для профессиональных услуг уборки. Бесплатная оценка, онлайн-бронирование. Работаем 7 дней в неделю.',
    keywords: ['контакты iCleaning', 'заказать уборку Дубай', 'бронирование уборки', 'связаться'],
  },
  ar: {
    title: 'اتصل بنا - iCleaning دبي | احصل على عرض سعر مجاني',
    description: 'تواصل مع iCleaning دبي لخدمات التنظيف الاحترافية. احصل على عرض سعر مجاني أو احجز عبر الإنترنت. متاحون 7 أيام في الأسبوع.',
    keywords: ['اتصل بـ iCleaning', 'عرض سعر تنظيف دبي', 'حجز خدمة تنظيف'],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = (lang as Locale) || 'ru';
  const meta = metaByLang[locale] || metaByLang.ru;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: locale === 'ru' ? `${baseUrl}/contact` : `${baseUrl}/${locale}/contact`,
      languages: { en: `${baseUrl}/en/contact`, ru: `${baseUrl}/contact`, ar: `${baseUrl}/ar/contact`, 'x-default': `${baseUrl}/contact` },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: ['/images/og-contact.jpg'],
    },
  };
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
