import type { SeoLanding, Loc } from '@/app/data/seoLandings/types';

const baseUrl = 'https://icleaning.ae';
type Lang = 'ru' | 'en' | 'ar';
const pick = (loc: Loc | undefined, lang: Lang) => (loc && (loc[lang] ?? loc.en)) || '';

// Server-rendered JSON-LD so FAQ + breadcrumbs land in the initial HTML.
export default function SeoLandingJsonLd({ page, lang }: { page: SeoLanding; lang: Lang }) {
  const path = lang === 'en' ? `/${page.slug}` : `/${lang}/${page.slug}`;
  const url = `${baseUrl}${path}`;
  const home = lang === 'en' ? baseUrl : `${baseUrl}/${lang}`;

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map((f) => ({
      '@type': 'Question',
      name: pick(f.q, lang),
      acceptedAnswer: { '@type': 'Answer', text: pick(f.a, lang) },
    })),
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: lang === 'ru' ? 'Главная' : lang === 'ar' ? 'الرئيسية' : 'Home', item: home },
      { '@type': 'ListItem', position: 2, name: pick(page.hero.h1, lang), item: url },
    ],
  };

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: pick(page.hero.h1, lang),
    description: pick(page.meta.description, lang),
    areaServed: 'Dubai, UAE',
    provider: { '@type': 'Organization', name: 'iCleaning', url: baseUrl },
    url,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
    </>
  );
}
