'use client';

import { memo } from 'react';
import { useLanguage } from '@/app/contexts/LanguageProvider';

const StatsSection = memo(function StatsSection() {
  const { t } = useLanguage();
  return (
    <section className="pb-20 sm:pb-26 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Happy Clients */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-br from-blue-600 to-blue-400 bg-clip-text mb-3 sm:mb-4 md:mb-6">
              500+
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
              {t('stats.clients')}
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
          </div>

          {/* Completed Cleanings */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-br from-green-600 to-green-400 bg-clip-text mb-3 sm:mb-4 md:mb-6">
              1,200+
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
              {t('stats.projects')}
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-green-600 to-green-400 rounded-full"></div>
          </div>

          {/* Service Commitment */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:col-span-2 md:col-span-1">
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-br from-purple-600 to-purple-400 bg-clip-text mb-3 sm:mb-4 md:mb-6">
              8+
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
              {t('stats.experience')}
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default StatsSection;
