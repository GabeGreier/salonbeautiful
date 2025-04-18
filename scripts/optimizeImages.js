import sharp from 'sharp';
import { readdir } from 'fs/promises';
import path from 'path';

const optimizeImages = async () => {
  const assetDir = path.join(process.cwd(), 'src/assets');
  const files = await readdir(assetDir);

  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
      const filePath = path.join(assetDir, file);

      // Create multiple sizes
      const sizes = [320, 640, 1280];
      
      for (const size of sizes) {
        const sizeOutputPath = path.join(assetDir, `optimized-${size}-${file}`);
        await sharp(filePath)
          .webp({ quality: 80 })
          .resize(size, null, { 
            withoutEnlargement: true,
            fit: 'inside'
          })
          .toFile(sizeOutputPath);
      }
    }
  }
};

optimizeImages();