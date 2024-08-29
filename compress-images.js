const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

const inputDir = path.join(__dirname, 'public', 'images', 'portfolio');
const outputDir = path.join(
  __dirname,
  'public',
  'images',
  'portfolio-compressed'
);

async function compressImage(inputPath, outputPath) {
  await sharp(inputPath)
    .resize({
      width: 1920,
      height: 1080,
      fit: 'inside',
      withoutEnlargement: true,
    })
    .webp({ quality: 80 })
    .toFile(outputPath);
  console.log(`Compressed: ${path.basename(inputPath)}`);
}

async function processDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (let entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(inputDir, fullPath);
    const outputPath = path.join(outputDir, relativePath);

    if (entry.isDirectory()) {
      await fs.mkdir(outputPath, { recursive: true });
      await processDirectory(fullPath);
    } else if (entry.isFile() && /\.(jpg|jpeg|png|gif)$/i.test(entry.name)) {
      const outputFilePath = outputPath.replace(/\.[^.]+$/, '.webp');
      await compressImage(fullPath, outputFilePath);
    }
  }
}

async function main() {
  try {
    await fs.mkdir(outputDir, { recursive: true });
    await processDirectory(inputDir);
    console.log('All images have been compressed.');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
