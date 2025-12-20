import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Tajawal } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageProvider";
import { CartProvider } from "./contexts/CartProvider";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  weight: ["400", "600"],
  adjustFontFallback: true,
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: 'swap',
  preload: false,
  adjustFontFallback: true,
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  weight: ["400", "700"],
  subsets: ["arabic"],
  display: 'swap',
  preload: false,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "HomyClean - Профессиональная клининговая компания",
  description: "Высококачественные услуги по уборке домов и офисов. Опытные специалисты, экологичные средства, гарантия качества.",
  keywords: ["клининг", "уборка", "cleaning", "Dubai", "ОАЭ", "чистка ковров", "чистка мебели"],
  authors: [{ name: "HomyClean" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: "HomyClean - Профессиональная клининговая компания",
    description: "Высококачественные услуги по уборке домов и офисов",
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
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://img.youtube.com" />
        <link rel="dns-prefetch" href="https://img.youtube.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
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
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
