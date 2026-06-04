import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesDir = path.join(process.cwd(), 'public', 'images');
const outputDir = path.join(process.cwd(), 'public', 'images', 'webp');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const files = fs.readdirSync(imagesDir);

async function convertImages() {
  for (const file of files) {
    if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg') || file.toLowerCase().endsWith('.png')) {
      const inputPath = path.join(imagesDir, file);
      const nameWithoutExt = path.parse(file).name;
      const outputPath = path.join(outputDir, `${nameWithoutExt}.webp`);

      try {
        await sharp(inputPath)
          .webp({ quality: 80 })
          .resize({ width: 1200, withoutEnlargement: true }) // Resize to reasonable width
          .toFile(outputPath);
        console.log(`Converted ${file} to ${nameWithoutExt}.webp`);
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    }
  }
}

convertImages();