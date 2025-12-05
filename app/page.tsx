import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import EquipmentSection from './components/EquipmentSection';
import TeamSection from './components/TeamSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 relative">
      {/* Background pattern */}
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
