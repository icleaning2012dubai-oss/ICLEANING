const mongoose = require('mongoose');
const uri = 'mongodb+srv://similia:1111@cluster0.lmzxae0.mongodb.net/icleaning';

const TAG_MAP = {
  'чистота': { en: 'Cleanliness', ar: 'النظافة' },
  'лето': { en: 'Summer', ar: 'الصيف' },
  'кондиционер': { en: 'Air Conditioner', ar: 'مكيف الهواء' },
  'матрас': { en: 'Mattress', ar: 'مرتبة' },
  'советы': { en: 'Tips', ar: 'نصائح' },
  'Дубай': { en: 'Dubai', ar: 'دبي' },
  'уборка': { en: 'Cleaning', ar: 'تنظيف' },
  'климат': { en: 'Climate', ar: 'المناخ' },
  'ОАЭ': { en: 'UAE', ar: 'الإمارات' },
  'ковры': { en: 'Carpets', ar: 'السجاد' },
  'диван': { en: 'Sofa', ar: 'أريكة' },
  'шторы': { en: 'Curtains', ar: 'الستائر' },
  'химчистка': { en: 'Dry Cleaning', ar: 'التنظيف الجاف' },
  'iCleaning': { en: 'iCleaning', ar: 'iCleaning' },
};

mongoose.connect(uri).then(async () => {
  const col = mongoose.connection.db.collection('blogposts');
  const posts = await col.find({}).toArray();

  for (const post of posts) {
    if (!post.tags || post.tags.length === 0) {
      console.log('SKIP (no tags):', post.slug);
      continue;
    }
    if (typeof post.tags[0] === 'object' && post.tags[0].ru) {
      console.log('SKIP (already migrated):', post.slug);
      continue;
    }

    const newTags = post.tags.map(tag => {
      const mapped = TAG_MAP[tag] || TAG_MAP[tag.toLowerCase()];
      return {
        ru: tag,
        en: mapped ? mapped.en : tag,
        ar: mapped ? mapped.ar : tag,
      };
    });

    await col.updateOne({ _id: post._id }, { $set: { tags: newTags } });
    console.log('MIGRATED:', post.slug, JSON.stringify(newTags));
  }

  console.log('Done!');
  process.exit(0);
}).catch(e => { console.error(e); process.exit(1); });
