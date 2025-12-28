const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '..', 'public', 'images');

// Настройки для разных типов изображений
const settings = {
  hero: { quality: 75, width: 1920 },      // Hero изображения
  heroMobile: { quality: 70, width: 768 }, // Мобильные hero
  service: { quality: 75, width: 1200 },   // Страницы услуг  
  cards: { quality: 75, width: 800 },      // Карточки услуг
  decorative: { quality: 60, width: 1200 },// Декоративные
  background: { quality: 50, width: 1920 },// Фоны
  default: { quality: 75, width: 1200 }    // По умолчанию
};

function getSettings(filePath) {
  const fileName = path.basename(filePath).toLowerCase();
  const dir = path.dirname(filePath);
  
  if (fileName.includes('hero-mob') || fileName.includes('mobile')) {
    return settings.heroMobile;
  }
  if (fileName.includes('hero')) {
    return settings.hero;
  }
  if (fileName.includes('buble') || fileName.includes('bubble')) {
    return settings.background;
  }
  if (fileName.includes('decorative')) {
    return settings.decorative;
  }
  if (dir.includes('service')) {
    return settings.service;
  }
  return settings.default;
}

async function convertAndOptimize(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const dir = path.dirname(filePath);
  const baseName = path.basename(filePath, ext);
  const outputPath = path.join(dir, `${baseName}.webp`);
  
  const config = getSettings(filePath);
  
  try {
    const originalSize = fs.statSync(filePath).size;
    const originalSizeKB = (originalSize / 1024).toFixed(1);
    
    // Получаем метаданные изображения
    const metadata = await sharp(filePath).metadata();
    
    // Определяем нужно ли ресайзить
    const needsResize = metadata.width > config.width;
    
    let pipeline = sharp(filePath);
    
    if (needsResize) {
      pipeline = pipeline.resize(config.width, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      });
    }
    
    const info = await pipeline
      .webp({ 
        quality: config.quality, 
        effort: 6,
        smartSubsample: true
      })
      .toFile(outputPath + '.tmp');
    
    const newSizeKB = (info.size / 1024).toFixed(1);
    const savings = ((originalSize - info.size) / originalSize * 100).toFixed(1);
    
    // Если это был не WebP файл - удаляем оригинал
    if (ext !== '.webp') {
      fs.renameSync(outputPath + '.tmp', outputPath);
      fs.unlinkSync(filePath);
      console.log(`✓ ${path.relative(imagesDir, filePath)} → ${baseName}.webp`);
    } else {
      // Если WebP - заменяем оригинал
      fs.renameSync(outputPath + '.tmp', filePath);
      console.log(`✓ ${path.relative(imagesDir, filePath)} оптимизирован`);
    }
    
    console.log(`  ${originalSizeKB}KB → ${newSizeKB}KB (сжато на ${savings}%)\n`);
    
    return { original: originalSize, new: info.size };
    
  } catch (err) {
    console.log(`✗ Ошибка ${path.relative(imagesDir, filePath)}: ${err.message}\n`);
    // Удаляем временный файл если есть
    if (fs.existsSync(outputPath + '.tmp')) {
      fs.unlinkSync(outputPath + '.tmp');
    }
    return { original: 0, new: 0 };
  }
}

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  let totalOriginal = 0;
  let totalNew = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      const subResult = await processDirectory(filePath);
      totalOriginal += subResult.original;
      totalNew += subResult.new;
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
        const result = await convertAndOptimize(filePath);
        totalOriginal += result.original;
        totalNew += result.new;
      }
    }
  }
  
  return { original: totalOriginal, new: totalNew };
}

console.log('🚀 Начало полной оптимизации изображений...\n');
console.log('=' .repeat(50) + '\n');

processDirectory(imagesDir)
  .then(({ original, new: newSize }) => {
    console.log('=' .repeat(50));
    console.log('\n✅ Оптимизация завершена!');
    
    const originalMB = (original / 1024 / 1024).toFixed(2);
    const newMB = (newSize / 1024 / 1024).toFixed(2);
    const savedMB = ((original - newSize) / 1024 / 1024).toFixed(2);
    const savedPercent = ((original - newSize) / original * 100).toFixed(1);
    
    console.log(`\n📊 Итого:`);
    console.log(`   Было: ${originalMB} MB`);
    console.log(`   Стало: ${newMB} MB`);
    console.log(`   Сэкономлено: ${savedMB} MB (${savedPercent}%)`);
  })
  .catch(err => {
    console.error('❌ Ошибка:', err);
    process.exit(1);
  });
