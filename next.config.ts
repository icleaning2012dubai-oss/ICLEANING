import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    unoptimized: false,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  // Оптимизация production build
  productionBrowserSourceMaps: false,

  // Оптимизация бандлов
  modularizeImports: {
    'swiper': {
      transform: 'swiper/{{member}}',
    },
  },

  experimental: {
    optimizePackageImports: ['@/app/components', '@/app/contexts', 'react-icons', 'swiper'],
    optimizeCss: true,
    webpackBuildWorker: true,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // 301 редиректы со старого WordPress сайта (сохранение SEO)
  // Старые URL были на русском → русский язык теперь на корне (без префикса)
  async redirects() {
    return [
      // Основные страницы
      { source: '/o-nas', destination: '/about', statusCode: 301 },
      { source: '/kontakty', destination: '/contact', statusCode: 301 },
      { source: '/shop', destination: '/', statusCode: 301 },
      { source: '/cart', destination: '/checkout', statusCode: 301 },
      { source: '/checkout-2', destination: '/checkout', statusCode: 301 },

      // Услуги (WordPress → актуальные SEO-лендинги, без цепочек редиректов)
      { source: '/kovry-i-kovrolinovye-pokrytiya', destination: '/carpet-cleaning', statusCode: 301 },
      { source: '/ochistka-kondiczionera', destination: '/central-ac-cleaning', statusCode: 301 },
      { source: '/divany-i-matrasy', destination: '/sofa-cleaning', statusCode: 301 },
      { source: '/shtory-i-zhalyuzi', destination: '/curtain-cleaning', statusCode: 301 },

      // 4 категорийные страницы /services/* заменены лендингами (SEO-хендофф):
      // лендинги теперь главные; старые категории 301 → соответствующий лендинг.
      { source: '/services/carpet-cleaning-dubai', destination: '/carpet-cleaning', statusCode: 301 },
      { source: '/services/sofa-cleaning-dubai', destination: '/sofa-cleaning', statusCode: 301 },
      { source: '/services/curtains-cleaning-dubai', destination: '/curtain-cleaning', statusCode: 301 },
      { source: '/services/ac-cleaning-dubai', destination: '/central-ac-cleaning', statusCode: 301 },
      { source: '/en/services/carpet-cleaning-dubai', destination: '/carpet-cleaning', statusCode: 301 },
      { source: '/en/services/sofa-cleaning-dubai', destination: '/sofa-cleaning', statusCode: 301 },
      { source: '/en/services/curtains-cleaning-dubai', destination: '/curtain-cleaning', statusCode: 301 },
      { source: '/en/services/ac-cleaning-dubai', destination: '/central-ac-cleaning', statusCode: 301 },
      { source: '/:lang(ru|ar)/services/carpet-cleaning-dubai', destination: '/:lang/carpet-cleaning', statusCode: 301 },
      { source: '/:lang(ru|ar)/services/sofa-cleaning-dubai', destination: '/:lang/sofa-cleaning', statusCode: 301 },
      { source: '/:lang(ru|ar)/services/curtains-cleaning-dubai', destination: '/:lang/curtain-cleaning', statusCode: 301 },
      { source: '/:lang(ru|ar)/services/ac-cleaning-dubai', destination: '/:lang/central-ac-cleaning', statusCode: 301 },

      // Старые slug'и → сразу на актуальные коммерческие лендинги
      { source: '/services/carpet-cleaning', destination: '/carpet-cleaning', statusCode: 301 },
      { source: '/services/sofa-mattresses', destination: '/sofa-cleaning', statusCode: 301 },
      { source: '/services/curtains-blinds', destination: '/curtain-cleaning', statusCode: 301 },
      { source: '/services/air-conditioner', destination: '/central-ac-cleaning', statusCode: 301 },
      { source: '/en/services/carpet-cleaning', destination: '/carpet-cleaning', statusCode: 301 },
      { source: '/en/services/sofa-mattresses', destination: '/sofa-cleaning', statusCode: 301 },
      { source: '/en/services/curtains-blinds', destination: '/curtain-cleaning', statusCode: 301 },
      { source: '/en/services/air-conditioner', destination: '/central-ac-cleaning', statusCode: 301 },
      { source: '/:lang(ru|ar)/services/carpet-cleaning', destination: '/:lang/carpet-cleaning', statusCode: 301 },
      { source: '/:lang(ru|ar)/services/sofa-mattresses', destination: '/:lang/sofa-cleaning', statusCode: 301 },
      { source: '/:lang(ru|ar)/services/curtains-blinds', destination: '/:lang/curtain-cleaning', statusCode: 301 },
      { source: '/:lang(ru|ar)/services/air-conditioner', destination: '/:lang/central-ac-cleaning', statusCode: 301 },

      // Старые под-услуги, объединённые в новые лендинги (301)
      // Ковры ручной работы / премиум → premium-rug-cleaning
      { source: '/persian-rug-cleaning', destination: '/premium-rug-cleaning', statusCode: 301 },
      { source: '/handmade-rug-cleaning', destination: '/premium-rug-cleaning', statusCode: 301 },
      { source: '/silk-carpet-cleaning', destination: '/premium-rug-cleaning', statusCode: 301 },
      { source: '/wool-carpet-cleaning', destination: '/premium-rug-cleaning', statusCode: 301 },
      { source: '/en/persian-rug-cleaning', destination: '/premium-rug-cleaning', statusCode: 301 },
      { source: '/en/handmade-rug-cleaning', destination: '/premium-rug-cleaning', statusCode: 301 },
      { source: '/en/silk-carpet-cleaning', destination: '/premium-rug-cleaning', statusCode: 301 },
      { source: '/en/wool-carpet-cleaning', destination: '/premium-rug-cleaning', statusCode: 301 },
      { source: '/:lang(ru|ar)/persian-rug-cleaning', destination: '/:lang/premium-rug-cleaning', statusCode: 301 },
      { source: '/:lang(ru|ar)/handmade-rug-cleaning', destination: '/:lang/premium-rug-cleaning', statusCode: 301 },
      { source: '/:lang(ru|ar)/silk-carpet-cleaning', destination: '/:lang/premium-rug-cleaning', statusCode: 301 },
      { source: '/:lang(ru|ar)/wool-carpet-cleaning', destination: '/:lang/premium-rug-cleaning', statusCode: 301 },
      // Диваны (кожа/ткань) → sofa-cleaning
      { source: '/leather-sofa-cleaning', destination: '/sofa-cleaning', statusCode: 301 },
      { source: '/fabric-sofa-cleaning', destination: '/sofa-cleaning', statusCode: 301 },
      { source: '/en/leather-sofa-cleaning', destination: '/sofa-cleaning', statusCode: 301 },
      { source: '/en/fabric-sofa-cleaning', destination: '/sofa-cleaning', statusCode: 301 },
      { source: '/:lang(ru|ar)/leather-sofa-cleaning', destination: '/:lang/sofa-cleaning', statusCode: 301 },
      { source: '/:lang(ru|ar)/fabric-sofa-cleaning', destination: '/:lang/sofa-cleaning', statusCode: 301 },
      // Жалюзи → curtain-cleaning
      { source: '/blind-cleaning', destination: '/curtain-cleaning', statusCode: 301 },
      { source: '/vertical-blinds-cleaning', destination: '/curtain-cleaning', statusCode: 301 },
      { source: '/horizontal-blinds-cleaning', destination: '/curtain-cleaning', statusCode: 301 },
      { source: '/roller-blind-cleaning', destination: '/curtain-cleaning', statusCode: 301 },
      { source: '/en/blind-cleaning', destination: '/curtain-cleaning', statusCode: 301 },
      { source: '/en/vertical-blinds-cleaning', destination: '/curtain-cleaning', statusCode: 301 },
      { source: '/en/horizontal-blinds-cleaning', destination: '/curtain-cleaning', statusCode: 301 },
      { source: '/en/roller-blind-cleaning', destination: '/curtain-cleaning', statusCode: 301 },
      { source: '/:lang(ru|ar)/blind-cleaning', destination: '/:lang/curtain-cleaning', statusCode: 301 },
      { source: '/:lang(ru|ar)/vertical-blinds-cleaning', destination: '/:lang/curtain-cleaning', statusCode: 301 },
      { source: '/:lang(ru|ar)/horizontal-blinds-cleaning', destination: '/:lang/curtain-cleaning', statusCode: 301 },
      { source: '/:lang(ru|ar)/roller-blind-cleaning', destination: '/:lang/curtain-cleaning', statusCode: 301 },
      // Ортопедический матрас → mattress-cleaning
      { source: '/orthopedic-mattress-cleaning', destination: '/mattress-cleaning', statusCode: 301 },
      { source: '/en/orthopedic-mattress-cleaning', destination: '/mattress-cleaning', statusCode: 301 },
      { source: '/:lang(ru|ar)/orthopedic-mattress-cleaning', destination: '/:lang/mattress-cleaning', statusCode: 301 },

      // Удалённые страницы → главная
      { source: '/compare', destination: '/', statusCode: 301 },
      { source: '/gift-cards', destination: '/', statusCode: 301 },
      { source: '/wishlist', destination: '/', statusCode: 301 },
      { source: '/my-account', destination: '/', statusCode: 301 },
      { source: '/refund_returns', destination: '/terms', statusCode: 301 },

      // Старые страницы которых нет на новом сайте
      { source: '/%D0%BF%D1%80%D0%B0%D1%87%D0%B5%D1%87%D0%BD%D0%B0%D1%8F-%D0%B8-%D1%87%D0%B8%D1%81%D1%82%D0%BA%D0%B0-%D0%BE%D0%B4%D0%B5%D0%B6%D0%B4%D1%8B', destination: '/', statusCode: 301 },
      { source: '/prachechn(.*)', destination: '/', statusCode: 301 },
      { source: '/chistka-odezhdy(.*)', destination: '/', statusCode: 301 },
    ];
  },

  // Заголовки кеширования
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.webp',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
