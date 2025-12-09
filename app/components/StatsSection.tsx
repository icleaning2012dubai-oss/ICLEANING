'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';

export default function StatsSection() {
  const { t } = useLanguage();
  return (
    <section className="pb-26 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Happy Clients */}
          <div className="bg-white rounded-3xl p-10 shadow-xl">
            <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              500+
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              {t('stats.clients')}
            </h3>
          </div>

          {/* Completed Cleanings */}
          <div className="bg-white rounded-3xl p-10 shadow-xl">
            <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              1,200+
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              {t('stats.projects')}
            </h3>
          </div>

          {/* Service Commitment */}
          <div className="bg-white rounded-3xl p-10 shadow-xl">
            <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              8+
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              {t('stats.experience')}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
