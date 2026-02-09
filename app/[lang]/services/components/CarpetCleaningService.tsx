'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/app/contexts/LanguageProvider';
import { useCart } from '@/app/contexts/CartProvider';

export default function CarpetCleaningService() {
  const { t } = useLanguage();
  const { addItem } = useCart();
  const [isHandmade, setIsHandmade] = useState(false);

  // Pricing data
  const regularPrices = [
    { size: 'small', sqm: 4, price: 99, oldPrice: 150, calc: '2m x 2m = 99 AED' },
    { size: 'medium', sqm: 6, price: 150, oldPrice: 175, calc: '2m x 3m = 150 AED' },
    { size: 'large', sqm: 12, price: 300, oldPrice: 336, calc: '1m = 25 AED' }
  ];

  const handmadePrices = [
    { size: 'small', sqm: 4, price: 396, oldPrice: undefined, calc: '2m x 2m = 396 AED' },
    { size: 'medium', sqm: 6, price: 594, oldPrice: undefined, calc: '2m x 3m = 594 AED' },
    { size: 'large', sqm: 12, price: 1188, oldPrice: undefined, calc: '1m = 99 AED' }
  ];

  const currentPrices = isHandmade ? handmadePrices : regularPrices;

  return (
    <>
      {/* Pricing Section */}
      <section id="pricing-section" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Header with decorative element */}
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-5">
              <Image
                src="/images/decorative2.webp"
                alt="Decorative"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10 flex items-start justify-between gap-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                {t('carpet.sizesTitle')}
              </h2>
              <p className="text-gray-600 text-sm max-w-xs hidden md:block">
                {t('carpet.sizesSubtitle')}
              </p>
            </div>
          </div>
          
          {/* Toggle Switch */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center bg-white rounded-full p-2 shadow-xl">
              <button
                onClick={() => setIsHandmade(false)}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                  !isHandmade
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t('carpet.regularTitle')}
              </button>
              <button
                onClick={() => setIsHandmade(true)}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                  isHandmade
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t('carpet.handmadeTitle')}
              </button>
            </div>
          </div>
          
          {/* Unified Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentPrices.map((pkg, index) => (
              <div 
                key={pkg.size}
                className={`group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 ${
                  index === 1 ? 'border-2 border-blue-200' : ''
                }`}
              >
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {t(`carpet.${pkg.size}`)}
                  </h4>
                  <p className="text-gray-500 text-sm mb-6">
                    {t('carpet.sizeUpTo')} {pkg.sqm} m²
                  </p>
                  
                  <div className="mb-8">
                    <div className="text-6xl font-bold text-gray-900 mb-4">{pkg.sqm}м²</div>
                    <div className="mb-3">
                      <span className="text-4xl font-bold text-blue-600">AED {pkg.price}</span>
                      {!isHandmade && pkg.oldPrice && (
                        <span className="text-lg text-gray-400 line-through ml-3">{pkg.oldPrice}</span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm">{pkg.calc}</p>
                  </div>
                  
                  <p className="text-gray-500 text-sm mb-6">
                    {t('common.measurementNote')}
                  </p>
                  
                  <button 
                    onClick={() => addItem({
                      id: `${isHandmade ? 'handmade-' : ''}carpet-${pkg.size}`,
                      name: `${t(`carpet.${pkg.size}`)} (${pkg.sqm}m²)${isHandmade ? ' - ' + t('carpet.handmadeTitle') : ''}`,
                      price: pkg.price,
                      category: isHandmade ? 'handmade-carpet' : 'carpet',
                      description: `${t('carpet.sizeUpTo')} ${pkg.sqm} m²`,
                    })}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.6)]"
                  >
                    {t('common.addToBasket')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-5">
              <Image
                src="/images/decorative2.webp"
                alt="Decorative"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">{t('carpet.processTitle')}</h2>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {/* Before/After Image with diagonal split */}
                <div className="relative h-[500px] md:h-[600px]">
                  <Image
                    src="/images/carpet_cleaning.webp"
                    alt="Carpet Cleaning Process"
                    fill
                    className="object-cover"
                  />
                  
                  {/* Before Label */}
                  <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900">{t('carpet.before')}</h3>
                  </div>
                  
                  {/* After Label */}
                  <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900">{t('carpet.after')}</h3>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-blue-50/50 rounded-3xl p-8 hover:bg-blue-50 transition-colors duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('carpet.before')}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('carpet.beforeDesc')}
                  </p>
                </div>
                
                <div className="bg-blue-50/50 rounded-3xl p-8 hover:bg-blue-50 transition-colors duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('carpet.after')}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('carpet.afterDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-5">
              <Image
                src="/images/decorative2.webp"
                alt="Decorative"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {t('carpet.materialsTitle')}
              </h2>
              <p className="text-gray-600 text-lg">
                {t('carpet.materialsSubtitle')}
              </p>
            </div>
          </div>

          {/* Stacked Cards Layout */}
          <div className="space-y-8">
            {/* Pure Wool Card */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-[300px] lg:h-[400px] overflow-hidden">
                  <Image
                    src="/images/carpet/pure-wool.webp"
                    alt="Pure Wool Carpet"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-blue-50/30 to-transparent">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('carpet.pureWool')}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {t('carpet.pureWoolDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Cotton Card - Reversed */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="order-2 lg:order-1 p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-bl from-blue-50/30 to-transparent">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('carpet.cotton')}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {t('carpet.cottonDesc')}
                  </p>
                </div>
                <div className="order-1 lg:order-2 relative h-[300px] lg:h-[400px] overflow-hidden">
                  <Image
                    src="/images/carpet/cotton.webp"
                    alt="Cotton Carpet"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Silk Card */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-[300px] lg:h-[400px] overflow-hidden">
                  <Image
                    src="/images/carpet/silk.webp"
                    alt="Silk Carpet"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-blue-50/30 to-transparent">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('carpet.silk')}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {t('carpet.silkDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Linen Card - Reversed */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="order-2 lg:order-1 p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-bl from-blue-50/30 to-transparent">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('carpet.linen')}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {t('carpet.linenDesc')}
                  </p>
                </div>
                <div className="order-1 lg:order-2 relative h-[300px] lg:h-[400px] overflow-hidden">
                  <Image
                    src="/images/carpet/len.webp"
                    alt="Linen Carpet"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Polyester Card */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-[300px] lg:h-[400px] overflow-hidden">
                  <Image
                    src="/images/carpet/polyester.webp"
                    alt="Polyester Carpet"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-blue-50/30 to-transparent">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('carpet.polyester')}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {t('carpet.polyesterDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Wool Card - Reversed */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="order-2 lg:order-1 p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-bl from-blue-50/30 to-transparent">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('carpet.wool')}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {t('carpet.woolDesc')}
                  </p>
                </div>
                <div className="order-1 lg:order-2 relative h-[300px] lg:h-[400px] overflow-hidden">
                  <Image
                    src="/images/carpet/wool.webp"
                    alt="Wool Carpet"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
           {/* Handmade Section */}
          <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl overflow-hidden shadow-2xl mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-[400px] lg:h-[600px] grid grid-cols-2 gap-4 p-8">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/carpet/handmade.webp"
                    alt="Handmade Carpet"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl mt-12">
                  <Image
                    src="/images/carpet/rugs.webp"
                    alt="Luxury Rugs"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {t('carpet.handmadeTitle2')}
                </h2>
                
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-blue-50">
                    {t('carpet.handmadeDesc1')}
                  </p>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <p className="text-blue-50">
                      {t('carpet.handmadeDesc2')}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 pt-4">
                    <div className="w-12 h-1 bg-white/50 rounded-full"></div>
                    <p className="text-blue-100 text-sm font-medium">
                      {t('carpet.premiumCare')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-5">
              <Image
                src="/images/decorative2.webp"
                alt="Decorative"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                    <div className="aspect-video">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/AbNxP1uHCP4"
                        title="Carpet Cleaning Expert Guide"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {t('carpet.videoTitle')}
                  </h2>
                  
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {t('carpet.videoSubtitle')}
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      t('carpet.benefit1'),
                      t('carpet.benefit2'),
                      t('carpet.benefit3'),
                      t('carpet.benefit4'),
                      t('carpet.benefit5')
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4 bg-blue-50/50 rounded-2xl p-4 hover:bg-blue-50 transition-colors duration-300">
                        <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-md">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 pt-0.5">{item}</p>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-gray-500 text-sm mt-8 italic">
                    {t('carpet.videoNote')}
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
