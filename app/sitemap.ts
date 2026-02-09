import { MetadataRoute } from 'next'

const locales = ['en', 'ru', 'ar'] as const;
const defaultLocale = 'ru';
const baseUrl = 'https://icleaning.ae';

const pages = [
  { path: '/', changeFrequency: 'daily' as const, priority: 1 },
  { path: '/about', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/services/carpet-cleaning', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/services/sofa-mattresses', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/services/curtains-blinds', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/services/regular-cleaning', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/services/air-conditioner', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/checkout', changeFrequency: 'monthly' as const, priority: 0.7 },
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

  for (const page of pages) {
    for (const locale of locales) {
      const url = localizedUrl(page.path, locale);
      
      // Build alternates for hreflang
      const languages: Record<string, string> = {};
      for (const altLocale of locales) {
        languages[altLocale] = localizedUrl(page.path, altLocale);
      }
      // x-default points to the Russian (default) version
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

  return entries;
}
