'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/app/contexts/LanguageProvider';
import BookingModal from '@/app/components/BookingModal';

interface ServiceHeroProps {
  title: string;
  description: string;
  image: string;
  slug?: string;
}

export default function ServiceHero({ title, description, image, slug }: ServiceHeroProps) {
  const { t, getLocalizedPath } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <section className="relative pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative min-h-[550px] rounded-3xl overflow-hidden flex items-center shadow-2xl">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 bg-gray-900">
              <Image
                src={image}
                alt={title}
                fill
                className={slug === 'sofa-mattresses' 
                  ? 'object-cover object-center scale-120' 
                  : 'object-cover object-top'
                }
                loading="eager"
                quality={85}
                sizes="100vw"
              />
              {/* Dark Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16">
              <div className="max-w-3xl">
                <div className="space-y-8">
                  {/* Breadcrumbs */}
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <Link href={getLocalizedPath('/')} className="hover:text-white transition-colors">
                      {t('serviceHero.home')}
                    </Link>
                    <span>/</span>
                    <Link href={getLocalizedPath('/#services')} className="hover:text-white transition-colors">
                      {t('serviceHero.services')}
                    </Link>
                    <span>/</span>
                    <span className="text-white font-medium">{title}</span>
                  </div>

                  {/* Main Heading */}
                  <div className="space-y-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                      {title}
                    </h1>
                    <p className="text-base md:text-xl text-white/95 leading-relaxed max-w-2xl font-light">
                      {description}
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-4">
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="px-10 py-4 bg-blue-600 text-white rounded-full font-semibold text-base md:text-lg hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.6)] hover:scale-105"
                    >
                      {t('serviceHero.bookService')}
                    </button>
                    
                    <button 
                      onClick={scrollToPricing}
                      className="px-8 py-4 text-white border-2 border-white/50 rounded-full font-semibold text-base md:text-lg hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
                    >
                      {t('serviceHero.payNow')}
                    </button>
                  </div>

                  
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
