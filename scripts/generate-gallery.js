
const fs = require('fs');
const path = require('path');

function generateGalleryData() {
  const gallerySourcePath = path.join(process.cwd(), 'public', 'gallery-source');
  const outputPath = path.join(process.cwd(), 'src', 'data', 'gallery-data.ts');

  // Create data directory if it doesn't exist
  const dataDir = path.dirname(outputPath);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  let galleryData = {
    "montaje-de-equipos": [],
    "servicios-de-emergencia": []
  };

  try {
    // Check if gallery-source directory exists
    if (fs.existsSync(gallerySourcePath)) {
      const folders = fs.readdirSync(gallerySourcePath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

      for (const folder of folders) {
        const folderPath = path.join(gallerySourcePath, folder);
        const files = fs.readdirSync(folderPath)
          .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
          .map(file => `/gallery-source/${folder}/${file}`);
        
        galleryData[folder] = files;
      }
    }
  } catch (error) {
    console.warn('Error reading gallery source:', error);
  }

  // Generate TypeScript file
  const tsContent = `// Auto-generated file - do not edit manually
export const galleryData = ${JSON.stringify(galleryData, null, 2)};

export type GalleryData = typeof galleryData;
`;

  fs.writeFileSync(outputPath, tsContent);
  console.log('Gallery data generated successfully');
}

generateGalleryData();
