'use client';

import { useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageProvider';

export default function VideoSection() {
  const { t } = useLanguage();
  const [activeVideo, setActiveVideo] = useState('SIokByRC8gQ');

  const videos = [
    { id: 'SIokByRC8gQ', title: 'Welcome to our production facility!' },
    { id: 'bYE27CnQBLU', title: 'How a Young Entrepreneur Transforms Dubai' },
    { id: 'bpmJGOyzj7o', title: 'Sofa Cleaning Process' },
    { id: 'n1qc8ftjpzU', title: 'Curtains and Blinds Cleaning' },
    { id: 'bYE27CnQBLU', title: 'Carpet Care Services' }
  ];

  const mainVideo = videos.find(v => v.id === activeVideo);
  // Filter out the active video (keep only first occurrence if duplicate)
  const thumbnailVideos = videos.filter((v, index) => {
    const firstIndex = videos.findIndex(video => video.id === v.id);
    return v.id !== activeVideo || (v.id === activeVideo && index !== firstIndex);
  }).filter(v => v.id !== activeVideo);

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t('video.title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            {t('video.subtitle')}
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6">
          {/* Main Active Video */}
          <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo}?rel=0`}
                title={mainVideo?.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">{mainVideo?.title}</h3>
            </div>
          </div>

          {/* Thumbnail Videos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {thumbnailVideos.map((video, index) => (
              <button
                key={`${video.id}-${index}`}
                onClick={() => setActiveVideo(video.id)}
                className="group"
              >
                <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-video">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                      alt={video.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    
                    {/* Play Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all flex items-center justify-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-2.5 sm:p-3">
                    <h4 className="font-semibold text-gray-900 text-xs sm:text-sm group-hover:text-blue-600 transition-colors line-clamp-2">
                      {video.title}
                    </h4>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-blue-50 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs sm:text-sm font-semibold text-blue-700">Subscribe to our channel for more cleaning tips</span>
          </div>
        </div>
      </div>
    </section>
  );
}
