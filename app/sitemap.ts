import { MetadataRoute } from 'next'
import { getAllSeoLandingSlugs } from '@/app/data/seoLandings'

const baseUrl = 'https://icleaning.ae';

// SEO policy: index ONLY the commercial service landings. Everything else
// (home, about, contact, prices, reviews, blog, portfolio, checkout,
// locations, old /services/* categories, sub-services) is intentionally kept
// out of the sitemap and served `noindex` — see middleware + robots.txt.
//
// English is the default locale and lives at the root (no prefix); Russian and
// Arabic are prefixed. Each landing ships in all three languages → 27 URLs.
const defaultLocale = 'en';
const locales = ['en', 'ru', 'ar'] as const;

function localizedUrl(slug: string, locale: string): string {
  return locale === defaultLocale ? `${baseUrl}/${slug}` : `${baseUrl}/${locale}/${slug}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const slug of getAllSeoLandingSlugs()) {
    const languages: Record<string, string> = {};
    for (const locale of locales) {
      languages[locale] = localizedUrl(slug, locale);
    }
    languages['x-default'] = localizedUrl(slug, defaultLocale);

    for (const locale of locales) {
      entries.push({
        url: localizedUrl(slug, locale),
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.9,
        alternates: { languages },
      });
    }
  }

  return entries;
}
