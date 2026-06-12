const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const artifactDir = 'C:\\Users\\aman arshad\\.gemini\\antigravity\\brain\\ea634207-a91c-40c2-89e2-a762b9db6277';
const outputDir = path.join(__dirname, 'public', 'images', 'skin_services');

const images = [
  { name: 'acne-pigmentation', file: 'skin_acne_pigmentation_1781069017346.png' },
  { name: 'anti-ageing', file: 'blog_skincare_habits_1781066124746.png' },
  { name: 'laser-hair-removal', file: 'laser_hair_removal_1781064250173.png' },
  { name: 'skin-brightening', file: 'hydrafacial_glow_1781064229254.png' },
  { name: 'hair-scalp', file: 'blog_hair_loss_1781066097519.png' },
  { name: 'specialised-skin', file: 'acne_scar_treatment_1781064270031.png' },
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
