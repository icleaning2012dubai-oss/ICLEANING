const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

const BlogPostSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true, index: true },
  title: { ru: String, en: String, ar: String },
  excerpt: { ru: String, en: String, ar: String },
  content: { ru: String, en: String, ar: String },
  coverImage: String,
  tags: [{ ru: String, en: String, ar: String }],
  published: { type: Boolean, default: false },
}, { timestamps: true });

const BlogPost = mongoose.models.BlogPost || mongoose.model('BlogPost', BlogPostSchema);

const newPosts = [
  {
    slug: 'how-to-clean-sofa-at-home',
    title: {
      ru: 'Как почистить диван в домашних условиях: советы профессионалов',
      en: 'How to Clean a Sofa at Home: Professional Tips',
      ar: 'كيفية تنظيف الأريكة في المنزل: نصائح المحترفين',
    },
    excerpt: {
      ru: 'Узнайте, как эффективно почистить диван дома. Пошаговая инструкция от специалистов iCleaning в Дубае.',
      en: 'Learn how to effectively clean a sofa at home. Step-by-step guide from iCleaning specialists in Dubai.',
      ar: 'تعلم كيفية تنظيف الأريكة بفعالية في المنزل. دليل خطوة بخطوة من متخصصي iCleaning في دبي.',
    },
    content: {
      ru: `<h2>Почему диван нуждается в регулярной чистке?</h2>
<p>Диван — один из самых используемых предметов мебели в доме. На нём скапливаются пыль, пот, крошки еды, шерсть домашних животных и различные бактерии. В жарком и влажном климате Дубая мягкая мебель особенно быстро загрязняется.</p>
<h2>Шаг 1: Подготовка дивана</h2>
<p>Перед чисткой снимите все подушки и пропылесосьте диван. Используйте насадку для мягкой мебели, чтобы удалить мелкий мусор из щелей и складок. Это обязательный этап перед влажной чисткой.</p>
<h2>Шаг 2: Определите тип ткани</h2>
<p>Проверьте бирку на диване. Код «W» означает, что можно использовать водные растворы. «S» — только сухая чистка. «WS» — подходят оба варианта. «X» — только пылесос. Неправильный выбор метода может повредить ткань.</p>
<h2>Шаг 3: Удаление пятен</h2>
<p>Для свежих пятен промокните их салфеткой, не растирая. Для кофе и чая можно использовать раствор уксуса и воды (1:1). Для жирных пятен попробуйте пищевую соду — посыпьте, оставьте на 15 минут, затем пропылесосьте.</p>
<h2>Шаг 4: Общая чистка</h2>
<p>Смешайте тёплую воду с жидким мылом или специализированным средством для обивки. Нанесите пену (не воду!) на ткань с помощью мягкой щётки. Двигайтесь по направлению волокон. Удалите остатки влажной тряпкой.</p>
<h2>Когда стоит обратиться к профессионалам?</h2>
<p>Если пятна застарелые, если диван из деликатного материала (шёлк, бархат, натуральная кожа), если требуется глубокая дезинфекция — лучше доверить работу профессионалам. Команда iCleaning использует профессиональное оборудование Karcher и экологически безопасные средства. Мы выезжаем по всему Дубаю, Абу-Даби и Шардже.</p>`,
      en: `<h2>Why Does Your Sofa Need Regular Cleaning?</h2>
<p>A sofa is one of the most used pieces of furniture in any home. It accumulates dust, sweat, food crumbs, pet hair, and various bacteria. In Dubai's hot and humid climate, upholstered furniture gets dirty especially quickly.</p>
<h2>Step 1: Prepare the Sofa</h2>
<p>Before cleaning, remove all cushions and vacuum the sofa. Use an upholstery attachment to remove small particles from crevices and folds. This is a mandatory step before wet cleaning.</p>
<h2>Step 2: Identify the Fabric Type</h2>
<p>Check the label on your sofa. Code "W" means water-based solutions are safe. "S" means dry cleaning only. "WS" means both methods work. "X" means vacuum only. Choosing the wrong method can damage the fabric.</p>
<h2>Step 3: Stain Removal</h2>
<p>For fresh stains, blot with a cloth — don't rub. For coffee and tea stains, try a vinegar and water solution (1:1). For grease stains, use baking soda — sprinkle, leave for 15 minutes, then vacuum.</p>
<h2>Step 4: General Cleaning</h2>
<p>Mix warm water with liquid soap or a specialized upholstery cleaner. Apply the foam (not water!) to the fabric using a soft brush. Work in the direction of the fibers. Remove residue with a damp cloth.</p>
<h2>When Should You Call Professionals?</h2>
<p>If stains are old, if your sofa is made of delicate materials (silk, velvet, natural leather), or if deep disinfection is needed — it's better to trust the professionals. iCleaning uses professional Karcher equipment and eco-friendly products. We serve all of Dubai, Abu Dhabi, and Sharjah.</p>`,
      ar: `<h2>لماذا تحتاج أريكتك إلى تنظيف منتظم؟</h2>
<p>الأريكة هي من أكثر قطع الأثاث استخدامًا في أي منزل. تتراكم فيها الغبار والعرق وفتات الطعام وشعر الحيوانات الأليفة والبكتيريا المختلفة. في مناخ دبي الحار والرطب، تتسخ الأثاث المنجد بسرعة خاصة.</p>
<h2>الخطوة 1: تحضير الأريكة</h2>
<p>قبل التنظيف، أزل جميع الوسائد وقم بتنظيف الأريكة بالمكنسة الكهربائية. استخدم ملحق التنجيد لإزالة الجسيمات الصغيرة من الشقوق والطيات.</p>
<h2>الخطوة 2: تحديد نوع القماش</h2>
<p>تحقق من الملصق على أريكتك. الرمز "W" يعني أن المحاليل المائية آمنة. "S" يعني التنظيف الجاف فقط. "WS" يعني أن كلتا الطريقتين تعملان.</p>
<h2>متى يجب الاتصال بالمحترفين؟</h2>
<p>إذا كانت البقع قديمة، أو إذا كانت أريكتك مصنوعة من مواد حساسة - من الأفضل الوثوق بالمحترفين. iCleaning يستخدم معدات Karcher المحترفة ومنتجات صديقة للبيئة.</p>`,
    },
    coverImage: 'https://res.cloudinary.com/dbrgnwy5b/image/upload/v1/icleaning/blog/sofa-cleaning-tips',
    tags: [
      { ru: 'Чистка дивана', en: 'Sofa cleaning', ar: 'تنظيف الأريكة' },
      { ru: 'Советы', en: 'Tips', ar: 'نصائح' },
      { ru: 'Дубай', en: 'Dubai', ar: 'دبي' },
    ],
    published: true,
  },
  {
    slug: 'how-often-clean-sofa',
    title: {
      ru: 'Как часто нужно чистить диван: рекомендации экспертов',
      en: 'How Often Should You Clean Your Sofa: Expert Recommendations',
      ar: 'كم مرة يجب تنظيف الأريكة: توصيات الخبراء',
    },
    excerpt: {
      ru: 'Рассказываем, как часто чистить диван, чтобы он служил долго. Рекомендации от специалистов iCleaning для климата ОАЭ.',
      en: 'We explain how often to clean a sofa for maximum longevity. Recommendations from iCleaning specialists for UAE climate.',
      ar: 'نشرح كم مرة يجب تنظيف الأريكة لأقصى عمر افتراضي. توصيات من متخصصي iCleaning لمناخ الإمارات.',
    },
    content: {
      ru: `<h2>Частота чистки дивана: общие рекомендации</h2>
<p>Специалисты рекомендуют проводить профессиональную чистку дивана минимум 2 раза в год. Однако в условиях ОАЭ, где песок, пыль и высокая влажность ускоряют загрязнение, оптимальная частота — каждые 3-4 месяца.</p>
<h2>Факторы, влияющие на частоту чистки</h2>
<p><strong>Домашние животные:</strong> Если у вас есть кот или собака, диван нужно чистить каждые 2-3 месяца. Шерсть, слюна и запах впитываются глубоко в обивку.</p>
<p><strong>Дети:</strong> Семьям с маленькими детьми рекомендуется профессиональная чистка каждые 3 месяца. Дети проливают напитки, оставляют следы от рук и крошки.</p>
<p><strong>Аллергики:</strong> Если кто-то в семье страдает аллергией, чистку стоит делать каждые 2 месяца. В мягкой мебели скапливаются пылевые клещи — главный аллерген.</p>
<h2>Между профессиональными чистками</h2>
<p>Пылесосьте диван еженедельно. Используйте съёмные чехлы и стирайте их раз в 2 недели. Проветривайте подушки на балконе. Немедленно удаляйте свежие пятна — чем свежее пятно, тем легче его убрать.</p>
<h2>Признаки того, что чистка нужна прямо сейчас</h2>
<p>Неприятный запах, видимые пятна, изменение цвета обивки, аллергические реакции домочадцев, чихание при сидении на диване. Если хотя бы один признак присутствует — не откладывайте чистку.</p>
<p>iCleaning предлагает удобные программы регулярного обслуживания со скидками. Позвоните нам, и мы подберём оптимальный график чистки именно для вашей семьи.</p>`,
      en: `<h2>Sofa Cleaning Frequency: General Guidelines</h2>
<p>Experts recommend professional sofa cleaning at least twice a year. However, in the UAE, where sand, dust, and high humidity accelerate soiling, the optimal frequency is every 3-4 months.</p>
<h2>Factors Affecting Cleaning Frequency</h2>
<p><strong>Pets:</strong> If you have a cat or dog, your sofa needs cleaning every 2-3 months. Hair, saliva, and odor get deeply absorbed into upholstery.</p>
<p><strong>Children:</strong> Families with small children should schedule professional cleaning every 3 months. Children spill drinks, leave hand marks, and crumbs.</p>
<p><strong>Allergies:</strong> If anyone in the family suffers from allergies, cleaning should be done every 2 months. Dust mites accumulate in upholstered furniture — the main allergen.</p>
<h2>Between Professional Cleanings</h2>
<p>Vacuum your sofa weekly. Use removable covers and wash them every 2 weeks. Air out cushions on your balcony. Remove fresh stains immediately — the fresher the stain, the easier it is to remove.</p>
<h2>Signs You Need Cleaning Right Now</h2>
<p>Unpleasant odor, visible stains, discolored upholstery, allergic reactions, sneezing while sitting on the sofa. If even one sign is present — don't delay cleaning.</p>
<p>iCleaning offers convenient regular maintenance programs with discounts. Call us, and we'll find the optimal cleaning schedule for your family.</p>`,
      ar: `<h2>تكرار تنظيف الأريكة: إرشادات عامة</h2>
<p>يوصي الخبراء بتنظيف الأريكة المهني مرتين على الأقل في السنة. ومع ذلك، في الإمارات، حيث الرمال والغبار والرطوبة العالية تسرع الاتساخ، فإن التكرار الأمثل هو كل 3-4 أشهر.</p>
<h2>العوامل المؤثرة على تكرار التنظيف</h2>
<p><strong>الحيوانات الأليفة:</strong> إذا كان لديك قط أو كلب، تحتاج أريكتك للتنظيف كل 2-3 أشهر.</p>
<p><strong>الأطفال:</strong> العائلات التي لديها أطفال صغار يجب أن تجدول التنظيف المهني كل 3 أشهر.</p>
<p><strong>الحساسية:</strong> إذا كان أي شخص في العائلة يعاني من الحساسية، يجب إجراء التنظيف كل شهرين.</p>
<p>iCleaning تقدم برامج صيانة منتظمة مريحة مع خصومات. اتصل بنا وسنجد جدول التنظيف الأمثل لعائلتك.</p>`,
    },
    coverImage: 'https://res.cloudinary.com/dbrgnwy5b/image/upload/v1/icleaning/blog/sofa-frequency',
    tags: [
      { ru: 'Чистка дивана', en: 'Sofa cleaning', ar: 'تنظيف الأريكة' },
      { ru: 'Рекомендации', en: 'Recommendations', ar: 'توصيات' },
    ],
    published: true,
  },
  {
    slug: 'professional-sofa-cleaning-methods',
    title: {
      ru: 'Профессиональные методы чистки дивана: какой выбрать?',
      en: 'Professional Sofa Cleaning Methods: Which to Choose?',
      ar: 'طرق تنظيف الأريكة المهنية: أيها تختار؟',
    },
    excerpt: {
      ru: 'Обзор профессиональных методов чистки мягкой мебели. Экстракция, сухая чистка, паровая обработка — плюсы и минусы каждого метода.',
      en: 'Overview of professional upholstery cleaning methods. Extraction, dry cleaning, steam treatment — pros and cons of each method.',
      ar: 'نظرة عامة على طرق تنظيف التنجيد المهنية. الاستخلاص، التنظيف الجاف، المعالجة بالبخار — إيجابيات وسلبيات كل طريقة.',
    },
    content: {
      ru: `<h2>Экстракционная чистка (горячая вода)</h2>
<p>Самый эффективный метод глубокой чистки. В ткань подаётся раствор чистящего средства под давлением, а затем мощный вакуум извлекает грязь вместе с водой. Этот метод удаляет до 95% загрязнений и именно его использует команда iCleaning.</p>
<p><strong>Плюсы:</strong> Глубокое проникновение, удаление аллергенов, дезинфекция.</p>
<p><strong>Минусы:</strong> Время высыхания 3-6 часов.</p>
<h2>Сухая чистка</h2>
<p>На обивку наносится специальный порошок или пена, которые впитывают грязь. Затем остатки удаляются пылесосом. Подходит для деликатных тканей (шёлк, бархат) и натуральной кожи.</p>
<p><strong>Плюсы:</strong> Быстрое высыхание, бережный метод.</p>
<p><strong>Минусы:</strong> Меньшая глубина очистки.</p>
<h2>Паровая чистка</h2>
<p>Пар при температуре 150°C подаётся на поверхность. Убивает бактерии и клещей, но не так эффективно удаляет пятна. Хорошо работает как дополнительный этап после экстракции.</p>
<h2>Какой метод выбрать?</h2>
<p>Для обычных тканевых диванов — экстракция. Для кожи — сухая чистка с кондиционированием. Для аллергиков — экстракция + пар. Специалисты iCleaning подберут оптимальный метод после осмотра вашей мебели.</p>`,
      en: `<h2>Hot Water Extraction</h2>
<p>The most effective deep cleaning method. A cleaning solution is applied under pressure, then a powerful vacuum extracts dirt along with the water. This method removes up to 95% of contaminants and is the method iCleaning uses.</p>
<p><strong>Pros:</strong> Deep penetration, allergen removal, disinfection.</p>
<p><strong>Cons:</strong> Drying time 3-6 hours.</p>
<h2>Dry Cleaning</h2>
<p>Special powder or foam is applied to the upholstery to absorb dirt, then vacuumed away. Suitable for delicate fabrics (silk, velvet) and natural leather.</p>
<p><strong>Pros:</strong> Quick drying, gentle method.</p>
<p><strong>Cons:</strong> Less depth of cleaning.</p>
<h2>Steam Cleaning</h2>
<p>Steam at 150°C is applied to the surface. Kills bacteria and mites but is less effective at removing stains. Works well as an additional step after extraction.</p>
<h2>Which Method to Choose?</h2>
<p>For regular fabric sofas — extraction. For leather — dry cleaning with conditioning. For allergy sufferers — extraction + steam. iCleaning specialists will select the optimal method after inspecting your furniture.</p>`,
      ar: `<h2>الاستخلاص بالماء الساخن</h2>
<p>الطريقة الأكثر فعالية للتنظيف العميق. يتم تطبيق محلول تنظيف تحت الضغط، ثم يستخرج مكنسة قوية الأوساخ مع الماء. هذه الطريقة تزيل حتى 95% من الملوثات.</p>
<h2>التنظيف الجاف</h2>
<p>يتم تطبيق مسحوق أو رغوة خاصة على التنجيد لامتصاص الأوساخ، ثم يتم شفطها بالمكنسة الكهربائية. مناسب للأقمشة الحساسة والجلد الطبيعي.</p>
<h2>التنظيف بالبخار</h2>
<p>يتم تطبيق بخار عند 150 درجة مئوية على السطح. يقتل البكتيريا والعث لكنه أقل فعالية في إزالة البقع.</p>
<h2>أي طريقة تختار؟</h2>
<p>للأرائك القماشية العادية — الاستخلاص. للجلد — التنظيف الجاف مع التكييف. لمرضى الحساسية — الاستخلاص + البخار. متخصصو iCleaning سيختارون الطريقة المثلى بعد فحص أثاثك.</p>`,
    },
    coverImage: 'https://res.cloudinary.com/dbrgnwy5b/image/upload/v1/icleaning/blog/cleaning-methods',
    tags: [
      { ru: 'Чистка дивана', en: 'Sofa cleaning', ar: 'تنظيف الأريكة' },
      { ru: 'Методы чистки', en: 'Cleaning methods', ar: 'طرق التنظيف' },
    ],
    published: true,
  },
  {
    slug: 'how-to-clean-carpet-at-home',
    title: {
      ru: 'Как почистить ковёр в домашних условиях: полное руководство',
      en: 'How to Clean a Carpet at Home: Complete Guide',
      ar: 'كيفية تنظيف السجادة في المنزل: دليل شامل',
    },
    excerpt: {
      ru: 'Пошаговое руководство по чистке ковров в домашних условиях. Советы для разных типов ковров от экспертов iCleaning.',
      en: 'Step-by-step guide to cleaning carpets at home. Tips for different carpet types from iCleaning experts.',
      ar: 'دليل خطوة بخطوة لتنظيف السجاد في المنزل. نصائح لأنواع مختلفة من السجاد من خبراء iCleaning.',
    },
    content: {
      ru: `<h2>Типы ковров и особенности чистки</h2>
<p>Не все ковры чистятся одинаково. Синтетические ковры (полиэстер, нейлон) выдерживают интенсивную чистку. Шерстяные ковры требуют деликатного подхода. Шёлковые и ручной работы — только профессиональная чистка.</p>
<h2>Регулярный уход: пылесос</h2>
<p>Пылесосьте ковёр минимум 2 раза в неделю, а в зонах с высокой проходимостью — ежедневно. В Дубае, где песок проникает повсюду, это особенно важно. Мелкие частицы песка действуют как абразив и разрушают волокна ковра изнутри.</p>
<h2>Удаление пятен: основные правила</h2>
<p>Действуйте быстро — промокните пятно салфеткой от краёв к центру. Никогда не трите! Для красного вина используйте соль, для кофе — уксус с водой, для жира — крахмал или соду. Перед применением любого средства проверьте его на незаметном участке.</p>
<h2>Глубокая чистка дома</h2>
<p>Посыпьте ковёр содой, оставьте на 30 минут и пропылесосьте — это освежит и уберёт запахи. Для более глубокой чистки можно арендовать моющий пылесос, но будьте осторожны с количеством воды — чрезмерное намокание приведёт к появлению плесени.</p>
<h2>Когда нужен профессионал</h2>
<p>Персидские ковры, шёлковые ковры, ковры ручной работы, ковры с застарелыми пятнами — всё это требует профессионального подхода. iCleaning специализируется на чистке дорогих ковров. Мы используем pH-нейтральные растворы, которые не повреждают натуральные волокна и красители.</p>`,
      en: `<h2>Carpet Types and Cleaning Specifics</h2>
<p>Not all carpets clean the same way. Synthetic carpets (polyester, nylon) can handle intensive cleaning. Wool carpets require a gentle approach. Silk and handmade carpets need professional cleaning only.</p>
<h2>Regular Maintenance: Vacuuming</h2>
<p>Vacuum your carpet at least twice a week, and daily in high-traffic areas. In Dubai, where sand gets everywhere, this is especially important. Fine sand particles act as an abrasive and destroy carpet fibers from the inside.</p>
<h2>Stain Removal: Basic Rules</h2>
<p>Act quickly — blot the stain from edges to center. Never rub! For red wine use salt, for coffee — vinegar with water, for grease — starch or baking soda. Test any cleaning agent on a hidden area first.</p>
<h2>Deep Cleaning at Home</h2>
<p>Sprinkle baking soda on the carpet, leave for 30 minutes, and vacuum — this freshens and removes odors. For deeper cleaning, you can rent a carpet cleaner, but be careful with water — excessive moisture leads to mold.</p>
<h2>When You Need a Professional</h2>
<p>Persian rugs, silk carpets, handmade carpets, carpets with old stains — all require a professional approach. iCleaning specializes in cleaning expensive carpets. We use pH-neutral solutions that don't damage natural fibers and dyes.</p>`,
      ar: `<h2>أنواع السجاد وخصائص التنظيف</h2>
<p>ليست كل السجادات تُنظف بنفس الطريقة. السجاد الصناعي يتحمل التنظيف المكثف. السجاد الصوفي يتطلب نهجًا لطيفًا. السجاد الحريري واليدوي يحتاج تنظيفًا مهنيًا فقط.</p>
<h2>الصيانة المنتظمة: التنظيف بالمكنسة الكهربائية</h2>
<p>نظف سجادتك بالمكنسة الكهربائية مرتين على الأقل في الأسبوع. في دبي، حيث الرمال في كل مكان، هذا مهم بشكل خاص.</p>
<h2>إزالة البقع: القواعد الأساسية</h2>
<p>تصرف بسرعة — امسح البقعة من الحواف إلى المركز. لا تفرك أبدًا!</p>
<h2>متى تحتاج محترفًا</h2>
<p>السجاد الفارسي، السجاد الحريري، السجاد اليدوي — كل هذا يتطلب نهجًا مهنيًا. iCleaning متخصصون في تنظيف السجاد الثمين.</p>`,
    },
    coverImage: 'https://res.cloudinary.com/dbrgnwy5b/image/upload/v1/icleaning/blog/carpet-cleaning-guide',
    tags: [
      { ru: 'Чистка ковров', en: 'Carpet cleaning', ar: 'تنظيف السجاد' },
      { ru: 'Руководство', en: 'Guide', ar: 'دليل' },
      { ru: 'Советы', en: 'Tips', ar: 'نصائح' },
    ],
    published: true,
  },
  {
    slug: 'deep-vs-standard-cleaning',
    title: {
      ru: 'Генеральная уборка vs обычная: в чём разница и когда нужна каждая',
      en: 'Deep Cleaning vs Standard Cleaning: Differences and When You Need Each',
      ar: 'التنظيف العميق مقابل التنظيف العادي: الفرق ومتى تحتاج كل منهما',
    },
    excerpt: {
      ru: 'Объясняем разницу между генеральной и обычной уборкой. Когда заказать каждый вид и сколько стоит в Дубае.',
      en: 'We explain the difference between deep and standard cleaning. When to order each type and how much it costs in Dubai.',
      ar: 'نشرح الفرق بين التنظيف العميق والعادي. متى تطلب كل نوع وكم يكلف في دبي.',
    },
    content: {
      ru: `<h2>Что входит в обычную (регулярную) уборку?</h2>
<p>Регулярная уборка — это поддержание порядка: уборка пыли, мытьё полов, чистка санузлов, уборка кухни, вынос мусора. Она занимает 2-3 часа для квартиры-студии или 4-5 часов для квартиры с 2 спальнями.</p>
<h2>Что входит в генеральную (глубокую) уборку?</h2>
<p>Генеральная уборка включает всё вышеперечисленное плюс: мытьё окон изнутри, чистка вытяжки, чистка духовки, мытьё за мебелью и техникой, чистка плинтусов, удаление известкового налёта, дезинфекция всех поверхностей. Она занимает 6-8 часов.</p>
<h2>Когда нужна генеральная уборка?</h2>
<ul>
<li>При заезде/выезде из квартиры (move in / move out)</li>
<li>После ремонта или покраски</li>
<li>Перед праздниками (Рамадан, Новый год)</li>
<li>Раз в 3-6 месяцев для поддержания гигиены</li>
<li>При аллергии или частых болезнях домочадцев</li>
</ul>
<h2>Стоимость в Дубае</h2>
<p>Обычная уборка: от 150 AED (студия) до 400 AED (3 спальни). Генеральная уборка: от 500 AED до 1500 AED в зависимости от площади и состояния квартиры. iCleaning предоставляет точную оценку после осмотра или по фотографиям.</p>
<h2>Что выбрать?</h2>
<p>Если вы убираетесь регулярно — достаточно стандартной уборки 1-2 раза в неделю и генеральной раз в 3 месяца. Если давно не убирались — начните с генеральной, затем перейдите на регулярное обслуживание. iCleaning предлагает оба варианта с гибким графиком.</p>`,
      en: `<h2>What's Included in Standard (Regular) Cleaning?</h2>
<p>Regular cleaning is about maintaining order: dusting, mopping floors, cleaning bathrooms, kitchen cleaning, taking out trash. It takes 2-3 hours for a studio or 4-5 hours for a 2-bedroom apartment.</p>
<h2>What's Included in Deep Cleaning?</h2>
<p>Deep cleaning includes everything above plus: washing windows from inside, cleaning the hood, oven cleaning, washing behind furniture and appliances, cleaning baseboards, limescale removal, disinfection of all surfaces. It takes 6-8 hours.</p>
<h2>When Do You Need Deep Cleaning?</h2>
<ul>
<li>Move in / move out</li>
<li>After renovation or painting</li>
<li>Before holidays (Ramadan, New Year)</li>
<li>Every 3-6 months for hygiene</li>
<li>If family members have allergies or frequent illness</li>
</ul>
<h2>Cost in Dubai</h2>
<p>Standard cleaning: from 150 AED (studio) to 400 AED (3 bedrooms). Deep cleaning: from 500 AED to 1500 AED depending on area and condition. iCleaning provides exact estimates after inspection or by photos.</p>
<h2>What to Choose?</h2>
<p>If you clean regularly — standard cleaning 1-2 times per week and deep clean every 3 months is enough. If it's been a while — start with deep cleaning, then switch to regular service. iCleaning offers both with flexible scheduling.</p>`,
      ar: `<h2>ماذا يشمل التنظيف العادي (المنتظم)؟</h2>
<p>التنظيف المنتظم هو الحفاظ على النظام: إزالة الغبار، مسح الأرضيات، تنظيف الحمامات، تنظيف المطبخ. يستغرق 2-3 ساعات للاستوديو أو 4-5 ساعات لشقة بغرفتي نوم.</p>
<h2>ماذا يشمل التنظيف العميق؟</h2>
<p>التنظيف العميق يشمل كل ما سبق بالإضافة إلى: غسل النوافذ من الداخل، تنظيف الشفاط، تنظيف الفرن، الغسل خلف الأثاث والأجهزة، تنظيف اللوح، إزالة الكلس، تطهير جميع الأسطح.</p>
<h2>التكلفة في دبي</h2>
<p>تنظيف عادي: من 150 درهم (استوديو) إلى 400 درهم (3 غرف نوم). تنظيف عميق: من 500 درهم إلى 1500 درهم. iCleaning تقدم تقديرات دقيقة بعد الفحص.</p>`,
    },
    coverImage: 'https://res.cloudinary.com/dbrgnwy5b/image/upload/v1/icleaning/blog/deep-vs-standard',
    tags: [
      { ru: 'Генеральная уборка', en: 'Deep cleaning', ar: 'التنظيف العميق' },
      { ru: 'Регулярная уборка', en: 'Regular cleaning', ar: 'التنظيف المنتظم' },
      { ru: 'Сравнение', en: 'Comparison', ar: 'مقارنة' },
    ],
    published: true,
  },
  {
    slug: 'clean-curtains-without-removing',
    title: {
      ru: 'Как почистить шторы, не снимая: 5 проверенных способов',
      en: 'How to Clean Curtains Without Removing Them: 5 Proven Methods',
      ar: 'كيفية تنظيف الستائر دون إزالتها: 5 طرق مجربة',
    },
    excerpt: {
      ru: 'Рассказываем, как освежить шторы прямо на карнизе. Пять способов, которые не требуют снятия штор.',
      en: 'How to freshen curtains right on the rod. Five methods that don\'t require removing curtains.',
      ar: 'كيفية تنظيف الستائر مباشرة على القضيب. خمس طرق لا تتطلب إزالة الستائر.',
    },
    content: {
      ru: `<h2>Почему шторы нужно чистить?</h2>
<p>Шторы — это огромный фильтр, который собирает пыль, запахи с кухни, пыльцу и мелкие частицы песка (особенно актуально для Дубая). Грязные шторы ухудшают качество воздуха в квартире и могут вызывать аллергию.</p>
<h2>Способ 1: Пылесос с насадкой</h2>
<p>Используйте пылесос с мягкой насадкой для мебели. Двигайтесь сверху вниз, уделяя внимание складкам и верхней части возле карниза. Это быстрый способ убрать поверхностную пыль.</p>
<h2>Способ 2: Отпаривание</h2>
<p>Ручной отпариватель — идеальный инструмент для штор. Пар убивает бактерии, освежает ткань и разглаживает складки. Держите отпариватель на расстоянии 10-15 см от ткани.</p>
<h2>Способ 3: Влажная салфетка</h2>
<p>Оберните руку влажной микрофибровой салфеткой и проведите по каждой складке шторы. Салфетка соберёт пыль и мелкие загрязнения. Простой и быстрый ежемесячный уход.</p>
<h2>Способ 4: Сода + уксус</h2>
<p>Для освежения и удаления запахов слегка обрызгайте шторы раствором: 1 ст.л. соды на 500 мл воды + немного белого уксуса. Дайте высохнуть. Не используйте на шёлковых шторах!</p>
<h2>Способ 5: Профессиональная чистка на месте</h2>
<p>iCleaning предлагает чистку штор без снятия с карниза. Наши специалисты используют профессиональное оборудование и средства, которые безопасны для всех типов тканей. Мы чистим шторы, жалюзи, рольставни и ламбрекены прямо у вас дома.</p>`,
      en: `<h2>Why Do Curtains Need Cleaning?</h2>
<p>Curtains are a huge filter collecting dust, kitchen odors, pollen, and fine sand particles (especially relevant in Dubai). Dirty curtains worsen indoor air quality and can cause allergies.</p>
<h2>Method 1: Vacuum with Attachment</h2>
<p>Use a vacuum with a soft upholstery attachment. Move from top to bottom, paying attention to folds and the top near the rod. This quickly removes surface dust.</p>
<h2>Method 2: Steaming</h2>
<p>A handheld steamer is the ideal tool for curtains. Steam kills bacteria, freshens fabric, and smooths wrinkles. Hold the steamer 10-15 cm from the fabric.</p>
<h2>Method 3: Damp Cloth</h2>
<p>Wrap your hand in a damp microfiber cloth and run it along each curtain fold. The cloth collects dust and light dirt. Simple monthly maintenance.</p>
<h2>Method 4: Baking Soda + Vinegar</h2>
<p>For freshening and odor removal, lightly spray curtains with: 1 tbsp baking soda in 500ml water + a bit of white vinegar. Let dry. Don't use on silk curtains!</p>
<h2>Method 5: Professional On-Site Cleaning</h2>
<p>iCleaning offers curtain cleaning without removal from the rod. Our specialists use professional equipment and products safe for all fabric types. We clean curtains, blinds, roller shades and valances right at your home.</p>`,
      ar: `<h2>لماذا تحتاج الستائر إلى التنظيف؟</h2>
<p>الستائر هي فلتر ضخم يجمع الغبار وروائح المطبخ وحبوب اللقاح وجزيئات الرمل الدقيقة. الستائر المتسخة تسوء جودة الهواء الداخلي ويمكن أن تسبب الحساسية.</p>
<h2>الطريقة 1: المكنسة الكهربائية مع ملحق</h2>
<p>استخدم مكنسة كهربائية مع ملحق تنجيد ناعم. تحرك من الأعلى إلى الأسفل. هذا يزيل الغبار السطحي بسرعة.</p>
<h2>الطريقة 2: التبخير</h2>
<p>جهاز البخار المحمول هو الأداة المثالية للستائر. البخار يقتل البكتيريا وينعش القماش.</p>
<h2>الطريقة 5: التنظيف المهني في الموقع</h2>
<p>iCleaning تقدم تنظيف الستائر دون إزالتها من القضيب. متخصصونا يستخدمون معدات مهنية ومنتجات آمنة لجميع أنواع الأقمشة.</p>`,
    },
    coverImage: 'https://res.cloudinary.com/dbrgnwy5b/image/upload/v1/icleaning/blog/curtain-cleaning-tips',
    tags: [
      { ru: 'Шторы', en: 'Curtains', ar: 'الستائر' },
      { ru: 'Советы', en: 'Tips', ar: 'نصائح' },
      { ru: 'Дубай', en: 'Dubai', ar: 'دبي' },
    ],
    published: true,
  },
];

async function addBlogPosts() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    let inserted = 0;
    let skipped = 0;

    for (const post of newPosts) {
      const existing = await BlogPost.findOne({ slug: post.slug });
      if (existing) {
        console.log(`  Skipped (exists): ${post.slug}`);
        skipped++;
        continue;
      }
      await BlogPost.create(post);
      console.log(`  Inserted: ${post.slug}`);
      inserted++;
    }

    console.log(`\nDone: ${inserted} inserted, ${skipped} skipped`);
    await mongoose.disconnect();
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

addBlogPosts();
