#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, 'dist');
const publicDir = path.resolve(distDir, 'public');

// Check if dist/public exists
if (fs.existsSync(publicDir)) {
  console.log('Moving files from dist/public to dist...');
  
  // Read all files and directories in dist/public
  const items = fs.readdirSync(publicDir);
  
  for (const item of items) {
    const srcPath = path.resolve(publicDir, item);
    const destPath = path.resolve(distDir, item);
    
    // Remove destination if it already exists
    if (fs.existsSync(destPath)) {
      if (fs.statSync(destPath).isDirectory()) {
        fs.rmSync(destPath, { recursive: true, force: true });
      } else {
        fs.unlinkSync(destPath);
      }
    }
    
    // Move files and directories
    fs.renameSync(srcPath, destPath);
    console.log(`Moved ${item}`);
  }
  
  // Remove the now-empty public directory
  fs.rmdirSync(publicDir);
  console.log('Removed empty public directory');
  console.log('Deployment fix completed successfully!');
} else {
  console.log('No dist/public directory found, nothing to fix.');
}