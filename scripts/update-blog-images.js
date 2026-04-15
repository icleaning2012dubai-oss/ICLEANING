const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

const BlogPostSchema = new mongoose.Schema({
  slug: String, title: Object, excerpt: Object, content: Object,
  coverImage: String, tags: [Object], published: Boolean,
}, { timestamps: true });
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

const coverImages = {
  'how-to-clean-sofa-at-home': 'https://res.cloudinary.com/dbrgnwy5b/image/upload/v1773631482/icleaning/photos/img-20250403-wa0081_1_.webp',
  'how-often-clean-sofa': 'https://res.cloudinary.com/dbrgnwy5b/image/upload/v1773631485/icleaning/photos/img-20250409-wa0101_1_.webp',
  'professional-sofa-cleaning-methods': 'https://res.cloudinary.com/dbrgnwy5b/image/upload/v1773631488/icleaning/photos/img-20250402-wa0076_1_.webp',
  'how-to-clean-carpet-at-home': 'https://res.cloudinary.com/dbrgnwy5b/image/upload/v1773632720/icleaning/photos/photo_2025-12-26_16-23-54.webp',
  'deep-vs-standard-cleaning': 'https://res.cloudinary.com/dbrgnwy5b/image/upload/v1773630309/icleaning/photos/photo_2026-03-11_14-48-07.webp',
  'clean-curtains-without-removing': 'https://res.cloudinary.com/dbrgnwy5b/image/upload/v1773630634/icleaning/photos/img-20250320-wa0073.webp',
};

async function run() {
  await mongoose.connect(process.env.MONGODB_URI);
  for (const [slug, img] of Object.entries(coverImages)) {
    const res = await BlogPost.updateOne({ slug }, { $set: { coverImage: img } });
    console.log(`${slug}: ${res.modifiedCount ? 'updated' : 'not found or same'}`);
  }
  await mongoose.disconnect();
  console.log('Done!');
}
run();
