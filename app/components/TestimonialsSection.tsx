'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCreative } from 'swiper/modules';
import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

const testimonials = [
  {
    id: 1,
    name: 'Анна Краснова',
    service: 'Еженедельная уборка',
    text: 'Я пользуюсь услугами этой клининговой компании на протяжении года, и каждый раз остаюсь довольна результатом! Профессиональные сотрудники всегда приходят вовремя, используют качественную бытовую химию и оставляют мой дом безупречно чистым. Особенно впечатляет их внимание к деталям, благодаря чему даже самые труднодоступные уголки сияют чистотой. Рекомендую всем, кто ценит чистоту и порядок!',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Anna+Krasnova&background=3b82f6&color=fff&size=80'
  },
  {
    id: 2,
    name: 'Сергей Петров',
    service: 'Уборка офиса',
    text: 'Сотрудничество с данной клининговой компанией превзошло все мои ожидания. Команда быстро реагировала на мой запрос и оперативно согласовала время работы. Мастера сделали уборку офисного помещения на высшем уровне, убрав не только видимые поверхности, но и участки, о которых я даже не задумывался. К тому же, отличное соотношение цены и качества — рекомендую!',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Sergey+Petrov&background=3b82f6&color=fff&size=80'
  },
  {
    id: 3,
    name: 'Мария Соколова',
    service: 'Генеральная уборка',
    text: 'Заказывала генеральную уборку после ремонта. Результат превзошел все ожидания! Квартира засияла чистотой. Очень довольна работой команды, все было сделано быстро и качественно. Обязательно буду обращаться снова!',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Maria+Sokolova&background=3b82f6&color=fff&size=80'
  },
  {
    id: 4,
    name: 'Дмитрий Волков',
    service: 'Химчистка мебели',
    text: 'Отличная компания! Профессионально почистили диван и кресла. Запах исчез полностью, обивка выглядит как новая. Сотрудники вежливые и аккуратные. Цены адекватные. Советую!',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Dmitry+Volkov&background=3b82f6&color=fff&size=80'
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Отзывы клиентов о работе{' '}
              <span className="text-blue-600">с нашей компанией</span>
            </h2>
            <p className="text-lg text-gray-600">
              Нам доверяют сотни довольных клиентов
            </p>
          </div>

          {/* Custom Navigation */}
          <div className="flex gap-3 lg:flex-shrink-0">
            <button
              className="testimonials-prev w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Предыдущий отзыв"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="testimonials-next w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Следующий отзыв"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCreative]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: '.testimonials-prev',
            nextEl: '.testimonials-next',
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          effect="creative"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ['-20%', 0, -1],
              opacity: 0.5,
            },
            next: {
              translate: ['100%', 0, 0],
              opacity: 0.5,
            },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          breakpoints={{
            768: {
              slidesPerView: 2,
              effect: 'slide',
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
              effect: 'slide',
            },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id}>
              <div className={`rounded-[32px] bg-white p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 h-full border-2 ${
                index === activeIndex ? 'border-blue-600' : 'border-transparent'
              }`}>
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{testimonial.name}</h3>
                    <p className="text-blue-600 text-sm font-medium">{testimonial.service}</p>
                  </div>
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Quote icon */}
                <div className="mb-4">
                  <svg className="w-10 h-10 text-blue-600 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>

                {/* Text */}
                <p className="text-gray-600 leading-relaxed text-lg">
                  {testimonial.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">2500+</div>
            <div className="text-gray-600">Довольных клиентов</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Положительных отзывов</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">5★</div>
            <div className="text-gray-600">Средний рейтинг</div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .testimonials-swiper .swiper-pagination {
          bottom: -50px !important;
        }
        .testimonials-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #3b82f6;
          opacity: 0.3;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 32px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
}
