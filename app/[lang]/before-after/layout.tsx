import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Before & After — iCleaning Dubai | Real Cleaning Results',
  description:
    'Real before & after results from iCleaning Dubai: carpets, sofas, curtains, mattresses and AC. Drag the slider to see the difference.',
  alternates: {
    canonical: 'https://icleaning.ae/before-after',
  },
};

export default function BeforeAfterLayout({ children }: { children: React.ReactNode }) {
  return children;
}
