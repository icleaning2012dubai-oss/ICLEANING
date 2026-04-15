import { Metadata } from 'next';
import type { Locale } from '@/app/i18n/config';
import { subServicesData, getAllSubServiceSlugs } from '@/app/data/subServicesData';
import SubServicePageClient from './SubServicePageClient';

const baseUrl = 'https://icleaning.ae';

export function generateStaticParams() {
  return getAllSubServiceSlugs().flatMap((slug) => [
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
  const page = subServicesData[slug];

  if (!page) {
    return { title: 'Not Found' };
  }

  const path = `/${slug}`;
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
      images: page.image ? [page.image] : undefined,
    },
  };
}

export default async function SubServicePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { slug } = await params;
  return <SubServicePageClient slug={slug} />;
}
