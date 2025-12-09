'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

interface ServiceHeroProps {
  title: string;
  description: string;
  image: string;
}

export default function ServiceHero({ title, description, image }: ServiceHeroProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative min-h-[550px] rounded-3xl overflow-hidden flex items-center shadow-2xl">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                priority
              />
              {/* Dark Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full px-8 md:px-12 lg:px-16 py-16">
              <div className="max-w-3xl">
                <div className="space-y-8">
                  {/* Breadcrumbs */}
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <Link href="/" className="hover:text-white transition-colors">
                      Home
                    </Link>
                    <span>/</span>
                    <Link href="/#services" className="hover:text-white transition-colors">
                      Services
                    </Link>
                    <span>/</span>
                    <span className="text-white font-medium">{title}</span>
                  </div>

                  {/* Main Heading */}
                  <div className="space-y-6">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                      {title}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-2xl font-light">
                      {description}
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-4">
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="px-10 py-4 bg-blue-600 text-white rounded-full font-semibold text-base md:text-lg hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.6)] hover:scale-105"
                    >
                      Book This Service
                    </button>
                    
                    <Link href="/#contact">
                      <button 
                        className="px-8 py-4 text-white border-2 border-white/50 rounded-full font-semibold text-base md:text-lg hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
                      >
                        Contact Us
                      </button>
                    </Link>
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
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Book {title}</h3>
            <p className="text-gray-600 mb-6">Fill in your details and we'll contact you shortly</p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+971 XX XXX XXXX"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your needs..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
