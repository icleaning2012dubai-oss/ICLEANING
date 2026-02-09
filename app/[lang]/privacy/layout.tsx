import { Metadata } from 'next';
import type { Locale } from '@/app/i18n/config';

const baseUrl = 'https://icleaning.ae';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = (lang as Locale) || 'ru';

  return {
    title: locale === 'ru' ? 'Политика конфиденциальности - iCleaning Дубай' : locale === 'ar' ? 'سياسة الخصوصية - iCleaning دبي' : 'Privacy Policy - iCleaning Dubai',
    description: locale === 'ru' ? 'Политика конфиденциальности iCleaning Дубай.' : locale === 'ar' ? 'سياسة خصوصية iCleaning دبي.' : 'Privacy policy for iCleaning Dubai cleaning services.',
    robots: { index: false, follow: true },
    alternates: {
      canonical: locale === 'ru' ? `${baseUrl}/privacy` : `${baseUrl}/${locale}/privacy`,
      languages: { en: `${baseUrl}/en/privacy`, ru: `${baseUrl}/privacy`, ar: `${baseUrl}/ar/privacy`, 'x-default': `${baseUrl}/privacy` },
    },
  };
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
