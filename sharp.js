const path = require('path');
const sharp = require('sharp');
const fs = require('fs');

const target = path.resolve(__dirname, 'dist/images/heros');
const destination = path.resolve(__dirname, 'dist/images/heros-resized');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination, { recursive: true });
}

fs.readdirSync(target)
  .forEach((image) => {
    sharp(`${target}/${image}`)
      .resize(650)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-650.jpg`,
      ));

    sharp(`${target}/${image}`)
      .resize(400)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-400.jpg`,
      ));
  });
