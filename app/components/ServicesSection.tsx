'use client';

import Image from 'next/image';
import { useState } from 'react';

const services = [
  {
    id: 1,
    title: 'Carpet Cleaning',
    description: 'Professional deep cleaning',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Sofa & Mattresses',
    description: 'Remove dust mites & stains',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Curtains & Blinds',
    description: 'Dust & allergen removal',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Deep Cleaning',
    description: 'Complete home sanitization',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Air Conditioner',
    description: 'Maintain air quality',
    image: 'https://images.unsplash.com/photo-1631545806609-c2c27f0c2bfe?q=80&w=800&auto=format&fit=crop'
  }
];

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className=" px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto ">
        {/* Header */}
        <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-10 overflow-hidden">
          {/* Decorative background image */}
          <div className="absolute top-0 right-0 w-full h-full opacity-40">
            <Image
              src="/images/decorative2.webp"
              alt="Decorative"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="relative z-10 flex items-start justify-between gap-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Services
            </h2>
            <p className="text-gray-600 text-sm max-w-xs hidden md:block">
              Professional cleaning solutions for every need
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal Scrollable Services with overlap - starts at container, extends right */}
      <div className="relative">
        <div className="flex overflow-x-auto pb-26 snap-x snap-mandatory scrollbar-hide" style={{ paddingLeft: 'max(1rem, calc((100vw - 1460px) / 2 + 0rem))' }}>
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => setHoveredCard(hoveredCard === service.id ? null : service.id)}
              className={`flex-shrink-0 snap-start transition-all duration-500 cursor-pointer ${
                hoveredCard === service.id 
                  ? 'w-[500px] z-20' 
                  : 'w-[320px] z-10'
              } ${index > 0 ? '-ml-12' : ''} ${index === services.length - 1 ? 'mr-4 sm:mr-6 lg:mr-8' : ''}`}
              style={{ zIndex: hoveredCard === service.id ? 30 : 10 - index }}
            >
              <div className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 h-[550px] bg-white">
                {/* Full image background */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>

                {/* Arrow button top right */}
                <div className="absolute top-6 right-6 z-30">
                  <div className="w-12 h-12 rounded-full border-2 border-white/50 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:bg-white/20">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-20 h-full flex flex-col justify-end p-8">
                  <div className="space-y-4">
                    {/* Title block with shadow - always visible */}
                    <div className={`bg-white rounded-2xl p-6 shadow-xl transition-all duration-300 ${
                      hoveredCard === service.id ? 'bg-white/95' : ''
                    }`}>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      
                      {/* Description - show when clicked */}
                      {hoveredCard === service.id && (
                        <p className="text-sm text-gray-600 animate-in fade-in slide-in-from-bottom-2 duration-300">
                          {service.description}
                        </p>
                      )}
                    </div>
                    
                    {/* Order button - show only when expanded */}
                    {hoveredCard === service.id && (
                      <button className="w-full px-6 py-4 bg-blue-600 text-white rounded-full font-semibold transition-all duration-300 flex items-center justify-between hover:bg-blue-700 shadow-[0_8px_30px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.6)] hover:scale-105 animate-in fade-in slide-in-from-bottom-4">
                        <span>ORDER SERVICE</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
