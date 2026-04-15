import { MetadataRoute } from 'next'
import { getAllSubServiceSlugs } from '@/app/data/subServicesData'
import { getAllLocationSlugs } from '@/app/data/locationsData'

const locales = ['en', 'ru', 'ar'] as const;
const defaultLocale = 'ru';
const baseUrl = 'https://icleaning.ae';

const pages = [
  { path: '/', changeFrequency: 'daily' as const, priority: 1 },
  { path: '/about', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/prices', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/reviews', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/services/carpet-cleaning-dubai', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/services/sofa-cleaning-dubai', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/services/curtains-cleaning-dubai', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/services/regular-cleaning-dubai', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/services/ac-cleaning-dubai', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/services/deep-cleaning-dubai', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/checkout', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/blog', changeFrequency: 'daily' as const, priority: 0.8 },
  { path: '/portfolio', changeFrequency: 'weekly' as const, priority: 0.8 },
];

// Build a URL: default locale (ru) has no prefix, others get /{locale} prefix
function localizedUrl(pagePath: string, locale: string): string {
  const suffix = pagePath === '/' ? '' : pagePath;
  if (locale === defaultLocale) {
    return `${baseUrl}${suffix}` || baseUrl;
  }
  return `${baseUrl}/${locale}${suffix}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  
  const entries: MetadataRoute.Sitemap = [];

  // Static pages
  for (const page of pages) {
    for (const locale of locales) {
      const url = localizedUrl(page.path, locale);
      
      const languages: Record<string, string> = {};
      for (const altLocale of locales) {
        languages[altLocale] = localizedUrl(page.path, altLocale);
      }
      languages['x-default'] = localizedUrl(page.path, defaultLocale);

      entries.push({
        url,
        lastModified: currentDate,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages,
        },
      });
    }
  }

  // Sub-service pages
  for (const slug of getAllSubServiceSlugs()) {
    const path = `/${slug}`;
    for (const locale of locales) {
      const url = localizedUrl(path, locale);
      const languages: Record<string, string> = {};
      for (const altLocale of locales) {
        languages[altLocale] = localizedUrl(path, altLocale);
      }
      languages['x-default'] = localizedUrl(path, defaultLocale);

      entries.push({
        url,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.8,
        alternates: { languages },
      });
    }
  }

  // Location pages
  for (const slug of getAllLocationSlugs()) {
    const path = `/locations/${slug}`;
    for (const locale of locales) {
      const url = localizedUrl(path, locale);
      const languages: Record<string, string> = {};
      for (const altLocale of locales) {
        languages[altLocale] = localizedUrl(path, altLocale);
      }
      languages['x-default'] = localizedUrl(path, defaultLocale);

      entries.push({
        url,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: { languages },
      });
    }
  }

  return entries;
}
