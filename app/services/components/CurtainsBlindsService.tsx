'use client';

import Image from 'next/image';
import { useLanguage } from '@/app/contexts/LanguageProvider';
import { useCart } from '@/app/contexts/CartProvider';

export default function CurtainsBlindsService() {
  const { t } = useLanguage();
  const { addToCart } = useCart();
  
  return (
    <>
      {/* Introduction Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-90">
              <Image
                src="/images/decorative2.webp"
                alt="Decorative"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10 text-center">
              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                {t('curtains.intro')}
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">{t('curtains.sizesTitle')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Blinds Card */}
            <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 text-center">
                <h3 className="text-3xl font-bold text-white mb-6">{t('curtains.blinds')}</h3>
                <p className="text-gray-300 text-lg mb-8">{t('curtains.cleaning')}</p>
                
                <div className="mb-10">
                  <div className="text-5xl font-bold mb-2">
                    <span className="text-blue-400">АЕД 25/м</span>
                    <sup className="text-2xl">2</sup>
                  </div>
                </div>
                
                <button 
                  onClick={() => addToCart({ id: 'blinds-cleaning', name: t('curtains.blinds'), price: 25, category: 'curtains' })}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.6)] transform hover:scale-105">
                  {t('carpet.addBasket')}
                </button>
              </div>
            </div>

            {/* Curtains Card */}
            <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 text-center">
                <h3 className="text-3xl font-bold text-white mb-6">{t('curtains.curtains')}</h3>
                <p className="text-gray-300 text-lg mb-8">{t('curtains.cleaning')}</p>
                
                <div className="mb-10">
                  <div className="text-5xl font-bold mb-2">
                    <span className="text-blue-400">АЕД 17/м</span>
                    <sup className="text-2xl">2</sup>
                  </div>
                </div>
                
                <button 
                  onClick={() => addToCart({ id: 'curtains-cleaning', name: t('curtains.curtains'), price: 17, category: 'curtains' })}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.6)] transform hover:scale-105">
                  {t('carpet.addBasket')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-90">
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
                {/* Before/After Image */}
                <div className="relative h-[500px] md:h-[600px]">
                  <Image
                    src="/images/curtains/curtains_cleaning.webp"
                    alt="Curtains Cleaning Process"
                    fill
                    className="object-cover"
                  />
                  
                  {/* Before Label */}
                  <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900">{t('curtains.beforeLabel')}</h3>
                  </div>
                  
                  {/* After Label */}
                  <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900">{t('curtains.afterLabel')}</h3>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-blue-50/50 rounded-3xl p-8 hover:bg-blue-50 transition-colors duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('curtains.beforeLabel')}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('curtains.beforeDesc')}
                  </p>
                </div>
                
                <div className="bg-blue-50/50 rounded-3xl p-8 hover:bg-blue-50 transition-colors duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('curtains.afterLabel')}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('curtains.afterDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Format Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">{t('curtains.serviceFormatTitle')}</h2>
          
          <div className="space-y-8">
            {/* Factory Cleaning */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-[350px] lg:h-[450px] overflow-hidden">
                  <Image
                    src="/images/curtains/machina-chistka.webp"
                    alt="Factory Cleaning"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-blue-50/30 to-transparent">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">{t('curtains.factoryCleaning')}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {t('curtains.factoryDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Complex Treatment - Reversed */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="order-2 lg:order-1 p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-bl from-blue-50/30 to-transparent">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">{t('curtains.complexTreatment')}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {t('curtains.complexDesc')}
                  </p>
                </div>
                <div className="order-1 lg:order-2 relative h-[350px] lg:h-[450px] overflow-hidden">
                  <Image
                    src="/images/curtains/comlex.webp"
                    alt="Complex Treatment"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* On-site Cleaning */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-[350px] lg:h-[450px] overflow-hidden">
                  <Image
                    src="/images/curtains/chistka-na-meste.webp"
                    alt="On-site Cleaning"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-blue-50/30 to-transparent">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">{t('curtains.onsiteCleaning')}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {t('curtains.onsiteDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Curtains & Blinds Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">{t('curtains.typesTitle')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Textile Curtains */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative h-[250px] rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/images/curtains/texstil.webp"
                  alt="Textile Curtains"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('curtains.textileName')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('curtains.textileDesc')}
              </p>
            </div>

            {/* Wooden Blinds */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative h-[250px] rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/images/curtains/derevo.webp"
                  alt="Wooden Blinds"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('curtains.woodenName')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('curtains.woodenDesc')}
              </p>
            </div>

            {/* Plastic & Vinyl Blinds */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative h-[250px] rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/images/curtains/plastik.webp"
                  alt="Plastic Blinds"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('curtains.plasticName')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('curtains.plasticDesc')}
              </p>
            </div>

            {/* Roller Blinds */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative h-[250px] rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/images/curtains/rulon.webp"
                  alt="Roller Blinds"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('curtains.rollerName')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('curtains.rollerDesc')}
              </p>
            </div>

            {/* Classic Textile */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative h-[250px] rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/images/curtains/classic.webp"
                  alt="Classic Textile"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('curtains.classicName')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('curtains.classicDesc')}
              </p>
            </div>

            {/* Roman Blinds */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative h-[250px] rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/images/curtains/rymskiy.webp"
                  alt="Roman Blinds"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('curtains.romanName')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('curtains.romanDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Regular Cleaning Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            {t('curtains.whyTitle')}
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16">{t('curtains.whySubtitle')}</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Benefits List */}
            <div className="space-y-6">
              {[
                {
                  number: '1',
                  title: t('curtains.benefit1Title'),
                  description: t('curtains.benefit1Desc')
                },
                {
                  number: '2',
                  title: t('curtains.benefit2Title'),
                  description: t('curtains.benefit2Desc')
                },
                {
                  number: '3',
                  title: t('curtains.benefit3Title'),
                  description: t('curtains.benefit3Desc')
                },
                {
                  number: '4',
                  title: t('curtains.benefit4Title'),
                  description: t('curtains.benefit4Desc')
                },
                {
                  number: '5',
                  title: t('curtains.benefit5Title'),
                  description: t('curtains.benefit5Desc')
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-6 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Right - Image */}
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/curtains/wash-machine.webp"
                alt="Professional Laundry Facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video and Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left - Video */}
              <div className="relative p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-blue-600/50 to-transparent">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://youtu.be/n1qc8ftjpzU"
                      title="Curtains and Blinds Cleaning"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
              
              {/* Right - Text and Images Grid */}
              <div className="p-8 lg:p-12 flex flex-col justify-center text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {t('curtains.videoTitle')}
                </h2>
                
                <p className="text-blue-50 text-lg leading-relaxed mb-8">
                  {t('curtains.videoDesc')}
                </p>
                
                {/* Images Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-[200px] rounded-2xl overflow-hidden shadow-xl group">
                    <Image
                      src="/images/curtains/shtory-video.webp"
                      alt="Elegant Curtains"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  <div className="relative h-[200px] rounded-2xl overflow-hidden shadow-xl group">
                    <Image
                      src="/images/curtains/zaluzi-video.webp"
                      alt="Modern Blinds"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 pt-8">
                  <div className="w-12 h-1 bg-white/50 rounded-full"></div>
                  <p className="text-blue-100 text-sm font-medium">
                    {t('curtains.videoFooter')}
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
