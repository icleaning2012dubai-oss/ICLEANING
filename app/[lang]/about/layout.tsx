import { Metadata } from 'next';
import type { Locale } from '@/app/i18n/config';

const baseUrl = 'https://icleaning.ae';

const metaByLang: Record<Locale, { title: string; description: string; keywords: string[] }> = {
  en: {
    title: 'About Us - iCleaning Dubai | Professional Cleaning Company',
    description: 'Learn about iCleaning Dubai. Professional cleaning company with 5+ years of experience. Expert team, eco-friendly products, and guaranteed quality service in UAE.',
    keywords: ['about iCleaning', 'cleaning company Dubai', 'professional cleaners', 'about us'],
  },
  ru: {
    title: 'О нас - iCleaning Дубай | Профессиональная клининговая компания',
    description: 'Узнайте больше об iCleaning Дубай. Профессиональная клининговая компания с более чем 5-летним опытом. Команда экспертов, экологичные средства.',
    keywords: ['о компании iCleaning', 'клининг Дубай', 'профессиональная уборка', 'о нас'],
  },
  ar: {
    title: 'من نحن - iCleaning دبي | شركة تنظيف احترافية',
    description: 'تعرف على iCleaning دبي. شركة تنظيف احترافية مع أكثر من 5 سنوات من الخبرة. فريق خبراء ومنتجات صديقة للبيئة.',
    keywords: ['عن iCleaning', 'شركة تنظيف دبي', 'منظفون محترفون', 'من نحن'],
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
      canonical: locale === 'ru' ? `${baseUrl}/about` : `${baseUrl}/${locale}/about`,
      languages: { en: `${baseUrl}/en/about`, ru: `${baseUrl}/about`, ar: `${baseUrl}/ar/about`, 'x-default': `${baseUrl}/about` },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: ['/images/og-about.jpg'],
    },
  };
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
