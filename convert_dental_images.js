const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const artifactDir = 'C:\\Users\\aman arshad\\.gemini\\antigravity\\brain\\ea634207-a91c-40c2-89e2-a762b9db6277';
const outputDir = path.join(__dirname, 'public', 'images', 'dental_services');

const images = [
  { name: 'general-dentistry', file: 'blog_dentist_visit_1781066072651.png' },
  { name: 'cosmetic-dentistry', file: 'smile_makeover_1781064192612.png' },
  { name: 'orthodontics', file: 'blog_braces_1781066083758.png' },
  { name: 'pediatric-dentistry', file: 'teeth_whitening_1781064260546.png' },
  { name: 'advanced-procedures', file: 'dental_implants_1781064215901.png' },
  { name: 'emergency-dental', file: 'root_canal_1781064282345.png' },
];

async function convertImages() {
  for (const img of images) {
    const sourcePath = path.join(artifactDir, img.file);
    const targetPath = path.join(outputDir, `${img.name}.webp`);
    try {
      if (fs.existsSync(sourcePath)) {
        await sharp(sourcePath)
          .webp({ quality: 80 })
          .toFile(targetPath);
        console.log(`Converted ${img.name} to webp`);
      } else {
        console.error(`Source not found: ${sourcePath}`);
      }
    } catch (err) {
      console.error(`Failed to convert ${img.name}:`, err);
    }
  }
}

convertImages();
