#!/bin/bash

# Cleanup Script: Remove Google Cloud Load Balancer Resources
# Keep only the Storage bucket for Cloudflare integration

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🧹 Starting Google Cloud Load Balancer cleanup...${NC}"
echo -e "${YELLOW}⚠️  This will delete Load Balancer resources and keep only Storage bucket${NC}"

# Add gcloud to PATH if needed
if ! command -v gcloud &> /dev/null; then
    if [ -f "/home/dimi/Documents/google-cloud-sdk/bin/gcloud" ]; then
        export PATH="$PATH:/home/dimi/Documents/google-cloud-sdk/bin"
        echo -e "${YELLOW}✅ Added gcloud to PATH${NC}"
    else
        echo -e "${RED}❌ Error: gcloud CLI not found${NC}"
        exit 1
    fi
fi

echo -e "${YELLOW}📋 Resources to be deleted:${NC}"
echo -e "  🔸 Forwarding Rules (HTTP/HTTPS)"
echo -e "  🔸 Target Proxies (HTTP/HTTPS)"
echo -e "  🔸 URL Map"
echo -e "  🔸 Backend Bucket"
echo -e "  🔸 SSL Certificate"
echo -e "  🔸 Static IP Address"
echo -e "${GREEN}📋 Resources to keep:${NC}"
echo -e "  ✅ Storage Bucket (tomuleseidimitrie.dev)"

read -p "Continue with cleanup? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${BLUE}ℹ️  Cleanup cancelled${NC}"
    exit 0
fi

echo -e "${YELLOW}🗑️  Step 1: Deleting forwarding rules...${NC}"
gcloud compute forwarding-rules delete tomuleseidimitrie-dev-https-rule --global --quiet || echo -e "${YELLOW}⚠️  HTTPS forwarding rule not found${NC}"
gcloud compute forwarding-rules delete tomuleseidimitrie-dev-http-rule --global --quiet || echo -e "${YELLOW}⚠️  HTTP forwarding rule not found${NC}"

echo -e "${YELLOW}🗑️  Step 2: Deleting target proxies...${NC}"
gcloud compute target-https-proxies delete tomuleseidimitrie-dev-https-proxy --quiet || echo -e "${YELLOW}⚠️  HTTPS proxy not found${NC}"
gcloud compute target-http-proxies delete tomuleseidimitrie-dev-http-proxy --quiet || echo -e "${YELLOW}⚠️  HTTP proxy not found${NC}"

echo -e "${YELLOW}🗑️  Step 3: Deleting URL map...${NC}"
gcloud compute url-maps delete tomuleseidimitrie-dev-urlmap --quiet || echo -e "${YELLOW}⚠️  URL map not found${NC}"

echo -e "${YELLOW}🗑️  Step 4: Deleting backend bucket...${NC}"
gcloud compute backend-buckets delete tomuleseidimitrie-dev-backend --quiet || echo -e "${YELLOW}⚠️  Backend bucket not found${NC}"

echo -e "${YELLOW}🗑️  Step 5: Deleting SSL certificate...${NC}"
gcloud compute ssl-certificates delete tomuleseidimitrie-dev-ssl --quiet || echo -e "${YELLOW}⚠️  SSL certificate not found${NC}"

echo -e "${YELLOW}🗑️  Step 6: Deleting static IP address...${NC}"
gcloud compute addresses delete tomuleseidimitrie-dev-ip --global --quiet || echo -e "${YELLOW}⚠️  Static IP not found${NC}"

echo -e "${GREEN}✅ Load Balancer cleanup completed!${NC}"

echo -e "${BLUE}📊 Verifying remaining resources...${NC}"
echo -e "${YELLOW}🪣 Storage buckets:${NC}"
gcloud storage ls || echo -e "${RED}❌ No buckets found${NC}"

echo -e "${YELLOW}💰 Monthly cost savings: ~$6.25/month${NC}"
echo -e "${GREEN}🎉 Ready for Cloudflare! Your storage bucket is ready for CDN integration.${NC}"

echo -e "${BLUE}📋 Next steps:${NC}"
echo -e "${YELLOW}1. Configure Cloudflare DNS to point to: storage.googleapis.com${NC}"
echo -e "${YELLOW}2. Run deployment script: ./deploy-cloudflare.sh${NC}"
echo -e "${YELLOW}3. Test your site through Cloudflare${NC}"
