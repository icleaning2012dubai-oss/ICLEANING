import type { SeoLanding } from './types';

// Source: SEO handoff - EN "Standard Carpet & Rug Cleaning" + RU "Чистка стандартных ковров".
// Section IDs are stable anchors and must be preserved.
export const carpetCleaning: SeoLanding = {
  slug: 'carpet-cleaning',
  canonicalId: 'carpet_cleaning',
  serviceEntity: 'carpet_cleaning',
  parentService: 'carpet-cleaning-dubai',
  image: '/images/service/kover-hero.webp',

  meta: {
    title: {
      ru: 'Химчистка ковров в Дубае - забор, чистка и возврат | iCleaning',
      en: 'Carpet & Rug Cleaning in Dubai | Pickup, Washing & Fast Quote',
      ar: 'تنظيف السجاد والبسط في دبي | خدمة الاستلام والغسيل وعرض سعر سريع',
    },
    description: {
      ru: 'Чистка ковров в Дубае с оценкой по фото, забором и возвратом при минимальном заказе. Стандартные ковры от AED 99.',
      en: 'Professional carpet and rug cleaning in Dubai for everyday rugs, stains, dust and odors. Send photos on WhatsApp for a quick estimate, pickup options and clear pricing.',
      ar: 'تنظيف احترافي للسجاد والبسط في دبي للسجاد اليومي والبقع والغبار والروائح. أرسل الصور عبر واتساب للحصول على عرض سعر سريع وخيارات الاستلام وأسعار واضحة.',
    },
  },

  hero: {
    h1: {
      ru: 'Химчистка ковров в Дубае - быстро, аккуратно и с понятной ценой',
      en: 'Carpet & Rug Cleaning in Dubai',
      ar: 'تنظيف السجاد والبسط في دبي',
    },
    paragraph: {
      ru: 'Ковер каждый день собирает песок, пыль, шерсть, запахи и следы обычной жизни. Отправьте фото в WhatsApp - iCleaning сориентирует по цене, подскажет формат чистки и объяснит, когда ковер лучше почистить на месте, а когда забрать на обработку.',
      en: 'Dubai dust does not stay at the door. It settles into carpet pile, mixes with daily foot traffic, pet hair, food spills and humidity, then makes a rug look dull even when the surface seems vacuumed. iCleaning handles standard carpet and rug cleaning with a practical service flow: send photos, get a preliminary estimate, arrange pickup or on-site assessment when suitable, and let the team choose the right cleaning approach for the rug type and condition.',
      ar: 'غبار دبي لا يتوقف عند الباب. فهو يستقر في وبر السجاد ويختلط بحركة الأقدام اليومية وشعر الحيوانات الأليفة وانسكابات الطعام والرطوبة، ثم يجعل السجادة تبدو باهتة حتى عندما يبدو سطحها نظيفاً. تتولى iCleaning تنظيف السجاد والبسط القياسية بأسلوب عملي: أرسل الصور، واحصل على تقدير مبدئي، ورتب الاستلام أو المعاينة الميدانية عند الحاجة، ودع الفريق يختار طريقة التنظيف المناسبة لنوع السجادة وحالتها.',
    },
    miniFacts: [
      { ru: 'до 4 м² - AED 99, до 6 м² - AED 150, до 12 м² - AED 300', en: 'Standard carpets from AED 99 up to 4 m²', ar: 'السجاد القياسي من AED 99 حتى 4 م²' },
      { ru: 'Стандартные ковры от AED 99', en: 'AED 150 up to 6 m² and AED 300 up to 12 m²', ar: 'AED 150 حتى 6 م² وAED 300 حتى 12 م²' },
      { ru: 'Забор и возврат при минимальном заказе', en: 'Pickup and return for eligible rugs', ar: 'الاستلام والإرجاع للسجاد المؤهل' },
      { ru: 'Оценка по фото', en: 'Material check before cleaning', ar: 'فحص المواد قبل التنظيف' },
      { ru: 'Для ковров ручной работы есть отдельная премиальная страница', en: 'Handmade & high-value rugs go to premium rug cleaning', ar: 'السجاد المصنوع يدوياً وعالي القيمة يُحال إلى خدمة التنظيف المتميزة' },
    ],
    primaryCta: {
      text: { ru: 'Отправить фото и получить предварительную цену', en: 'Send Carpet Photos on WhatsApp', ar: 'أرسل صور السجاد عبر واتساب' },
      event: 'whatsapp_get_price_hero',
      href: 'whatsapp',
    },
    secondaryCta: {
      text: { ru: 'Посмотреть цены на ковры', en: 'Check Prices & Pickup Options', ar: 'اطلع على الأسعار وخيارات الاستلام' },
      event: 'send_photo_for_price',
      href: '#carpet-prices',
    },
  },

  priceCards: [
    {
      label: { ru: 'Маленький ковер', en: 'Small carpet', ar: 'سجادة صغيرة' },
      scope: { ru: 'размер до 4 м²', en: 'up to 4 m²', ar: 'حتى 4 م²' },
      price: { ru: 'AED 99', en: 'AED 99', ar: 'AED 99' },
      note: { ru: '2м × 2м = 99 AED', en: '2m × 2m = AED 99', ar: '2م × 2م = AED 99' },
    },
    {
      label: { ru: 'Средний ковер', en: 'Medium carpet', ar: 'سجادة متوسطة' },
      scope: { ru: 'размер до 6 м²', en: 'up to 6 m²', ar: 'حتى 6 م²' },
      price: { ru: 'AED 150', en: 'AED 150', ar: 'AED 150' },
      note: { ru: '2м × 3м = 150 AED', en: '2m × 3m = AED 150', ar: '2م × 3م = AED 150' },
    },
    {
      label: { ru: 'Большой ковер', en: 'Large carpet', ar: 'سجادة كبيرة' },
      scope: { ru: 'размер до 12 м²', en: 'up to 12 m²', ar: 'حتى 12 م²' },
      price: { ru: 'AED 300', en: 'AED 300', ar: 'AED 300' },
      note: { ru: 'ориентир AED 25/м² для больших размеров', en: 'AED 25 / m² for larger areas', ar: 'AED 25 لكل م² للمساحات الأكبر' },
    },
  ],

  sections: [
    {
      id: 'page-root',
      h2: {
        ru: 'Химчистка ковров для обычных домашних и офисных ковров в Дубае',
        en: 'Standard carpet cleaning for everyday rugs in Dubai homes',
        ar: 'تنظيف السجاد القياسي للسجاد اليومي في منازل دبي',
      },
      body: {
        ru: [
          'В Дубае ковер быстро собирает песок и мелкую пыль. Часть грязи остается сверху, а часть уходит глубже в ворс. Поэтому ковер может выглядеть нормально, но все равно пахнуть пылью и казаться несвежим: обычный пылесос убирает только то, что лежит на поверхности.',
          'iCleaning принимает стандартные ковры на чистку с предварительной оценкой по фото. Команда уточняет размер, материал, состояние ворса и тип загрязнений, затем подсказывает формат: чистка на месте или забор ковра на обработку с возвратом после завершения.',
          'Для шелковых, шерстяных, персидских, handmade и других дорогих ковров лучше сразу перейти на страницу премиальной чистки. Там важнее не скорость, а аккуратная диагностика материала, красителей и основы.',
        ],
        en: [
          'Everyday rugs take the pressure of the whole home: shoes, sand, coffee, children, pets and constant AC dust. A carpet can still look acceptable from above while holding dry soil deeper in the pile, especially in areas where people walk or sit every day.',
          'iCleaning starts with the practical details: rug size, material if known, visible stains, smell, and whether the rug can be picked up for cleaning. Standard carpets are priced simply by size, while delicate handmade, wool, silk, viscose or vintage rugs are routed to the premium rug cleaning process for safer assessment.',
        ],
        ar: [
          'يتحمل السجاد اليومي ضغط المنزل بأكمله: الأحذية والرمل والقهوة والأطفال والحيوانات الأليفة وغبار المكيف المستمر. وقد تبدو السجادة مقبولة من الأعلى بينما تحتفظ بالأوساخ الجافة في عمق الوبر، خاصة في الأماكن التي يمشي فيها الناس أو يجلسون كل يوم.',
          'تبدأ iCleaning بالتفاصيل العملية: حجم السجادة، والمادة إن كانت معروفة، والبقع الظاهرة، والرائحة، وما إذا كان بالإمكان استلام السجادة للتنظيف. تُسعّر السجادات القياسية ببساطة حسب الحجم، بينما يُحال السجاد الرقيق المصنوع يدوياً أو الصوف أو الحرير أو الفسكوز أو القديم إلى خدمة تنظيف السجاد المتميزة لتقييم أكثر أماناً.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Send photos and rug size for a quick WhatsApp estimate', ar: 'أرسل الصور وحجم السجادة للحصول على عرض سعر سريع عبر واتساب' },
        event: 'whatsapp_get_price_section',
        href: 'whatsapp',
      },
    },
    {
      id: 'carpet-at-home',
      h2: {
        ru: 'Чистка ковров на дому, когда ковер подходит для работы на месте',
        en: 'Carpet cleaning at home when the rug is suitable for on-site service',
        ar: 'تنظيف السجاد في المنزل عندما تكون السجادة مناسبة للخدمة الميدانية',
      },
      body: {
        ru: [
          'Чистка ковра на дому удобна, когда нужно быстро освежить изделие без логистики и ожидания доставки. Мастер приезжает по адресу, оценивает ворс, пятна, запахи, доступ к воде/электричеству и условия сушки.',
          'Если ковер сильно загрязнен, тяжелый, деликатный или требует более глубокой обработки, менеджер может предложить формат с забором и возвратом. Это не отказ от услуги, а способ выбрать более безопасный и результативный метод для конкретного ковра.',
          'Лучший первый шаг - отправить фото в WhatsApp: по нему проще понять размер, материал, состояние краев, плотность ворса и примерный объем работы.',
        ],
        en: [
          'On-site carpet cleaning is useful when the rug needs a quick refresh and the material, size and condition make home cleaning practical. A technician can inspect the pile, the stains and the working area before starting, then use a method that suits a normal residential setting.',
          'For heavy rugs, delicate fibers, strong odors, pet accidents, unstable colors or deep contamination, pickup and controlled cleaning may be the better recommendation. That is not a refusal of service; it is the safer way to avoid over-wetting, uneven drying, color issues or stains returning after the surface dries.',
        ],
        ar: [
          'يكون تنظيف السجاد في الموقع مفيداً عندما تحتاج السجادة إلى تجديد سريع وتكون المادة والحجم والحالة مناسبة للتنظيف المنزلي. يمكن للفني فحص الوبر والبقع ومنطقة العمل قبل البدء، ثم استخدام طريقة تناسب البيئة السكنية العادية.',
          'أما بالنسبة للسجاد الثقيل أو الألياف الرقيقة أو الروائح القوية أو حوادث الحيوانات الأليفة أو الألوان غير الثابتة أو التلوث العميق، فقد يكون الاستلام والتنظيف المحكوم هو التوصية الأفضل. وهذا ليس رفضاً للخدمة، بل هو الطريقة الأكثر أماناً لتجنب فرط الترطيب أو التجفيف غير المتساوي أو مشاكل الألوان أو عودة البقع بعد جفاف السطح.',
        ],
      },
      cta: {
        text: { ru: 'Заказать выезд мастера', en: 'Ask if your carpet can be cleaned at home', ar: 'استفسر عمّا إذا كان بالإمكان تنظيف سجادتك في المنزل' },
        event: 'request_home_visit',
        href: 'whatsapp',
      },
    },
    {
      id: 'carpet-pickup-delivery',
      h2: {
        ru: 'Забор и возврат ковров по Дубаю',
        en: 'Carpet pickup and return in Dubai',
        ar: 'استلام وإرجاع السجاد في دبي',
      },
      body: {
        ru: [
          'Для ковров можно выбрать формат с забором по адресу и возвратом после чистки. Команда забирает изделие, передает его на обработку и возвращает обратно после завершения работ.',
          'Забор и возврат по Дубаю бесплатные при минимальном заказе. Для некоторых районов условия отдельные: Дейра - 250 AED, Шарджа - 450 AED, Damac Hills 2 - 450 AED, Абу-Даби - 1500 AED.',
          'Такой формат особенно удобен для больших ковров, квартир в высотных зданиях, вилл и случаев, когда ковру нужна более глубокая машинная обработка, чем простое освежение на месте.',
        ],
        en: [
          'Many customers do not want to carry a dusty rug through the building, load it into a car or guess where to take it. For loose rugs, pickup and return is often the cleanest customer experience: the rug is collected from the address, measured, checked and taken for cleaning.',
          'Pickup also gives the cleaning team more control over drying and handling. This matters when the rug is thick, smells must be treated, the backing needs attention, or the home does not have the right space for cleaning and drying.',
        ],
        ar: [
          'لا يرغب كثير من العملاء في حمل سجادة مغبرة عبر المبنى أو تحميلها في السيارة أو التخمين بشأن المكان الذي يأخذونها إليه. بالنسبة للسجاد المتحرك، غالباً ما يكون الاستلام والإرجاع أنظف تجربة للعميل: تُجمع السجادة من العنوان وتُقاس وتُفحص وتُؤخذ للتنظيف.',
          'كما يمنح الاستلام فريق التنظيف مزيداً من التحكم في التجفيف والتعامل. وهذا مهم عندما تكون السجادة سميكة، أو يجب معالجة الروائح، أو تحتاج الطبقة الخلفية إلى عناية، أو لا يتوفر في المنزل المساحة المناسبة للتنظيف والتجفيف.',
        ],
      },
      cta: {
        text: { ru: 'Уточнить забор и возврат', en: 'Check pickup and return for your area', ar: 'تحقق من خدمة الاستلام والإرجاع في منطقتك' },
        event: 'request_pickup_delivery',
        href: 'whatsapp',
      },
    },
    {
      id: 'carpet-materials-methods',
      h2: {
        ru: 'Почему материал ковра меняет метод чистки',
        en: 'Why carpet material changes the cleaning method',
        ar: 'لماذا تُغيّر مادة السجادة طريقة التنظيف',
      },
      body: {
        ru: [
          'Синтетика, шерсть, хлопок, вискоза, клейкая основа и плотный высокий ворс ведут себя по-разному. Один и тот же способ чистки может хорошо сработать на стандартном синтетическом ковре и быть рискованным для натурального или старого изделия.',
          'Перед чисткой важно оценить материал, плотность ворса, устойчивость цвета, состояние основы, старые пятна и следы прошлой самостоятельной чистки. После этого подбирается метод: более влажная обработка, аккуратная машинная чистка, локальная пятновыводка или рекомендация по премиальному формату.',
          'Мы не обещаем, что любое пятно уйдет полностью: результат зависит от возраста загрязнения, состава пятна, материала и того, чем его уже пытались выводить.',
        ],
        en: [
          'A synthetic everyday carpet, a wool rug and a handmade silk rug are not treated as the same object. Fiber type, pile density, backing, dyes and previous cleaning attempts all affect how much moisture, agitation and cleaning product can be used.',
          'For standard rugs, cleaning can include dry soil removal, spot treatment, shampooing or extraction depending on the item. Premium or delicate rugs are routed to inspection-first premium rug cleaning instead of one universal method.',
        ],
        ar: [
          'لا يُعامَل السجاد اليومي الصناعي وسجادة الصوف وسجادة الحرير المصنوعة يدوياً على أنها شيء واحد. فنوع الألياف وكثافة الوبر والطبقة الخلفية والأصباغ ومحاولات التنظيف السابقة كلها تؤثر في مقدار الرطوبة والتحريك ومنتج التنظيف الذي يمكن استخدامه.',
          'بالنسبة للسجاد القياسي، قد يشمل التنظيف إزالة الأوساخ الجافة ومعالجة البقع أو الغسل بالشامبو أو الاستخلاص حسب القطعة. أما السجاد المتميز أو الرقيق فيُحال إلى خدمة التنظيف المتميزة القائمة على المعاينة أولاً بدلاً من طريقة واحدة موحدة.',
        ],
      },
      cta: {
        text: { ru: 'Уточнить подход по материалу', en: 'Tell us the material or send a close-up photo', ar: 'أخبرنا بنوع المادة أو أرسل صورة مقربة' },
        event: 'ask_material_or_scope',
        href: 'whatsapp',
      },
    },
    {
      id: 'carpet-stains-odors',
      h2: {
        ru: 'Пятна и запахи на ковре: обработка без рискованных обещаний',
        en: 'Carpet stain and odor treatment without risky promises',
        ar: 'معالجة بقع السجاد وروائحه دون وعود متهورة',
      },
      body: {
        ru: [
          'Когда на ковре появляется пятно, первая реакция - залить его бытовым средством и потереть щеткой. Именно здесь часто начинается проблема: краситель может потечь, ворс сваляться, а пятно закрепиться глубже.',
          'Специалист смотрит, что именно загрязнило ковер, сколько времени прошло, есть ли запах, как ведет себя ворс и не было ли уже домашних попыток чистки. После этого пятно обрабатывается локально и включается в общий план чистки ковра.',
          'Свежие пятна обычно поддаются лучше старых. Сложные загрязнения могут только осветлиться, поэтому честная оценка до начала работы важнее красивого обещания «удалим всё».',
        ],
        en: [
          'Pet accidents, coffee, food spills and vomit are stressful because the visible stain is only part of the problem. Liquid can move down into the pile or backing, while strong DIY products can lock color changes deeper into the fiber.',
          'iCleaning can treat problem areas during the cleaning process, but the result depends on the age of the stain, the material, dye stability and previous attempts to clean it. Fresh stains and light odors usually respond better than old chemical marks or damage to the actual fiber.',
        ],
        ar: [
          'تُسبب حوادث الحيوانات الأليفة والقهوة وانسكابات الطعام والقيء توتراً لأن البقعة الظاهرة ليست سوى جزء من المشكلة. فالسائل قد ينتقل إلى عمق الوبر أو الطبقة الخلفية، بينما قد تُثبّت المنتجات المنزلية القوية تغيرات اللون في عمق الألياف.',
          'يمكن لـ iCleaning معالجة المناطق المشكلة أثناء عملية التنظيف، لكن النتيجة تعتمد على عمر البقعة والمادة واستقرار الصبغة والمحاولات السابقة لتنظيفها. وعادة ما تستجيب البقع الطازجة والروائح الخفيفة بشكل أفضل من العلامات الكيميائية القديمة أو الضرر الواقع على الألياف نفسها.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото пятна', en: 'Send a stain photo and tell us what caused it', ar: 'أرسل صورة البقعة وأخبرنا بسببها' },
        event: 'stain_odor_assessment',
        href: 'whatsapp',
      },
    },
    {
      id: 'professional-carpet-cleaning',
      h2: {
        ru: 'Профессиональная чистка ковров против пены, порошка и быстрой домашней мойки',
        en: 'Professional carpet cleaning versus DIY foam and cheap quick washes',
        ar: 'التنظيف الاحترافي للسجاد مقابل الرغوة المنزلية والغسلات السريعة الرخيصة',
      },
      body: {
        ru: [
          'Домашняя пена часто создает ощущение чистоты на один день, но не всегда удаляет загрязнения из глубины ворса. Если средство плохо вымыто, ковер быстрее собирает новую пыль и может стать липким на ощупь.',
          'Профессиональная чистка начинается с оценки, а не с универсального шампуня. Команда смотрит материал, тип ворса, загрязнения и выбирает обработку так, чтобы убрать пыль и пятна без лишней влаги и агрессивного трения.',
          'Это особенно важно в Дубае: песок действует как мелкий абразив, а высокая влажность делает нормальную сушку не менее важной, чем сама чистка.',
        ],
        en: [
          'A low price is only useful if the rug is cleaned with the right level of moisture, agitation and drying. Cheap or DIY cleaning often focuses on visible foam, but the real issues are residue left behind, soil not extracted properly, colors affected by the product, or a rug that stays damp too long.',
          'A professional process starts with inspection and expectation setting. The team checks the rug type, visible stains, smell, backing condition and cleaning history before choosing the safest practical method for the item.',
        ],
        ar: [
          'السعر المنخفض مفيد فقط إذا كانت السجادة تُنظّف بالمستوى الصحيح من الرطوبة والتحريك والتجفيف. فالتنظيف الرخيص أو المنزلي كثيراً ما يركز على الرغوة الظاهرة، لكن المشاكل الحقيقية هي البقايا المتروكة والأوساخ التي لم تُستخلص بشكل صحيح والألوان المتأثرة بالمنتج أو السجادة التي تبقى رطبة لفترة طويلة.',
          'تبدأ العملية الاحترافية بالمعاينة وتحديد التوقعات. يفحص الفريق نوع السجادة والبقع الظاهرة والرائحة وحالة الطبقة الخلفية وتاريخ التنظيف قبل اختيار الطريقة العملية الأكثر أماناً للقطعة.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Ask for a professional recommendation before cleaning', ar: 'اطلب توصية احترافية قبل التنظيف' },
        event: 'whatsapp_get_price_section',
        href: 'whatsapp',
      },
    },
    {
      id: 'carpet-prices',
      h2: {
        ru: 'Цены на чистку ковров в Дубае',
        en: 'Carpet cleaning prices in Dubai',
        ar: 'أسعار تنظيف السجاد في دبي',
      },
      showPriceCards: true,
      body: {
        ru: [
          'Актуальные цены на стандартные ковры: маленький ковер до 4 м² - AED 99, средний ковер до 6 м² - AED 150, большой ковер до 12 м² - AED 300. Для больших размеров используйте ориентир AED 25/м².',
          'Предварительный расчет делается по фото, размеру и состоянию ковра. Финальная сумма подтверждается после замера или осмотра, чтобы клиент заранее понимал стоимость и формат чистки.',
        ],
        en: [
          'Confirmed standard carpet and loose rug price cards are: small carpet up to 4 m² - AED 99, medium carpet up to 6 m² - AED 150, and large carpet up to 12 m² - AED 300. For larger standard carpet areas, use AED 25 per m² after measurement.',
          'The team can confirm the final amount after measurement, material check and condition review. Route Persian, handmade, silk, wool, viscose, vintage and high-value rugs to the Premium Rug Cleaning page.',
        ],
        ar: [
          'بطاقات الأسعار المؤكدة للسجاد القياسي والسجاد المتحرك هي: سجادة صغيرة حتى 4 م² - AED 99، وسجادة متوسطة حتى 6 م² - AED 150، وسجادة كبيرة حتى 12 م² - AED 300. أما لمساحات السجاد القياسي الأكبر فاستخدم AED 25 لكل م² بعد القياس.',
          'يمكن للفريق تأكيد المبلغ النهائي بعد القياس وفحص المادة ومراجعة الحالة. أما السجاد الفارسي والمصنوع يدوياً والحرير والصوف والفسكوز والقديم وعالي القيمة فيُحال إلى صفحة التنظيف المتميز للسجاد.',
        ],
      },
      cta: {
        text: { ru: 'Рассчитать стоимость по фото', en: 'Get carpet cleaning price by photo', ar: 'احصل على سعر تنظيف السجاد عبر الصورة' },
        event: 'send_photo_for_price',
        href: 'whatsapp',
      },
    },
    {
      id: 'carpet-booking',
      h2: {
        ru: 'Как заказать химчистку ковра',
        en: 'How to book carpet cleaning',
        ar: 'كيفية حجز خدمة تنظيف السجاد',
      },
      body: {
        ru: [
          'Чтобы заказать чистку ковра, достаточно отправить фото, примерный размер, район и написать, есть ли пятна, запахи или следы животных. Менеджер уточнит, подходит ли чистка на месте, нужен ли забор и возврат, и даст предварительную цену.',
          'Если ковер деликатный, ручной работы, шелковый, вискозный или дорогой, заявку лучше сразу направить на премиальный формат с диагностикой. Для стандартных ковров путь проще: фото, расчет, подтверждение, выезд или забор.',
          'Если вы не знаете материал ковра, ничего страшного. Не нужно заранее заполнять длинную форму: достаточно отправить фото в WhatsApp, остальное менеджер уточнит сам.',
        ],
        en: [
          'To book carpet cleaning, send photos, the approximate size, your Dubai area and a short note about stains, odors or pet marks. The manager will confirm whether on-site cleaning fits, whether pickup and return is needed, and share a preliminary estimate.',
          'Delicate, handmade, silk, viscose or high-value rugs are routed straight to the premium process with inspection first. For standard rugs the path is simpler: photo, estimate, confirmation, visit or pickup.',
          'You do not need to know the exact material in advance. There is no long form to fill in - just send a WhatsApp photo and the manager will confirm the rest.',
        ],
        ar: [
          'لحجز خدمة تنظيف السجاد، أرسل الصور والحجم التقريبي ومنطقتك في دبي مع ملاحظة قصيرة عن البقع أو الروائح أو آثار الحيوانات الأليفة. وسيؤكد المدير ما إذا كان التنظيف الميداني مناسباً، وما إذا كان الاستلام والإرجاع لازماً، ويشاركك تقديراً مبدئياً.',
          'أما السجاد الرقيق أو المصنوع يدوياً أو الحرير أو الفسكوز أو عالي القيمة فيُحال مباشرة إلى العملية المتميزة التي تبدأ بالمعاينة. وبالنسبة للسجاد القياسي يكون المسار أبسط: صورة، تقدير، تأكيد، زيارة أو استلام.',
          'لا تحتاج إلى معرفة المادة بدقة مسبقاً. ولا يوجد نموذج طويل لتعبئته - فقط أرسل صورة عبر واتساب وسيؤكد المدير الباقي.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Send photos for a quick estimate', ar: 'أرسل الصور للحصول على تقدير سريع' },
        event: 'send_photo_for_price',
        href: 'whatsapp',
      },
    },
    {
      id: 'carpet-dubai',
      h2: {
        ru: 'Чистка ковров в районах Дубая',
        en: 'Carpet cleaning across Dubai areas',
        ar: 'تنظيف السجاد في مختلف مناطق دبي',
      },
      body: {
        ru: [
          'iCleaning работает с заказами по Дубаю и уточняет район на этапе заявки. Это важно для логистики, времени приезда, забора ковра и минимального заказа в отдельных зонах.',
          'Отправьте фото ковра и район в WhatsApp - менеджер подскажет ориентир по цене, доступный формат и условия забора/возврата. Для Шарджа, Damac Hills 2, Дейра и Абу-Даби действуют отдельные минимальные суммы заказа.',
          'Такой подход проще, чем читать десятки страниц по районам: клиент сразу получает ответ по своему адресу.',
        ],
        en: [
          'When people search for carpet cleaning near them, they usually need two things quickly: can you come to my area, and what will it cost? iCleaning can handle carpet cleaning requests across Dubai, with area-specific pickup rules where needed.',
          'For a faster quote, send the area, building or villa location, rug size and photos. This keeps the WhatsApp conversation short and avoids long back-and-forth before the price and collection option are clear.',
        ],
        ar: [
          'عندما يبحث الناس عن تنظيف سجاد قريب منهم، فإنهم عادة ما يحتاجون إلى معرفة أمرين بسرعة: هل يمكنكم القدوم إلى منطقتي، وكم ستكون التكلفة؟ يمكن لـ iCleaning التعامل مع طلبات تنظيف السجاد في مختلف أنحاء دبي، مع قواعد استلام خاصة بكل منطقة عند الحاجة.',
          'للحصول على عرض سعر أسرع، أرسل المنطقة أو موقع المبنى أو الفيلا وحجم السجادة والصور. فهذا يجعل محادثة واتساب قصيرة ويتجنب التبادل الطويل قبل أن يتضح السعر وخيار الاستلام.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Check service in your Dubai area', ar: 'تحقق من توفر الخدمة في منطقتك بدبي' },
        event: 'whatsapp_get_price_section',
        href: 'whatsapp',
      },
    },
    {
      id: 'carpet-company',
      h2: {
        ru: 'Как выбрать компанию для чистки ковра',
        en: 'Choose a carpet cleaning company that checks before it cleans',
        ar: 'اختر شركة تنظيف سجاد تفحص قبل أن تنظّف',
      },
      body: {
        ru: [
          'Сильная компания по чистке ковров не начинает с фразы «все будет как новое». Сначала она уточняет материал, размер, состояние, тип пятен, наличие запаха и формат работы.',
          'У iCleaning главный маршрут простой: фото в WhatsApp, предварительная оценка, подтверждение условий, чистка, возврат или приемка работы. Если есть риск для деликатного ковра, клиенту предлагают более аккуратный формат, а не универсальную обработку для всех изделий.',
          'Такой подход не выглядит громче конкурентов, но снижает главный риск клиента - отдать вещь и не понимать, что с ней будут делать.',
        ],
        en: [
          'A good carpet cleaning company does not rush every rug through the same method. Before cleaning, the team checks what the rug is made from, how it is used, what stains are present and whether it can safely be cleaned as a standard carpet.',
          'iCleaning’s trust flow is simple: photo estimate, size confirmation, pickup or visit scheduling, cleaning method selection and honest explanation of stain limits.',
        ],
        ar: [
          'الشركة الجيدة لتنظيف السجاد لا تُمرّر كل سجادة عبر الطريقة نفسها بتسرّع. فقبل التنظيف، يفحص الفريق مما صُنعت السجادة، وكيفية استخدامها، والبقع الموجودة، وما إذا كان بالإمكان تنظيفها بأمان كسجادة قياسية.',
          'أسلوب الثقة لدى iCleaning بسيط: تقدير بالصورة، وتأكيد الحجم، وجدولة الاستلام أو الزيارة، واختيار طريقة التنظيف، وشرح صادق لحدود إزالة البقع.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить план чистки', en: 'Send photos and get a cleaning plan', ar: 'أرسل الصور واحصل على خطة تنظيف' },
        event: 'whatsapp_get_price_section',
        href: 'whatsapp',
      },
    },
    {
      id: 'commercial-carpet-cleaning',
      h2: {
        ru: 'Чистка ковров для офисов, шоурумов и меблированных объектов',
        en: 'Commercial rug and carpet cleaning for offices and furnished spaces',
        ar: 'تنظيف السجاد والبسط التجاري للمكاتب والمساحات المفروشة',
      },
      body: {
        ru: [
          'Для офисов, салонов, апартаментов под аренду и коммерческих помещений важно быстро понять объем: сколько ковров, какие размеры, где они лежат и когда удобно выполнить забор или чистку.',
          'Менеджер может запросить фото, список предметов, район и желаемый интервал. После этого проще дать расчет и согласовать график так, чтобы не мешать работе команды, гостям или арендаторам.',
        ],
        en: [
          'Commercial clients usually need a practical calculation: how many rugs, what sizes, what condition, where the items are located and when the team can access the space. This applies to offices, showrooms, clinics, hotels, furnished apartments and other commercial interiors.',
          'For loose rugs, pickup and return can be arranged by area and order scope. Fixed carpet flooring is handled through the on-site carpet flooring service because the process is different from loose rug cleaning.',
        ],
        ar: [
          'يحتاج العملاء التجاريون عادة إلى حساب عملي: كم عدد السجادات، وما أحجامها، وما حالتها، وأين تقع القطع، ومتى يمكن للفريق الوصول إلى المكان. وينطبق ذلك على المكاتب وصالات العرض والعيادات والفنادق والشقق المفروشة وغيرها من المساحات التجارية الداخلية.',
          'بالنسبة للسجاد المتحرك، يمكن ترتيب الاستلام والإرجاع حسب المنطقة ونطاق الطلب. أما الأرضيات المثبتة من السجاد فتُعالَج عبر خدمة تنظيف أرضيات السجاد الميدانية لأن العملية تختلف عن تنظيف السجاد المتحرك.',
        ],
      },
      cta: {
        text: { ru: 'Запросить расчет для объекта', en: 'Request a commercial carpet quote', ar: 'اطلب عرض سعر تجاري للسجاد' },
        event: 'commercial_quote_request',
        href: 'whatsapp',
      },
    },
    {
      id: 'carpet-availability',
      h2: {
        ru: 'Быстрая чистка ковров и срочные запросы',
        en: 'Fast carpet cleaning and urgent requests',
        ar: 'تنظيف السجاد السريع والطلبات العاجلة',
      },
      body: {
        ru: [
          'Если ковер нужен срочно, лучше написать в WhatsApp сразу: менеджер проверит ближайшее время, формат обработки и возможность забора. Чем раньше команда увидит фото и размер, тем быстрее можно понять реальный срок.',
          'Для стандартных ковров иногда достаточно более простого маршрута, но крупные, сильно влажные или деликатные изделия требуют времени на аккуратную обработку и сушку.',
        ],
        en: [
          'Some carpet problems feel urgent: a spill before guests arrive, a pet accident, move-in cleaning, or a rug that suddenly smells after humidity. The fastest next step is to send photos, size and your area so the manager can check the nearest available slot.',
          'Same-day service may depend on the schedule, area, rug size, pickup capacity and drying requirements. For delicate rugs or severe contamination, rushing the job can be worse than booking the right process.',
        ],
        ar: [
          'بعض مشاكل السجاد تبدو عاجلة: انسكاب قبل وصول الضيوف، أو حادث من حيوان أليف، أو تنظيف عند الانتقال، أو سجادة بدأت رائحتها فجأة بعد الرطوبة. والخطوة التالية الأسرع هي إرسال الصور والحجم ومنطقتك حتى يتحقق المدير من أقرب موعد متاح.',
          'قد تعتمد الخدمة في نفس اليوم على الجدول والمنطقة وحجم السجادة وسعة الاستلام ومتطلبات التجفيف. أما بالنسبة للسجاد الرقيق أو التلوث الشديد، فقد يكون التسرع في المهمة أسوأ من حجز العملية الصحيحة.',
        ],
      },
      cta: {
        text: { ru: 'Проверить ближайшее время', en: "Check today's availability", ar: 'تحقق من التوفر اليوم' },
        event: 'check_availability',
        href: 'whatsapp',
      },
    },
    {
      id: 'carpet-sofa-cleaning-bundle',
      h2: {
        ru: 'Нужна чистка ковров и диванов вместе?',
        en: 'Need carpet and sofa cleaning together?',
        ar: 'هل تحتاج إلى تنظيف السجاد والأريكة معاً؟',
      },
      body: {
        ru: [
          'Если нужно почистить ковер и диван вместе, не нужно оформлять отдельные заявки. Отправьте фото всех предметов, район и желаемую дату - менеджер соберет предварительный расчет и подскажет, что можно сделать на месте, а что лучше забрать на обработку.',
          'Для пятен и запахов результат по каждому предмету оценивается отдельно: ковер, диван и матрас сделаны из разных материалов и не чистятся одним универсальным способом.',
        ],
        en: [
          'Many homes need more than one item cleaned at the same time: a carpet in the living room, a sofa that smells of daily use, and dining chairs or a mattress. A combined request is easier than booking everything separately.',
          'The manager can collect photos of each item, estimate the price and advise whether rugs need pickup while sofas and mattresses are cleaned on site. The customer receives one quote flow for multiple soft-surface items.',
        ],
        ar: [
          'تحتاج كثير من المنازل إلى تنظيف أكثر من قطعة في الوقت نفسه: سجادة في غرفة المعيشة، وأريكة تفوح منها رائحة الاستخدام اليومي، وكراسي طعام أو مرتبة. والطلب المجمّع أسهل من حجز كل شيء على حدة.',
          'يمكن للمدير جمع صور كل قطعة وتقدير السعر وتقديم المشورة بشأن ما إذا كان السجاد يحتاج إلى استلام بينما تُنظّف الأرائك والمراتب في الموقع. ويحصل العميل على مسار عرض سعر واحد لعدة قطع من الأسطح الناعمة.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото всех предметов', en: 'Send photos of all items for one quote', ar: 'أرسل صور جميع القطع للحصول على عرض سعر واحد' },
        event: 'send_photo_for_price',
        href: 'whatsapp',
      },
    },
  ],

  faq: [
    {
      q: { ru: 'Сколько стоит чистка ковра в Дубае?', en: 'How much does carpet cleaning cost in Dubai?', ar: 'كم تكلفة تنظيف السجاد في دبي؟' },
      a: {
        ru: 'Актуальные цены: стандартные ковры до 4 м² - AED 99, до 6 м² - AED 150, до 12 м² - AED 300. Для больших размеров используйте ориентир AED 25/м².',
        en: 'Send rug photos, approximate size and your Dubai area for a preliminary estimate. Final price is confirmed after measurement, material and condition are checked. Premium handmade, wool, silk, viscose or antique rugs need a separate assessment.',
        ar: 'أرسل صور السجادة والحجم التقريبي ومنطقتك في دبي للحصول على تقدير مبدئي. يُؤكَّد السعر النهائي بعد القياس وفحص المادة والحالة. أما السجاد المتميز المصنوع يدوياً أو الصوف أو الحرير أو الفسكوز أو الأثري فيحتاج إلى تقييم منفصل.',
      },
    },
    {
      q: { ru: 'Можно ли почистить ковер на дому?', en: 'Do you clean carpets at home or take them away?', ar: 'هل تنظفون السجاد في المنزل أم تأخذونه معكم؟' },
      a: {
        ru: 'Да, если ковер и условия подходят для чистки на месте. Для тяжелых, сильно загрязненных или деликатных ковров менеджер может предложить забор и возврат после обработки.',
        en: 'Both formats are available when suitable for loose rugs. Some standard carpets can be cleaned at the address, while larger, thicker, heavily soiled or delicate rugs may be better handled with pickup and controlled cleaning. Send a photo, approximate size and your Dubai area, and the manager will recommend the safer option.',
        ar: 'كلا الخيارين متاح عندما يكون مناسباً للسجاد المتحرك. يمكن تنظيف بعض السجاد القياسي في العنوان، بينما قد يكون من الأفضل التعامل مع السجاد الأكبر أو الأسمك أو شديد الاتساخ أو الرقيق عبر الاستلام والتنظيف المحكوم. أرسل صورة والحجم التقريبي ومنطقتك في دبي، وسيوصي المدير بالخيار الأكثر أماناً.',
      },
    },
    {
      q: { ru: 'Вы забираете и возвращаете ковры?', en: 'Can you remove all carpet stains?', ar: 'هل يمكنكم إزالة جميع بقع السجاد؟' },
      a: {
        ru: 'Да, для ковров возможен забор и возврат. По Дубаю это бесплатно при минимальном заказе; для Дейра, Шарджа, Damac Hills 2, Абу-Даби действуют отдельные минимальные суммы.',
        en: 'No responsible cleaner needs to promise that every stain will disappear completely. The result depends on the age of the stain, the carpet material, dye stability and what was already used on it. iCleaning can treat stains professionally and explain the expected result before cleaning.',
        ar: 'لا يحتاج أي منظّف مسؤول إلى الوعد بأن كل بقعة ستختفي تماماً. فالنتيجة تعتمد على عمر البقعة ومادة السجاد واستقرار الصبغة وما استُخدم عليها من قبل. يمكن لـ iCleaning معالجة البقع باحترافية وشرح النتيجة المتوقعة قبل التنظيف.',
      },
    },
    {
      q: { ru: 'Удаляются ли все пятна с ковра?', en: 'Do you clean Persian, silk or handmade rugs with this service?', ar: 'هل تنظفون السجاد الفارسي أو الحريري أو المصنوع يدوياً بهذه الخدمة؟' },
      a: {
        ru: 'Не всегда. Результат зависит от возраста пятна, материала, красителей и домашних попыток чистки. Сложные пятна могут осветлиться, но не уйти полностью.',
        en: 'This service is for standard carpet and rug cleaning. Persian, silk, handmade, viscose, vintage and other high-value rugs go to the Premium Rug Cleaning service because they need inspection-first handling and a more careful cleaning method.',
        ar: 'هذه الخدمة مخصصة لتنظيف السجاد والبسط القياسية. أما السجاد الفارسي والحريري والمصنوع يدوياً والفسكوز والقديم وغيره من السجاد عالي القيمة فيُحال إلى خدمة التنظيف المتميز للسجاد لأنه يحتاج إلى تعامل يبدأ بالمعاينة وطريقة تنظيف أكثر عناية.',
      },
    },
    {
      q: { ru: 'Чем стандартная чистка отличается от чистки элитных ковров?', en: 'Can I get a quote on WhatsApp?', ar: 'هل يمكنني الحصول على عرض سعر عبر واتساب؟' },
      a: {
        ru: 'Стандартная страница подходит для обычных ковров с быстрым и более доступным сервисом. Шелковые, шерстяные, хендмейд, персидские и другие ценные ковры лучше вести на премиальную страницу с диагностикой материала и более деликатным подходом.',
        en: 'Yes. Send photos, approximate size, your area and a short note about stains or odors. The WhatsApp quote is a preliminary estimate; the final amount is confirmed after measurement and inspection.',
        ar: 'نعم. أرسل الصور والحجم التقريبي ومنطقتك وملاحظة قصيرة عن البقع أو الروائح. عرض السعر عبر واتساب تقدير مبدئي؛ ويُؤكَّد المبلغ النهائي بعد القياس والمعاينة.',
      },
    },
  ],

  related: [
    {
      slug: 'premium-rug-cleaning',
      title: { ru: 'Премиальная чистка ковров', en: 'Premium Rug Cleaning', ar: 'التنظيف المتميز للسجاد' },
      text: {
        ru: 'Для шелковых, шерстяных, Persian, handmade и дорогих ковров.',
        en: 'Use this when the rug is handmade, silk, wool, viscose, vintage or high-value.',
        ar: 'استخدم هذه الخدمة عندما تكون السجادة مصنوعة يدوياً أو من الحرير أو الصوف أو الفسكوز أو قديمة أو عالية القيمة.',
      },
    },
    {
      slug: 'carpet-flooring-cleaning',
      title: { ru: 'Чистка ковролина', en: 'Carpet Flooring Cleaning', ar: 'تنظيف أرضيات السجاد' },
      text: {
        ru: 'Для фиксированного коврового покрытия без вывоза.',
        en: 'Use this for fixed wall-to-wall or installed carpet that stays on site.',
        ar: 'استخدم هذه الخدمة للسجاد المثبت من الحائط إلى الحائط الذي يبقى في مكانه.',
      },
    },
    {
      slug: 'sofa-cleaning',
      title: { ru: 'Химчистка диванов', en: 'Sofa Cleaning', ar: 'تنظيف الأرائك' },
      text: {
        ru: 'Для общей заявки на ковер и мягкую мебель.',
        en: 'Useful when the customer wants one quote for multiple soft surfaces.',
        ar: 'مفيدة عندما يرغب العميل في عرض سعر واحد لعدة أسطح ناعمة.',
      },
    },
  ],

  // Reused decorative blocks from the existing carpet template (kept logically).
  features: [
    { iconKey: 'droplet', title: { ru: 'Глубокая экстракция', en: 'Deep Extraction', ar: 'استخلاص عميق' }, desc: { ru: 'Удаляем грязь из глубоких слоёв ковра', en: 'Remove dirt from deep carpet layers', ar: 'إزالة الأوساخ من طبقات السجاد العميقة' } },
    { iconKey: 'leaf', title: { ru: 'Эко-средства', en: 'Eco Products', ar: 'منتجات بيئية' }, desc: { ru: 'pH-нейтральные растворы, безопасные для всех типов волокон', en: 'pH-neutral solutions safe for all fiber types', ar: 'محاليل محايدة الأس الهيدروجيني آمنة لجميع أنواع الألياف' } },
    { iconKey: 'palette', title: { ru: 'Восстановление цвета', en: 'Color Restoration', ar: 'استعادة اللون' }, desc: { ru: 'Возвращаем яркость и насыщенность красок', en: 'Restore brightness and color saturation', ar: 'استعادة السطوع وتشبع اللون' } },
    { iconKey: 'bacteria', title: { ru: 'Антибактериальная обработка', en: 'Antibacterial Treatment', ar: 'معالجة مضادة للبكتيريا' }, desc: { ru: 'Уничтожаем до 99% бактерий и пылевых клещей', en: 'Destroy up to 99% of bacteria and dust mites', ar: 'نقضي على 99% من البكتيريا وعث الغبار' } },
  ],
  process: [
    { title: { ru: 'Тестирование', en: 'Testing', ar: 'الاختبار' }, desc: { ru: 'Проверяем тип волокна и стойкость красителя', en: 'Check fiber type and dye stability', ar: 'نتحقق من نوع الألياف واستقرار الصبغة' } },
    { title: { ru: 'Сухая чистка', en: 'Dry Cleaning', ar: 'التنظيف الجاف' }, desc: { ru: 'Удаляем песок и сухую грязь мощным пылесосом', en: 'Remove sand and dry dirt with a powerful vacuum', ar: 'إزالة الرمل والأوساخ الجافة بمكنسة كهربائية قوية' } },
    { title: { ru: 'Влажная экстракция', en: 'Wet Extraction', ar: 'الاستخلاص الرطب' }, desc: { ru: 'Подаём раствор под давлением и извлекаем грязь', en: 'Apply solution under pressure and extract dirt', ar: 'تطبيق المحلول تحت الضغط واستخراج الأوساخ' } },
    { title: { ru: 'Сушка', en: 'Drying', ar: 'التجفيف' }, desc: { ru: 'Используем турбо-сушку для быстрого результата', en: 'Use turbo drying for quick results', ar: 'نستخدم التجفيف التوربيني لنتائج سريعة' } },
  ],
};
