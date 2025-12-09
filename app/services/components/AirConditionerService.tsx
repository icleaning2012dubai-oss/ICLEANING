'use client';

import Image from 'next/image';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function AirConditionerService() {
  const { t } = useLanguage();
  
  return (
    <>
      {/* Hero Description */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-45">
              <Image
                src="/images/decorative2.webp"
                alt="Decorative"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('aircon.heroTitle')}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {t('aircon.heroDesc1')}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t('aircon.heroDesc2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-35">
              <Image
                src="/images/decorative2.webp"
                alt="Decorative"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {t('aircon.sizesTitle')}
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
                {t('aircon.acCleaning')}
              </h3>
              <p className="text-gray-500 uppercase tracking-wide">{t('regular.services')}</p>
            </div>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { type: t('regular.studio'), units: 1, price: 950 },
              { type: `1 ${t('regular.bedroom')}`, units: 2, price: 2150 },
              { type: `2 ${t('regular.bedroom')}`, units: 3, price: 2900 },
              { type: `3 ${t('regular.bedroom')}`, units: 4, price: 3600 },
              { type: `4 ${t('regular.bedroom')}`, units: 5, price: 4250 }
            ].map((pkg, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-white mb-2">{pkg.type}</h4>
                  <p className="text-gray-300 text-sm mb-8">{pkg.units} {t('aircon.units')}</p>
                  
                  <div className="mb-8">
                    <div className="text-5xl font-bold text-blue-400 mb-4">
                      AED {pkg.price}
                    </div>
                  </div>
                  
                  <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.6)]">
                    {t('carpet.addBasket')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden mb-16">
            <div className="absolute top-0 right-0 w-full h-full opacity-45">
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
                    src="/images/ac_cleaning.png"
                    alt="AC Cleaning Process"
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
                    {t('aircon.heroDesc1')}
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

      {/* Types of Cleaning Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              TYPES OF AIR CONDITIONER CLEANING
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We offer three levels of service — depending on the degree of contamination and type of space:
            </p>
          </div>

          {/* Deep Cleaning */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="relative group">
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop"
                  alt="Deep Cleaning"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                DEEP CLEANING
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Recommended if the air conditioner runs daily or hasn't been serviced.
              </p>
              <ul className="space-y-4 mb-6">
                {[
                  'Device disassembly',
                  'Washing all internal elements',
                  'Treatment for mold and bacteria',
                  'Performance restoration'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-blue-50 rounded-2xl p-6">
                <p className="text-gray-700 font-semibold">
                  Our team's working time: from 1 hour
                </p>
              </div>
            </div>
          </div>

          {/* Standard Cleaning */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="flex flex-col justify-center lg:order-2">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                STANDARD CLEANING
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ideal for apartments and offices with normal load:
              </p>
              <ul className="space-y-4 mb-6">
                {[
                  'Dust removal from filters',
                  'Treatment with safe disinfectants',
                  'Drainage system washing',
                  'Improved air circulation'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-blue-50 rounded-2xl p-6">
                <p className="text-gray-700 font-semibold">
                  Specialist working time: 30-60 minutes per unit
                </p>
              </div>
            </div>

            <div className="relative group lg:order-1">
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop"
                  alt="Standard Cleaning"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Industrial Cleaning */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative group">
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=800&auto=format&fit=crop"
                  alt="Industrial Cleaning"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                INDUSTRIAL CLEANING
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Suitable for restaurants, hotels, warehouses, and large facilities:
              </p>
              <ul className="space-y-4 mb-6">
                {[
                  'Cleaning of large ventilation and air conditioning systems',
                  'Removal of grease, smoke, and contaminants',
                  'Treatment with antiseptic agents'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-blue-50 rounded-2xl p-6">
                <p className="text-gray-700 font-semibold">
                  Individual conditions, on-site specialist visit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
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
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Which Cleaning Should You Choose?
                </h2>
                <p className="text-gray-600 text-lg">
                  Who and which cleaning is suitable for:
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {/* Video Section */}
                <div className="lg:col-span-1">
                  <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-xl bg-gray-100">
                    <Image
                      src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=800&auto=format&fit=crop"
                      alt="Video Tutorial"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <button className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110">
                        <svg className="w-10 h-10 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Three Images Section */}
                <div className="lg:col-span-2 grid grid-cols-3 gap-4">
                  {[
                    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=400&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=400&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400&auto=format&fit=crop'
                  ].map((img, index) => (
                    <div key={index} className="relative h-[300px] rounded-3xl overflow-hidden shadow-xl">
                      <Image
                        src={img}
                        alt={`Cleaning Type ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <div className="bg-blue-50/50 rounded-3xl p-6">
                  <p className="mb-2">
                    <span className="font-semibold text-gray-900">1.</span> Apartment residents are suited to standard or deep cleaning 1-3 times per year.
                  </p>
                </div>
                
                <div className="bg-blue-50/50 rounded-3xl p-6">
                  <p className="mb-2">
                    <span className="font-semibold text-gray-900">2.</span> Families with children and pets should choose deep cleaning every 4-6 months.
                  </p>
                </div>
                
                <div className="bg-blue-50/50 rounded-3xl p-6">
                  <p className="mb-2">
                    <span className="font-semibold text-gray-900">3.</span> Offices and beauty salons should have regular cleaning to maintain sanitary standards.
                  </p>
                </div>
                
                <div className="bg-blue-50/50 rounded-3xl p-6">
                  <p className="mb-2">
                    <span className="font-semibold text-gray-900">4.</span> Cafes, restaurants, and hotels — industrial cleaning is mandatory according to established schedules.
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-600 text-lg mb-6">
                  If you're unsure which option to choose, simply send us a photo of your air conditioner and we'll recommend the best solution without any extra cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-10">
              <Image
                src="/images/decorative2.webp"
                alt="Decorative"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                We Have an Updated Price List
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                For an accurate service cost, simply contact us via WhatsApp, and we will promptly send you the information. Also, you can arrange a specialist visit — they will inspect the equipment, select the right type of cleaning, and perform the work immediately.
              </p>
              <button className="px-12 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-[0_8px_30px_rgba(255,255,255,0.3)] hover:shadow-[0_8px_40px_rgba(255,255,255,0.4)] hover:scale-105">
                Contact Us on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
