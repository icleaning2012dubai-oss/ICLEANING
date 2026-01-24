import { Metadata } from 'next';

// ===== SEO METADATA - ДЛЯ СЕОШНИКА =====
// TODO: Настроить для Privacy Policy
export const metadata: Metadata = {
  title: 'Privacy Policy - iCleaning Dubai',
  description: 'Privacy policy for iCleaning Dubai cleaning services. Learn how we collect, use, and protect your personal information and data.',
  robots: {
    index: false, // не индексировать
    follow: true,
  },
};
// ===== КОНЕЦ SEO METADATA =====

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
