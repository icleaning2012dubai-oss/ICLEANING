'use client';

import Image from 'next/image';
import { useLanguage } from '@/app/contexts/LanguageProvider';

export default function TeamSection() {
  const { t } = useLanguage();
  
  const reasons = [
    {
      number: '1',
      title: t('team.reason1Title'),
      description: t('team.reason1Desc')
    },
    {
      number: '2',
      title: t('team.reason2Title'),
      description: t('team.reason2Desc')
    },
    {
      number: '3',
      title: t('team.reason3Title'),
      description: t('team.reason3Desc')
    },
    {
      number: '4',
      title: t('team.reason4Title'),
      description: t('team.reason4Desc')
    },
    {
      number: '5',
      title: t('team.reason5Title'),
      description: t('team.reason5Desc')
    }
  ];

  return (
    <section className="pb-26 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Card with Background Image */}
        <div className="relative min-h-[550px] rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/team.webp"
              alt="Professional cleaning team"
              fill
              className="object-cover object-right"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 md:px-12 lg:px-14 py-10 md:py-12">
            <div className="max-w-2xl">
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
                  {t('team.whyChoose')}
                </h2>
                <p className="text-base md:text-lg text-white/90 font-light">
                  {t('team.subtitle')}
                </p>
              </div>

              {/* Reasons List */}
              <div className="space-y-4">
                {reasons.map((reason) => (
                  <div key={reason.number} className="flex gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    {/* Number */}
                    <div className="flex-shrink-0">
                      <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center">
                        <span className="text-sm font-bold text-white">{reason.number}</span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-0.5">
                      <h3 className="text-base md:text-lg font-bold text-white mb-1">
                        {reason.title}
                      </h3>
                      <p className="text-white/85 text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
