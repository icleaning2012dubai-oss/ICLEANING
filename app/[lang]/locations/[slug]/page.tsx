import { Metadata } from 'next';
import type { Locale } from '@/app/i18n/config';
import { locationsData, getAllLocationSlugs } from '@/app/data/locationsData';
import LocationPageClient from './LocationPageClient';

const baseUrl = 'https://icleaning.ae';

export function generateStaticParams() {
  return getAllLocationSlugs().flatMap((slug) => [
    { lang: 'ru', slug },
    { lang: 'en', slug },
    { lang: 'ar', slug },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = (lang as Locale) || 'ru';
  const page = locationsData[slug];

  if (!page) {
    return { title: 'Not Found' };
  }

  const path = `/locations/${slug}`;
  const canonical = locale === 'ru' ? `${baseUrl}${path}` : `${baseUrl}/${locale}${path}`;

  return {
    title: page.title[locale] || page.title.ru,
    description: page.description[locale] || page.description.ru,
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
      title: page.title[locale] || page.title.ru,
      description: page.description[locale] || page.description.ru,
      url: canonical,
      locale: locale === 'ar' ? 'ar_AE' : locale === 'ru' ? 'ru_RU' : 'en_AE',
      siteName: 'iCleaning Dubai',
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { slug } = await params;
  return <LocationPageClient slug={slug} />;
}
