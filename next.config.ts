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
      
      // Услуги
      { source: '/kovry-i-kovrolinovye-pokrytiya', destination: '/services/carpet-cleaning', permanent: true },
      { source: '/ochistka-kondiczionera', destination: '/services/air-conditioner', permanent: true },
      { source: '/divany-i-matrasy', destination: '/services/sofa-mattresses', permanent: true },
      { source: '/shtory-i-zhalyuzi', destination: '/services/curtains-blinds', permanent: true },
      
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
