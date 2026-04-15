import { Metadata } from 'next';
import type { Locale } from '@/app/i18n/config';
import ReviewsPageClient from './ReviewsPageClient';

const baseUrl = 'https://icleaning.ae';

const metaByLang: Record<Locale, { title: string; description: string }> = {
  ru: {
    title: 'Отзывы клиентов | iCleaning Dubai',
    description: 'Реальные отзывы клиентов о химчистке диванов, ковров и уборке в Дубае. Узнайте, почему нам доверяют жители ОАЭ.',
  },
  en: {
    title: 'Customer Reviews | iCleaning Dubai',
    description: 'Real customer reviews about sofa cleaning, carpet cleaning, and housekeeping in Dubai. See why UAE residents trust us.',
  },
  ar: {
    title: 'آراء العملاء | iCleaning Dubai',
    description: 'آراء حقيقية من العملاء حول تنظيف الأرائك والسجاد والتنظيف في دبي. اكتشفوا لماذا يثق بنا سكان الإمارات.',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = (lang as Locale) || 'ru';
  const meta = metaByLang[locale] || metaByLang.ru;
  const path = '/reviews';
  const canonical = locale === 'ru' ? `${baseUrl}${path}` : `${baseUrl}/${locale}${path}`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages: {
        en: `${baseUrl}/en${path}`,
        ru: `${baseUrl}${path}`,
        ar: `${baseUrl}/ar${path}`,
        'x-default': `${baseUrl}${path}`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      siteName: 'iCleaning Dubai',
    },
  };
}

export default function ReviewsPage() {
  return <ReviewsPageClient />;
}
