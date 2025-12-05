'use client';

export default function StatsSection() {
  return (
    <section className="pb-26 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Happy Clients */}
          <div className="bg-white rounded-3xl p-10 shadow-xl">
            <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              500+
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Happy Clients
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Trusted by hundreds of homeowners and offices, HomyClean delivers spotless results that bring real satisfaction every time.
            </p>
          </div>

          {/* Completed Cleanings */}
          <div className="bg-white rounded-3xl p-10 shadow-xl">
            <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              1,200+
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Completed Cleanings
            </h3>
            <p className="text-gray-500 leading-relaxed">
              From cozy apartments to large offices, we've successfully completed over a thousand cleaning sessions with consistent quality.
            </p>
          </div>

          {/* Service Commitment */}
          <div className="bg-white rounded-3xl p-10 shadow-xl">
            <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              100%
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Service Commitment
            </h3>
            <p className="text-gray-500 leading-relaxed">
              We take pride in our reliability, attention to detail, and 100% commitment to creating healthier, fresher spaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
