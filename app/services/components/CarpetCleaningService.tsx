'use client';

import Image from 'next/image';
import { useLanguage } from '@/app/contexts/LanguageProvider';
import { useCart } from '@/app/contexts/CartProvider';

export default function CarpetCleaningService() {
  const { t } = useLanguage();
  const { addItem } = useCart();
  return (
    <>
      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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
          
          {/* Regular Carpets Pricing */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">{t('carpet.regularTitle')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Small Package */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{t('carpet.small')}</h4>
                  <p className="text-gray-500 text-sm mb-6">{t('carpet.sizeUpTo')} 4 m²</p>
                  
                  <div className="mb-8">
                    <div className="text-6xl font-bold text-gray-900 mb-4">4м²</div>
                    <div className="mb-3">
                      <span className="text-4xl font-bold text-blue-600">AED 99</span>
                      <span className="text-lg text-gray-400 line-through ml-3">150</span>
                    </div>
                    <p className="text-gray-600 text-sm">2m x 2m = 99 AED</p>
                  </div>
                  
                  <p className="text-gray-500 text-sm mb-6">Our team will come and measure the carpet for you</p>
                  
                  <button 
                    onClick={() => addItem({
                      id: 'carpet-small',
                      name: t('carpet.small'),
                      price: 99,
                      category: 'carpet',
                      description: t('carpet.sizeUpTo') + ' 4 m²',
                    })}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.6)]"
                  >
                    Add to basket
                  </button>
                </div>
              </div>

              {/* Medium Package */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-200">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{t('carpet.medium')}</h4>
                  <p className="text-gray-500 text-sm mb-6">{t('carpet.sizeUpTo')} 6 m²</p>
                  
                  <div className="mb-8">
                    <div className="text-6xl font-bold text-gray-900 mb-4">6м²</div>
                    <div className="mb-3">
                      <span className="text-4xl font-bold text-blue-600">AED 150</span>
                      <span className="text-lg text-gray-400 line-through ml-3">175</span>
                    </div>
                    <p className="text-gray-600 text-sm">2m x 3m = 150 AED</p>
                  </div>
                  
                  <p className="text-gray-500 text-sm mb-6">{t('carpet.ourTeam')}</p>
                  
                  <button 
                    onClick={() => addItem({
                      id: 'carpet-medium',
                      name: t('carpet.medium'),
                      price: 150,
                      category: 'carpet',
                      description: t('carpet.sizeUpTo') + ' 6 m²',
                    })}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.6)]"
                  >
                    {t('carpet.addBasket')}
                  </button>
                </div>
              </div>

              {/* Large Package */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{t('carpet.large')}</h4>
                  <p className="text-gray-500 text-sm mb-6">{t('carpet.sizeUpTo')} 12 m²</p>
                  
                  <div className="mb-8">
                    <div className="text-6xl font-bold text-gray-900 mb-4">12м²</div>
                    <div className="mb-3">
                      <span className="text-4xl font-bold text-blue-600">AED 300</span>
                      <span className="text-lg text-gray-400 line-through ml-3">336</span>
                    </div>
                    <p className="text-gray-600 text-sm">1m = 25 AED</p>
                  </div>
                  
                  <p className="text-gray-500 text-sm mb-6">{t('carpet.ourTeam')}</p>
                  
                  <button 
                    onClick={() => addItem({
                      id: 'carpet-large',
                      name: t('carpet.large'),
                      price: 300,
                      category: 'carpet',
                      description: t('carpet.sizeUpTo') + ' 12 m²',
                    })}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.6)]"
                  >
                    {t('carpet.addBasket')}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Handmade Carpets Section */}
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
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Handmade Carpets</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { size: 'SMALL', sqm: 4, price: 396, calc: '2m x 2m = 396 AED', desc: 'size up to 4 m²' },
                  { size: 'MEDIUM', sqm: 6, price: 594, calc: '2m x 3m = 594 AED', desc: 'size up to 6 m²' },
                  { size: 'LARGE', sqm: 12, price: 1188, calc: '1m = 99 AED', desc: 'size up to 12 m²' }
                ].map((pkg, index) => (
                  <div key={index} className="group relative bg-blue-50/50 rounded-3xl p-8 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg">
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{pkg.size}</h4>
                      <p className="text-gray-500 text-sm mb-6">{pkg.desc}</p>
                      
                      <div className="mb-8">
                        <div className="text-6xl font-bold text-gray-900 mb-4">{pkg.sqm}м²</div>
                        <div className="text-4xl font-bold text-blue-600 mb-3">
                          AED {pkg.price}
                        </div>
                        <p className="text-gray-600 text-sm">{pkg.calc}</p>
                      </div>
                      
                      <p className="text-gray-500 text-sm mb-6">Our team will come and measure the carpet for you</p>
                      
                      <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.6)]">
                        Add to basket
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
            <div className="absolute top-0 right-0 w-full h-full opacity-5">
              <Image
                src="/images/decorative2.webp"
                alt="Decorative"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">PROCESS</h2>
              
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
                    <h3 className="text-2xl font-bold text-gray-900">Before</h3>
                  </div>
                  
                  {/* After Label */}
                  <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900">After</h3>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-blue-50/50 rounded-3xl p-8 hover:bg-blue-50 transition-colors duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Before</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Before you entrust your carpet or carpeting to our team of professionals for cleaning, it looks something like this.
                  </p>
                </div>
                
                <div className="bg-blue-50/50 rounded-3xl p-8 hover:bg-blue-50 transition-colors duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">After</h3>
                  <p className="text-gray-600 leading-relaxed">
                    After our meticulous work, your carpet will look like this. Is it magic? No, it's our team of professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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
                Materials and Approaches to Care
              </h2>
              <p className="text-gray-600 text-lg">
                Each fiber requires its own processing method. Here's how we approach working with different types of carpets:
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
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">PURE WOOL</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Wool carpets are durable and warm, but sensitive to aggressive chemicals and humidity. We use soft compounds that protect the structure of the fibers and maintain their elasticity. Particular attention is paid to removing stains without deforming the product.
                  </p>
                </div>
              </div>
            </div>

            {/* Cotton Card - Reversed */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="order-2 lg:order-1 p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-bl from-blue-50/30 to-transparent">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">COTTON</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Practical and soft. We use deep washing and delicate drying techniques to preserve the shape and color saturation. Especially relevant for rugs in children's and pet areas.
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
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">SILK</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    A luxurious material that requires precision. We use specialized dry cleaning to protect the shine and smoothness. Contact with hot water and mechanical friction are not allowed.
                  </p>
                </div>
              </div>
            </div>

            {/* Linen Card - Reversed */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="order-2 lg:order-1 p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-bl from-blue-50/30 to-transparent">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">ЛEНЪ (LINEN)</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Natural and breathable material. We clean such carpets manually, using only gentle compounds. Air drying and avoiding aggressive brushes are the key to preserving the texture.
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
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">POLYESTER</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Resistant to stains and wear, ideal for high traffic areas. We machine clean with minimal moisture exposure, preserving the shape and original appearance.
                  </p>
                </div>
              </div>
            </div>

            {/* Wool Card - Reversed */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="order-2 lg:order-1 p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-bl from-blue-50/30 to-transparent">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">WOOL</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    This wool rug is durable and naturally stain-resistant, making it a perfect and stylish choice for any home. Its resilient fibers resist spills, allowing for easier cleaning. Regular vacuuming and occasional professional cleaning will preserve its appearance and longevity.
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
                    Carpet cleaning is an investment in comfort!
                  </h2>
                  
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Professional cleaning guarantees:
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      'Improve air quality by removing allergens.',
                      'Eliminates pet odors and kitchen fumes.',
                      'Reduces the risk of damage to the coating from old stains.',
                      'Extends the service life of carpets by 2-3 times.',
                      'Bring back rich color and texture.'
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
                    In the video you can see in detail what work we do to return your carpets to their former appearance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Handmade Section */}
          <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-[400px] lg:h-[600px] grid grid-cols-2 gap-4 p-8">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/handmade.webp"
                    alt="Handmade Carpet"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl mt-12">
                  <Image
                    src="/images/rugs.webp"
                    alt="Luxury Rugs"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Handmade carpets and rugs
                </h2>
                
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-blue-50">
                    Here, not only cleanliness is important, but also the preservation of the uniqueness of the product. We carry out delicate cleaning without deformation, loss of color and risks for the carpet base. Each such order is considered individually - with preliminary diagnostics and selection of the method.
                  </p>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <p className="text-blue-50">
                      We are true professionals in our field, but we cannot guarantee 100% removal of absolutely any stains. There are various types of contamination, when we can only provide lightening of stains, but not their complete removal.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 pt-4">
                    <div className="w-12 h-1 bg-white/50 rounded-full"></div>
                    <p className="text-blue-100 text-sm font-medium">
                      PREMIUM CARE FOR PREMIUM CARPETS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
