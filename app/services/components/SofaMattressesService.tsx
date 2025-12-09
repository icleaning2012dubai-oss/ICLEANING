'use client';

import Image from 'next/image';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function SofaMattressesService() {
  const { t } = useLanguage();
  return (
    <>
      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-35 rotate-180">
              <Image
                src="/images/decorative2.webp"
                alt="Decorative"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10 text-center">
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                {t('sofa.intro')}
              </p>
            </div>
          </div>
          
          {/* Mattress Prices */}
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">{t('sofa.mattressSizes')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{t('sofa.singleBed')}</h4>
                  <p className="text-gray-500 text-sm mb-6">{t('sofa.mattress')}</p>
                  
                  <div className="mb-8">
                    <div className="text-4xl font-bold text-blue-600 mb-3">AED 125</div>
                  </div>
                  
                  <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.6)]">
                    {t('carpet.addBasket')}
                  </button>
                </div>
              </div>

              <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-200">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{t('sofa.doubleBed')}</h4>
                  <p className="text-gray-500 text-sm mb-6">{t('sofa.mattress')}</p>
                  
                  <div className="mb-8">
                    <div className="text-4xl font-bold text-blue-600 mb-3">AED 175</div>
                  </div>
                  
                  <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.6)]">
                    {t('carpet.addBasket')}
                  </button>
                </div>
              </div>

              <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{t('sofa.kingSize')}</h4>
                  <p className="text-gray-500 text-sm mb-6">{t('sofa.mattress')}</p>
                  
                  <div className="mb-8">
                    <div className="text-4xl font-bold text-blue-600 mb-3">AED 225</div>
                  </div>
                  
                  <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.6)]">
                    {t('carpet.addBasket')}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sofa Prices */}
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-60">
              <Image
                src="/images/decorative2.webp"
                alt="Decorative"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">{t('sofa.sofaSizes')}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group relative bg-blue-50/50 rounded-3xl p-8 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg">
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{t('sofa.chairs')}</h4>
                    <p className="text-gray-500 text-sm mb-6">{t('sofa.perSeat')}</p>
                    
                    <div className="mb-8">
                      <div className="text-4xl font-bold text-blue-600 mb-3">AED 35</div>
                    </div>
                    
                    <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.6)]">
                      {t('carpet.addBasket')}
                    </button>
                  </div>
                </div>

                <div className="group relative bg-blue-50/50 rounded-3xl p-8 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg">
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{t('sofa.leather')}</h4>
                    <p className="text-gray-500 text-sm mb-6">{t('sofa.multiSeat')}</p>
                    
                    <div className="mb-8">
                      <div className="text-4xl font-bold text-blue-600 mb-3">AED 80</div>
                    </div>
                    
                    <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.6)]">
                      {t('carpet.addBasket')}
                    </button>
                  </div>
                </div>

                <div className="group relative bg-blue-50/50 rounded-3xl p-8 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg">
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{t('sofa.standard')}</h4>
                    <p className="text-gray-500 text-sm mb-6">{t('sofa.multiSeat')}</p>
                    
                    <div className="mb-8">
                      <div className="text-4xl font-bold text-blue-600 mb-3">AED 60</div>
                    </div>
                    
                    <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.6)]">
                      {t('carpet.addBasket')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
            <div className="absolute top-10 right-0 w-full h-full opacity-60">
              <Image
                src="/images/decorative2.webp"
                alt="Decorative"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">{t('sofa.processTitle')}</h2>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="relative h-[500px] md:h-[600px]">
                  <Image
                    src="/images/sofa_cleaning.png"
                    alt="Sofa Cleaning Process"
                    fill
                    className="object-cover"
                  />
                  
                  <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900">{t('sofa.before')}</h3>
                  </div>
                  
                  <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900">{t('sofa.after')}</h3>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-blue-50/50 rounded-3xl p-8 hover:bg-blue-50 transition-colors duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('sofa.before')}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('sofa.beforeDesc')}
                  </p>
                </div>
                
                <div className="bg-blue-50/50 rounded-3xl p-8 hover:bg-blue-50 transition-colors duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('sofa.after')}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('sofa.afterDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
