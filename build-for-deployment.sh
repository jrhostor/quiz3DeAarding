#!/bin/bash

echo "Building project for deployment..."
npm run build

echo "Fixing deployment structure..."
node fix-deployment.js

echo "Verifying deployment structure..."
if [ -f "dist/index.html" ]; then
    echo "✓ index.html found in dist/"
else
    echo "✗ index.html not found in dist/"
    exit 1
fi

if [ -d "dist/assets" ]; then
    echo "✓ assets directory found in dist/"
else
    echo "✗ assets directory not found in dist/"
    exit 1
fi

echo "🎉 Build completed successfully! Ready for deployment."
echo "Files in dist/:"
ls -la dist/