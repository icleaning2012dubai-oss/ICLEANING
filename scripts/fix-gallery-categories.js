const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const MONGODB_URI = 'mongodb+srv://similia:1111@cluster0.7ig1y0n.mongodb.net/icleaning';

const GalleryPhotoSchema = new mongoose.Schema({
  url: String, publicId: String, alt: String,
  category: String, width: Number, height: Number,
  published: Boolean, order: Number, source: String,
}, { timestamps: true });

const GalleryPhoto = mongoose.model('GalleryPhoto', GalleryPhotoSchema);

// Load mapping from Google Drive folders
const mapping = JSON.parse(fs.readFileSync('/tmp/gdrive_folder_mapping.json', 'utf8'));

function sanitizePublicId(publicId) {
  // Extract just the filename part from publicId like "icleaning/photos/coilorigin"
  const parts = publicId.split('/');
  return parts[parts.length - 1].toLowerCase().replace(/[^a-z0-9_-]/g, '_').replace(/__+/g, '_').replace(/^_|_$/g, '');
}

async function main() {
  await mongoose.connect(MONGODB_URI);
  console.log('Connected to MongoDB');

  const photos = await GalleryPhoto.find({}).lean();
  console.log(`Total photos in DB: ${photos.length}`);

  let updated = 0, notFound = 0, alreadyCorrect = 0;

  for (const photo of photos) {
    const key = sanitizePublicId(photo.publicId);
    
    // Try exact match
    let newCat = mapping[key];
    
    // If not found, try fuzzy match (remove leading/trailing underscores, dashes)
    if (!newCat) {
      // Try matching by looking for key in mapping keys
      const mapKeys = Object.keys(mapping);
      const match = mapKeys.find(mk => mk === key || key.includes(mk) || mk.includes(key));
      if (match) newCat = mapping[match];
    }

    if (!newCat) {
      notFound++;
      continue;
    }

    if (photo.category === newCat) {
      alreadyCorrect++;
      continue;
    }

    await GalleryPhoto.updateOne({ _id: photo._id }, { $set: { category: newCat } });
    updated++;
  }

  console.log(`\nResults:`);
  console.log(`  Updated: ${updated}`);
  console.log(`  Already correct: ${alreadyCorrect}`);
  console.log(`  No mapping found: ${notFound}`);

  // Final category distribution
  const agg = await GalleryPhoto.aggregate([
    { $group: { _id: '$category', count: { $sum: 1 } } },
    { $sort: { count: -1 } }
  ]);
  console.log('\nFinal categories:');
  agg.forEach(a => console.log(`  ${a._id}: ${a.count}`));

  await mongoose.disconnect();
}

main().catch(err => { console.error(err); mongoose.disconnect(); process.exit(1); });
