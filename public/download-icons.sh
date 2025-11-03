#!/bin/bash

# Script to download technology icons from Simple Icons
# Usage: chmod +x download-icons.sh && ./download-icons.sh

echo "Downloading technology icons..."

# Create icons directory if it doesn't exist
mkdir -p public/icons

# Base URL for Simple Icons
BASE_URL="https://cdn.simpleicons.org"

# Array of icons to download (icon-name:filename)
declare -a icons=(
    "react:react.svg"
    "nextdotjs:nextjs.svg"
    "flutter:flutter.svg"
    "tailwindcss:tailwind.svg"
    "javascript:javascript.svg"
    "html5:html.svg"
    "redux:redux.svg"
    "springboot:spring.svg"
    "python:python.svg"
    "nodedotjs:nodejs.svg"
    "django:django.svg"
    "graphql:graphql.svg"
    "android:android.svg"
    "oracle:java.svg"
    "dart:dart.svg"
    "firebase:firebase.svg"
    "googlecloud:gcp.svg"
    "postgresql:postgresql.svg"
    "hasura:hasura.svg"
    "git:git.svg"
    "docker:docker.svg"
    "stripe:stripe.svg"
    "vite:vite.svg"
)

# Download each icon
for icon in "${icons[@]}"; do
    IFS=':' read -r icon_name filename <<< "$icon"
    echo "Downloading $filename..."
    curl -s "${BASE_URL}/${icon_name}" -o "public/icons/${filename}"
done

# Create placeholder icons for custom ones
echo "Creating placeholder icons for custom items..."

# API icon (generic)
cat > public/icons/api.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
  <path d="M2 17l10 5 10-5"/>
  <path d="M2 12l10 5 10-5"/>
</svg>
EOF

# Cloud Functions icon
cat > public/icons/cloud-functions.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
  <polyline points="16 14 12 10 8 14"/>
</svg>
EOF

# CI/CD icon
cat > public/icons/cicd.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <circle cx="12" cy="12" r="10"/>
  <polyline points="12 6 12 12 16 14"/>
  <path d="M16.24 7.76a6 6 0 0 1 0 8.49"/>
</svg>
EOF

# Agora icon (placeholder)
cat > public/icons/agora.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
  <circle cx="9" cy="7" r="4"/>
  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
</svg>
EOF

echo "✓ Icon download complete!"
echo "Icons saved to public/icons/"
echo ""
echo "Note: Some icons are placeholders. You may want to replace them with official logos."
