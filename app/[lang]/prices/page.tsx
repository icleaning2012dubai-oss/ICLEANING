import { Metadata } from 'next';
import type { Locale } from '@/app/i18n/config';
import PricesPageClient from './PricesPageClient';

const baseUrl = 'https://icleaning.ae';

const metaByLang: Record<Locale, { title: string; description: string }> = {
  ru: {
    title: 'Цены на химчистку и уборку в Дубае | iCleaning',
    description: 'Актуальные цены на химчистку диванов, ковров, штор, генеральную уборку, мойку окон и чистку кондиционеров в Дубае. Прозрачные тарифы, без скрытых доплат.',
  },
  en: {
    title: 'Cleaning Prices in Dubai | iCleaning',
    description: 'Current prices for sofa, carpet, curtain cleaning, deep cleaning, window washing, and AC maintenance in Dubai. Transparent pricing, no hidden fees.',
  },
  ar: {
    title: 'أسعار التنظيف في دبي | iCleaning',
    description: 'أسعار حالية لتنظيف الأرائك والسجاد والستائر والتنظيف العميق وغسيل النوافذ وصيانة المكيفات في دبي. أسعار شفافة بدون رسوم مخفية.',
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
  const path = '/prices';
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

export default function PricesPage() {
  return <PricesPageClient />;
}
