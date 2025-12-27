'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/app/contexts/LanguageProvider';

export default function ServicesSection() {
  const { t } = useLanguage();
  
  const services = [
    {
      id: 1,
      title: t('services.carpet'),
      description: t('services.carpetDesc'),
      image: '/images/service/kover.png',
      slug: 'carpet-cleaning'
    },
    {
      id: 2,
      title: t('services.sofa'),
      description: t('services.sofaDesc'),
      image: '/images/service/sofa.png',
      slug: 'sofa-cleaning'
    },
    {
      id: 3,
      title: t('services.curtains'),
      description: t('services.curtainsDesc'),
      image: '/images/service/shtora.png',
      slug: 'curtains-blinds'
    },
    // {
    //   id: 4,
    //   title: `${t('services.regular')} & ${t('services.deep')}`,
    //   description: t('services.cleaningDesc'),
    //   image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=800&auto=format&fit=crop',
    //   slug: 'regular-cleaning'
    // },
    {
      id: 5,
      title: t('services.aircon'),
      description: t('services.airconDesc'),
      image: '/images/service/konder.png',
      slug: 'air-conditioner'
    }
  ];
  
  return (
    <section id="services" className="px-4 sm:px-6 lg:px-8 pt-10">
      

      {/* Horizontal Scrollable Services with overlap - starts at container, extends right */}
      <div className="relative -mx-4 sm:mx-0">
        <div className="flex overflow-x-auto pb-20 sm:pb-26 pt-8 snap-x snap-mandatory scrollbar-hide gap-3 sm:gap-6 px-4 sm:px-0" style={{ paddingLeft: 'max(1rem, calc((100vw - 1460px) / 2 + 0rem))' }}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex-shrink-0 snap-start w-[280px] sm:w-[320px] ${index === services.length - 1 ? 'mr-4 sm:mr-6 lg:mr-8' : ''}`}
              style={{ 
                zIndex: 10 - index,
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.zIndex = '100';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.zIndex = String(10 - index);
              }}
            >
              <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_30px_70px_rgba(0,0,0,0.5)] transition-all duration-500 h-[480px] sm:h-[550px] bg-white hover:scale-102 hover:-translate-y-4" style={{ transformOrigin: 'center center' }}>
                {/* Full image background */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 280px, 320px"
                    loading="lazy"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>

                {/* Arrow button top right */}
                <div className="absolute top-6 right-6 z-30">
                  <div className="w-12 h-12 rounded-full border-2 border-white/50 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:bg-white/20">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-20 h-full flex flex-col justify-end p-8">
                  <div className="space-y-4">
                    {/* Title block - always visible */}
                    <div className="bg-white rounded-2xl p-6 shadow-xl">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Order button - always visible */}
                    <Link href={`/services/${service.slug}`}>
                      <button className="w-full px-6 py-4 bg-blue-600 text-white rounded-full font-semibold transition-all duration-300 flex items-center justify-between hover:bg-blue-700 shadow-lg hover:shadow-xl hover:scale-105">
                        <span>{t('services.viewDetails')}</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
          <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl mb-8 sm:mb-10 overflow-hidden">
          {/* Decorative background image */}
          <div className="absolute top-0 right-0 w-full h-full opacity-40">
            <Image
              src="/images/decorative2.webp"
              alt="Decorative"
              fill
              className="object-cover"
              loading="lazy"
              quality={75}
            />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              {t('services.title')}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
