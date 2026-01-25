import { Metadata } from 'next';

// ===== SEO METADATA - ДЛЯ СЕОШНИКА =====
// TODO: Оптимизировать для страницы "Контакты"
export const metadata: Metadata = {
  title: 'Контакты - Icleaning',
  description: 'Мы в iCleaning уверены: чистота — это не только про порядок, но и про надежность. Именно поэтому мы всегда открыты',
  keywords: ['contact iCleaning', 'cleaning quote Dubai', 'book cleaning service', 'Dubai cleaners contact'],
  openGraph: {
    title: 'Контакты - Icleaning',
    description: 'Мы в iCleaning уверены: чистота — это не только про порядок, но и про надежность. Именно поэтому мы всегда открыты',
    images: ['/images/og-contact.jpg'],
  },
};
// ===== КОНЕЦ SEO METADATA =====

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
