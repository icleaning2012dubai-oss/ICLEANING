'use client';

import { useLanguage } from '@/app/contexts/LanguageProvider';

export default function TermsPage() {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8">
          {t('terms.title')}
        </h1>
        
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 space-y-6">
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
              <p className="text-gray-700 leading-relaxed pt-1">{t('terms.condition1')}</p>
            </div>

            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
              <p className="text-gray-700 leading-relaxed pt-1">{t('terms.condition2')}</p>
            </div>

            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
              <p className="text-gray-700 leading-relaxed pt-1">{t('terms.condition3')}</p>
            </div>

            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
              <p className="text-gray-700 leading-relaxed pt-1">{t('terms.condition4')}</p>
            </div>

            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</span>
              <p className="text-gray-700 leading-relaxed pt-1">{t('terms.condition5')}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
