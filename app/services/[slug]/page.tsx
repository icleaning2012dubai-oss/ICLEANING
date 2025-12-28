'use client';

import { Suspense } from 'react';
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

// Loading fallback component
function ServiceContentLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="animate-pulse space-y-8">
        <div className="h-64 bg-white/50 rounded-3xl"></div>
        <div className="h-48 bg-white/50 rounded-3xl"></div>
        <div className="h-96 bg-white/50 rounded-3xl"></div>
      </div>
    </div>
  );
}

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { t } = useLanguage();
  const service = servicesData[slug];

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 relative">
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none bg-blue-100">
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
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none bg-blue-100">
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
            slug={slug}
          />

          {/* Service-specific content with Suspense */}
          <Suspense fallback={<ServiceContentLoading />}>
            {slug === 'carpet-cleaning' && <CarpetCleaningService />}
            {slug === 'sofa-mattresses' && <SofaMattressesService />}
            {slug === 'curtains-blinds' && <CurtainsBlindsService />}
            {slug === 'regular-cleaning' && <RegularCleaningService />}
            {slug === 'air-conditioner' && <AirConditionerService />}
          </Suspense>

          {/* Contact Section */}
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
