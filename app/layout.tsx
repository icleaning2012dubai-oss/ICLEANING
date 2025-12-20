import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Tajawal } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import { CartProvider } from "./contexts/CartContext";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  weight: ["400", "500", "700"],
  subsets: ["arabic"],
  display: 'swap',
  preload: false,
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
