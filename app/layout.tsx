import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Tajawal } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  weight: ["400", "500", "700"],
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "HomyClean - Профессиональная клининговая компания",
  description: "Высококачественные услуги по уборке домов и офисов. Опытные специалисты, экологичные средства, гарантия качества.",
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
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
