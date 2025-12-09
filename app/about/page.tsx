'use client';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function AboutPage() {
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
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 text-sm text-gray-600 mb-6">
                  <a href="/" className="hover:text-blue-600 transition-colors">{t('breadcrumb.home')}</a>
                  <span>/</span>
                  <span className="text-gray-900 font-semibold">{t('breadcrumb.about')}</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                  {t('aboutPage.title')}
                </h1>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
              <div className="relative bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl overflow-hidden mb-12">
                <div className="absolute top-0 right-0 w-full h-full opacity-5">
                  <Image
                    src="/images/decorative2.webp"
                    alt="Decorative"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="relative z-10 space-y-12">
                  {/* Introduction */}
                  <div className="space-y-6">
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                      В iCleaning мы верим, что качественная чистка мебели, кондиционеров, ковров и не только — это выражение уважения к пространству. Мы начали как небольшая команда профессионалов, стремящихся изменить представление о чистке поверхностей и кондиционеров в Дубае, и выросли в полноценный профессиональный сервис, которому доверяют частные клиенты, бизнес и крупные компании.
                    </p>
                  </div>

                  {/* Mission */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 md:p-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      Наша цель
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                      Предоставить не просто чистоту, а ощущение комфорта, безопасности и заботы о деталях. Мы используем проверенные методы, современное оборудование и экологически чистые средства, чтобы добиться безупречного результата без вреда для здоровья или окружающей среды.
                    </p>
                  </div>

                  {/* Approach */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white border-2 border-blue-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-200">
                      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Индивидуальный подход
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Каждый заказ для нас — это отдельный проект. Мы внимательно относимся к особенностям каждого объекта. Всегда адаптируемся под пожелания клиента, будь то деликатная чистка мебели или глубокая чистка кондиционеров.
                      </p>
                    </div>

                    <div className="bg-white border-2 border-blue-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-200">
                      <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Профессиональная команда
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Наша команда — это обученные специалисты с опытом работы и вниманием к деталям. Мы ценим доверие и всегда выполняем свою работу честно, аккуратно и вовремя.
                      </p>
                    </div>
                  </div>

                  {/* Values Section */}
                  <div className="pt-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                      Что нас отличает
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        {
                          icon: (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          ),
                          title: 'Современные технологии',
                          description: 'Используем профессиональное оборудование и инновационные методы очистки'
                        },
                        {
                          icon: (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          ),
                          title: 'Экологичность',
                          description: 'Применяем безопасные, гипоаллергенные средства без вреда для окружающей среды'
                        },
                        {
                          icon: (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          ),
                          title: 'Пунктуальность',
                          description: 'Приезжаем точно в назначенное время и выполняем работу в срок'
                        },
                        {
                          icon: (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          ),
                          title: 'Гарантия качества',
                          description: 'Уверены в результате — если что-то не устроит, вернемся и исправим'
                        },
                        {
                          icon: (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          ),
                          title: 'Честные цены',
                          description: 'Прозрачное ценообразование без скрытых платежей и доплат'
                        },
                        {
                          icon: (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          ),
                          title: 'Забота о клиентах',
                          description: 'Всегда на связи, готовы ответить на вопросы и помочь с выбором услуги'
                        }
                      ].map((item, index) => (
                        <div key={index} className="bg-blue-50/50 rounded-3xl p-6 hover:bg-blue-50 transition-colors duration-300">
                          <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-4">
                            {item.icon}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Closing Statement */}
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                      Выбирая iCleaning
                    </h2>
                    <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
                      Вы получаете комфорт, надежность и современный подход. Мы гордимся тем, что нас рекомендуют друзьям и сотрудничают с нами на постоянной основе!
                    </p>
                  </div>

                  {/* Stats Section */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                    {[
                      { number: '5+', label: 'Лет опыта' },
                      { number: '2500+', label: 'Довольных клиентов' },
                      { number: '15+', label: 'Специалистов в команде' },
                      { number: '99%', label: 'Положительных отзывов' }
                    ].map((stat, index) => (
                      <div key={index} className="text-center bg-white rounded-3xl p-6 shadow-lg border-2 border-blue-100">
                        <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                          {stat.number}
                        </div>
                        <div className="text-gray-600 text-sm md:text-base">
                          {stat.label}
                        </div>
                      </div>
                    ))}
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
