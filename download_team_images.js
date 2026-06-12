const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(__dirname, 'public', 'images', 'team');

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const images = [
  { name: 'dr-aman.webp', url: 'https://images.unsplash.com/photo-1612349317150-e410f624c427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=webp' },
  { name: 'dr-sarah.webp', url: 'https://images.unsplash.com/photo-1594824436998-05a92a061482?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=webp' },
  { name: 'dr-ritesh.webp', url: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=webp' },
  { name: 'dr-priya.webp', url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=webp' }
];

const download = function(url, dest, cb) {
  const file = fs.createWriteStream(dest);
  https.get(url, function(response) {
    // Check if redirect
    if (response.statusCode === 301 || response.statusCode === 302) {
      return download(response.headers.location, dest, cb);
    }
    response.pipe(file);
    file.on('finish', function() {
      file.close(cb);
    });
  }).on('error', function(err) {
    fs.unlink(dest, () => {});
    if (cb) cb(err.message);
  });
};

images.forEach(img => {
  download(img.url, path.join(dir, img.name), (err) => {
    if (err) console.error(`Failed to download ${img.name}: ${err}`);
    else console.log(`Downloaded ${img.name}`);
  });
});
