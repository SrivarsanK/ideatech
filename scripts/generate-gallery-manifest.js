import fs from 'fs';
import path from 'path';

const publicDir = path.join(process.cwd(), 'public');
const outputDir = path.join(process.cwd(), 'src/data');
const outputFile = path.join(outputDir, 'event-gallery-manifest.json');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Events configurations (folder name -> key in JSON)
const eventFolders = {
    'Hackcelerate': 'hackcelerate',
    'TechnoRally': 'technoRally',
    'DevSummit': 'devSummit'
};

const supportedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];

const manifest = {};

for (const [folderName, key] of Object.entries(eventFolders)) {
    const fullPath = path.join(publicDir, folderName);
    if (fs.existsSync(fullPath)) {
        try {
            const files = fs.readdirSync(fullPath);
            const images = files
                .filter(file => {
                    const ext = path.extname(file).toLowerCase();
                    return supportedExtensions.includes(ext);
                })
                .map(file => `/${folderName}/${file}`); // Absolute path from public root

            manifest[key] = images;
            console.log(`Found ${images.length} images for ${folderName}`);
        } catch (err) {
            console.error(`Error reading ${folderName}:`, err);
            manifest[key] = [];
        }
    } else {
        console.warn(`Directory not found: ${fullPath}`);
        manifest[key] = [];
    }
}

fs.writeFileSync(outputFile, JSON.stringify(manifest, null, 2));
console.log(`Gallery manifest generated at ${outputFile}`);
