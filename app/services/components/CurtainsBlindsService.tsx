'use client';

import Image from 'next/image';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function CurtainsBlindsService() {
  const { t } = useLanguage();
  
  return (
    <>
      {/* Introduction Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-90">
              <Image
                src="/images/decorative2.webp"
                alt="Decorative"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10 text-center">
              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                {t('curtains.intro')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">{t('curtains.sizesTitle')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Blinds Card */}
            <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 text-center">
                <h3 className="text-3xl font-bold text-white mb-6">{t('curtains.blinds')}</h3>
                <p className="text-gray-300 text-lg mb-8">{t('curtains.cleaning')}</p>
                
                <div className="mb-10">
                  <div className="text-5xl font-bold mb-2">
                    <span className="text-blue-400">АЕД 25/м</span>
                    <sup className="text-2xl">2</sup>
                  </div>
                </div>
                
                <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.6)] transform hover:scale-105">
                  {t('carpet.addBasket')}
                </button>
              </div>
            </div>

            {/* Curtains Card */}
            <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 text-center">
                <h3 className="text-3xl font-bold text-white mb-6">{t('curtains.curtains')}</h3>
                <p className="text-gray-300 text-lg mb-8">{t('curtains.cleaning')}</p>
                
                <div className="mb-10">
                  <div className="text-5xl font-bold mb-2">
                    <span className="text-blue-400">АЕД 17/м</span>
                    <sup className="text-2xl">2</sup>
                  </div>
                </div>
                
                <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.6)] transform hover:scale-105">
                  {t('carpet.addBasket')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-90">
              <Image
                src="/images/decorative2.webp"
                alt="Decorative"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">{t('sofa.processTitle')}</h2>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {/* Before/After Image */}
                <div className="relative h-[500px] md:h-[600px]">
                  <Image
                    src="/images/curtains/curtains_cleaning.png"
                    alt="Curtains Cleaning Process"
                    fill
                    className="object-cover"
                  />
                  
                  {/* Before Label */}
                  <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900">До</h3>
                  </div>
                  
                  {/* After Label */}
                  <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900">После</h3>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-blue-50/50 rounded-3xl p-8 hover:bg-blue-50 transition-colors duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">До</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Повседневная жизнь / работа и пыль на ваших жалюзи — вот как обычно выглядят ваши окна до нашего приезда.
                  </p>
                </div>
                
                <div className="bg-blue-50/50 rounded-3xl p-8 hover:bg-blue-50 transition-colors duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">После</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Вот так выглядят ваши жалюзи и пространство после нашей тщательной работы. В нашей команде — настоящие профессионалы.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Format Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">НАШ ФОРМАТ УСЛУГ</h2>
          
          <div className="space-y-8">
            {/* Factory Cleaning */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-[350px] lg:h-[450px] overflow-hidden">
                  <Image
                    src="/images/curtains/machina-chistka.jpg"
                    alt="Factory Cleaning"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-blue-50/30 to-transparent">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">ЗАВОДСКАЯ ЧИСТКА</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Если изделия нуждаются в глубокой химчистке, мы аккуратно демонтируем их, доставим на наш завод, где проведем полный цикл профессиональной очистки. После этого вернем и установим на место. Такой подход особенно эффективен для плотных тканей, сильных загрязнений или длительного периода без ухода.
                  </p>
                </div>
              </div>
            </div>

            {/* Complex Treatment - Reversed */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="order-2 lg:order-1 p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-bl from-blue-50/30 to-transparent">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">КОМПЛЕКСНАЯ ОБРАБОТКА</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Вне зависимости от формата — удаляем пыль, загрязнения, пятна и запахи. Работая с различными типами штор и жалюзи, мы подбираем индивидуальные средства, сохраняющие цвет, структуру и форму материала.
                  </p>
                </div>
                <div className="order-1 lg:order-2 relative h-[350px] lg:h-[450px] overflow-hidden">
                  <Image
                    src="/images/curtains/comlex.jpg"
                    alt="Complex Treatment"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* On-site Cleaning */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-[350px] lg:h-[450px] overflow-hidden">
                  <Image
                    src="/images/curtains/chistka-na-meste.webp"
                    alt="On-site Cleaning"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-blue-50/30 to-transparent">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">ЧИСТКА НА МЕСТЕ</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Для срочной или деликатной чистки наши специалисты приедут к вам домой или в офис. Они проведут обработку штор и жалюзей прямо на окнах, без демонтажа. Это удобно, быстро и безопасно для большинства тканей и конструкций.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Curtains & Blinds Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">МЫ ЧИСТИМ ВСЕ ТИПЫ ШТОР И ЖАЛЮЗИ</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Textile Curtains */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative h-[250px] rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/images/curtains/texstil.jpg"
                  alt="Textile Curtains"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Текстильные (классические, римские, плиссированные, рулонные)</h3>
              <p className="text-gray-600 leading-relaxed">
                Аккуратная чистка тканевых покрытий от бытовой пыли и запахов с сохранением текстуры.
              </p>
            </div>

            {/* Wooden Blinds */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative h-[250px] rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/images/curtains/derevo.jpg"
                  alt="Wooden Blinds"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ДЕРЕВЯННЫЕ ЖАЛЮЗИ</h3>
              <p className="text-gray-600 leading-relaxed">
                Используем мягкие и безопасные средства, чтобы не повредить поверхность дерева.
              </p>
            </div>

            {/* Plastic & Vinyl Blinds */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative h-[250px] rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/images/curtains/plastik.jpg"
                  alt="Plastic Blinds"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Пластиковые и виниловые жалюзи</h3>
              <p className="text-gray-600 leading-relaxed">
                Удаляем налет и загрязнения с горизонтальных и вертикальных ламелей, включая крепления.
              </p>
            </div>

            {/* Roller Blinds */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative h-[250px] rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/images/curtains/rulon.jpg"
                  alt="Roller Blinds"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">РУЛОННЫЕ ШТОРЫ</h3>
              <p className="text-gray-600 leading-relaxed">
                Рулонные шторы изготавливаются из цельного куска ткани, который при поднятии складывается вверх и вниз вокруг цилиндрической трубки. Эта трубка обычно крепится в верхней части оконной рамы.
              </p>
            </div>

            {/* Classic Textile */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative h-[250px] rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/images/curtains/classic.webp"
                  alt="Classic Textile"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">КЛАССИЧЕСКИЙ ТЕКСТИЛЬ</h3>
              <p className="text-gray-600 leading-relaxed">
                Классические текстильные шторы состоят из тканевых панелей, которые свисают вертикально с карниза или направляющей. Их можно открывать или закрывать, чтобы контролировать освещение, уединение и температуру.
              </p>
            </div>

            {/* Roman Blinds */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative h-[250px] rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/images/curtains/rymskiy.webp"
                  alt="Roman Blinds"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">РИМСКИЕ ШТОРЫ</h3>
              <p className="text-gray-600 leading-relaxed">
                Римские шторы изготавливаются из цельного куска ткани, который при поднятии складывается вверх и вниз в складки. При поднятии жалюзи ткань равномерно сжимается горизонтальными складками, создавая гладкий и сшитый на заказ вид.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Regular Cleaning Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            ПОЧЕМУ ВАЖНО РЕГУЛЯРНО ЧИСТИТЬ ШТОРЫ И ЖАЛЮЗИ?
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16">На это есть целый спектр причин:</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Benefits List */}
            <div className="space-y-6">
              {[
                {
                  number: '1',
                  title: 'Здоровье',
                  description: 'Уменьшается количество пыли, аллергенов и бактерий в воздухе.'
                },
                {
                  number: '2',
                  title: 'Гигиена',
                  description: 'Регулярная чистка предотвращает появление плесени и неприятных запахов.'
                },
                {
                  number: '3',
                  title: 'Экономия',
                  description: 'Уход продлевает срок службы штор — нет нужды в частой замене.'
                },
                {
                  number: '4',
                  title: 'Эстетика',
                  description: 'Чистые окна делают интерьер более ухоженным и свежим.'
                },
                {
                  number: '5',
                  title: 'Воздух',
                  description: 'Чистка способствует улучшению микроклимата в помещении.'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-6 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Right - Image */}
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/curtains/wash-machine.jpg"
                alt="Professional Laundry Facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video and Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left - Video */}
              <div className="relative p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-blue-600/50 to-transparent">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/VIDEO_ID"
                      title="Curtains and Blinds Cleaning"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
              
              {/* Right - Text and Images Grid */}
              <div className="p-8 lg:p-12 flex flex-col justify-center text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  ШТОРЫ И ЖАЛЮЗИ
                </h2>
                
                <p className="text-blue-50 text-lg leading-relaxed mb-8">
                  Регулярная чистка штор и жалюзи необходима для поддержания свежей и здоровой атмосферы в помещении. Наша команда профессионалов специализируется на предоставлении высококачественных услуг по чистке штор и жалюзи, обеспечивая тщательное удаление пыли, грязи и аллергенов. Благодаря нашим эффективным процессам и вниманию к деталям мы добиваемся быстрых результатов без ущерба для качества. Доверьте нам обновить ваши шторы и жалюзи, улучшая внешний вид и чистоту вашего дома или офиса.
                </p>
                
                {/* Images Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-[200px] rounded-2xl overflow-hidden shadow-xl group">
                    <Image
                      src="/images/curtains/curtain-1.jpg"
                      alt="Elegant Curtains"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  <div className="relative h-[200px] rounded-2xl overflow-hidden shadow-xl group">
                    <Image
                      src="/images/curtains/curtain-2.jpg"
                      alt="Modern Blinds"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 pt-8">
                  <div className="w-12 h-1 bg-white/50 rounded-full"></div>
                  <p className="text-blue-100 text-sm font-medium">
                    ПРОФЕССИОНАЛЬНАЯ ЧИСТКА БЕЗ ДЕМОНТАЖА
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
