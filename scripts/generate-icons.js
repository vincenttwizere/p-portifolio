import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = fileURLToPath(new URL('.', import.meta.url));

const sizes = [192, 512];

async function generateIcons() {
    const svgBuffer = readFileSync(join(__dirname, '../public/icons/icon.svg'));
    
    for (const size of sizes) {
        await sharp(svgBuffer)
            .resize(size, size)
            .png()
            .toFile(join(__dirname, `../public/icons/icon-${size}x${size}.png`));
        
        console.log(`Generated ${size}x${size} icon`);
    }
}

generateIcons().catch(console.error); 