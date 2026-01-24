import { Metadata } from 'next';

// ===== SEO METADATA - ДЛЯ СЕОШНИКА =====
// TODO: Оптимизировать для страницы "Контакты"
export const metadata: Metadata = {
  title: 'Contact Us - iCleaning Dubai | Get Free Quote Today',
  description: 'Contact iCleaning Dubai for professional cleaning services. Get a free quote, book online or call us. Available 7 days a week in Dubai, UAE. Fast response guaranteed.',
  keywords: ['contact iCleaning', 'cleaning quote Dubai', 'book cleaning service', 'Dubai cleaners contact'],
  openGraph: {
    title: 'Contact iCleaning Dubai',
    description: 'Get in touch for professional cleaning services in Dubai',
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
