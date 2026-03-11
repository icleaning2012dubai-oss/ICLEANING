import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — iCleaning Dubai | Cleaning Tips & Guides',
  description:
    'Read expert cleaning tips, guides, and industry insights from iCleaning Dubai. Professional advice for carpets, sofas, curtains, and AC maintenance.',
  alternates: {
    canonical: 'https://icleaning.ae/blog',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
