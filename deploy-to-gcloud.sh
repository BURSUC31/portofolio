#!/bin/bash

# Portfolio Deployment Script to Google Cloud Storage
# This script builds the Next.js app and uploads it to your GCS bucket

set -e  # Exit on any error

# Configuration
BUCKET_NAME="dimitrie-portfolio-website-eu"
PROJECT_ID="dimitrie-tomulesei"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Starting deployment to Google Cloud Storage...${NC}"

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo -e "${RED}❌ Error: gcloud CLI is not installed${NC}"
    exit 1
fi

# Check if yarn is installed
if ! command -v yarn &> /dev/null; then
    echo -e "${RED}❌ Error: yarn is not installed${NC}"
    exit 1
fi

echo -e "${YELLOW}📦 Installing dependencies...${NC}"
yarn install

echo -e "${YELLOW}🏗️  Building Next.js application...${NC}"
yarn build

# Check if build was successful
if [ ! -d "out" ]; then
    echo -e "${RED}❌ Error: Build failed - 'out' directory not found${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build completed successfully${NC}"

echo -e "${YELLOW}☁️  Uploading to Google Cloud Storage bucket: gs://${BUCKET_NAME}${NC}"

# Optional: Clear existing files to avoid conflicts (uncomment if needed)
echo -e "${YELLOW}🗑️  Clearing existing files...${NC}"
gcloud storage rm -r "gs://${BUCKET_NAME}/**" 2>/dev/null || true

# Change to out directory and upload all files recursively
cd out

# Upload files with correct MIME types and preserve directory structure
echo -e "${BLUE}📁 Uploading all files and directories...${NC}"
gcloud storage rsync -r . "gs://${BUCKET_NAME}/" -h "Cache-Control:no-cache, max-age=0"

# Go back to project root
cd ..

echo -e "${YELLOW}🌐 Configuring bucket for static website hosting...${NC}"

# Configure bucket for static website hosting
gcloud storage buckets update "gs://${BUCKET_NAME}" \
    --web-main-page-suffix=index.html \
    --web-error-page=404.html

echo -e "${YELLOW}🔓 Making bucket publicly accessible...${NC}"

# Make bucket publicly accessible
gcloud storage buckets add-iam-policy-binding "gs://${BUCKET_NAME}" \
    --member=allUsers \
    --role=roles/storage.objectViewer

echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
echo -e "${BLUE}🌍 Your website is live at:${NC}"
echo -e "${GREEN}https://storage.googleapis.com/${BUCKET_NAME}/index.html${NC}"
echo -e "${BLUE}🌍 Alternative URL (may work better):${NC}"
echo -e "${GREEN}http://${BUCKET_NAME}.storage.googleapis.com${NC}"

echo -e "${YELLOW}📝 Note: If you see asset loading errors, try the alternative URL above${NC}"

# Optional: Commit and push changes to GitHub
read -p "Do you want to commit and push changes to GitHub? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}📤 Committing and pushing to GitHub...${NC}"
    
    # Check if there are any changes to commit
    if git diff --quiet && git diff --staged --quiet; then
        echo -e "${BLUE}ℹ️  No changes to commit${NC}"
    else
        git add .
        git commit -m "Deploy: Updated portfolio - $(date '+%Y-%m-%d %H:%M:%S')"
        git push
        echo -e "${GREEN}✅ Changes pushed to GitHub${NC}"
    fi
fi

echo -e "${GREEN}✨ All done! Your portfolio is live on Google Cloud Storage${NC}"
