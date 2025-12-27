'use client';

import ServiceHero from '@/app/components/ServiceHero';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ContactSection from '@/app/components/ContactSection';
import { servicesData } from '../serviceData';
import { useLanguage } from '@/app/contexts/LanguageProvider';
import { use } from 'react';
import CarpetCleaningService from '../components/CarpetCleaningService';
import SofaMattressesService from '../components/SofaMattressesService';
import CurtainsBlindsService from '../components/CurtainsBlindsService';
import RegularCleaningService from '../components/RegularCleaningService';
import AirConditionerService from '../components/AirConditionerService';

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { t } = useLanguage();
  const service = servicesData[slug];

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 relative">
        <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(/images/buble.webp)',
            backgroundRepeat: 'repeat',
          
            backgroundSize: '100%',
          }}></div>
        </div>
        <div className="relative z-10">
          <Header />
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('servicePage.notFound')}</h1>
              <p className="text-gray-600">{t('servicePage.notFoundDesc')}</p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }

  // Get translated title and description
  const title = t(`serviceDetails.${slug}.title`);
  const description = t(`serviceDetails.${slug}.description`);

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
          <ServiceHero 
            title={title}
            description={description}
            image={service.image}
          />

          {/* Service-specific content */}
          {slug === 'carpet-cleaning' && <CarpetCleaningService />}
          {slug === 'sofa-mattresses' && <SofaMattressesService />}
          {slug === 'curtains-blinds' && <CurtainsBlindsService />}
          {slug === 'regular-cleaning' && <RegularCleaningService />}
          {slug === 'air-conditioner' && <AirConditionerService />}

          {/* Contact Section */}
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
