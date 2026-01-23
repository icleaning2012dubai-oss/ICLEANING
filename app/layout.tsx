import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, Tajawal } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageProvider";
import { CartProvider } from "./contexts/CartProvider";
import Cart from "./components/Cart";
import CartNotificationWrapper from "./components/CartNotificationWrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  weight: ["400", "600"],
  adjustFontFallback: true,
  fallback: ['system-ui', 'arial'],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: 'swap',
  preload: false,
  adjustFontFallback: true,
  fallback: ['system-ui', 'arial'],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  weight: ["400", "700"],
  subsets: ["arabic"],
  display: 'swap',
  preload: false,
  adjustFontFallback: true,
  fallback: ['Tahoma', 'Arial'],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2563eb" },
    { media: "(prefers-color-scheme: dark)", color: "#1e40af" },
  ],
};

export const metadata: Metadata = {
  title: "Профессиональная химчистка с выездом на дом",
  description: "Заказать профессиональную, качественную, экологическую химчистку онлайн в любое удобное для вас время! Звоните!",
  keywords: ["cleaning Dubai", "carpet cleaning Dubai", "sofa cleaning", "curtain cleaning", "air conditioner cleaning", "клининг Дубай", "чистка ковров", "химчистка мебели", "iCleaning"],
  authors: [{ name: "iCleaning Dubai" }],
  metadataBase: new URL('https://clining-ten.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'ru': '/ru',
      'ar': '/ar',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    alternateLocale: ["ru_RU", "ar_AE"],
    url: "https://icleaning.ae",
    siteName: "iCleaning Dubai",
    title: "iCleaning - Professional Cleaning Services in Dubai",
    description: "Expert cleaning services: carpets, sofas, curtains, air conditioners. Eco-friendly, professional team. Book online!",
    images: [
      {
        url: "https://clining-ten.vercel.app/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "iCleaning Dubai - Professional Cleaning Services",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iCleaning - Professional Cleaning Services in Dubai",
    description: "Expert cleaning services: carpets, sofas, curtains, air conditioners",
    images: ["https://clining-ten.vercel.app/images/hero.webp"],
    creator: "@icleaningdubai",
  },
  icons: {
    icon: [
      { url: "/logo.ico", sizes: "any" },
      { url: "/images/logo.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/images/logo.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
    shortcut: "/logo.ico",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://img.youtube.com" />
        
        {/* Prefetch service pages for faster navigation */}
        <link rel="prefetch" href="/services/carpet-cleaning" />
        <link rel="prefetch" href="/services/sofa-mattresses" />
        <link rel="prefetch" href="/services/curtains-blinds" />
        <link rel="prefetch" href="/services/air-conditioner" />
        
        {/* Additional meta tags for better social media preview */}
        <meta property="og:image" content="https://clining-ten.vercel.app/images/hero.webp" />
        <meta property="og:image:secure_url" content="https://clining-ten.vercel.app/images/hero.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:alt" content="iCleaning Dubai - Professional Cleaning Services" />
        
        {/* Telegram specific */}
        <meta name="telegram:card" content="summary_large_image" />
        <meta name="telegram:image" content="https://clining-ten.vercel.app/images/hero.webp" />
        
        {/* Apple specific */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="iCleaning" />
        
        {/* Microsoft specific */}
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body
        className={`${inter.variable} ${plusJakarta.variable} ${tajawal.variable} font-sans antialiased`}
      >
        <LanguageProvider>
          <CartProvider>
            {/* <Header /> */}
            {children}
            {/* <Footer /> */}
            <Cart />
            <CartNotificationWrapper />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
