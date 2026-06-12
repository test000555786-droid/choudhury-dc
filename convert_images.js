const fs = require('fs');
const path = require('path');
const sharp = require('sharp'); // requires npm install sharp if not available

const images = [
  { name: 'smile_makeover', path: 'C:\\Users\\aman arshad\\.gemini\\antigravity\\brain\\ea634207-a91c-40c2-89e2-a762b9db6277\\smile_makeover_1781064192612.png' },
  { name: 'dental_implants', path: 'C:\\Users\\aman arshad\\.gemini\\antigravity\\brain\\ea634207-a91c-40c2-89e2-a762b9db6277\\dental_implants_1781064215901.png' },
  { name: 'hydrafacial_glow', path: 'C:\\Users\\aman arshad\\.gemini\\antigravity\\brain\\ea634207-a91c-40c2-89e2-a762b9db6277\\hydrafacial_glow_1781064229254.png' },
  { name: 'braces_transformation', path: 'C:\\Users\\aman arshad\\.gemini\\antigravity\\brain\\ea634207-a91c-40c2-89e2-a762b9db6277\\braces_transformation_1781064241005.png' },
  { name: 'laser_hair_removal', path: 'C:\\Users\\aman arshad\\.gemini\\antigravity\\brain\\ea634207-a91c-40c2-89e2-a762b9db6277\\laser_hair_removal_1781064250173.png' },
  { name: 'teeth_whitening', path: 'C:\\Users\\aman arshad\\.gemini\\antigravity\\brain\\ea634207-a91c-40c2-89e2-a762b9db6277\\teeth_whitening_1781064260546.png' },
  { name: 'acne_scar_treatment', path: 'C:\\Users\\aman arshad\\.gemini\\antigravity\\brain\\ea634207-a91c-40c2-89e2-a762b9db6277\\acne_scar_treatment_1781064270031.png' },
  { name: 'root_canal', path: 'C:\\Users\\aman arshad\\.gemini\\antigravity\\brain\\ea634207-a91c-40c2-89e2-a762b9db6277\\root_canal_1781064282345.png' },
  { name: 'prp_hair_therapy', path: 'C:\\Users\\aman arshad\\.gemini\\antigravity\\brain\\ea634207-a91c-40c2-89e2-a762b9db6277\\prp_hair_therapy_1781064295158.png' }
];

const targetDir = path.join(__dirname, 'public', 'images', 'gallery');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

async function convertImages() {
  for (const img of images) {
    const targetPath = path.join(targetDir, `${img.name}.webp`);
    try {
      await sharp(img.path)
        .webp({ quality: 80 })
        .toFile(targetPath);
      console.log(`Converted ${img.name} to webp`);
    } catch (err) {
      console.error(`Failed to convert ${img.name}:`, err);
    }
  }
}

convertImages();
