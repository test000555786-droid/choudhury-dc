const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const images = [
  { name: 'smile_makeover_before', path: 'C:\\\\Users\\\\aman arshad\\\\.gemini\\\\antigravity\\\\brain\\\\b6454d7d-da02-4641-86f1-55401c3d2ea8\\\\smile_makeover_before_1783663090210.png' },
  { name: 'smile_makeover_after', path: 'C:\\\\Users\\\\aman arshad\\\\.gemini\\\\antigravity\\\\brain\\\\b6454d7d-da02-4641-86f1-55401c3d2ea8\\\\smile_makeover_after_1783663108823.png' },
  { name: 'acne_scar_before', path: 'C:\\\\Users\\\\aman arshad\\\\.gemini\\\\antigravity\\\\brain\\\\b6454d7d-da02-4641-86f1-55401c3d2ea8\\\\acne_scar_before_1783663118376.png' },
  { name: 'acne_scar_after', path: 'C:\\\\Users\\\\aman arshad\\\\.gemini\\\\antigravity\\\\brain\\\\b6454d7d-da02-4641-86f1-55401c3d2ea8\\\\acne_scar_after_1783663129317.png' },
  { name: 'teeth_whitening_before', path: 'C:\\\\Users\\\\aman arshad\\\\.gemini\\\\antigravity\\\\brain\\\\b6454d7d-da02-4641-86f1-55401c3d2ea8\\\\teeth_whitening_before_1783663147415.png' },
  { name: 'teeth_whitening_after', path: 'C:\\\\Users\\\\aman arshad\\\\.gemini\\\\antigravity\\\\brain\\\\b6454d7d-da02-4641-86f1-55401c3d2ea8\\\\teeth_whitening_after_1783663198082.png' }
];

const targetDir = path.join(__dirname, 'public', 'images', 'transformations');

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
