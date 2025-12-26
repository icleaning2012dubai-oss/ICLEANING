'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageProvider';
import { useCart } from '@/app/contexts/CartProvider';

export default function SofaMattressesService() {
  const { t } = useLanguage();
  const { addToCart } = useCart();
  const [isSofa, setIsSofa] = useState(false);

  // Mattress pricing data
  const mattressPrices = [
    { id: 'mattress-single', nameKey: 'sofa.singleBed', descKey: 'sofa.mattress', price: 125, category: 'mattress', highlighted: false },
    { id: 'mattress-double', nameKey: 'sofa.doubleBed', descKey: 'sofa.mattress', price: 175, category: 'mattress', highlighted: true },
    { id: 'mattress-king', nameKey: 'sofa.kingSize', descKey: 'sofa.mattress', price: 225, category: 'mattress', highlighted: false }
  ];

  // Sofa pricing data
  const sofaPrices = [
    { id: 'sofa-chair', nameKey: 'sofa.chairs', descKey: 'sofa.perSeat', price: 35, category: 'sofa', highlighted: false },
    { id: 'sofa-leather', nameKey: 'sofa.leather', descKey: 'sofa.multiSeat', price: 80, category: 'sofa', highlighted: false },
    { id: 'sofa-standard', nameKey: 'sofa.standard', descKey: 'sofa.multiSeat', price: 60, category: 'sofa', highlighted: false }
  ];

  const currentPrices = isSofa ? sofaPrices : mattressPrices;

  return (
    <>
      {/* Pricing Section */}
      <section id="pricing-section" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          {/* <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-12 overflow-hidden">
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
          </div> */}
          
          {/* Unified Pricing with Toggle */}
          <div className="relative  rounded-3xl py-8 md:py-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-5">
              <Image
                src="/images/decorative2.webp"
                alt="Decorative"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10">
              {/* Toggle Switch */}
              <div className="flex justify-center mb-12">
                <div className="inline-flex rounded-full bg-gray-100 p-1">
                  <button
                    onClick={() => setIsSofa(false)}
                    className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                      !isSofa 
                        ? 'bg-blue-600 text-white shadow-lg' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {t('sofa.mattressSizes')}
                  </button>
                  <button
                    onClick={() => setIsSofa(true)}
                    className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                      isSofa 
                        ? 'bg-blue-600 text-white shadow-lg' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {t('sofa.sofaSizes')}
                  </button>
                </div>
              </div>

              {/* Unified Pricing Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {currentPrices.map((item, index) => (
                  <div 
                    key={item.id}
                    className={`group relative rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 ${
                      item.highlighted ? 'border-2 border-blue-200 bg-white' : isSofa ? 'bg-blue-50/50 hover:bg-blue-50' : 'bg-white'
                    }`}
                  >
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {t(item.nameKey)}
                      </h4>
                      <p className="text-gray-500 text-sm mb-6">
                        {t(item.descKey)}
                      </p>
                      
                      <div className="mb-8">
                        <div className="text-4xl font-bold text-blue-600 mb-3">
                          AED {item.price}
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => addToCart({ 
                          id: item.id, 
                          name: t(item.nameKey), 
                          price: item.price, 
                          category: item.category 
                        })}
                        className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.6)]"
                      >
                        {t('carpet.addBasket')}
                      </button>
                    </div>
                  </div>
                ))}
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
                    src="/images/sofa_cleaning.webp"
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

      {/* Service Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('sofa.catalogTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('sofa.catalogSubtitle')}
            </p>
          </div>

          <div className="space-y-16">
            {/* Standard Sofas */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="/images/sofa/standart-sofa.webp"
                  alt="Standard Sofa Cleaning"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">{t('sofa.standardTitle')}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {t('sofa.standardIntro')}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{t('sofa.standardPoint1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{t('sofa.standardPoint2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{t('sofa.standardPoint3')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{t('sofa.standardPoint4')}</span>
                  </li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-6">
                  {t('sofa.standardConclusion')}
                </p>
              </div>
            </div>

            {/* Chairs and Armchairs */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl order-2 lg:order-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">{t('sofa.chairsTitle')}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {t('sofa.chairsIntro')}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{t('sofa.chairsPoint1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{t('sofa.chairsPoint2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{t('sofa.chairsPoint3')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{t('sofa.chairsPoint4')}</span>
                  </li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-6">
                  {t('sofa.chairsConclusion')}
                </p>
              </div>
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl group order-1 lg:order-2">
                <Image
                  src="/images/sofa/chear.webp"
                  alt="Chairs and Armchairs Cleaning"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Leather Sofas */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="/images/sofa/leather-sofa.webp"
                  alt="Leather Sofa Cleaning"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">{t('sofa.leatherTitle')}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {t('sofa.leatherIntro')}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{t('sofa.leatherPoint1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{t('sofa.leatherPoint2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{t('sofa.leatherPoint3')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{t('sofa.leatherPoint4')}</span>
                  </li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-6">
                  {t('sofa.leatherConclusion')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
