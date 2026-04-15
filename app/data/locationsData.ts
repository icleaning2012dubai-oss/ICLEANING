export interface LocationPage {
  slug: string;
  h1: { ru: string; en: string; ar: string };
  title: { ru: string; en: string; ar: string };
  description: { ru: string; en: string; ar: string };
  content: { ru: string; en: string; ar: string };
}

export const locationsData: Record<string, LocationPage> = {
  'dubai-marina': {
    slug: 'dubai-marina',
    h1: {
      ru: 'Клининг в Дубай Марина – быстро, честно, без наценок',
      en: 'Cleaning in Dubai Marina – Fast, Honest, No Markups',
      ar: 'تنظيف في دبي مارينا – سريع وصادق وبدون زيادات',
    },
    title: {
      ru: 'Уборка и химчистка в Дубай Марина – приедем за час | iCleaning',
      en: 'Cleaning & Dry Cleaning in Dubai Marina – We Arrive Within an Hour | iCleaning',
      ar: 'تنظيف وتنظيف جاف في دبي مارينا – نصل خلال ساعة | iCleaning',
    },
    description: {
      ru: 'Химчистка диванов, ковров, генеральная уборка в Дубай Марина. Выезд в день заказа. Знаем все дома, есть парковка. Цены от 299 AED.',
      en: 'Sofa & carpet cleaning, deep cleaning in Dubai Marina. Same-day service. We know all buildings. Prices from 299 AED.',
      ar: 'تنظيف الأرائك والسجاد، تنظيف عميق في دبي مارينا. خدمة في نفس اليوم. نعرف جميع المباني. الأسعار من 299 درهم.',
    },
    content: {
      ru: `Дубай Марина – район высоток, вечной стройки по соседству и, конечно, песка. Диваны пачкаются быстрее, чем вы успеваете их пылесосить. Ковры собирают пыль с улицы. А времени на уборку у жителей Марина почти нет – работа, спортзал, встречи.

Мы работаем в Марина каждый день. Наши мастера знают, где находится грузовой лифт в башнях Marina Gate, Marina Promenade, Marina Pinnacle, как пройти через охрану и где оставить машину без штрафа. Парковку мы оплачиваем сами – никаких скрытых доплат.

Что мы делаем в Дубай Марина:
Химчистка диванов – приедем в день звонка, если позвоните до обеда. Угловые диваны, кожаные, велюровые – любые.
Чистка ковров – персидские, шерстяные, синтетика. Без усадки и выцветания.
Стирка штор и чистка жалюзи – снимем, постираем (или отдадим в химчистку), повесим обратно.
Генеральная уборка квартир – от студии до 3-комнатных. Моем окна, холодильник, духовку, плинтусы.
Чистка матрасов – удаляем пылевых клещей и пятна пота.
Чистка кондиционеров – чтобы дубайская жара не убивала.

Примеры цен (все с НДС, без доплат за район):
Генеральная уборка 1-комнатной – 399 AED
Химчистка дивана (2-местный) – 250 AED
Чистка ковра 2×3 м – 180 AED

Почему нам доверяют жители Марина: мы не берем лишнего за «район», работаем аккуратно (не задеваем стены в узких коридорах), и если что-то пошло не так – переделаем бесплатно.

Заказать – звоните или пишите в WhatsApp. Мастер приедет в течение часа, если вы в башнях JLT или Marina.`,
      en: `Dubai Marina – a district of high-rises, eternal construction nearby, and of course, sand. Sofas get dirty faster than you can vacuum them. Carpets collect dust from outside. And Marina residents barely have time for cleaning – work, gym, meetings.

We work in Marina every day. Our specialists know where the freight elevator is in Marina Gate, Marina Promenade, Marina Pinnacle towers, how to pass through security, and where to park without a fine. We pay for parking ourselves – no hidden charges.

What we do in Dubai Marina:
Sofa cleaning – we arrive on the day you call, if you call before noon. Corner sofas, leather, velour – any type.
Carpet cleaning – Persian, wool, synthetic. No shrinkage or fading.
Curtain washing and blind cleaning – we remove, wash (or dry clean), and hang back.
Deep cleaning of apartments – from studio to 3-bedroom. We wash windows, fridge, oven, baseboards.
Mattress cleaning – we remove dust mites and sweat stains.
AC cleaning – so Dubai's heat doesn't kill you.

Price examples (all VAT-inclusive, no area surcharges):
Deep cleaning 1-bedroom – 399 AED
Sofa cleaning (2-seater) – 250 AED
Carpet cleaning 2×3 m – 180 AED

Why Marina residents trust us: we don't overcharge for the "area", we work carefully (don't scratch walls in narrow corridors), and if something goes wrong – we redo it for free.

Order – call or write on WhatsApp. Our specialist will arrive within an hour if you're in JLT or Marina towers.`,
      ar: `دبي مارينا – منطقة ناطحات السحاب والبناء المستمر بجوارها، وبالطبع الرمال. الأرائك تتسخ أسرع مما يمكنكم تنظيفها بالمكنسة. السجاد يجمع الغبار من الخارج. ووقت التنظيف لدى سكان المارينا شبه معدوم – العمل والنادي والاجتماعات.

نعمل في المارينا كل يوم. متخصصونا يعرفون أين المصعد الخدمي في أبراج Marina Gate وMarina Promenade وMarina Pinnacle، وكيفية المرور عبر الأمن، وأين نوقف السيارة بدون مخالفة. نحن ندفع ثمن الموقف – لا تكاليف مخفية.

ما نقوم به في دبي مارينا:
تنظيف الأرائك – نصل في يوم الاتصال، إذا اتصلتم قبل الظهر. أرائك زاوية، جلدية، مخملية – أي نوع.
تنظيف السجاد – فارسي، صوفي، صناعي. بدون انكماش أو بهتان.
غسيل ستائر وتنظيف ستائر معدنية – ننزلها، نغسلها (أو ننظفها جافًا)، ونعلقها مرة أخرى.
تنظيف عميق للشقق – من استوديو حتى 3 غرف نوم. نغسل النوافذ والثلاجة والفرن والقوائم.
تنظيف المراتب – نزيل عث الغبار وبقع العرق.
تنظيف التكييف – لتتحملوا حرارة دبي.

أمثلة الأسعار (شاملة الضريبة، بدون زيادة للمنطقة):
تنظيف عميق غرفة واحدة – 399 درهم
تنظيف أريكة (مقعدين) – 250 درهم
تنظيف سجادة 2×3 م – 180 درهم

لماذا يثق بنا سكان المارينا: لا نزيد السعر بسبب "المنطقة"، نعمل بحذر (لا نخدش الجدران في الممرات الضيقة)، وإذا حدث خطأ – نعيده مجانًا.`,
    },
  },

  'jlt': {
    slug: 'jlt',
    h1: {
      ru: 'Клининг в Jumeirah Lake Towers – чистота без головной боли',
      en: 'Cleaning in Jumeirah Lake Towers – Cleanliness Without Hassle',
      ar: 'تنظيف في جوميرا ليك تاورز – نظافة بلا عناء',
    },
    title: {
      ru: 'Уборка в JLT – химчистка диванов и ковров | iCleaning',
      en: 'Cleaning in JLT – Sofa & Carpet Cleaning | iCleaning',
      ar: 'تنظيف في JLT – تنظيف الأرائك والسجاد | iCleaning',
    },
    description: {
      ru: 'Химчистка мебели, ковров, генеральная уборка в JLT. Работаем во всех башнях (Almas, Goldcrest и др.). Приедем быстро.',
      en: 'Furniture, carpet cleaning, deep cleaning in JLT. We work in all towers (Almas, Goldcrest, etc.). Fast arrival.',
      ar: 'تنظيف الأثاث والسجاد، تنظيف عميق في JLT. نعمل في جميع الأبراج (الماس، غولدكريست وغيرها). وصول سريع.',
    },
    content: {
      ru: `JLT – это десятки башен, парки, озёра и вечная проблема с парковкой для клининга. Но мы знаем, как заехать в каждую. У нас есть пропуска в большинство жилых комплексов JLT – от Almas Tower до Goldcrest Views.

Жители JLT часто работают из дома или в офисах неподалёку. Им нужна уборка, которая не мешает. Мы работаем тихо, без громких пылесосов после 10 вечера, если нужно.

Что заказывают чаще всего в JLT:
Химчистка дивана – особенно угловые модели, которые сами не почистишь.
Чистка ковров – в JLT много квартир с коврами во всю комнату. Чистим на месте.
Генеральная уборка перед переездом – арендаторы съезжают, нужно вернуть квартиру как новую.
Мытье окон – панорамные окна в JLT грязные снаружи. Моем с телескопической штангой.
Чистка кондиционеров – от плесени и запаха.

Цены как везде – без наценки за JLT. Пример: уборка 2-комнатной квартиры – 549 AED. Диван – от 200 AED.

Совет: если у вас диван с пятном от кошачьей мочи – не пытайтесь отмыть сами. У нас есть энзимные средства, которые убирают запах навсегда.

Записаться можно через WhatsApp. Пришлите фото дивана или ковра – скажем точную цену за 5 минут.`,
      en: `JLT is dozens of towers, parks, lakes, and an eternal parking problem for cleaning crews. But we know how to get into each one. We have passes to most JLT residential complexes – from Almas Tower to Goldcrest Views.

JLT residents often work from home or in nearby offices. They need cleaning that doesn't disturb. We work quietly, without loud vacuums after 10 PM if needed.

Most popular orders in JLT:
Sofa cleaning – especially corner models that you can't clean yourself.
Carpet cleaning – many JLT apartments have wall-to-wall carpets. We clean on-site.
Deep cleaning before moving out – tenants leave, the apartment needs to look new.
Window washing – JLT panoramic windows are dirty outside. We use telescopic poles.
AC cleaning – against mold and odor.

Prices same as everywhere – no JLT surcharge. Example: 2-bedroom apartment cleaning – 549 AED. Sofa – from 200 AED.

Tip: if your sofa has a cat urine stain – don't try to clean it yourself. We have enzyme products that eliminate the odor permanently.

Book via WhatsApp. Send a photo of your sofa or carpet – we'll give you the exact price in 5 minutes.`,
      ar: `JLT هي عشرات الأبراج والحدائق والبحيرات ومشكلة الموقف الأبدية لفرق التنظيف. لكننا نعرف كيف ندخل كل واحدة. لدينا تصاريح لمعظم المجمعات السكنية في JLT – من برج الماس إلى غولدكريست فيوز.

سكان JLT غالبًا يعملون من المنزل أو في مكاتب قريبة. يحتاجون تنظيفًا لا يزعج. نعمل بهدوء، بدون مكانس عالية الصوت بعد العاشرة مساءً إذا لزم الأمر.

الطلبات الأكثر شعبية في JLT:
تنظيف الأرائك – خاصة الزاوية التي لا يمكنك تنظيفها بنفسك.
تنظيف السجاد – كثير من شقق JLT بها سجاد يغطي الغرفة كاملة. ننظف في المكان.
تنظيف عميق قبل الانتقال – المستأجرون يغادرون، والشقة يجب أن تبدو جديدة.
غسيل النوافذ – النوافذ البانورامية في JLT متسخة من الخارج. نغسل بعصا تلسكوبية.
تنظيف التكييف – ضد العفن والرائحة.

الأسعار كما في أي مكان – بدون زيادة لـ JLT. مثال: تنظيف شقة غرفتين – 549 درهم. أريكة – من 200 درهم.

نصيحة: إذا كانت أريكتكم ملطخة ببول القط – لا تحاولوا تنظيفها بأنفسكم. لدينا منتجات إنزيمية تزيل الرائحة نهائيًا.

احجزوا عبر واتساب. أرسلوا صورة الأريكة أو السجاد – نخبركم بالسعر الدقيق خلال 5 دقائق.`,
    },
  },

  'palm-jumeirah': {
    slug: 'palm-jumeirah',
    h1: {
      ru: 'Клининг на Palm Jumeirah – для вилл, пентхаусов и апартаментов',
      en: 'Cleaning on Palm Jumeirah – For Villas, Penthouses & Apartments',
      ar: 'تنظيف في نخلة جميرا – للفلل والبنتهاوس والشقق',
    },
    title: {
      ru: 'Уборка на Пальме Джумейра – химчистка вилл и квартир | iCleaning',
      en: 'Cleaning on Palm Jumeirah – Villa & Apartment Cleaning | iCleaning',
      ar: 'تنظيف في نخلة جميرا – تنظيف الفلل والشقق | iCleaning',
    },
    description: {
      ru: 'Химчистка диванов, ковров, генеральная уборка на Пальме Джумейра. Работаем во всех отелях и жилых комплексах. Цены фиксированные.',
      en: 'Sofa & carpet cleaning, deep cleaning on Palm Jumeirah. We work in all hotels and residential complexes. Fixed prices.',
      ar: 'تنظيف الأرائك والسجاد، تنظيف عميق في نخلة جميرا. نعمل في جميع الفنادق والمجمعات السكنية. أسعار ثابتة.',
    },
    content: {
      ru: `Пальма Джумейра – это особый мир. Виллы с бассейнами, пентхаусы с видом на море, апартаменты в отелях. Грязь здесь та же, что и везде: песок, пятна от кофе, детские следы, жир на кухне. Но убирать приходится чаще – гости приходят, дом большой.

Мы регулярно работаем на Пальме. Выезжаем в Shoreline, на листовые виллы (Frond A–G), в отели (Fairmont, FIVE, Anantara). У нас есть разрешение на въезд от службы безопасности Пальмы – без проблем.

Что мы делаем на Пальме:
Генеральная уборка вилл – от 999 AED. Моем всё: от полов до люстр.
Химчистка мягкой мебели – диваны, кресла, пуфы. Часто заказывают после вечеринок.
Чистка ковров ручной работы – персидские, афганские, индийские. Ручная стирка.
Мойка окон – панорамные стекла снаружи и внутри. Для двухэтажных вилл используем выдвижные штанги.
Чистка кондиционеров – обязательно перед летом.

Примеры работ: недавно чистили белый кожаный диван в пентхаусе Shoreline – пятна от красного вина ушли полностью. Цена – 350 AED.

Спецпредложение для владельцев вилл на Пальме: при заказе генеральной уборки + химчистки ковров – скидка 20%. Звоните.`,
      en: `Palm Jumeirah is a special world. Villas with pools, penthouses with sea views, hotel apartments. The dirt here is the same as everywhere: sand, coffee stains, children's marks, kitchen grease. But cleaning is needed more often – guests come, the house is big.

We regularly work on the Palm. We go to Shoreline, leaf villas (Frond A–G), hotels (Fairmont, FIVE, Anantara). We have entry permits from Palm security – no issues.

What we do on the Palm:
Villa deep cleaning – from 999 AED. We wash everything: from floors to chandeliers.
Upholstery cleaning – sofas, armchairs, poufs. Often ordered after parties.
Handmade carpet cleaning – Persian, Afghan, Indian. Hand washing.
Window cleaning – panoramic glass inside and outside. For two-story villas we use extendable poles.
AC cleaning – essential before summer.

Recent work: we cleaned a white leather sofa in a Shoreline penthouse – red wine stains completely gone. Price – 350 AED.

Special offer for Palm villa owners: order deep cleaning + carpet cleaning – 20% discount. Call us.`,
      ar: `نخلة جميرا عالم خاص. فلل بحمامات سباحة، بنتهاوس بإطلالة على البحر، شقق فندقية. الأوساخ هنا نفسها في كل مكان: الرمل، بقع القهوة، آثار الأطفال، الدهون في المطبخ. لكن التنظيف مطلوب أكثر – الضيوف يأتون، والمنزل كبير.

نعمل بانتظام في النخلة. ننتقل إلى شورلاين، فلل الأوراق (Frond A-G)، الفنادق (فيرمونت، فايف، أنانتارا). لدينا تصاريح دخول من أمن النخلة – بدون مشاكل.

ما نقوم به في النخلة:
تنظيف عميق للفلل – من 999 درهم. نغسل كل شيء: من الأرضيات إلى الثريات.
تنظيف الأثاث المنجد – أرائك، كراسي، بوف. يُطلب غالبًا بعد الحفلات.
تنظيف السجاد المصنوع يدويًا – فارسي، أفغاني، هندي. غسيل يدوي.
تنظيف النوافذ – زجاج بانورامي من الداخل والخارج. للفلل المكونة من طابقين نستخدم عصي قابلة للتمديد.
تنظيف التكييف – ضروري قبل الصيف.

عمل حديث: نظفنا أريكة جلدية بيضاء في بنتهاوس شورلاين – بقع النبيذ الأحمر ذهبت تمامًا. السعر – 350 درهم.

عرض خاص لأصحاب الفلل في النخلة: عند طلب تنظيف عميق + تنظيف السجاد – خصم 20%. اتصلوا.`,
    },
  },

  'downtown-dubai': {
    slug: 'downtown-dubai',
    h1: {
      ru: 'Клининг в Downtown Dubai – чистота рядом с Бурдж Халифа',
      en: 'Cleaning in Downtown Dubai – Cleanliness Near Burj Khalifa',
      ar: 'تنظيف في وسط دبي – نظافة بالقرب من برج خليفة',
    },
    title: {
      ru: 'Уборка в Даунтауне – Бурдж Халифа, Дубай Молл | iCleaning',
      en: 'Cleaning in Downtown – Burj Khalifa, Dubai Mall | iCleaning',
      ar: 'تنظيف في داون تاون – برج خليفة، دبي مول | iCleaning',
    },
    description: {
      ru: 'Химчистка диванов, ковров, генеральная уборка в Даунтауне. Работаем в Burj Vista, The Address, Boulevard Point. Приедем без задержек.',
      en: 'Sofa & carpet cleaning, deep cleaning in Downtown. We work in Burj Vista, The Address, Boulevard Point. No delays.',
      ar: 'تنظيف الأرائك والسجاد، تنظيف عميق في داون تاون. نعمل في برج فيستا، ذا أدريس، بوليفارد بوينت. بدون تأخير.',
    },
    content: {
      ru: `Downtown – сердце Дубая. Бурдж Халифа, Дубай Молл, фонтаны. Квартиры здесь дорогие, и чистота должна быть идеальной. Но строительная пыль от новых башен и толпы туристов оседают и у вас дома.

Мы знаем все башни в Downtown: Burj Vista, The Address Residences, Boulevard Point, Act One Act Two, многие другие. У нас есть контакты служб безопасности, чтобы не ждать по часу у лифта.

Что заказывают жители Downtown:
Срочная химчистка дивана – гости приехали через 2 часа, а диван в пятнах. Мы успеваем.
Генеральная уборка перед сдачей – для инвесторов, которые сдают квартиры посуточно.
Мытье окон – с высоких этажей. Работаем с альпинистским снаряжением для внешних стекол.
Чистка штор и жалюзи – от ресторанной кухни (в квартирах с видом на фонтан часто готовят дома).

Цены стандартные, без наценки за центр. Генеральная уборка студии – 299 AED. Диван – от 200 AED.

Важно: если вы живёте в Downtown и у вас кожаный диван – не используйте спиртовые салфетки. Кожа потрескается. Мы наносим защитный крем после чистки.

Записаться можно на сайте или по телефону. Приедем в удобное время, даже вечером.`,
      en: `Downtown is the heart of Dubai. Burj Khalifa, Dubai Mall, fountains. Apartments here are expensive, and cleanliness must be impeccable. But construction dust from new towers and tourist crowds settle in your home too.

We know all Downtown towers: Burj Vista, The Address Residences, Boulevard Point, Act One Act Two, and many more. We have security contacts so you don't wait an hour at the elevator.

What Downtown residents order:
Urgent sofa cleaning – guests arriving in 2 hours, sofa is stained. We make it in time.
Deep cleaning before renting out – for investors renting apartments on a daily basis.
Window washing – from high floors. We work with climbing equipment for exterior glass.
Curtain and blind cleaning – from restaurant kitchens (apartments with fountain views often cook at home).

Prices are standard, no surcharge for the center. Deep cleaning studio – 299 AED. Sofa – from 200 AED.

Important: if you live in Downtown and have a leather sofa – don't use alcohol wipes. The leather will crack. We apply protective cream after cleaning.

Book on our website or by phone. We'll come at your convenience, even in the evening.`,
      ar: `داون تاون هو قلب دبي. برج خليفة، دبي مول، النوافير. الشقق هنا غالية، والنظافة يجب أن تكون مثالية. لكن غبار البناء من الأبراج الجديدة وحشود السياح يستقرون في منزلكم أيضًا.

نعرف جميع أبراج داون تاون: برج فيستا، ذا أدريس ريزيدنسز، بوليفارد بوينت، أكت وان أكت تو، والعديد غيرها. لدينا جهات اتصال أمنية حتى لا تنتظروا ساعة عند المصعد.

ما يطلبه سكان داون تاون:
تنظيف أريكة عاجل – الضيوف يصلون خلال ساعتين، والأريكة ملطخة. نلحق بالوقت.
تنظيف عميق قبل التأجير – للمستثمرين الذين يؤجرون الشقق يوميًا.
غسيل النوافذ – من الطوابق العالية. نعمل بمعدات التسلق للزجاج الخارجي.
تنظيف الستائر والجاليات – من مطابخ المطاعم (الشقق المطلة على النافورة غالبًا يطبخون فيها).

الأسعار قياسية، بدون زيادة للمركز. تنظيف عميق استوديو – 299 درهم. أريكة – من 200 درهم.

مهم: إذا كنتم تعيشون في داون تاون ولديكم أريكة جلدية – لا تستخدموا مناديل كحولية. الجلد سيتشقق. نحن نضع كريم حماية بعد التنظيف.`,
    },
  },

  'al-barsha': {
    slug: 'al-barsha',
    h1: {
      ru: 'Клининг в Al Barsha – недорого и качественно',
      en: 'Cleaning in Al Barsha – Affordable & Quality',
      ar: 'تنظيف في البرشاء – بأسعار معقولة وجودة عالية',
    },
    title: {
      ru: 'Уборка в Аль Барша – химчистка мебели и ковров | iCleaning',
      en: 'Cleaning in Al Barsha – Furniture & Carpet Cleaning | iCleaning',
      ar: 'تنظيف في البرشاء – تنظيف الأثاث والسجاد | iCleaning',
    },
    description: {
      ru: 'Химчистка диванов, ковров, генеральная уборка в Аль Барша (включая Al Barsha 1-3, Barsha Heights). Приедем быстро, цены от 30 AED/кв.м.',
      en: 'Sofa & carpet cleaning, deep cleaning in Al Barsha (incl. Al Barsha 1-3, Barsha Heights). Fast arrival, prices from 30 AED/sq.m.',
      ar: 'تنظيف الأرائك والسجاد، تنظيف عميق في البرشاء (شامل البرشاء 1-3، برشاء هايتس). وصول سريع، الأسعار من 30 درهم/متر مربع.',
    },
    content: {
      ru: `Al Barsha – большой жилой район с виллами и квартирами. Здесь живут семьи, есть школы, торговые центры (Mall of the Emirates рядом). У многих есть дети и домашние животные – а значит, диваны и ковры пачкаются часто.

Мы работаем во всех секторах Al Barsha: 1, 2, 3, а также в Barsha Heights (TECOM). Выезжаем в тот же день.

Самые популярные услуги в Al Barsha:
Химчистка дивана от детских пятен – соки, фломастеры, пластилин. Выводим всё.
Чистка ковров – особенно больших (3×4 м и больше). Чистим на месте, не скручивая.
Генеральная уборка вилл – в Al Barsha много таунхаусов и вилл с маленькими двориками. Убираем и снаружи, если нужно.
Стирка штор – от кухонного жира (у многих кухня совмещена с гостиной).

Пример цен: чистка ковра 2×2 м – 120 AED. Химчистка углового дивана – 450 AED. Генеральная уборка 2-комнатной квартиры – 549 AED.

Почему нас выбирают в Al Barsha: у нас есть опыт работы с большими семьями – мы знаем, что нужно убрать под кроватями и в шкафах. И мы не оставляем разводов на зеркалах.

Записаться можно по телефону или через форму. Для жителей Al Barsha – скидка 10% на первую уборку.`,
      en: `Al Barsha is a large residential area with villas and apartments. Families live here, there are schools, shopping centers (Mall of the Emirates nearby). Many have children and pets – which means sofas and carpets get dirty often.

We work in all Al Barsha sectors: 1, 2, 3, and Barsha Heights (TECOM). Same-day service.

Most popular services in Al Barsha:
Sofa cleaning from children's stains – juices, markers, playdough. We remove everything.
Carpet cleaning – especially large ones (3×4 m and bigger). We clean on-site, no rolling.
Villa deep cleaning – Al Barsha has many townhouses and villas with small yards. We clean outside too if needed.
Curtain washing – from kitchen grease (many have open-plan kitchen-living rooms).

Price examples: carpet 2×2 m – 120 AED. Corner sofa cleaning – 450 AED. Deep cleaning 2-bedroom apartment – 549 AED.

Why Al Barsha residents choose us: we have experience with large families – we know to clean under beds and inside closets. And we leave no streaks on mirrors.

Book by phone or through our form. Al Barsha residents – 10% off first cleaning.`,
      ar: `البرشاء منطقة سكنية كبيرة بها فلل وشقق. تعيش هنا عائلات، وهناك مدارس ومراكز تسوق (مول الإمارات قريب). الكثيرون لديهم أطفال وحيوانات أليفة – مما يعني أن الأرائك والسجاد تتسخ كثيرًا.

نعمل في جميع قطاعات البرشاء: 1، 2، 3، وأيضًا برشاء هايتس (تيكوم). خدمة في نفس اليوم.

أكثر الخدمات طلبًا في البرشاء:
تنظيف الأرائك من بقع الأطفال – العصائر والأقلام والصلصال. نزيل كل شيء.
تنظيف السجاد – خاصة الكبير (3×4 م وأكبر). ننظف في المكان، بدون لف.
تنظيف عميق للفلل – في البرشاء كثير من التاون هاوس والفلل بساحات صغيرة. ننظف الخارج أيضًا إذا لزم.
غسيل الستائر – من دهون المطبخ (كثيرون لديهم مطبخ مفتوح على الصالون).

أمثلة الأسعار: سجادة 2×2 م – 120 درهم. تنظيف أريكة زاوية – 450 درهم. تنظيف عميق شقة غرفتين – 549 درهم.

لماذا يختارنا سكان البرشاء: لدينا خبرة مع العائلات الكبيرة – نعرف أن ننظف تحت الأسرة وداخل الخزائن. ولا نترك خطوطًا على المرايا.`,
    },
  },

  'deira': {
    slug: 'deira',
    h1: {
      ru: 'Клининг в Deira – старая часть Дубая, современный подход',
      en: 'Cleaning in Deira – Old Dubai, Modern Approach',
      ar: 'تنظيف في ديرة – دبي القديمة، نهج حديث',
    },
    title: {
      ru: 'Уборка в Дейре – химчистка диванов и ковров | iCleaning',
      en: 'Cleaning in Deira – Sofa & Carpet Cleaning | iCleaning',
      ar: 'تنظيف في ديرة – تنظيف الأرائك والسجاد | iCleaning',
    },
    description: {
      ru: 'Химчистка мебели, ковров, уборка квартир в Дейре. Работаем во всех районах: Port Saeed, Al Rigga, Naif. Низкие цены.',
      en: 'Furniture, carpet cleaning, apartment cleaning in Deira. We work in all areas: Port Saeed, Al Rigga, Naif. Low prices.',
      ar: 'تنظيف الأثاث والسجاد، تنظيف الشقق في ديرة. نعمل في جميع المناطق: بورسعيد، الرقة، نايف. أسعار منخفضة.',
    },
    content: {
      ru: `Deira – один из самых старых и плотно заселенных районов Дубая. Здесь много небольших квартир, магазинов, офисов. Пробки, узкие улицы, но нам не привыкать.

Мы работаем в Дейре много лет. Знаем, как заехать к дому на Al Rigga, как договориться с охраной в Port Saeed, где оставить машину в Naif. Никаких проблем.

Что чаще всего заказывают в Дейре:
Химчистка диванов – в маленьких квартирах диван – главное место отдыха. Он быстро пачкается.
Чистка ковров – многие держат ковры на полу, потому что плитка холодная. Чистим недорого.
Уборка после арендаторов – в Дейре много съёмного жилья, нужно быстро привести квартиру в порядок.
Чистка кондиционеров – из-за близости к морю и старых зданий, кондиционеры часто покрываются плесенью.

Цены в Дейре ниже, чем в центре, потому что мы экономим на дороге (у нас есть база рядом). Генеральная уборка 1-комнатной – 349 AED. Диван – от 180 AED.

Акция для жителей Дейры: при заказе чистки двух диванов – третий в подарок (на одинаковых условиях).

Звоните – мы приедем даже в пятницу утром. Многие в Дейре работают в торговле, выходной только в пятницу, мы это учитываем.`,
      en: `Deira is one of the oldest and most densely populated areas of Dubai. Lots of small apartments, shops, offices. Traffic jams, narrow streets, but we're used to it.

We've been working in Deira for years. We know how to get to buildings on Al Rigga, how to deal with security in Port Saeed, where to park in Naif. No problems.

Most popular orders in Deira:
Sofa cleaning – in small apartments, the sofa is the main resting place. It gets dirty quickly.
Carpet cleaning – many keep carpets on the floor because tiles are cold. We clean affordably.
Cleaning after tenants – Deira has lots of rental housing, apartments need to be quickly restored.
AC cleaning – due to proximity to the sea and old buildings, ACs often get moldy.

Prices in Deira are lower than downtown because we save on transportation (we have a base nearby). Deep cleaning 1-bedroom – 349 AED. Sofa – from 180 AED.

Promotion for Deira residents: order cleaning of two sofas – third one free (same conditions).

Call us – we'll come even on Friday morning. Many in Deira work in trade, Friday is the only day off, we account for that.`,
      ar: `ديرة واحدة من أقدم وأكثف مناطق دبي سكانيًا. الكثير من الشقق الصغيرة والمحلات والمكاتب. ازدحام مروري، شوارع ضيقة، لكننا معتادون.

نعمل في ديرة منذ سنوات. نعرف كيف نصل للمباني في الرقة، وكيف نتعامل مع الأمن في بورسعيد، وأين نوقف السيارة في نايف. بدون مشاكل.

أكثر الطلبات شعبية في ديرة:
تنظيف الأرائك – في الشقق الصغيرة، الأريكة هي مكان الراحة الرئيسي. تتسخ بسرعة.
تنظيف السجاد – كثيرون يضعون السجاد على الأرض لأن البلاط بارد. ننظف بأسعار معقولة.
التنظيف بعد المستأجرين – ديرة بها كثير من الإيجارات، والشقق تحتاج لاستعادة سريعة.
تنظيف التكييف – بسبب قرب البحر والمباني القديمة، التكييفات غالبًا تصاب بالعفن.

الأسعار في ديرة أقل من الوسط لأننا نوفر في المواصلات (لدينا قاعدة قريبة). تنظيف عميق غرفة واحدة – 349 درهم. أريكة – من 180 درهم.

عرض لسكان ديرة: عند طلب تنظيف أريكتين – الثالثة مجانًا (بنفس الشروط).`,
    },
  },

  'bur-dubai': {
    slug: 'bur-dubai',
    h1: {
      ru: 'Клининг в Bur Dubai – для квартир, вилл и офисов',
      en: 'Cleaning in Bur Dubai – For Apartments, Villas & Offices',
      ar: 'تنظيف في بر دبي – للشقق والفلل والمكاتب',
    },
    title: {
      ru: 'Уборка в Бур Дубай – химчистка и клининг | iCleaning',
      en: 'Cleaning in Bur Dubai – Dry Cleaning & Housekeeping | iCleaning',
      ar: 'تنظيف في بر دبي – تنظيف جاف وتدبير منزلي | iCleaning',
    },
    description: {
      ru: 'Химчистка диванов, ковров, генеральная уборка в Бур Дубай. Работаем в Al Fahidi, Al Mankhool, Oud Metha. Низкие цены.',
      en: 'Sofa & carpet cleaning, deep cleaning in Bur Dubai. We work in Al Fahidi, Al Mankhool, Oud Metha. Low prices.',
      ar: 'تنظيف الأرائك والسجاد، تنظيف عميق في بر دبي. نعمل في الفهيدي والمنخول وعود ميثاء. أسعار منخفضة.',
    },
    content: {
      ru: `Bur Dubai – исторический центр, но здесь тоже живут люди, и у них пачкаются диваны. Много старых зданий с узкими лифтами, много магазинов на первых этажах, вечная борьба за парковку. Наши мастера знают все хитрости.

Мы работаем во всех частях Bur Dubai: Al Fahidi, Al Mankhool, Oud Metha, Al Karama, а также в районах около Dubai Creek.

Частые заказы в Бур Дубай:
Химчистка дивана – особенно старых диванов, которые ни разу не чистили. После нас они становятся светлее на 2 тона.
Чистка ковров – выезжаем даже в маленькие студии, где ковёр почти на всю комнату.
Генеральная уборка – перед Рамаданом или праздниками. Много семейных домов.
Стирка штор – в старых зданиях шторы впитывают запах готовки и сигарет.

Примеры цен: чистка дивана-книжки – 200 AED. Генеральная уборка 2-комнатной – 499 AED. Чистка ковра 1,5×2 м – 90 AED.

Наш секрет: мы используем профессиональную химию, которая не оставляет резкого запаха. Это важно в Бур Дубай, где квартиры маленькие и проветривать не всегда удобно.

Записаться можно по телефону. Для пенсионеров и многодетных семей – скидка 15%. Спросите при заказе.`,
      en: `Bur Dubai is the historic center, but people live here too, and their sofas get dirty. Lots of old buildings with narrow elevators, shops on ground floors, eternal parking battles. Our specialists know all the tricks.

We work in all parts of Bur Dubai: Al Fahidi, Al Mankhool, Oud Metha, Al Karama, and areas near Dubai Creek.

Common orders in Bur Dubai:
Sofa cleaning – especially old sofas never cleaned before. After us, they become 2 shades lighter.
Carpet cleaning – we come even to small studios where the carpet covers almost the entire room.
Deep cleaning – before Ramadan or holidays. Many family homes.
Curtain washing – in old buildings, curtains absorb cooking and cigarette smells.

Price examples: sofa bed cleaning – 200 AED. Deep cleaning 2-bedroom – 499 AED. Carpet 1.5×2 m – 90 AED.

Our secret: we use professional chemicals that don't leave a strong odor. This is important in Bur Dubai, where apartments are small and ventilation isn't always easy.

Book by phone. For seniors and large families – 15% discount. Ask when ordering.`,
      ar: `بر دبي المركز التاريخي، لكن الناس يعيشون هنا أيضًا، وأرائكهم تتسخ. كثير من المباني القديمة بمصاعد ضيقة، ومحلات في الطوابق الأرضية، وصراع أبدي على الموقف. متخصصونا يعرفون كل الحيل.

نعمل في جميع أجزاء بر دبي: الفهيدي، المنخول، عود ميثاء، الكرامة، ومناطق قرب خور دبي.

الطلبات الشائعة في بر دبي:
تنظيف الأرائك – خاصة القديمة التي لم تُنظف أبدًا. بعدنا تصبح أفتح بدرجتين.
تنظيف السجاد – نأتي حتى للاستوديوهات الصغيرة حيث السجاد يغطي الغرفة كلها.
تنظيف عميق – قبل رمضان أو الأعياد. كثير من المنازل العائلية.
غسيل الستائر – في المباني القديمة، الستائر تمتص رائحة الطبخ والسجائر.

أمثلة الأسعار: تنظيف أريكة سرير – 200 درهم. تنظيف عميق شقة غرفتين – 499 درهم. سجادة 1.5×2 م – 90 درهم.

سرنا: نستخدم كيمياء احترافية لا تترك رائحة قوية. هذا مهم في بر دبي، حيث الشقق صغيرة والتهوية ليست دائمًا سهلة.`,
    },
  },

  'international-city': {
    slug: 'international-city',
    h1: {
      ru: 'Клининг в International City – чистота для кластеров (France, England, China и др.)',
      en: 'Cleaning in International City – For All Clusters (France, England, China & More)',
      ar: 'تنظيف في المدينة العالمية – لجميع المجموعات (فرنسا، إنجلترا، الصين وغيرها)',
    },
    title: {
      ru: 'Уборка в International City – недорогая химчистка | iCleaning',
      en: 'Cleaning in International City – Affordable Cleaning | iCleaning',
      ar: 'تنظيف في المدينة العالمية – تنظيف بأسعار معقولة | iCleaning',
    },
    description: {
      ru: 'Химчистка диванов, ковров, уборка квартир в International City. Работаем во всех кластерах. Низкие цены, выезд в день заказа.',
      en: 'Sofa & carpet cleaning, apartment cleaning in International City. All clusters. Low prices, same-day service.',
      ar: 'تنظيف الأرائك والسجاد، تنظيف الشقق في المدينة العالمية. جميع المجموعات. أسعار منخفضة، خدمة في نفس اليوم.',
    },
    content: {
      ru: `International City – район недорогого жилья, популярный среди семей и холостяков. Квартиры здесь небольшие, но диваны и ковры пачкаются так же, как везде. А бюджет часто ограничен.

Мы знаем International City как свои пять пальцев. Работаем во всех кластерах: France, England, China, Russia, Spain, Italy, Greece и других.

Что мы предлагаем для International City:
Дешёвая химчистка диванов – от 180 AED за двухместный. Качество не страдает.
Чистка ковров – часто заказывают ковры 2×3 м, цена от 150 AED.
Генеральная уборка – для квартир 1-2 комнаты. Уберём даже на кухне за плитой.
Чистка матрасов – в International City много съёмных квартир, матрасы старые и грязные. После нашей чистки – как новые.

Почему у нас низкие цены для International City? Потому что мы выезжаем туда несколько раз в день, объединяем заказы, экономим на логистике. Экономию передаём вам.

Пример: генеральная уборка 1-комнатной – 299 AED. Химчистка углового дивана – 350 AED. Чистка ковра 2×3 м – 180 AED.

Записаться можно через WhatsApp. Пришлите фото того, что нужно почистить, – мы скажем точную цену за минуту.`,
      en: `International City is an affordable housing district, popular among families and singles. Apartments are small, but sofas and carpets get just as dirty as everywhere. And budgets are often limited.

We know International City inside out. We work in all clusters: France, England, China, Russia, Spain, Italy, Greece, and others.

What we offer for International City:
Affordable sofa cleaning – from 180 AED for a two-seater. Quality doesn't suffer.
Carpet cleaning – 2×3 m carpets commonly ordered, price from 150 AED.
Deep cleaning – for 1-2 bedroom apartments. We clean even behind the stove.
Mattress cleaning – International City has many rental apartments with old dirty mattresses. After our cleaning – like new.

Why our prices are low for International City? Because we go there multiple times daily, combine orders, save on logistics. We pass savings to you.

Example: deep cleaning 1-bedroom – 299 AED. Corner sofa cleaning – 350 AED. Carpet 2×3 m – 180 AED.

Book via WhatsApp. Send a photo of what needs cleaning – we'll tell you the exact price in a minute.`,
      ar: `المدينة العالمية منطقة سكن اقتصادي، شعبية بين العائلات والعزاب. الشقق صغيرة، لكن الأرائك والسجاد تتسخ كما في أي مكان. والميزانيات غالبًا محدودة.

نعرف المدينة العالمية كفنا. نعمل في جميع المجموعات: فرنسا، إنجلترا، الصين، روسيا، إسبانيا، إيطاليا، اليونان وغيرها.

ما نقدمه للمدينة العالمية:
تنظيف أرائك اقتصادي – من 180 درهم لأريكة بمقعدين. الجودة لا تتأثر.
تنظيف السجاد – غالبًا يُطلب سجاد 2×3 م، السعر من 150 درهم.
تنظيف عميق – لشقق غرفة أو غرفتين. ننظف حتى خلف الموقد.
تنظيف المراتب – المدينة العالمية بها كثير من الشقق المؤجرة بمراتب قديمة ومتسخة. بعد تنظيفنا – كالجديدة.

لماذا أسعارنا منخفضة للمدينة العالمية؟ لأننا نذهب هناك عدة مرات يوميًا، نجمع الطلبات، نوفر في النقل. ننقل التوفير لكم.

مثال: تنظيف عميق غرفة واحدة – 299 درهم. تنظيف أريكة زاوية – 350 درهم. سجادة 2×3 م – 180 درهم.`,
    },
  },

  'jumeirah': {
    slug: 'jumeirah',
    h1: {
      ru: 'Клининг в Jumeirah – бережная чистка для дорогой мебели',
      en: 'Cleaning in Jumeirah – Gentle Care for Premium Furniture',
      ar: 'تنظيف في جميرا – عناية لطيفة بالأثاث الفاخر',
    },
    title: {
      ru: 'Уборка в Джумейре – химчистка для вилл и квартир | iCleaning',
      en: 'Cleaning in Jumeirah – Villa & Apartment Cleaning | iCleaning',
      ar: 'تنظيف في جميرا – تنظيف الفلل والشقق | iCleaning',
    },
    description: {
      ru: 'Химчистка диванов, ковров, генеральная уборка в Джумейре (1, 2, 3, Beach Road, Umm Suqeim). Работаем с дизайнерской мебелью.',
      en: 'Sofa & carpet cleaning, deep cleaning in Jumeirah (1, 2, 3, Beach Road, Umm Suqeim). We work with designer furniture.',
      ar: 'تنظيف الأرائك والسجاد، تنظيف عميق في جميرا (1، 2، 3، بيتش رود، أم سقيم). نعمل مع الأثاث المصمم.',
    },
    content: {
      ru: `Jumeirah – район престижных вилл и дорогих квартир у моря. Мебель здесь часто дизайнерская: итальянские кожаные диваны, шёлковые ковры, шторы ручной работы. Обычная химчистка может испортить такие вещи.

Мы работаем в Jumeirah 1, 2, 3, на Beach Road, в Umm Suqeim, и даже в Al Wasl. У нас есть опыт с дорогими материалами.

Что мы делаем в Джумейре:
Химчистка кожаных диванов – с восстановлением цвета и пропиткой от влаги.
Чистка шёлковых ковров – только сухая чистка, никакой воды.
Стирка штор из блэкаута и велюра – химчистка, чтобы не сели.
Генеральная уборка вилл – убираем даже за шкафами и под кроватями.
Чистка матрасов – для вилл с гостевой спальней.

Цены чуть выше средних из-за деликатности работы, но вы платите за сохранность вещей. Пример: кожаный диван – от 350 AED, шёлковый ковёр (2×3 м) – от 400 AED.

Кейс: недавно чистили белый замшевый диван в Jumeirah Islands. Хозяйка боялась, что мы испортим. Результат – пятна ушли, ворс не пожелтел. Диван как новый.

Заказать можно с выездом мастера для оценки. Мы приедем, посмотрим, дадим цену и сроки. Без обязательств.`,
      en: `Jumeirah is a district of prestigious villas and expensive seaside apartments. Furniture here is often designer: Italian leather sofas, silk carpets, handmade curtains. Regular cleaning can ruin such items.

We work in Jumeirah 1, 2, 3, on Beach Road, in Umm Suqeim, and even Al Wasl. We have experience with premium materials.

What we do in Jumeirah:
Leather sofa cleaning – with color restoration and moisture protection.
Silk carpet cleaning – dry cleaning only, no water.
Blackout and velour curtain washing – dry cleaning to prevent shrinkage.
Villa deep cleaning – we clean behind closets and under beds.
Mattress cleaning – for villas with guest bedrooms.

Prices are slightly above average due to the delicacy of the work, but you pay for the preservation of your belongings. Example: leather sofa – from 350 AED, silk carpet (2×3 m) – from 400 AED.

Case: we recently cleaned a white suede sofa in Jumeirah Islands. The owner was afraid we'd ruin it. Result – stains gone, pile didn't yellow. Sofa like new.

Order with a specialist visit for assessment. We'll come, look, give you a price and timeline. No obligations.`,
      ar: `جميرا منطقة الفلل الفاخرة والشقق الغالية على البحر. الأثاث هنا غالبًا مصمم: أرائك جلدية إيطالية، سجاد حريري، ستائر مصنوعة يدويًا. التنظيف العادي يمكن أن يتلف مثل هذه الأشياء.

نعمل في جميرا 1، 2، 3، على بيتش رود، في أم سقيم، وحتى الوصل. لدينا خبرة مع المواد الفاخرة.

ما نقوم به في جميرا:
تنظيف الأرائك الجلدية – مع استعادة اللون وحماية من الرطوبة.
تنظيف السجاد الحريري – تنظيف جاف فقط، بدون ماء.
غسيل ستائر البلاك آوت والمخمل – تنظيف جاف لمنع الانكماش.
تنظيف عميق للفلل – ننظف خلف الخزائن وتحت الأسرة.
تنظيف المراتب – للفلل مع غرف نوم للضيوف.

الأسعار أعلى قليلاً من المتوسط بسبب دقة العمل، لكنكم تدفعون مقابل الحفاظ على ممتلكاتكم. مثال: أريكة جلدية – من 350 درهم، سجاد حريري (2×3 م) – من 400 درهم.

حالة: نظفنا مؤخرًا أريكة شمواه بيضاء في جزر جميرا. الصاحبة كانت خائفة أن نتلفها. النتيجة – البقع ذهبت، الوبر لم يصفر. الأريكة كالجديدة.`,
    },
  },

  'abu-dhabi': {
    slug: 'abu-dhabi',
    h1: {
      ru: 'Клининг в Абу-Даби – приедем из Дубая, но недорого',
      en: 'Cleaning in Abu Dhabi – Coming from Dubai, Still Affordable',
      ar: 'تنظيف في أبوظبي – نأتي من دبي، وما زال بأسعار معقولة',
    },
    title: {
      ru: 'Уборка в Абу-Даби – химчистка с выездом из Дубая | iCleaning',
      en: 'Cleaning in Abu Dhabi – Service from Dubai | iCleaning',
      ar: 'تنظيف في أبوظبي – خدمة من دبي | iCleaning',
    },
    description: {
      ru: 'Химчистка диванов, ковров, уборка в Абу-Даби. Работаем в городе и на острове Саадият. Выезд в тот же день или на следующий.',
      en: 'Sofa & carpet cleaning in Abu Dhabi. We work in the city and on Saadiyat Island. Same-day or next-day service.',
      ar: 'تنظيف الأرائك والسجاد في أبوظبي. نعمل في المدينة وجزيرة السعديات. خدمة في نفس اليوم أو اليوم التالي.',
    },
    content: {
      ru: `Абу-Даби – столица. Мы работаем там, но не каждый день, потому что дорога занимает час-полтора. Однако вы можете заказать нас, если готовы подождать день или два. Или заплатить за срочный выезд (доплата 150 AED).

Где именно мы работаем в Абу-Даби: Al Reem Island, Al Raha Beach, Yas Island, Saadiyat Island, Corniche, Khalifa City, Mohammed Bin Zayed City, а также в центре (Al Danah, Al Markaziyah).

Что заказывают чаще всего:
Генеральная уборка квартир и вилл – особенно перед приездом гостей из-за границы.
Химчистка диванов – часто диваны стоят в гостиных с панорамными окнами, выцветают на солнце. Мы чистим и тонируем.
Чистка ковров – большие ковры во дворцах и виллах. Чистим на месте.
Мытье окон – в высотках на Reem Island.

Цены как в Дубае, плюс 150 AED за дорогу, если заказ только один. Если вы собираете группу соседей (2-3 квартиры), дорога бесплатно.

Пример: генеральная уборка 2-комнатной в Al Reem – 549 AED + 150 AED дорога = 699 AED. Дёшево для Абу-Даби.

Совет: если вам нужно почистить диван и ковры в Абу-Даби, лучше заказать всё вместе – мы сделаем скидку на выезд.

Записаться лучше за 2-3 дня. В пятницу мы не выезжаем в Абу-Даби (пробки).`,
      en: `Abu Dhabi is the capital. We work there, but not every day, as the drive takes 1-1.5 hours. However, you can order if you're willing to wait a day or two. Or pay for urgent service (surcharge 150 AED).

Where we work in Abu Dhabi: Al Reem Island, Al Raha Beach, Yas Island, Saadiyat Island, Corniche, Khalifa City, Mohammed Bin Zayed City, and downtown (Al Danah, Al Markaziyah).

Most popular orders:
Deep cleaning of apartments and villas – especially before guests arriving from abroad.
Sofa cleaning – sofas in living rooms with panoramic windows often fade in the sun. We clean and tone.
Carpet cleaning – large carpets in palaces and villas. On-site cleaning.
Window washing – in high-rises on Reem Island.

Prices same as Dubai, plus 150 AED for travel if only one order. If you gather a group of neighbors (2-3 apartments), travel is free.

Example: deep cleaning 2-bedroom in Al Reem – 549 AED + 150 AED travel = 699 AED. Cheap for Abu Dhabi.

Tip: if you need sofa and carpet cleaning in Abu Dhabi, better order everything together – we'll discount the trip.

Book 2-3 days ahead. We don't go to Abu Dhabi on Fridays (traffic).`,
      ar: `أبوظبي العاصمة. نعمل هناك، لكن ليس كل يوم، لأن الطريق يستغرق ساعة ونصف. لكن يمكنكم الطلب إذا كنتم مستعدين لانتظار يوم أو يومين. أو دفع رسوم عاجلة (150 درهم إضافية).

أين نعمل في أبوظبي: جزيرة الريم، شاطئ الراحة، جزيرة ياس، جزيرة السعديات، الكورنيش، مدينة خليفة، مدينة محمد بن زايد، ووسط المدينة (الدانة، المركزية).

أكثر الطلبات شعبية:
تنظيف عميق للشقق والفلل – خاصة قبل وصول الضيوف من الخارج.
تنظيف الأرائك – غالبًا أرائك في صالات بنوافذ بانورامية تبهت تحت الشمس. ننظف ونلون.
تنظيف السجاد – سجاد كبير في القصور والفلل. تنظيف في المكان.
غسيل النوافذ – في ناطحات جزيرة الريم.

الأسعار كما في دبي، زائد 150 درهم للطريق إذا طلب واحد فقط. إذا جمعتم مجموعة جيران (2-3 شقق)، الطريق مجاني.

مثال: تنظيف عميق غرفتين في الريم – 549 درهم + 150 درهم طريق = 699 درهم. رخيص لأبوظبي.`,
    },
  },

  'sharjah': {
    slug: 'sharjah',
    h1: {
      ru: 'Клининг в Шардже – приедем, несмотря на пробки',
      en: 'Cleaning in Sharjah – We Come Despite the Traffic',
      ar: 'تنظيف في الشارقة – نأتي رغم الازدحام',
    },
    title: {
      ru: 'Уборка в Шардже – химчистка с выездом из Дубая | iCleaning',
      en: 'Cleaning in Sharjah – Service from Dubai | iCleaning',
      ar: 'تنظيف في الشارقة – خدمة من دبي | iCleaning',
    },
    description: {
      ru: 'Химчистка диванов, ковров, уборка в Шардже (Al Nahda, Al Qasimia, Al Majaz, Muwaileh). Работаем по предварительной записи.',
      en: 'Sofa & carpet cleaning in Sharjah (Al Nahda, Al Qasimia, Al Majaz, Muwaileh). By appointment.',
      ar: 'تنظيف الأرائك والسجاد في الشارقة (النهدة، القاسمية، المجاز، مويلح). بموعد مسبق.',
    },
    content: {
      ru: `Шарджа – соседний эмират. Мы выезжаем туда, но с учётом пробок на шоссе 311. Дорога может занять 40 минут до часа. Поэтому мы берем доплату за выезд в Шарджу – 100 AED, если заказ один. Если два заказа в один день в разных районах – доплата одна.

Где мы работаем в Шардже: Al Nahda (на границе с Дубаем), Al Qasimia, Al Majaz, Al Khan, Corniche, Al Taawun, Muwaileh (студенческий городок), University City.

Частые услуги в Шардже:
Химчистка диванов – в Шардже много семей с детьми, диваны пачкаются часто. Недорого – от 200 AED.
Чистка ковров – популярны ковры больших размеров. Цена от 30 AED/кв.м.
Генеральная уборка квартир – перед праздниками или после болезни.
Стирка штор – в домах у дороги шторы быстро покрываются пылью.

Важно: мы не работаем в Шардже по пятницам. Также мы не можем приехать в тот же день, если вы позвонили после обеда – из-за пробок.

Пример цен с учётом выезда: чистка дивана (2-местный) – 250 AED + 100 AED дорога = 350 AED. Генеральная уборка 1-комнатной – 399 AED + 100 AED = 499 AED.

Экономьте: закажите чистку дивана + ковра + двух кресел – мы сделаем скидку 15% и можем убрать плату за выезд.

Записаться лучше за день. Мы свяжемся с вами и подберем удобное время для выезда в Шарджу.`,
      en: `Sharjah is a neighboring emirate. We go there, but accounting for traffic on Highway 311. The drive can take 40 minutes to an hour. That's why we charge a surcharge for Sharjah service – 100 AED if it's a single order. Two orders on the same day in different areas – one surcharge.

Where we work in Sharjah: Al Nahda (on the Dubai border), Al Qasimia, Al Majaz, Al Khan, Corniche, Al Taawun, Muwaileh (student town), University City.

Common services in Sharjah:
Sofa cleaning – Sharjah has many families with children, sofas get dirty often. Affordable – from 200 AED.
Carpet cleaning – large carpets are popular. Price from 30 AED/sq.m.
Deep apartment cleaning – before holidays or after illness.
Curtain washing – in houses near roads, curtains get dusty quickly.

Important: we don't work in Sharjah on Fridays. Also, we can't come the same day if you call after noon – due to traffic.

Price examples including travel: sofa (2-seater) – 250 AED + 100 AED travel = 350 AED. Deep cleaning 1-bedroom – 399 AED + 100 AED = 499 AED.

Save: order sofa + carpet + two armchairs – we give 15% discount and may waive the travel fee.

Book a day ahead. We'll contact you and find a convenient time for Sharjah visit.`,
      ar: `الشارقة إمارة مجاورة. نذهب إلى هناك، مع مراعاة الازدحام على الطريق 311. قد يستغرق الطريق 40 دقيقة إلى ساعة. لذلك نفرض رسومًا إضافية للشارقة – 100 درهم إذا كان طلبًا واحدًا. طلبان في نفس اليوم في مناطق مختلفة – رسوم إضافية واحدة.

أين نعمل في الشارقة: النهدة (على حدود دبي)، القاسمية، المجاز، الخان، الكورنيش، التعاون، مويلح (المدينة الجامعية)، المدينة الجامعية.

الخدمات الشائعة في الشارقة:
تنظيف الأرائك – الشارقة بها كثير من العائلات مع أطفال، الأرائك تتسخ كثيرًا. بأسعار معقولة – من 200 درهم.
تنظيف السجاد – السجاد الكبير شائع. السعر من 30 درهم/متر مربع.
تنظيف عميق للشقق – قبل الأعياد أو بعد المرض.
غسيل الستائر – في المنازل القريبة من الطرق، الستائر تتسخ بسرعة.

مهم: لا نعمل في الشارقة أيام الجمعة. أيضًا لا يمكننا الحضور في نفس اليوم إذا اتصلتم بعد الظهر – بسبب الازدحام.

أمثلة الأسعار شاملة الطريق: أريكة (مقعدين) – 250 درهم + 100 درهم طريق = 350 درهم. تنظيف عميق غرفة واحدة – 399 درهم + 100 درهم = 499 درهم.

وفروا: اطلبوا أريكة + سجادة + كرسيين – نعطي خصم 15% وقد نلغي رسوم الطريق.`,
    },
  },
};

export function getAllLocationSlugs(): string[] {
  return Object.keys(locationsData);
}
