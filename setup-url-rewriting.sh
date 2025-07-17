#!/bin/bash

# Script to configure Google Cloud Load Balancer for clean URLs
# This removes the need for /index.html in URLs

set -e

# Configuration
PROJECT_ID="dimitrie-tomulesei"
URL_MAP_NAME="tomuleseidimitrie-dev-urlmap"
BACKEND_BUCKET_NAME="tomuleseidimitrie-dev-backend"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔧 Setting up URL rewriting for clean URLs...${NC}"

# Set the project
gcloud config set project $PROJECT_ID

echo -e "${YELLOW}📝 Creating URL map with path matchers for clean URLs...${NC}"

# Create a new URL map configuration that handles clean URLs
cat > url-map-config.yaml << EOF
name: $URL_MAP_NAME
defaultService: projects/$PROJECT_ID/global/backendBuckets/$BACKEND_BUCKET_NAME
pathMatchers:
- name: clean-urls
  defaultService: projects/$PROJECT_ID/global/backendBuckets/$BACKEND_BUCKET_NAME
  pathRules:
  # Handle root path
  - paths:
    - /
    service: projects/$PROJECT_ID/global/backendBuckets/$BACKEND_BUCKET_NAME
    routeAction:
      urlRewrite:
        pathPrefixRewrite: /index.html
  # Handle clean URLs for main pages
  - paths:
    - /cv
    service: projects/$PROJECT_ID/global/backendBuckets/$BACKEND_BUCKET_NAME
    routeAction:
      urlRewrite:
        pathPrefixRewrite: /cv/index.html
  - paths:
    - /photos
    service: projects/$PROJECT_ID/global/backendBuckets/$BACKEND_BUCKET_NAME
    routeAction:
      urlRewrite:
        pathPrefixRewrite: /photos/index.html
  - paths:
    - /projects
    service: projects/$PROJECT_ID/global/backendBuckets/$BACKEND_BUCKET_NAME
    routeAction:
      urlRewrite:
        pathPrefixRewrite: /projects/index.html
  # Handle trailing slash versions - rewrite to same files
  - paths:
    - /cv/
    service: projects/$PROJECT_ID/global/backendBuckets/$BACKEND_BUCKET_NAME
    routeAction:
      urlRewrite:
        pathPrefixRewrite: /cv/index.html
  - paths:
    - /photos/
    service: projects/$PROJECT_ID/global/backendBuckets/$BACKEND_BUCKET_NAME
    routeAction:
      urlRewrite:
        pathPrefixRewrite: /photos/index.html
  - paths:
    - /projects/
    service: projects/$PROJECT_ID/global/backendBuckets/$BACKEND_BUCKET_NAME
    routeAction:
      urlRewrite:
        pathPrefixRewrite: /projects/index.html
  # Default catch-all for other paths
  - paths:
    - /*
    service: projects/$PROJECT_ID/global/backendBuckets/$BACKEND_BUCKET_NAME
hostRules:
- hosts:
  - tomuleseidimitrie.dev
  pathMatcher: clean-urls
EOF

echo -e "${YELLOW}🔄 Updating URL map with new configuration...${NC}"

# Import the URL map configuration
gcloud compute url-maps import $URL_MAP_NAME \
    --source=url-map-config.yaml \
    --global

echo -e "${GREEN}✅ URL map updated successfully!${NC}"

# Clean up temporary file
rm url-map-config.yaml

echo -e "${GREEN}🎉 URL rewriting setup complete!${NC}"
echo -e "${BLUE}📋 Your site should now be accessible with clean URLs:${NC}"
echo -e "   🌐 https://tomuleseidimitrie.dev/"
echo -e "   📄 https://tomuleseidimitrie.dev/cv"
echo -e "   📸 https://tomuleseidimitrie.dev/photos"
echo -e "   💼 https://tomuleseidimitrie.dev/projects"
echo ""
echo -e "${YELLOW}⏰ Changes may take a few minutes to propagate...${NC}"
