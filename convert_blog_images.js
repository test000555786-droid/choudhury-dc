const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const images = [
  { name: '10-signs-you-need-to-visit-dentist', path: 'C:\\Users\\aman arshad\\.gemini\\antigravity\\brain\\ea634207-a91c-40c2-89e2-a762b9db6277\\blog_dentist_visit_1781066072651.png' },
  { name: 'how-to-choose-braces-for-your-child', path: 'C:\\Users\\aman arshad\\.gemini\\antigravity\\brain\\ea634207-a91c-40c2-89e2-a762b9db6277\\blog_braces_1781066083758.png' },
  { name: 'prp-vs-minoxidil-hair-loss', path: 'C:\\Users\\aman arshad\\.gemini\\antigravity\\brain\\ea634207-a91c-40c2-89e2-a762b9db6277\\blog_hair_loss_1781066097519.png' },
  { name: 'truth-about-teeth-whitening', path: 'C:\\Users\\aman arshad\\.gemini\\antigravity\\brain\\ea634207-a91c-40c2-89e2-a762b9db6277\\blog_teeth_whitening_1781066112540.png' },
  { name: '5-daily-habits-ruining-your-skin', path: 'C:\\Users\\aman arshad\\.gemini\\antigravity\\brain\\ea634207-a91c-40c2-89e2-a762b9db6277\\blog_skincare_habits_1781066124746.png' },
  { name: 'dental-implants-vs-bridges', path: 'C:\\Users\\aman arshad\\.gemini\\antigravity\\brain\\ea634207-a91c-40c2-89e2-a762b9db6277\\blog_implants_bridges_1781066135697.png' }
];

const targetDir = path.join(__dirname, 'public', 'images', 'blog');

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
