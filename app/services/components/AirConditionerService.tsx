'use client';

import Image from 'next/image';
import { useLanguage } from '@/app/contexts/LanguageProvider';
import { useCart } from '@/app/contexts/CartProvider';

export default function AirConditionerService() {
  const { t } = useLanguage();
  const { addToCart } = useCart();
  
  return (
    <>
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
              { type: t('regular.studio'), units: 1, price: 950, id: 'ac-studio' },
              { type: `1 ${t('regular.bedroom')}`, units: 2, price: 2150, id: 'ac-1br' },
              { type: `2 ${t('regular.bedroom')}`, units: 3, price: 2900, id: 'ac-2br' },
              { type: `3 ${t('regular.bedroom')}`, units: 4, price: 3600, id: 'ac-3br' },
              { type: `4 ${t('regular.bedroom')}`, units: 5, price: 4250, id: 'ac-4br' }
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
                  
                  <button 
                    onClick={() => addToCart({ 
                      id: pkg.id, 
                      name: `${t('aircon.acCleaning')} - ${pkg.type}`, 
                      price: pkg.price, 
                      category: 'aircon' 
                    })}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.6)]">
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
              ТИПЫ ОЧИСТКИ КОНДИЦИОНЕРОВ
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Мы предлагаем три уровня обслуживания — в зависимости от степени загрязненности и типа помещения:
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
                ГЛУБОКАЯ ОЧИСТКА
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Рекомендуется, если кондиционер работает ежедневно или давно не обслуживался.
              </p>
              <ul className="space-y-4 mb-6">
                {[
                  'разборка устройства;',
                  'промывка всех внутренних элементов;',
                  'обработка от плесени и бактерий;',
                  'восстановление производительности.'
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
                  Время работы нашей команды: от 1 часа.
                </p>
              </div>
            </div>
          </div>

          {/* Standard Cleaning */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="flex flex-col justify-center lg:order-2">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                СТАНДАРТНАЯ ОЧИСТКА
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Идеально для квартир и офисов с нормальной нагрузкой:
              </p>
              <ul className="space-y-4 mb-6">
                {[
                  'удаление пыли с фильтров;',
                  'обработка безопасными дезинфицирующими средствами;',
                  'промывка дренажной системы;',
                  'улучшение циркуляции воздуха.'
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
                  Время работы специалистов: 30-60 минут на блок.
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
                ПРОМЫШЛЕННАЯ ОЧИСТКА
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Подходит для ресторанов, отелей, складов и крупных объектов:
              </p>
              <ul className="space-y-4 mb-6">
                {[
                  'чистка крупных систем вентиляции и кондиционирования;',
                  'удаление жира, запахов, загрязнений;',
                  'обработка антисептическими средствами.'
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
                  Индивидуальные условия, по выезду специалиста.
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
                  Какую чистку выбрать?
                </h2>
                <p className="text-gray-600 text-lg">
                  Кому и какая чистка подойдет:
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
                    '/images/ac/promyshlena.jpg',
                    '/images/ac/standart.jpeg'
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
                    <span className="font-semibold text-gray-900">1.</span> Жителям квартир подойдет стандартная или глубокая чистка 1–3 раза в год.
                  </p>
                </div>
                
                <div className="bg-blue-50/50 rounded-3xl p-6">
                  <p className="mb-2">
                    <span className="font-semibold text-gray-900">2.</span> Семьям с детьми и домашними животными лучше выбирать глубокую очистку каждые 4–6 месяцев.
                  </p>
                </div>
                
                <div className="bg-blue-50/50 rounded-3xl p-6">
                  <p className="mb-2">
                    <span className="font-semibold text-gray-900">3.</span> Офисам и салонам красоты показана регулярная чистка для соблюдения санитарных норм.
                  </p>
                </div>
                
                <div className="bg-blue-50/50 rounded-3xl p-6">
                  <p className="mb-2">
                    <span className="font-semibold text-gray-900">4.</span> Кафе, ресторанам и отелям — обязательна промышленная очистка по установленным графикам.
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-600 text-lg mb-6">
                  Если вы не уверены, какой вариант выбрать, просто отправьте фото кондиционера и мы порекомендуем оптимальное решение для вашей ситуации.
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
                У нас обновлённый прайс-лист
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Для точной стоимости услуги просто свяжитесь с нами по WhatsApp, и мы оперативно отправим информацию. Также можно организовать выезд специалиста — он осмотрит оборудование, подберёт нужный тип чистки и выполнит работу сразу.
              </p>
              <button className="px-12 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-[0_8px_30px_rgba(255,255,255,0.3)] hover:shadow-[0_8px_40px_rgba(255,255,255,0.4)] hover:scale-105">
                Связаться по WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
