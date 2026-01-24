import { Metadata } from 'next';

// ===== SEO METADATA - ДЛЯ СЕОШНИКА =====
// TODO: Оптимизировать для страницы "О нас"
export const metadata: Metadata = {
  title: 'About Us - iCleaning Dubai | Professional Cleaning Company',
  description: 'Learn about iCleaning Dubai. Professional cleaning company with 5+ years of experience. Expert team, eco-friendly products, and guaranteed quality service in UAE.',
  keywords: ['about iCleaning', 'cleaning company Dubai', 'professional cleaners', 'about us'],
  openGraph: {
    title: 'About iCleaning Dubai - Our Story',
    description: 'Professional cleaning company serving Dubai for over 5 years',
    images: ['/images/og-about.jpg'],
  },
};
// ===== КОНЕЦ SEO METADATA =====

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
