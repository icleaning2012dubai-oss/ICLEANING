import { i18n, isValidLocale, type Locale } from '@/app/i18n/config';
import { LanguageProvider } from '@/app/contexts/LanguageProvider';
import { CartProvider } from '@/app/contexts/CartProvider';
import Cart from '@/app/components/Cart';
import CartNotificationWrapper from '@/app/components/CartNotificationWrapper';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  //
  if (!isValidLocale(lang)) {
    notFound();
  }

  return (
    <LanguageProvider initialLanguage={lang as Locale}>
      <CartProvider>
        {children}
        <Cart />
        <CartNotificationWrapper />
      </CartProvider>
    </LanguageProvider>
  );
}
