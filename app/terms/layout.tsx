import { Metadata } from 'next';

// ===== SEO METADATA - ДЛЯ СЕОШНИКА =====
// TODO: Настроить для Terms of Service
export const metadata: Metadata = {
  title: 'Terms of Service - iCleaning Dubai',
  description: 'Terms and conditions for iCleaning Dubai services. Read our service terms, booking policy, payment terms, and cancellation rules.',
  robots: {
    index: false, // не индексировать
    follow: true,
  },
};
// ===== КОНЕЦ SEO METADATA =====

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
