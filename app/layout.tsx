import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, Tajawal } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";

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
  metadataBase: new URL('https://icleaning.ae'),
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get language from middleware header
  const headersList = await headers();
  const lang = headersList.get('x-lang') || 'ru';
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={lang} dir={dir} suppressHydrationWarning>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://img.youtube.com" />
        
        {/* Additional meta tags for better social media preview */}
        <meta property="og:image" content="https://icleaning.ae/images/hero.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:alt" content="iCleaning Dubai - Professional Cleaning Services" />
        
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
        {children}
      </body>
    </html>
  );
}
