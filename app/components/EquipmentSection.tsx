'use client';

import Image from 'next/image';
import { useLanguage } from '@/app/contexts/LanguageProvider';

export default function EquipmentSection() {
  const { t } = useLanguage();
  return (
    <section className="pb-26 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-70 rotate-12">
            <Image
              src="/images/decorative2.webp"
              alt="Decorative"
              fill
              className="object-cover"
              loading="lazy"
              quality={70}
            />
          </div>
          
          <div className="relative z-10 flex items-start justify-between gap-8">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 leading-tight max-w-3xl" suppressHydrationWarning>
              {t('equipment.title')}
            </h2>
            <p className="text-gray-600 text-sm max-w-xs hidden lg:block">
              {t('equipment.subtitle')}
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="space-y-6">
          {/* First Block - Eco products */}
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 md:p-10 text-white shadow-2xl">
            <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start">
              <h3 className="text-xl md:text-2xl font-bold leading-tight">
                {t('equipment.ecoTitle')}
              </h3>
              <p className="text-white/95 leading-relaxed">
                {t('equipment.ecoDesc')}
              </p>
            </div>
          </div>

          {/* Second Block - Professional equipment */}
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 md:p-10 text-white shadow-2xl">
            <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start mb-10">
              <h3 className="text-xl md:text-2xl font-bold leading-tight">
                {t('equipment.proTitle')}
              </h3>
              <p className="text-white/95 leading-relaxed">
                {t('equipment.proDesc')}
              </p>
            </div>

            {/* Equipment grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Item 1 */}
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                </div>
                <h4 className="text-lg font-bold">{t('equipment.hepaTitle')}</h4>
                <p className="text-white/90 leading-relaxed text-sm">
                  {t('equipment.hepaDesc')}
                </p>
              </div>

              {/* Item 2 */}
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                </div>
                <h4 className="text-lg font-bold">{t('equipment.steamTitle')}</h4>
                <p className="text-white/90 leading-relaxed text-sm">
                  {t('equipment.steamDesc')}
                </p>
              </div>

              {/* Item 3 */}
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                </div>
                <h4 className="text-lg font-bold">{t('equipment.floorTitle')}</h4>
                <p className="text-white/90 leading-relaxed text-sm">
                  {t('equipment.floorDesc')}
                </p>
              </div>

              {/* Item 4 */}
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                </div>
                <h4 className="text-lg font-bold">{t('equipment.upholsteryTitle')}</h4>
                <p className="text-white/90 leading-relaxed text-sm">
                  {t('equipment.upholsteryDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
