import dynamic from 'next/dynamic';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import ServicesSection from '@/app/components/ServicesSection';
import PrefetchLinks from '@/app/components/PrefetchLinks';
import { Metadata } from 'next';
import { getDictionary } from '@/app/i18n/get-dictionary';
import type { Locale } from '@/app/i18n/config';

const baseUrl = 'https://icleaning.ae';

const metaByLang: Record<Locale, { title: string; description: string; keywords: string[]; ogTitle: string; ogDesc: string }> = {
  en: {
    title: 'iCleaning Dubai - Professional Cleaning Services | Carpets, Sofas, AC Cleaning',
    description: 'Professional cleaning services in Dubai. Expert carpet cleaning, sofa cleaning, curtains, mattresses, and air conditioner maintenance. Quality guaranteed. Book online today!',
    keywords: ['cleaning services Dubai', 'carpet cleaning Dubai', 'sofa cleaning', 'AC cleaning', 'professional cleaning UAE', 'home cleaning Dubai'],
    ogTitle: 'iCleaning Dubai - Professional Cleaning Services',
    ogDesc: 'Expert cleaning services for your home and office in Dubai',
  },
  ru: {
    title: 'iCleaning Дубай - Профессиональная химчистка | Ковры, Диваны, Кондиционеры',
    description: 'Профессиональная химчистка в Дубае. Чистка ковров, диванов, штор, матрасов и обслуживание кондиционеров. Гарантия качества. Закажите онлайн!',
    keywords: ['химчистка Дубай', 'чистка ковров Дубай', 'чистка диванов', 'чистка кондиционеров', 'клининг Дубай', 'уборка Дубай'],
    ogTitle: 'iCleaning Дубай - Профессиональная химчистка',
    ogDesc: 'Профессиональная химчистка для вашего дома и офиса в Дубае',
  },
  ar: {
    title: 'iCleaning دبي - خدمات التنظيف الاحترافية | السجاد والأرائك والمكيفات',
    description: 'خدمات التنظيف الاحترافية في دبي. تنظيف السجاد والأرائك والستائر والمراتب وصيانة المكيفات. جودة مضمونة. احجز الآن!',
    keywords: ['تنظيف دبي', 'تنظيف السجاد دبي', 'تنظيف الأرائك', 'تنظيف المكيفات', 'خدمات التنظيف الإمارات'],
    ogTitle: 'iCleaning دبي - خدمات التنظيف الاحترافية',
    ogDesc: 'خدمات تنظيف احترافية لمنزلك ومكتبك في دبي',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = (lang as Locale) || 'ru';
  const meta = metaByLang[locale] || metaByLang.ru;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: locale === 'ru' ? baseUrl : `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        ru: baseUrl,
        ar: `${baseUrl}/ar`,
        'x-default': baseUrl,
      },
    },
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDesc,
      url: locale === 'ru' ? baseUrl : `${baseUrl}/${locale}`,
      locale: locale === 'ar' ? 'ar_AE' : locale === 'ru' ? 'ru_RU' : 'en_AE',
      alternateLocale: ['en_AE', 'ru_RU', 'ar_AE'].filter(l => !l.startsWith(locale)),
      siteName: 'iCleaning Dubai',
      images: ['/images/og-home.jpg'],
    },
  };
}



// Lazy load компоненты ниже fold (не видны сразу)
const StatsSection = dynamic(() => import('@/app/components/StatsSection'), {
  loading: () => <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100" />
});

const TeamSection = dynamic(() => import('@/app/components/TeamSection'), {
  loading: () => <div className="h-96 bg-white" />
});

const EquipmentSection = dynamic(() => import('@/app/components/EquipmentSection'), {
  loading: () => <div className="h-96 bg-gradient-to-br from-blue-50 to-blue-100" />
});

const ContactSection = dynamic(() => import('@/app/components/ContactSection'), {
  loading: () => <div className="h-96 bg-white" />
});

const VideoSection = dynamic(() => import('@/app/components/VideoSection'), {
  loading: () => <div className="h-96 bg-gradient-to-br from-blue-50 to-blue-100" />
});

// Preload critical resources
if (typeof window !== 'undefined') {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = '/images/hero-mob.webp';
  document.head.appendChild(link);
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 relative">
      <PrefetchLinks />
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(/images/buble.webp)',
          backgroundRepeat: 'repeat',
          backgroundSize: '100%',
        }}></div>
      </div>
      <div className="relative z-10"> 
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <TeamSection />
          {/* <AboutSection /> */}
          <StatsSection />
          
          <EquipmentSection />
          
          {/* <TestimonialsSection /> */}
          <ContactSection />
          <VideoSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
