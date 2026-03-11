import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio — iCleaning Dubai | Before & After Cleaning Results',
  description:
    'See real before and after cleaning results from iCleaning Dubai. Carpet, sofa, curtain, and AC cleaning transformations.',
  alternates: {
    canonical: 'https://icleaning.ae/portfolio',
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
