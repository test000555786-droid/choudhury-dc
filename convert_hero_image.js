const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetPath = path.join(__dirname, 'public', 'images', 'hero_card_bg.webp');
const sourcePath = 'C:\\Users\\aman arshad\\.gemini\\antigravity\\brain\\ea634207-a91c-40c2-89e2-a762b9db6277\\hero_card_bg_1781066833310.png';

async function convertImage() {
  try {
    await sharp(sourcePath)
      .webp({ quality: 80 })
      .toFile(targetPath);
    console.log(`Converted hero background to webp`);
  } catch (err) {
    console.error(`Failed to convert:`, err);
  }
}

convertImage();
