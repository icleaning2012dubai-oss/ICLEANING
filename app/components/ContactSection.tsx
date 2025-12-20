'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/app/contexts/LanguageProvider';

export default function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    business: 'HOTELS',
    message: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsModalOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="pb-26 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left side - Text content with background */}
          <div className="relative bg-white rounded-3xl p-10 md:p-12 shadow-xl overflow-hidden">
            {/* Decorative background image */}
            <div className="absolute top-30 right-0 w-full h-full">
              <Image
                src="/images/decorative2.webp"
                alt="Decorative"
                fill
                className="object-cover opacity-60"
              />
            </div>
            
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {t('contact.title')}
              </h2>
              
              <p className="text-gray-600 leading-relaxed text-base">
                {t('contact.subtitle')}
              </p>

              {/* Contact info */}
              <div className="space-y-4 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">+971 XX XXX XXXX</div>
                    <div className="text-sm text-gray-500">Available 24/7</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">info@icleaning.ae</div>
                    <div className="text-sm text-gray-500">Send us an email</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form with blur */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[500px]">
            {/* Decorative background image */}
            <div className="absolute inset-0">
              <Image
                src="/images/decorative.webp"
                alt="Decorative background"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 backdrop-blur-sm bg-white/10"></div>
            
            <div className="relative z-10 p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-gray-900 text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-3.5 bg-white/80 backdrop-blur-sm rounded-full text-gray-900 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-900 text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-3.5 bg-white/80 backdrop-blur-sm rounded-full text-gray-900 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Mail */}
                <div>
                  <label className="block text-gray-900 text-sm font-medium mb-2">Mail</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-3.5 bg-white/80 backdrop-blur-sm rounded-full text-gray-900 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Business */}
                <div>
                  <label className="block text-gray-900 text-sm font-medium mb-2">Business</label>
                  <select
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-6 py-3.5 bg-white/80 backdrop-blur-sm rounded-full text-gray-900 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
                    required
                  >
                    <option value="HOTELS">HOTELS</option>
                    <option value="РЕСТОРАНЫ И ФАСТФУД">РЕСТОРАНЫ И ФАСТФУД</option>
                    <option value="OFFICES">OFFICES</option>
                    <option value="SHOPS & BOUTIQUES">SHOPS & BOUTIQUES</option>
                    <option value="ДОМА И КОТТЕДЖИ">ДОМА И КОТТЕДЖИ</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-6 py-3.5 bg-white/80 backdrop-blur-sm rounded-3xl text-gray-900 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-base hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.6)] hover:scale-105"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
