'use client';

import Image from 'next/image';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function RegularCleaningService() {
  const { t } = useLanguage();
  
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
                  { bedrooms: '1', price: 'AED 729' },
                  { bedrooms: '2', price: 'AED 989' },
                  { bedrooms: '3', price: 'AED 1329' },
                  { bedrooms: '4', price: 'AED 1599' },
                  { bedrooms: '5', price: 'AED 1899' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-700/30 rounded-2xl p-5 hover:bg-gray-700/50 transition-all duration-300 group">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{item.bedrooms} {t('regular.bedroom')}</h4>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <span className="text-2xl md:text-3xl font-bold text-blue-400">{item.price}</span>
                      <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 group-hover:scale-105 shadow-lg hover:shadow-xl">
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
                  { type: t('regular.studio'), price: 'AED 350' },
                  { type: `1 ${t('regular.bedroom')}`, price: 'AED 525' },
                  { type: `2 ${t('regular.bedroom')}`, price: 'AED 705' },
                  { type: `3 ${t('regular.bedroom')}`, price: 'AED 899' },
                  { type: `4 ${t('regular.bedroom')}`, price: 'AED 1189' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-700/30 rounded-2xl p-5 hover:bg-gray-700/50 transition-all duration-300 group">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{item.type}</h4>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <span className="text-2xl md:text-3xl font-bold text-blue-400">{item.price}</span>
                      <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 group-hover:scale-105 shadow-lg hover:shadow-xl">
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
                    src="/images/room_cleaning.png"
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
                REGULAR CLEANING: MAINTENANCE WITHOUT HASSLE
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-5xl">
                This format is perfect for those who want a clean home or office at all times, but don't have time to do it themselves. 
                We take on all the basic tasks to ensure your space is always neat and fresh.
              </p>
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">What's included in regular cleaning:</h3>
            
            <div className="space-y-6">
              {[
                {
                  number: '1',
                  title: 'Organizing',
                  description: 'We arrange items and organize your space.'
                },
                {
                  number: '2',
                  title: 'Dust Removal',
                  description: 'We wipe all horizontal surfaces: shelves, countertops, windowsills.'
                },
                {
                  number: '3',
                  title: 'Vacuuming',
                  description: 'We clean carpets, rugs, and upholstered furniture from dust, wool, and debris.'
                },
                {
                  number: '4',
                  title: 'Floor Care',
                  description: 'We carefully sweep and mop hard floors, including tiles and laminate.'
                },
                {
                  number: '5',
                  title: 'Bathroom & Kitchen Care',
                  description: 'We clean sinks, toilets, shower stalls, appliances, and disinfect key areas.'
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
              Regular cleaning can be scheduled individually: once a week, twice, or more often — depending on your needs. 
              And if you subscribe to 4 visits per month, you'll receive a favorable discount.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
              <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
                Flexible Scheduling & Discounts Available
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
                REGULAR CLEANING SERVICES
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Light Cleaning */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="relative h-[250px] lg:h-auto lg:col-span-2 overflow-hidden">
                  <Image
                    src="/images/cleaning/legka.jpg"
                    alt="Light Cleaning"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center lg:col-span-3 bg-gradient-to-br from-blue-50/30 to-transparent">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">LIGHT CLEANING</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We help with basic organizing and tidying so that your home looks neat and orderly.
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">TRASH REMOVAL</h3>
                  <p className="text-gray-600 leading-relaxed">
                    General cleaning includes wiping all accessible surfaces, including tables, countertops and shelves, 
                    to remove dust and small stains.
                  </p>
                </div>
              </div>
            </div>

            {/* Surface Cleaning & Disinfection */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="relative h-[250px] lg:h-auto lg:col-span-2 overflow-hidden">
                  <Image
                    src="/images/cleaning/ochistka.jpg"
                    alt="Surface Cleaning"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center lg:col-span-3 bg-gradient-to-br from-blue-50/30 to-transparent">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">CLEANING & DISINFECTION</h3>
                  <p className="text-gray-600 leading-relaxed">
                    General cleaning includes wiping all accessible surfaces, including tables, countertops and shelves, 
                    to remove dust and small stains.
                  </p>
                </div>
              </div>
            </div>

            {/* Floor Sweeping & Mopping */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="relative h-[250px] lg:h-auto lg:col-span-2 overflow-hidden">
                  <Image
                    src="/images/cleaning/podmet.jpg"
                    alt="Floor Cleaning"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center lg:col-span-3 bg-gradient-to-br from-blue-50/30 to-transparent">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">SWEEPING & MOPPING</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Hard floors are carefully swept and mopped to maintain their cleanliness and shine. 
                    We pay special attention to removing dirt and stains to ensure flawless floors and extend their lifespan.
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">REGULAR DUSTING & VACUUMING</h3>
                  <p className="text-gray-600 leading-relaxed">
                    General cleaning includes regular dust removal from surfaces, furniture, and decor. 
                    We vacuum carpets and hard floors to maintain cleanliness and prevent dust in the room.
                  </p>
                </div>
              </div>
            </div>

            {/* Bathroom & Kitchen Care */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="relative h-[250px] lg:h-auto lg:col-span-2 overflow-hidden">
                  <Image
                    src="/images/cleaning/vanna.jpg"
                    alt="Bathroom Cleaning"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center lg:col-span-3 bg-gradient-to-br from-blue-50/30 to-transparent">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">BATHROOM & KITCHEN CARE</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We maintain cleanliness in bathrooms and kitchens, regularly cleaning surfaces, sinks, countertops, and appliances, 
                    as well as disinfecting actively used areas.
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
                DEEP CLEANING SERVICES
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kitchen Deep Clean */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="relative h-[250px] lg:h-auto lg:col-span-2 overflow-hidden">
                  <Image
                    src="/images/cleaning/tchatelna.jpeg"
                    alt="Kitchen Cleaning"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center lg:col-span-3 bg-gradient-to-br from-blue-50/30 to-transparent">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">DEEP KITCHEN CLEANING</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We thoroughly clean kitchen appliances, both inside and outside, including ovens, microwaves, and refrigerators. 
                    Cabinets, countertops, and back panels are carefully cleaned from grease and grime.
                  </p>
                </div>
              </div>
            </div>

            {/* Floor Care */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="relative h-[250px] lg:h-auto lg:col-span-2 overflow-hidden">
                  <Image
                    src="/images/cleaning/pol.jpg"
                    alt="Floor Care"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center lg:col-span-3 bg-gradient-to-br from-blue-50/30 to-transparent">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">FLOOR CARE</h3>
                  <p className="text-gray-600 leading-relaxed">
                    All types of floor coverings, including parquet, tiles, and laminate, are cleaned with specialized equipment 
                    that improves their appearance and protects the finish, extending their lifespan.
                  </p>
                </div>
              </div>
            </div>

            {/* Sensitive Areas */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="relative h-[250px] lg:h-auto lg:col-span-2 overflow-hidden">
                  <Image
                    src="/images/cleaning/chustvitelna.jpg"
                    alt="Sensitive Areas"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center lg:col-span-3 bg-gradient-to-br from-blue-50/30 to-transparent">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">SPECIAL ATTENTION TO SENSITIVE AREAS</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Special attention is given to sensitive surfaces such as door handles, light switches, and remote controls 
                    to reduce the spread of microbes and ensure a healthier living environment.
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">COMPREHENSIVE SURFACE CLEANING</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Deep cleaning goes beyond regular dusting. We thoroughly clean each surface in your home, 
                    including hard-to-reach areas such as baseboards, lights, and ceiling fans.
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">WINDOW & BLIND CLEANING</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We thoroughly clean windows both inside and outside, ensuring ideal glass transparency. 
                    We also clean sills and tracks, removing dirt and dust to ensure complete cleanliness and freshness in your space.
                  </p>
                </div>
              </div>
            </div>

            {/* Bathroom Disinfection */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="relative h-[250px] lg:h-auto lg:col-span-2 overflow-hidden">
                  <Image
                    src="/images/cleaning/dezinfecciz-vanna.jpg"
                    alt="Bathroom Disinfection"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center lg:col-span-3 bg-gradient-to-br from-blue-50/30 to-transparent">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">BATHROOM DISINFECTION</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Bathrooms require thorough deep cleaning of tiles, grout, and all plumbing fixtures. 
                    We disinfect and clean shower cabins, baths, toilets, and sinks, ensuring flawless cleanliness and preventing mold and plaque.
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
              Ready for a Cleaner Space?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Let our professional team take care of your home or office. Book your cleaning service today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:scale-105">
                Book Now
              </button>
              <button className="bg-blue-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-400 transition-all duration-300 shadow-2xl hover:scale-105 border-2 border-white/20">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
