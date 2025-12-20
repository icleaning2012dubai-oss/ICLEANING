'use client';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import { useLanguage } from '@/app/contexts/LanguageProvider';

export default function ContactPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(/images/buble.webp)',
          backgroundRepeat: 'repeat',
          backgroundSize: '100%',
        }}></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-30 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
              <div className="text-center mb-2">
                <div className="flex items-center justify-center gap-3 text-sm text-gray-600 mb-6">
                  <a href="/" className="hover:text-blue-600 transition-colors">{t('breadcrumb.home')}</a>
                  <span>/</span>
                  <span className="text-gray-900 font-semibold">{t('breadcrumb.contact')}</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                  {t('contactPage.title')}
                </h1>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className=" px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl overflow-hidden mb-12">
                <div className="absolute top-0 right-0 w-full h-full opacity-5">
                  <Image
                    src="/images/decorative2.webp"
                    alt="Decorative"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="relative z-10 space-y-8">
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    Мы в iCleaning уверены: чистота — это не только про порядок, но и про надежность. Именно поэтому мы всегда открыты к общению и готовы ответить на любые ваши вопросы — будь то разовая услуга, подписка или срочная химчистка ковров. Свяжитесь с нами удобным для вас способом — по телефону, почте или мессенджерам.
                  </p>

                  {/* Contact Information */}
                  <div className="space-y-6 pt-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                      Контактные данные
                    </h2>

                    {/* Phone */}
                    <div className="bg-blue-50/50 rounded-3xl p-6 hover:bg-blue-50 transition-colors duration-300">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Телефон для связи и консультаций:
                      </h3>
                      <a href="tel:+971508648401" className="text-xl md:text-2xl text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                        +971 50 864 8401
                      </a>
                      <p className="text-gray-600 mt-2 text-sm">
                        (Звонки и WhatsApp доступны ежедневно с 8:00 до 22:00)
                      </p>
                    </div>

                    {/* Email */}
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 hover:bg-white/15 transition-all duration-300 border-2 border-white/20">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Электронная почта:
                      </h3>
                      <a href="mailto:customer@icleaning.ae" className="text-xl md:text-2xl text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                        customer@icleaning.ae
                      </a>
                      <p className="text-gray-600 mt-2 text-sm">
                        (Оперативные ответы на все вопросы по заказам, подпискам и предложениям)
                      </p>
                    </div>

                    {/* Address */}
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 hover:bg-white/15 transition-all duration-300 border-2 border-white/20">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Адрес офиса и склада:
                      </h3>
                      <p className="text-xl md:text-2xl text-gray-900 font-semibold">
                        Магазин №10, Промышленная зона Джебель Али, Дубай, ОАЭ
                      </p>
                    </div>

                    {/* Note */}
                    <div className="bg-white/10 backdrop-blur-md border-l-4 border-amber-400 rounded-r-3xl p-6">
                      <p className="text-gray-700 italic">
                        (Мы не принимаем посетителей без предварительной записи — пожалуйста, уточняйте детали заранее).
                      </p>
                    </div>
                  </div>

                  {/* Social Media Section */}
                  <div className="pt-12 border-t border-gray-200">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      Поддержка в мессенджерах и соцсетях
                    </h2>
                    <p className="text-gray-600 mb-8 text-lg">
                      Для вашего удобства мы доступны в популярных каналах общения:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* WhatsApp */}
                      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-white/20">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">WhatsApp</h3>
                        </div>
                        <p className="text-gray-700 text-sm">
                          мгновенные ответы, фото до/после, запись на удобное время
                        </p>
                      </div>

                      {/* Instagram */}
                      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-white/20">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">Instagram</h3>
                        </div>
                        <p className="text-gray-700 text-sm">
                          следите за нашими работами, акциями и новостями
                        </p>
                      </div>

                      {/* Telegram */}
                      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-white/20">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">Telegram</h3>
                        </div>
                        <p className="text-gray-700 text-sm">
                          быстрый чат и напоминания о ваших заказах
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 text-center">
                      <p className="text-gray-600 text-lg">
                        Подписывайтесь и будьте в курсе новостей, акций и полезных советов!
                      </p>
                    </div>
                  </div>

                  {/* Closing Section */}
                  <div className="pt-12 border-t border-gray-200">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      Ждем вас — в любой день недели!
                    </h2>
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 border-white/20">
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Будь то экстренная чистка мебели перед приездом гостей или регулярный уход за тканями — мы рядом. Оставьте заявку через сайт, позвоните или напишите нам в мессенджер, и мы предложим оптимальное решение для вашей задачи.
                      </p>
                      <p className="text-xl font-semibold text-blue-600">
                        iCleaning — ваша забота о доме начинается с нас!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
