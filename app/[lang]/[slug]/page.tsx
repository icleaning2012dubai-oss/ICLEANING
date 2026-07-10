import { Metadata } from 'next';
import type { Locale } from '@/app/i18n/config';
import { subServicesData, getAllSubServiceSlugs } from '@/app/data/subServicesData';
import { getSeoLanding, getAllSeoLandingSlugs } from '@/app/data/seoLandings';
import SubServicePageClient from './SubServicePageClient';
import SeoLandingClient from './seo/SeoLandingClient';
import SeoLandingJsonLd from './seo/SeoLandingJsonLd';

const baseUrl = 'https://icleaning.ae';
type Lang = 'ru' | 'en' | 'ar';
const langs: Lang[] = ['ru', 'en', 'ar'];

// SEO landings ship in all three languages (EN canonical at the root).
const seoLandingLangs: Lang[] = ['en', 'ru', 'ar'];

export function generateStaticParams() {
  const seoSlugSet = new Set(getAllSeoLandingSlugs());
  // A landing takes over its slug — drop it from the sub-service params to avoid duplicates.
  const subSlugs = getAllSubServiceSlugs()
    .filter((slug) => !seoSlugSet.has(slug))
    .flatMap((slug) => langs.map((lang) => ({ lang, slug })));
  const seoSlugs = getAllSeoLandingSlugs().flatMap((slug) =>
    seoLandingLangs.map((lang) => ({ lang, slug }))
  );
  return [...seoSlugs, ...subSlugs];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = (lang as Locale) || 'en';
  const path = `/${slug}`;
  const canonical = locale === 'en' ? `${baseUrl}${path}` : `${baseUrl}/${locale}${path}`;

  // SEO landing pages (rich handoff pages)
  const landing = getSeoLanding(slug);
  if (landing) {
    const l = locale as Lang;
    return {
      title: landing.meta.title[l] ?? landing.meta.title.en,
      description: landing.meta.description[l] ?? landing.meta.description.en,
      alternates: {
        canonical,
        languages: {
          en: `${baseUrl}${path}`,
          ru: `${baseUrl}/ru${path}`,
          ar: `${baseUrl}/ar${path}`,
          'x-default': `${baseUrl}${path}`,
        },
      },
      openGraph: {
        title: landing.meta.title[l] ?? landing.meta.title.en,
        description: landing.meta.description[l] ?? landing.meta.description.en,
        url: canonical,
        locale: locale === 'ar' ? 'ar_AE' : locale === 'ru' ? 'ru_RU' : 'en_AE',
        siteName: 'iCleaning Dubai',
        images: landing.image ? [landing.image] : undefined,
      },
    };
  }

  // Existing sub-service pages
  const page = subServicesData[slug];
  if (!page) {
    return { title: 'Not Found' };
  }
  return {
    title: page.title[locale] || page.title.ru,
    description: page.description[locale] || page.description.ru,
    alternates: {
      canonical,
      languages: {
        en: `${baseUrl}${path}`,
        ru: `${baseUrl}/ru${path}`,
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
  const { lang, slug } = await params;
  const landing = getSeoLanding(slug);
  if (landing) {
    const l = (lang === 'en' ? 'en' : lang === 'ar' ? 'ar' : 'ru') as Lang;
    return (
      <>
        <SeoLandingJsonLd page={landing} lang={l} />
        <SeoLandingClient slug={slug} />
      </>
    );
  }
  return <SubServicePageClient slug={slug} />;
}
