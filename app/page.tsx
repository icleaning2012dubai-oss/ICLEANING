import dynamic from 'next/dynamic';
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load всі компоненти окрім Header/Footer
const HeroSection = dynamic(() => import('./components/HeroSection'));
const AboutSection = dynamic(() => import('./components/AboutSection'));
const StatsSection = dynamic(() => import('./components/StatsSection'));
const ServicesSection = dynamic(() => import('./components/ServicesSection'));

// Lazy load компоненты ниже fold
const EquipmentSection = dynamic(() => import('./components/EquipmentSection'), {
  loading: () => <div className="h-96" />
});
const TeamSection = dynamic(() => import('./components/TeamSection'), {
  loading: () => <div className="h-96" />
});
const ContactSection = dynamic(() => import('./components/ContactSection'), {
  loading: () => <div className="h-96" />
});
const VideoSection = dynamic(() => import('./components/VideoSection'), {
  loading: () => <div className="h-96" />
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 relative">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <Image
          src="/images/buble.webp"
          alt=""
          fill
          sizes="100vw"
          quality={60}
          priority={false}
          loading="lazy"
        />
      </div>
      <div className="relative">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <StatsSection />
          <ServicesSection />
          <EquipmentSection />
          <TeamSection />
          {/* <TestimonialsSection /> */}
          <ContactSection />
          <VideoSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
