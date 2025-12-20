'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <section className="relative pt-20 sm:pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative min-h-[500px] sm:min-h-[550px] md:min-h-[650px] rounded-2xl sm:rounded-3xl overflow-hidden flex items-center shadow-2xl">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/hero.jpeg"
                alt="Professional Cleaning Service"
                fill
                className="object-cover"
                priority
                quality={90}
                sizes="100vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              {/* Dark Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16">
          <div className="max-w-3xl">
            <div className="space-y-5 sm:space-y-6 md:space-y-8">
              {/* Main Heading */}
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15] tracking-tight">
                  {t('hero.title1')}
                  <br />
                  <span className="inline-block mt-1 sm:mt-2 bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                    {t('hero.title2')}
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed max-w-2xl font-light">
                  {t('hero.subtitle')}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 sm:px-10 py-3.5 sm:py-4 bg-blue-600 text-white rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.6)] hover:scale-105 text-center"
                >
                  {t('hero.getQuote')}
                </button>
                
                <button 
                  className="px-6 sm:px-8 py-3.5 sm:py-4 text-white border-2 border-white/50 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm text-center"
                >
                  {t('hero.watchVideo')}
                </button>
              </div>

              {/* Years Badge */}
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/20">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">8+</span>
                <span className="text-xs sm:text-sm text-white/90 font-medium uppercase tracking-wide">Years in UAE</span>
              </div>
            </div>
          </div>

          {/* Reviews Badge - Top Right */}
          <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl px-6 py-4 shadow-2xl hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white"></div>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="font-bold text-gray-900">4.5</span>
                  <span className="text-sm text-gray-500">(4234+ review)</span>
                </div>
                <p className="text-xs text-gray-600 leading-tight">
                  Over 500 people have trusted us and left<br />positive reviews. Join them!
                </p>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">Оставить заявку</h2>
            <p className="text-gray-600 mb-6">Заполните форму и мы свяжемся с вами в течение 15 минут</p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ваше имя</label>
                <input
                  type="text"
                  placeholder="Иван Иванов"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                <input
                  type="tel"
                  placeholder="+7 (999) 999-99-99"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Тип уборки</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                  <option>Выберите тип уборки</option>
                  <option>Генеральная уборка</option>
                  <option>Поддерживающая уборка</option>
                  <option>Уборка после ремонта</option>
                  <option>Мытье окон</option>
                  <option>Химчистка мебели</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Отправить заявку
              </button>

              <p className="text-xs text-gray-500 text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
