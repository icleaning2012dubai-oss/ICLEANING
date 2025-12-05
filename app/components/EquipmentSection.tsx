'use client';

import Image from 'next/image';

export default function EquipmentSection() {
  return (
    <section className="pb-26 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-70 rotate-12">
            <Image
              src="/images/decorative2.webp"
              alt="Decorative"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="relative z-10 flex items-start justify-between gap-8">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 leading-tight max-w-3xl">
              <span className="text-blue-600">Professional Equipment</span> & Eco-Friendly Solutions
            </h2>
            <p className="text-gray-600 text-sm max-w-xs hidden lg:block">
              Modern tools for perfect results
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="space-y-6">
          {/* First Block - Eco products */}
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 md:p-10 text-white shadow-2xl">
            <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start">
              <h3 className="text-xl md:text-2xl font-bold leading-tight">
                Eco-Friendly
                <br />
                Products
              </h3>
              <p className="text-white/95 leading-relaxed">
                We use only environmentally friendly and hypoallergenic cleaning products that contain no harmful chemicals. Safe for people, pets, and the environment while maintaining high effectiveness.
              </p>
            </div>
          </div>

          {/* Second Block - Professional equipment */}
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 md:p-10 text-white shadow-2xl">
            <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start mb-10">
              <h3 className="text-xl md:text-2xl font-bold leading-tight">
                Advanced
                <br />
                Equipment
              </h3>
              <p className="text-white/95 leading-relaxed">
                Modern professional equipment for high-quality and efficient cleaning solutions
              </p>
            </div>

            {/* Equipment grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Item 1 */}
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                </div>
                <h4 className="text-lg font-bold">HEPA Filter Vacuums</h4>
                <p className="text-white/90 leading-relaxed text-sm">
                  Capture finest dust particles and allergens for healthier air quality
                </p>
              </div>

              {/* Item 2 */}
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                </div>
                <h4 className="text-lg font-bold">Steam Generators</h4>
                <p className="text-white/90 leading-relaxed text-sm">
                  Deep cleaning and sanitization without harsh chemicals
                </p>
              </div>

              {/* Item 3 */}
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                </div>
                <h4 className="text-lg font-bold">Floor Cleaning Machines</h4>
                <p className="text-white/90 leading-relaxed text-sm">
                  Effective for all floor types including tile, laminate, and carpet
                </p>
              </div>

              {/* Item 4 */}
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                </div>
                <h4 className="text-lg font-bold">Upholstery Cleaning</h4>
                <p className="text-white/90 leading-relaxed text-sm">
                  Professional cleaning for carpets, furniture, removing stains and odors
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
