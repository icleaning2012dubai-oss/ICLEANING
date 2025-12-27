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
          <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 text-sm text-gray-600 mb-8">
                  <a href="/" className="hover:text-blue-600 transition-colors">{t('breadcrumb.home')}</a>
                  <span>/</span>
                  <span className="text-gray-900 font-semibold">{t('breadcrumb.contact')}</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
                  {t('contactPage.title')}
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full opacity-5">
                  <Image
                    src="/images/decorative2.webp"
                    alt="Decorative"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="relative z-10 space-y-10">
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto text-center">
                    {t('contactPage.intro')}
                  </p>

                  {/* Contact Information */}
                  <div className="space-y-5">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        {t('contactPage.contactInfoTitle')}
                      </h2>
                      <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
                    </div>

                    {/* Phone */}
                    <div className="bg-gradient-to-br from-blue-50/50 to-blue-100/50 rounded-3xl p-6 hover:shadow-lg transition-all duration-300 border-2 border-blue-100">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {t('contactPage.phoneTitle')}
                          </h3>
                          <a href="tel:+971508648401" className="text-xl md:text-2xl text-blue-600 hover:text-blue-700 font-bold transition-colors block">
                            +971 50 864 8401
                          </a>
                          <p className="text-gray-600 mt-2 text-sm">
                            {t('contactPage.phoneHours')}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 hover:shadow-lg transition-all duration-300 border-2 border-white/30 hover:bg-white/15">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {t('contactPage.emailTitle')}
                          </h3>
                          <a href="mailto:customer@icleaning.ae" className="text-xl md:text-2xl text-blue-600 hover:text-blue-700 font-bold transition-colors block break-all">
                            customer@icleaning.ae
                          </a>
                          <p className="text-gray-600 mt-2 text-sm">
                            {t('contactPage.emailDescription')}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 hover:shadow-lg transition-all duration-300 border-2 border-white/30 hover:bg-white/15">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {t('contactPage.addressTitle')}
                          </h3>
                          <a 
                            href="https://www.google.com/maps/place/iCleaning/data=!4m2!3m1!1s0x0:0x9301ee88c16524e5?sa=X&ved=1t:2428&hl=en-il&ictx=111" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-xl md:text-2xl text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-colors cursor-pointer block"
                          >
                            {t('contactPage.addressText')}
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Note */}
                    <div className="bg-amber-50/80 backdrop-blur-md border-l-4 border-amber-400 rounded-r-2xl p-5">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-gray-700 italic text-sm leading-relaxed">
                          {t('contactPage.addressNote')}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Media Section */}
                  <div className="pt-10 border-t border-gray-200/50">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        {t('contactPage.socialTitle')}
                      </h2>
                      <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mb-4"></div>
                      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        {t('contactPage.socialSubtitle')}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {/* WhatsApp */}
                      <a href="https://api.whatsapp.com/send/?phone=971508648401&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-white/20 cursor-pointer">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-lg">
                            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">WhatsApp</h3>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {t('contactPage.whatsappDesc')}
                        </p>
                      </a>

                      {/* Instagram */}
                      <a href="https://www.instagram.com/icleaning_dubai/" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-white/20 cursor-pointer">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">Instagram</h3>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {t('contactPage.instagramDesc')}
                        </p>
                      </a>

                      {/* Telegram */}
                      <a href="https://t.me/icleaning_dubai" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-white/20 cursor-pointer">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">Telegram</h3>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {t('contactPage.telegramDesc')}
                        </p>
                      </a>
                    </div>

                    <div className="mt-6 text-center bg-blue-50/50 rounded-2xl p-4">
                      <p className="text-gray-700 text-base font-medium">
                        {t('contactPage.socialFooter')}
                      </p>
                    </div>
                  </div>

                  {/* Closing Section */}
                  <div className="pt-10 border-t border-gray-200/50">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-10 text-white text-center shadow-xl">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {t('contactPage.closingTitle')}
                      </h2>
                      <p className="text-lg md:text-xl leading-relaxed mb-5 max-w-3xl mx-auto opacity-95">
                        {t('contactPage.closingText')}
                      </p>
                      <p className="text-xl md:text-2xl font-bold text-blue-100">
                        {t('contactPage.closingTagline')}
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
