import { Metadata } from 'next';
import type { Locale } from '@/app/i18n/config';

const baseUrl = 'https://icleaning.ae';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = (lang as Locale) || 'en';

  return {
    title: locale === 'ru' ? 'Условия использования - iCleaning Дубай' : locale === 'ar' ? 'شروط الخدمة - iCleaning دبي' : 'Terms of Service - iCleaning Dubai',
    description: locale === 'ru' ? 'Условия предоставления услуг iCleaning Дубай.' : locale === 'ar' ? 'شروط وأحكام خدمات iCleaning دبي.' : 'Terms and conditions for iCleaning Dubai services.',
    robots: { index: false, follow: true },
    alternates: {
      canonical: locale === 'ru' ? `${baseUrl}/terms` : `${baseUrl}/${locale}/terms`,
      languages: { en: `${baseUrl}/en/terms`, ru: `${baseUrl}/terms`, ar: `${baseUrl}/ar/terms`, 'x-default': `${baseUrl}/terms` },
    },
  };
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
