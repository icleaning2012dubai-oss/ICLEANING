'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageProvider';
import { useCart } from '@/app/contexts/CartProvider';

export default function AirConditionerService() {
  const { t } = useLanguage();
  const { addToCart } = useCart();
  const [selectedPackage, setSelectedPackage] = useState(1); // Default to 1 bedroom

  // Pricing packages
  const packages = [
    { id: 0, type: t('regular.studio'), units: 1, price: 950, identifier: 'ac-studio' },
    { id: 1, type: `1 ${t('regular.bedroom')}`, units: 2, price: 2150, identifier: 'ac-1br' },
    { id: 2, type: `2 ${t('regular.bedroom')}`, units: 3, price: 2900, identifier: 'ac-2br' },
    { id: 3, type: `3 ${t('regular.bedroom')}`, units: 4, price: 3600, identifier: 'ac-3br' },
    { id: 4, type: `4 ${t('regular.bedroom')}`, units: 5, price: 4250, identifier: 'ac-4br' }
  ];

  const currentPackage = packages[selectedPackage];
  
  return (
    <>
      

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('aircon.sizesTitle')}
            </h2>
            <p className="text-gray-600 text-lg">{t('aircon.selectApartment')}</p>
          </div>

          {/* Apartment Type Selection Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {packages.map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => setSelectedPackage(pkg.id)}
                className={`relative group p-6 rounded-2xl border-2 transition-all duration-300 ${
                  selectedPackage === pkg.id
                    ? 'border-blue-600 bg-blue-50 shadow-xl scale-105'
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-lg'
                }`}
              >
                {/* Selected indicator */}
                {selectedPackage === pkg.id && (
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
                
                {/* AC Units Icons */}
                <div className="flex justify-center items-center gap-1 mb-3 h-12">
                  {[...Array(pkg.units)].map((_, i) => (
                    <svg key={i} className={`w-6 h-6 ${selectedPackage === pkg.id ? 'text-blue-600' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h12v2H6zm0 4h8v2H6z"/>
                    </svg>
                  ))}
                </div>
                
                {/* Type label */}
                <div className="text-center">
                  <p className={`font-bold text-sm mb-1 ${selectedPackage === pkg.id ? 'text-blue-600' : 'text-gray-900'}`}>
                    {pkg.type}
                  </p>
                  <p className={`text-xs ${selectedPackage === pkg.id ? 'text-blue-500' : 'text-gray-500'}`}>
                    {pkg.units} {t('aircon.units')}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Package Display */}
          <div className="relative w-full">
            <div className="relative bg-white rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden border border-gray-100">
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-100 rounded-full blur-3xl opacity-15 translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                {/* Left side - Package info */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    {/* Header Badge */}
                    <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 border border-blue-200">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h12v2H6zm0 4h8v2H6z"/>
                      </svg>
                      <span className="text-blue-600 text-sm font-bold">{t('aircon.acCleaning')}</span>
                    </div>

                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {currentPackage.type}
                      </h3>
                      <p className="text-gray-600 text-sm">{currentPackage.units} {t('aircon.units')}</p>
                    </div>
                  </div>

                  {/* AC Units Visual Display */}
                  <div className="flex flex-wrap gap-2">
                    {[...Array(currentPackage.units)].map((_, i) => (
                      <div key={i} className="group">
                        <div className="flex items-center gap-1.5 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-lg px-3 py-2 border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-md">
                          <svg className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h12v2H6zm0 4h8v2H6z"/>
                          </svg>
                          <span className="text-blue-700 text-xs font-semibold">{t('aircon.unit')} {i + 1}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right side - Price and CTA */}
                <div className="lg:col-span-1 flex flex-col gap-4">
                  {/* Price Display */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl blur-xl opacity-20"></div>
                    <div className="relative bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700 rounded-2xl p-6 text-center shadow-xl">
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30 rounded-2xl"></div>
                      
                      <div className="relative z-10">
                        <p className="text-blue-100 text-[10px] font-bold mb-1 uppercase tracking-widest">
                          {t('aircon.totalPrice')}
                        </p>
                        <div className="flex items-baseline justify-center gap-2">
                          <span className="text-5xl md:text-6xl font-bold text-white leading-none">
                            {currentPackage.price}
                          </span>
                          <span className="text-xl font-bold text-blue-100">AED</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button 
                    onClick={() => addToCart({ 
                      id: currentPackage.identifier, 
                      name: `${t('aircon.acCleaning')} - ${currentPackage.type}`, 
                      price: currentPackage.price, 
                      category: 'aircon',
                      description: `${currentPackage.units} ${t('aircon.units')}`
                    })}
                    className="group w-full py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full font-bold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span>{t('carpet.addBasket')}</span>
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Hero Description */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
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
                    src="/images/ac_cleaning.webp"
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
              {t('aircon.typesTitle')}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('aircon.typesSubtitle')}
            </p>
          </div>

          {/* Deep Cleaning */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="relative group">
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/ac/gluboka.webp"
                  alt="Deep Cleaning"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('aircon.deepCleaning')}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('aircon.deepDesc')}
              </p>
              <ul className="space-y-4 mb-6">
                {[
                  t('aircon.deepPoint1'),
                  t('aircon.deepPoint2'),
                  t('aircon.deepPoint3'),
                  t('aircon.deepPoint4')
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
                  {t('aircon.deepTime')}
                </p>
              </div>
            </div>
          </div>

          {/* Standard Cleaning */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="flex flex-col justify-center lg:order-2">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('aircon.standardCleaning')}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('aircon.standardDesc')}
              </p>
              <ul className="space-y-4 mb-6">
                {[
                  t('aircon.standardPoint1'),
                  t('aircon.standardPoint2'),
                  t('aircon.standardPoint3'),
                  t('aircon.standardPoint4')
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
                  {t('aircon.standardTime')}
                </p>
              </div>
            </div>

            <div className="relative group lg:order-1">
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/ac/standart.webp"
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
                  src="/images/ac/promyshlena.webp"
                  alt="Industrial Cleaning"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('aircon.industrialCleaning')}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('aircon.industrialDesc')}
              </p>
              <ul className="space-y-4 mb-6">
                {[
                  t('aircon.industrialPoint1'),
                  t('aircon.industrialPoint2'),
                  t('aircon.industrialPoint3')
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
                  {t('aircon.industrialTime')}
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
            <div className="absolute top-0 right-0 w-full h-full opacity-55">
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
                  {t('aircon.chooseTitle')}
                </h2>
                <p className="text-gray-600 text-lg">
                  {t('aircon.chooseSubtitle')}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {/* Video Section */}
                <div className="lg:col-span-1">
                  <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-xl bg-gray-100">
                    <Image
                      src="/images/ac_cleaning.webp"
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
                    '/images/ac/gluboka.webp',
                    '/images/ac/promyshlena.webp',
                    '/images/ac/standart.webp'
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
                    <span className="font-semibold text-gray-900">1.</span> {t('aircon.choose1')}
                  </p>
                </div>
                
                <div className="bg-blue-50/50 rounded-3xl p-6">
                  <p className="mb-2">
                    <span className="font-semibold text-gray-900">2.</span> {t('aircon.choose2')}
                  </p>
                </div>
                
                <div className="bg-blue-50/50 rounded-3xl p-6">
                  <p className="mb-2">
                    <span className="font-semibold text-gray-900">3.</span> {t('aircon.choose3')}
                  </p>
                </div>
                
                <div className="bg-blue-50/50 rounded-3xl p-6">
                  <p className="mb-2">
                    <span className="font-semibold text-gray-900">4.</span> {t('aircon.choose4')}
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-600 text-lg mb-6">
                  {t('aircon.chooseHelp')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Info Section
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
                {t('aircon.priceTitle')}
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                {t('aircon.priceDesc')}
              </p>
              <button className="px-12 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-[0_8px_30px_rgba(255,255,255,0.3)] hover:shadow-[0_8px_40px_rgba(255,255,255,0.4)] hover:scale-105">
                {t('aircon.contactWhatsApp')}
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
