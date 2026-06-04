import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesDir = path.join(process.cwd(), 'public', 'images');
const outputDir = path.join(process.cwd(), 'tmp', 'contact-sheets');
const photoPattern = /\.(webp|jpg|jpeg|png)$/i;
const skippedNames = new Set([
  'logo.webp',
  'our mission.webp',
  'our purpose.webp',
  'our story.webp',
  'our values.webp',
  'welcome note.webp',
  'why parents 1.webp',
  'why parents 2.webp',
]);

fs.mkdirSync(outputDir, { recursive: true });

const files = fs.readdirSync(imagesDir)
  .filter((file) => photoPattern.test(file))
  .filter((file) => !skippedNames.has(file.toLowerCase()))
  .sort();

const columns = 4;
const rows = 5;
const thumbWidth = 260;
const thumbHeight = 220;
const labelHeight = 48;
const gap = 14;
const pageSize = columns * rows;
const sheetWidth = columns * thumbWidth + (columns + 1) * gap;
const sheetHeight = rows * (thumbHeight + labelHeight) + (rows + 1) * gap;

const escapeXml = (value) => value
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

for (let page = 0; page < Math.ceil(files.length / pageSize); page += 1) {
  const pageFiles = files.slice(page * pageSize, (page + 1) * pageSize);
  const composites = [];

  for (const [index, file] of pageFiles.entries()) {
    const column = index % columns;
    const row = Math.floor(index / columns);
    const left = gap + column * (thumbWidth + gap);
    const top = gap + row * (thumbHeight + labelHeight + gap);
    const imagePath = path.join(imagesDir, file);
    const label = `${page * pageSize + index + 1}. ${file}`;

    const input = await sharp(imagePath)
      .resize(thumbWidth, thumbHeight, { fit: 'cover', position: 'attention' })
      .webp({ quality: 78 })
      .toBuffer();

    const labelSvg = Buffer.from(`
      <svg width="${thumbWidth}" height="${labelHeight}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#ffffff" />
        <text x="10" y="20" font-family="Arial" font-size="13" font-weight="700" fill="#111111">${escapeXml(label.slice(0, 32))}</text>
        <text x="10" y="38" font-family="Arial" font-size="11" fill="#444444">${escapeXml(label.slice(32, 68))}</text>
      </svg>
    `);

    composites.push({ input, left, top });
    composites.push({ input: labelSvg, left, top: top + thumbHeight });
  }

  await sharp({
    create: {
      width: sheetWidth,
      height: sheetHeight,
      channels: 3,
      background: '#f7f5ee',
    },
  })
    .composite(composites)
    .jpeg({ quality: 86 })
    .toFile(path.join(outputDir, `contact-sheet-${String(page + 1).padStart(2, '0')}.jpg`));
}

console.log(`Created ${Math.ceil(files.length / pageSize)} contact sheets for ${files.length} photos.`);