const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '..', 'public', 'images');

async function convertAndOptimize(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const dir = path.dirname(filePath);
  const baseName = path.basename(filePath, ext);
  const outputPath = path.join(dir, `${baseName}.webp`);

  // Пропускаем уже существующие webp если исходник png/jpg
  if (ext === '.webp') {
    // Оптимизируем существующий webp
    try {
      await sharp(filePath)
        .webp({ quality: 80, effort: 6 })
        .toFile(outputPath + '.tmp');
      fs.renameSync(outputPath + '.tmp', filePath);
      console.log(`✓ Оптимизирован: ${path.relative(imagesDir, filePath)}`);
    } catch (err) {
      console.log(`✗ Ошибка ${path.relative(imagesDir, filePath)}: ${err.message}`);
    }
    return;
  }

  // Конвертируем PNG/JPG в WebP
  if (['.png', '.jpg', '.jpeg'].includes(ext)) {
    try {
      const info = await sharp(filePath)
        .webp({ quality: 80, effort: 6 })
        .toFile(outputPath);
      
      const originalSize = fs.statSync(filePath).size;
      const newSize = info.size;
      const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
      
      console.log(`✓ ${path.relative(imagesDir, filePath)} → ${baseName}.webp (сжато на ${savings}%)`);
      
      // Удаляем оригинал после успешной конвертации
      fs.unlinkSync(filePath);
    } catch (err) {
      console.log(`✗ Ошибка ${path.relative(imagesDir, filePath)}: ${err.message}`);
    }
  }
}

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
        await convertAndOptimize(filePath);
      }
    }
  }
}

console.log('🚀 Начало оптимизации изображений...\n');
processDirectory(imagesDir)
  .then(() => {
    console.log('\n✅ Оптимизация завершена!');
  })
  .catch(err => {
    console.error('❌ Ошибка:', err);
    process.exit(1);
  });
