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
      { source: '/o-nas', destination: '/about', permanent: true },
      { source: '/kontakty', destination: '/contact', permanent: true },
      { source: '/shop', destination: '/', permanent: true },
      { source: '/cart', destination: '/checkout', permanent: true },
      { source: '/checkout-2', destination: '/checkout', permanent: true },
      
      // Услуги (WordPress → новые URL)
      { source: '/kovry-i-kovrolinovye-pokrytiya', destination: '/services/carpet-cleaning-dubai', permanent: true },
      { source: '/ochistka-kondiczionera', destination: '/services/ac-cleaning-dubai', permanent: true },
      { source: '/divany-i-matrasy', destination: '/services/sofa-cleaning-dubai', permanent: true },
      { source: '/shtory-i-zhalyuzi', destination: '/services/curtains-cleaning-dubai', permanent: true },
      
      // Старые slug'и → новые гео-формат URL
      { source: '/services/carpet-cleaning', destination: '/services/carpet-cleaning-dubai', permanent: true },
      { source: '/services/sofa-mattresses', destination: '/services/sofa-cleaning-dubai', permanent: true },
      { source: '/services/curtains-blinds', destination: '/services/curtains-cleaning-dubai', permanent: true },
      { source: '/services/air-conditioner', destination: '/services/ac-cleaning-dubai', permanent: true },
      { source: '/services/regular-cleaning', destination: '/services/regular-cleaning-dubai', permanent: true },
      { source: '/services/deep-cleaning', destination: '/services/deep-cleaning-dubai', permanent: true },
      // Аналогично для en/ и ar/ префиксов
      { source: '/en/services/carpet-cleaning', destination: '/en/services/carpet-cleaning-dubai', permanent: true },
      { source: '/en/services/sofa-mattresses', destination: '/en/services/sofa-cleaning-dubai', permanent: true },
      { source: '/en/services/curtains-blinds', destination: '/en/services/curtains-cleaning-dubai', permanent: true },
      { source: '/en/services/air-conditioner', destination: '/en/services/ac-cleaning-dubai', permanent: true },
      { source: '/en/services/regular-cleaning', destination: '/en/services/regular-cleaning-dubai', permanent: true },
      { source: '/en/services/deep-cleaning', destination: '/en/services/deep-cleaning-dubai', permanent: true },
      { source: '/ar/services/carpet-cleaning', destination: '/ar/services/carpet-cleaning-dubai', permanent: true },
      { source: '/ar/services/sofa-mattresses', destination: '/ar/services/sofa-cleaning-dubai', permanent: true },
      { source: '/ar/services/curtains-blinds', destination: '/ar/services/curtains-cleaning-dubai', permanent: true },
      { source: '/ar/services/air-conditioner', destination: '/ar/services/ac-cleaning-dubai', permanent: true },
      { source: '/ar/services/regular-cleaning', destination: '/ar/services/regular-cleaning-dubai', permanent: true },
      { source: '/ar/services/deep-cleaning', destination: '/ar/services/deep-cleaning-dubai', permanent: true },
      
      // Удалённые страницы → главная
      { source: '/compare', destination: '/', permanent: true },
      { source: '/gift-cards', destination: '/', permanent: true },
      { source: '/wishlist', destination: '/', permanent: true },
      { source: '/my-account', destination: '/', permanent: true },
      { source: '/refund_returns', destination: '/terms', permanent: true },
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
