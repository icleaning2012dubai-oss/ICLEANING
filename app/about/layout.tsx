import { Metadata } from 'next';

// ===== SEO METADATA - ДЛЯ СЕОШНИКА =====
// TODO: Оптимизировать для страницы "О нас"
export const metadata: Metadata = {
  title: 'О нашей компании - Icleaning',
  description: 'О нашей компании - Icleaning. Мы верим, что качественная чистка мебели, кондиционеров, ковров и не только — это уважение к пространству',
  keywords: ['about iCleaning', 'cleaning company Dubai', 'professional cleaners', 'about us'],
  openGraph: {
    title: 'О нашей компании - Icleaning',
    description: 'О нашей компании - Icleaning. Мы верим, что качественная чистка мебели, кондиционеров, ковров и не только — это уважение к пространству',
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
