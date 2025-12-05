'use client';

import Image from 'next/image';

export default function TeamSection() {
  const reasons = [
    {
      number: '1',
      title: 'Qualified personnel',
      description: 'All employees are trained and work according to strict quality standards.'
    },
    {
      number: '2',
      title: 'Modern equipment',
      description: 'Professional equipment and safe chemicals from leading brands.'
    },
    {
      number: '3',
      title: 'Eco-friendly approach',
      description: 'We care about the health of our clients and minimize our impact on the environment.'
    },
    {
      number: '4',
      title: 'Flexible plans and subscriptions',
      description: 'Favorable rates for those who want cleaning surfaces and more to become an unnoticeable routine.'
    },
    {
      number: '5',
      title: 'Convenient online system',
      description: 'select the required service and time in a couple of clicks directly from the website.'
    }
  ];

  return (
    <section className="pb-26 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Card with Background Image */}
        <div className="relative min-h-[550px] rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/team.png"
              alt="Professional cleaning team"
              fill
              className="object-cover object-right"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 md:px-12 lg:px-14 py-10 md:py-12">
            <div className="max-w-2xl">
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
                  WHY CHOOSE ICLEANING?
                </h2>
                <p className="text-base md:text-lg text-white/90 font-light">
                  There are a number of reasons for this:
                </p>
              </div>

              {/* Reasons List */}
              <div className="space-y-4">
                {reasons.map((reason) => (
                  <div key={reason.number} className="flex gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    {/* Number */}
                    <div className="flex-shrink-0">
                      <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center">
                        <span className="text-sm font-bold text-white">{reason.number}</span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-0.5">
                      <h3 className="text-base md:text-lg font-bold text-white mb-1">
                        {reason.title}
                      </h3>
                      <p className="text-white/85 text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
