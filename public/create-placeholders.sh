#!/bin/bash

# Script to create placeholder images using ImageMagick
# Usage: chmod +x create-placeholders.sh && ./create-placeholders.sh

echo "Creating placeholder images..."

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "ImageMagick is not installed."
    echo "Install it with: brew install imagemagick"
    echo ""
    echo "Alternatively, you can:"
    echo "1. Add your own images manually"
    echo "2. Use online tools like https://placeholder.com/"
    exit 1
fi

# Create directories
mkdir -p public/images/projects

# Create profile placeholder (800x800)
convert -size 800x800 \
    -background "#3B82F6" \
    -fill white \
    -gravity center \
    -pointsize 200 \
    label:"GP" \
    public/images/profile.jpg

echo "✓ Created profile placeholder"

# Create project placeholders (1200x800)
declare -a projects=(
    "bhitech:Real-Time\nCommunication"
    "byne-media:Digital\nAdvertising"
    "xplicity:No-Code\nBuilder"
    "smart-parking:Smart\nParking"
)

colors=("#3B82F6" "#8B5CF6" "#10B981" "#F59E0B")
index=0

for project in "${projects[@]}"; do
    IFS=':' read -r filename text <<< "$project"
    color="${colors[$index]}"
    
    convert -size 1200x800 \
        -background "$color" \
        -fill white \
        -gravity center \
        -pointsize 80 \
        label:"$text" \
        "public/images/projects/${filename}.jpg"
    
    echo "✓ Created ${filename}.jpg placeholder"
    ((index++))
done

echo ""
echo "✓ All placeholder images created!"
echo ""
echo "Replace these placeholders with actual images:"
echo "  - public/images/profile.jpg (your photo)"
echo "  - public/images/projects/*.jpg (project screenshots)"
