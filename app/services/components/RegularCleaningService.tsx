'use client';

import Image from 'next/image';
import { useLanguage } from '@/app/contexts/LanguageProvider';
import { useCart } from '@/app/contexts/CartProvider';

export default function RegularCleaningService() {
  const { t } = useLanguage();
  const { addToCart } = useCart();
  
  return (
    <>
      {/* Hero Description Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative  rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden bg-white">
            <div className="absolute top-0 right-0 w-full h-full opacity-90">
              <Image
                src="/images/decorative2.webp"
                alt="Decorative"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                {t('regular.heroTitle')}
              </h2>
              
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                {t('regular.heroDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Header with decorative element */}
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-50">
              <Image
                src="/images/decorative.webp"
                alt="Decorative"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
                {t('regular.sizesTitle')}
              </h2>
              <p className="text-gray-500 text-center text-lg">
                {t('regular.sizesSubtitle')}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Villa Cleaning */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-10 shadow-2xl text-white">
              <div className="mb-8 text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">{t('regular.villa')}</h3>
                <p className="text-gray-400 text-sm uppercase tracking-wider">{t('regular.services')}</p>
              </div>
              
              <div className="space-y-6">
                {[
                  { bedrooms: '1', price: 729, id: 'villa-1br' },
                  { bedrooms: '2', price: 989, id: 'villa-2br' },
                  { bedrooms: '3', price: 1329, id: 'villa-3br' },
                  { bedrooms: '4', price: 1599, id: 'villa-4br' },
                  { bedrooms: '5', price: 1899, id: 'villa-5br' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-700/30 rounded-2xl p-5 hover:bg-gray-700/50 transition-all duration-300 group">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{item.bedrooms} {t('regular.bedroom')}</h4>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <span className="text-2xl md:text-3xl font-bold text-blue-400">AED {item.price}</span>
                      <button 
                        onClick={() => addToCart({ 
                          id: item.id, 
                          name: `${t('regular.villa')} - ${item.bedrooms} ${t('regular.bedroom')}`, 
                          price: item.price, 
                          category: 'cleaning' 
                        })}
                        className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 group-hover:scale-105 shadow-lg hover:shadow-xl">
                        {t('carpet.addBasket')}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Apartment Cleaning */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-10 shadow-2xl text-white">
              <div className="mb-8 text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">{t('regular.apartment')}</h3>
                <p className="text-gray-400 text-sm uppercase tracking-wider">{t('regular.services')}</p>
              </div>
              
              <div className="space-y-6">
                {[
                  { type: t('regular.studio'), price: 350, id: 'apt-studio' },
                  { type: `1 ${t('regular.bedroom')}`, price: 525, id: 'apt-1br' },
                  { type: `2 ${t('regular.bedroom')}`, price: 705, id: 'apt-2br' },
                  { type: `3 ${t('regular.bedroom')}`, price: 899, id: 'apt-3br' },
                  { type: `4 ${t('regular.bedroom')}`, price: 1189, id: 'apt-4br' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-700/30 rounded-2xl p-5 hover:bg-gray-700/50 transition-all duration-300 group">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{item.type}</h4>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <span className="text-2xl md:text-3xl font-bold text-blue-400">AED {item.price}</span>
                      <button 
                        onClick={() => addToCart({ 
                          id: item.id, 
                          name: `${t('regular.apartment')} - ${item.type}`, 
                          price: item.price, 
                          category: 'cleaning' 
                        })}
                        className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 group-hover:scale-105 shadow-lg hover:shadow-xl">
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
            <div className="absolute top-0 right-0 w-full h-full opacity-50">
              <Image
                src="/images/decorative.webp"
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
                    src="/images/room_cleaning.webp"
                    alt="Cleaning Process"
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

      {/* Regular Cleaning Details Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-45">
              <Image
                src="/images/decorative2.webp"
                alt="Decorative"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {t('regular.detailsTitle')}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-5xl">
                {t('regular.detailsDesc')}
              </p>
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">{t('regular.includedTitle')}</h3>
            
            <div className="space-y-6">
              {[
                {
                  number: '1',
                  title: t('regular.step1Title'),
                  description: t('regular.step1Desc')
                },
                {
                  number: '2',
                  title: t('regular.step2Title'),
                  description: t('regular.step2Desc')
                },
                {
                  number: '3',
                  title: t('regular.step3Title'),
                  description: t('regular.step3Desc')
                },
                {
                  number: '4',
                  title: t('regular.step4Title'),
                  description: t('regular.step4Desc')
                },
                {
                  number: '5',
                  title: t('regular.step5Title'),
                  description: t('regular.step5Desc')
                }
              ].map((item, index) => (
                <div key={index} className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {item.number}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h4>
                      <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule Info */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-8 md:p-12">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {t('regular.scheduleInfo')}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
              <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
                {t('regular.scheduleFooter')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-55">
              <Image
                src="/images/decorative2.webp"
                alt="Decorative"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
                {t('regular.servicesTitle')}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Light Cleaning */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="relative h-[250px] lg:h-auto lg:col-span-2 overflow-hidden">
                  <Image
                    src="/images/cleaning/legka.webp"
                    alt="Light Cleaning"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center lg:col-span-3 bg-gradient-to-br from-blue-50/30 to-transparent">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('regular.lightCleaning')}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('regular.lightCleaningDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Trash Removal */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="relative h-[250px] lg:h-auto lg:col-span-2 overflow-hidden">
                  <Image
                    src="/images/cleaning/vyvoz.webp"
                    alt="Trash Removal"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center lg:col-span-3 bg-gradient-to-br from-blue-50/30 to-transparent">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('regular.trashRemoval')}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('regular.trashRemovalDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Surface Cleaning & Disinfection */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="relative h-[250px] lg:h-auto lg:col-span-2 overflow-hidden">
                  <Image
                    src="/images/cleaning/ochistka.webp"
                    alt="Surface Cleaning"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center lg:col-span-3 bg-gradient-to-br from-blue-50/30 to-transparent">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('regular.surfaceDisinfection')}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('regular.surfaceDisinfectionDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Floor Sweeping & Mopping */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="relative h-[250px] lg:h-auto lg:col-span-2 overflow-hidden">
                  <Image
                    src="/images/cleaning/podmet.webp"
                    alt="Floor Cleaning"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center lg:col-span-3 bg-gradient-to-br from-blue-50/30 to-transparent">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('regular.floorSweeping')}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('regular.floorSweepingDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Vacuum & Dusting */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="relative h-[250px] lg:h-auto lg:col-span-2 overflow-hidden">
                  <Image
                    src="/images/cleaning/regular.webp"
                    alt="Vacuuming"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center lg:col-span-3 bg-gradient-to-br from-blue-50/30 to-transparent">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('regular.vacuumDusting')}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('regular.vacuumDustingDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Bathroom & Kitchen Care */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="relative h-[250px] lg:h-auto lg:col-span-2 overflow-hidden">
                  <Image
                    src="/images/cleaning/vanna.webp"
                    alt="Bathroom Cleaning"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center lg:col-span-3 bg-gradient-to-br from-blue-50/30 to-transparent">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('regular.bathroomKitchen')}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('regular.bathroomKitchenDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Cleaning Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-45">
              <Image
                src="/images/decorative2.webp"
                alt="Decorative"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
                {t('regular.deepServicesTitle')}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kitchen Deep Clean */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="relative h-[250px] lg:h-auto lg:col-span-2 overflow-hidden">
                  <Image
                    src="/images/cleaning/tchatelna.webp"
                    alt="Kitchen Cleaning"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center lg:col-span-3 bg-gradient-to-br from-blue-50/30 to-transparent">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('regular.deepKitchen')}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('regular.deepKitchenDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Floor Care */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="relative h-[250px] lg:h-auto lg:col-span-2 overflow-hidden">
                  <Image
                    src="/images/cleaning/pol.webp"
                    alt="Floor Care"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center lg:col-span-3 bg-gradient-to-br from-blue-50/30 to-transparent">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('regular.floorCare')}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('regular.floorCareDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Sensitive Areas */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="relative h-[250px] lg:h-auto lg:col-span-2 overflow-hidden">
                  <Image
                    src="/images/cleaning/chustvitelna.webp"
                    alt="Sensitive Areas"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center lg:col-span-3 bg-gradient-to-br from-blue-50/30 to-transparent">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('regular.sensitiveAreas')}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('regular.sensitiveAreasDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Surface Cleaning */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="relative h-[250px] lg:h-auto lg:col-span-2 overflow-hidden">
                  <Image
                    src="/images/cleaning/poverhna.webp"
                    alt="Surface Cleaning"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center lg:col-span-3 bg-gradient-to-br from-blue-50/30 to-transparent">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('regular.comprehensiveSurface')}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('regular.comprehensiveSurfaceDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Window & Blinds */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="relative h-[250px] lg:h-auto lg:col-span-2 overflow-hidden">
                  <Image
                    src="/images/cleaning/okna.webp"
                    alt="Window Cleaning"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center lg:col-span-3 bg-gradient-to-br from-blue-50/30 to-transparent">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('regular.windowBlinds')}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('regular.windowBlindsDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Bathroom Disinfection */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="relative h-[250px] lg:h-auto lg:col-span-2 overflow-hidden">
                  <Image
                    src="/images/cleaning/dezinfecciz-vanna.webp"
                    alt="Bathroom Disinfection"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center lg:col-span-3 bg-gradient-to-br from-blue-50/30 to-transparent">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('regular.bathroomDisinfection')}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('regular.bathroomDisinfectionDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-[1400px] mx-auto bg-gradient-to-br from-blue-600 to-blue-500 px-8 py-16 rounded-3xl shadow-2xl">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('regular.ctaTitle')}
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t('regular.ctaDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:scale-105">
                {t('regular.bookNow')}
              </button>
              <button className="bg-blue-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-400 transition-all duration-300 shadow-2xl hover:scale-105 border-2 border-white/20">
                {t('regular.getQuote')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
