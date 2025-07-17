#!/bin/bash

# Portfolio Deployment Script for Cloudflare + Cloud Storage Setup
# This script builds the Next.js app and uploads it to GCS bucket for Cloudflare

set -e  # Exit on any error

# Configuration
BUCKET_NAME="tomuleseidimitrie.dev"
PROJECT_ID="dimitrie-tomulesei"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Starting deployment for Cloudflare + Cloud Storage...${NC}"

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    # Try to add gcloud to PATH from common installation locations
    if [ -f "/home/dimi/Documents/google-cloud-sdk/bin/gcloud" ]; then
        export PATH="$PATH:/home/dimi/Documents/google-cloud-sdk/bin"
        echo -e "${YELLOW}✅ Added gcloud to PATH from local installation${NC}"
    else
        echo -e "${RED}❌ Error: gcloud CLI is not installed${NC}"
        echo -e "${YELLOW}💡 Install it with: curl https://sdk.cloud.google.com | bash${NC}"
        exit 1
    fi
fi

# Check if yarn is installed
if ! command -v yarn &> /dev/null; then
    echo -e "${RED}❌ Error: yarn is not installed${NC}"
    exit 1
fi

echo -e "${YELLOW}📦 Installing dependencies...${NC}"
yarn install

echo -e "${YELLOW}🏗️  Building Next.js application for Cloudflare...${NC}"
yarn build

# Check if build was successful
if [ ! -d "out" ]; then
    echo -e "${RED}❌ Error: Build failed - 'out' directory not found${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build completed successfully${NC}"

echo -e "${YELLOW}☁️  Uploading to Google Cloud Storage bucket: gs://${BUCKET_NAME}${NC}"

# Clear existing files to avoid conflicts
echo -e "${YELLOW}🗑️  Clearing existing files...${NC}"
gcloud storage rm -r "gs://${BUCKET_NAME}/**" 2>/dev/null || true

# Change to out directory and upload all files recursively
cd out

# Upload files with correct MIME types and preserve directory structure
echo -e "${BLUE}📁 Uploading all files and directories...${NC}"
gcloud storage cp -r . "gs://${BUCKET_NAME}/"

# Set proper cache control headers for Cloudflare
echo -e "${YELLOW}🔧 Setting cache-control headers for Cloudflare...${NC}"
# HTML files: short cache for faster updates
gcloud storage objects update "gs://${BUCKET_NAME}/**/*.html" --cache-control="public, max-age=300" 2>/dev/null || true
gcloud storage objects update "gs://${BUCKET_NAME}/index.html" --cache-control="public, max-age=300" 2>/dev/null || true

# Static assets: longer cache since they have hashed names
gcloud storage objects update "gs://${BUCKET_NAME}/_next/**" --cache-control="public, max-age=31536000, immutable" 2>/dev/null || true
gcloud storage objects update "gs://${BUCKET_NAME}/**/*.{js,css,png,jpg,jpeg,gif,svg,ico,webp}" --cache-control="public, max-age=86400" 2>/dev/null || true

# Go back to project root
cd ..

echo -e "${YELLOW}🌐 Configuring bucket for static website hosting...${NC}"

# Configure bucket for static website hosting
gsutil web set -m index.html -e 404.html "gs://${BUCKET_NAME}"

echo -e "${YELLOW}🔓 Making bucket publicly accessible...${NC}"

# Make bucket publicly accessible
gcloud storage buckets add-iam-policy-binding "gs://${BUCKET_NAME}" \
    --member=allUsers \
    --role=roles/storage.legacyBucketReader

echo -e "${GREEN}🎉 Deployment to Cloud Storage completed successfully!${NC}"

echo -e "${BLUE}📋 Next Steps for Cloudflare Setup:${NC}"
echo -e "${YELLOW}1. Add your domain to Cloudflare${NC}"
echo -e "${YELLOW}2. Set DNS CNAME to point to: storage.googleapis.com${NC}"
echo -e "${YELLOW}3. Enable HTTPS in Cloudflare (Full/Strict mode)${NC}"
echo -e "${YELLOW}4. Configure Page Rules for index.html handling${NC}"
echo -e "${YELLOW}5. Test your site at: https://tomuleseidimitrie.dev${NC}"

echo -e "${BLUE}🌍 Direct Storage URLs (for testing):${NC}"
echo -e "${GREEN}https://storage.googleapis.com/${BUCKET_NAME}/index.html${NC}"

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
        git commit -m "Deploy: Cloudflare migration - $(date '+%Y-%m-%d %H:%M:%S')"
        git push
        echo -e "${GREEN}✅ Changes pushed to GitHub${NC}"
    fi
fi

echo -e "${GREEN}✨ Ready for Cloudflare! Configure DNS and test your site.${NC}"
