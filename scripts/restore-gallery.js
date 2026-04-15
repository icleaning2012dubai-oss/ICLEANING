const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const MONGODB_URI = 'mongodb+srv://similia:1111@cluster0.7ig1y0n.mongodb.net/icleaning';

const GalleryPhotoSchema = new mongoose.Schema({
  url:       { type: String, required: true },
  publicId:  { type: String, default: '' },
  alt:       { type: String, default: '' },
  category:  { type: String, default: 'other', index: true },
  width:     { type: Number, default: 1200 },
  height:    { type: Number, default: 800 },
  published: { type: Boolean, default: true },
  order:     { type: Number, default: 0 },
  source:    { type: String, default: 'upload' },
}, { timestamps: true });

const GalleryPhoto = mongoose.model('GalleryPhoto', GalleryPhotoSchema);

async function main() {
  await mongoose.connect(MONGODB_URI);
  console.log('Connected to MongoDB');

  // Check if already has data
  const existing = await GalleryPhoto.countDocuments();
  if (existing > 0) {
    console.log(`Already have ${existing} photos in DB. Skipping to avoid duplicates.`);
    await mongoose.disconnect();
    return;
  }

  const data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'gdrive_import_result.json'), 'utf8'));
  console.log(`Loaded ${data.length} photos from gdrive_import_result.json`);

  // Insert in batches of 100
  const batchSize = 100;
  let inserted = 0;
  for (let i = 0; i < data.length; i += batchSize) {
    const batch = data.slice(i, i + batchSize);
    await GalleryPhoto.insertMany(batch, { ordered: false });
    inserted += batch.length;
    console.log(`  Inserted ${inserted}/${data.length}...`);
  }

  console.log(`Done! ${inserted} gallery photos restored.`);
  await mongoose.disconnect();
}

main().catch(err => {
  console.error('Error:', err);
  mongoose.disconnect();
  process.exit(1);
});
