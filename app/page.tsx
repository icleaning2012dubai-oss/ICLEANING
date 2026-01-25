import dynamic from 'next/dynamic';
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PrefetchLinks from './components/PrefetchLinks';
import { Metadata } from 'next';

// ===== SEO METADATA - ДЛЯ СЕОШНИКА =====
// TODO: Оптимизировать title и description для главной страницы
// Рекомендации:
// - Title: 50-60 символов, включить основные ключевые слова
// - Description: 150-160 символов, призыв к действию
// - Keywords: основные услуги + локация (Dubai, UAE)
export const metadata: Metadata = {
  title: 'Профессиональная химчистка с выездом на дом',
  description: 'Заказать профессиональную, качественную, экологическую химчистку онлайн в любое удобное для вас время! Звоните!',
  keywords: ['cleaning services Dubai', 'carpet cleaning Dubai', 'sofa cleaning', 'AC cleaning', 'professional cleaning UAE', 'home cleaning Dubai'],
  openGraph: {
    title: 'Профессиональная химчистка с выездом на дом',
    description: 'Заказать профессиональную, качественную, экологическую химчистку онлайн в любое удобное для вас время! Звоните!',
    images: ['/images/og-home.jpg'],
  },
};
// ===== КОНЕЦ SEO METADATA =====



// Lazy load компоненты ниже fold (не видны сразу)
const StatsSection = dynamic(() => import('./components/StatsSection'), {
  loading: () => <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100" />
});

const TeamSection = dynamic(() => import('./components/TeamSection'), {
  loading: () => <div className="h-96 bg-white" />
});

const EquipmentSection = dynamic(() => import('./components/EquipmentSection'), {
  loading: () => <div className="h-96 bg-gradient-to-br from-blue-50 to-blue-100" />
});

const ContactSection = dynamic(() => import('./components/ContactSection'), {
  loading: () => <div className="h-96 bg-white" />
});

const VideoSection = dynamic(() => import('./components/VideoSection'), {
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
