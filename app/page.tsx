import dynamic from 'next/dynamic';
import Image from 'next/image';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50">
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none bg-[url('/images/buble.webp')] bg-repeat" style={{
        backgroundSize: '100%',
      }}></div>
      <div className="relative z-10">
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
