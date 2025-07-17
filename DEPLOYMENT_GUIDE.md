# Portfolio Deployment Guide - Google Cloud Platform

## 🌐 Live Site
**Production URL:** https://tomuleseidimitrie.dev

## 📋 Google Cloud Platform Products Used

### 1. **Google Cloud Storage (GCS)**
- **Purpose:** Static website hosting and file storage
- **Bucket Name:** `tomuleseidimitrie.dev`
- **Configuration:**
  - Website hosting enabled
  - Public read access for all objects
  - Custom domain binding

### 2. **Google Cloud Load Balancer (HTTP(S) Load Balancer)**
- **Purpose:** SSL termination, custom domain routing, URL rewriting
- **Components:**
  - **Backend Bucket:** `tomuleseidimitrie-dev-backend`
  - **URL Map:** `tomuleseidimitrie-dev-urlmap`
  - **SSL Certificate:** Managed SSL certificate for `tomuleseidimitrie.dev`
  - **Target HTTPS Proxy:** Routes HTTPS traffic
  - **Target HTTP Proxy:** Redirects HTTP to HTTPS
  - **Global Forwarding Rules:** Routes traffic to proxies

### 3. **Google Cloud DNS (implicitly)**
- **Purpose:** Domain verification and management
- **Configuration:** A record pointing `tomuleseidimitrie.dev` to Load Balancer IP

### 4. **Google Cloud IAM (Identity and Access Management)**
- **Purpose:** Bucket permissions and public access
- **Roles:**
  - `storage.objectViewer` for `allUsers`
  - `storage.legacyBucketReader` for `allUsers`

## 🏗️ Architecture Overview

```
Internet → Google Cloud Load Balancer → Google Cloud Storage Bucket
    ↓
[Custom Domain: tomuleseidimitrie.dev]
    ↓
[SSL Certificate (HTTPS)]
    ↓
[URL Rewriting: /photos → /photos.html]
    ↓
[Static Files served from GCS Bucket]
```

## 🛠️ Deployment Process

### Initial Setup Commands:

1. **Create GCS Bucket:**
```bash
gsutil mb -c STANDARD -l europe-west1 gs://tomuleseidimitrie.dev
```

2. **Configure Website Hosting:**
```bash
gsutil web set -m index.html -e 404.html gs://tomuleseidimitrie.dev
```

3. **Set Public Permissions:**
```bash
gcloud storage buckets add-iam-policy-binding gs://tomuleseidimitrie.dev \
    --member=allUsers --role=roles/storage.objectViewer

gcloud storage buckets add-iam-policy-binding gs://tomuleseidimitrie.dev \
    --member=allUsers --role=roles/storage.legacyBucketReader
```

### Load Balancer Setup:

1. **Create Backend Bucket:**
```bash
gcloud compute backend-buckets create tomuleseidimitrie-dev-backend \
    --gcs-bucket-name=tomuleseidimitrie.dev
```

2. **Create URL Map with URL Rewriting:**
```bash
gcloud compute url-maps create tomuleseidimitrie-dev-urlmap \
    --default-backend-bucket=tomuleseidimitrie-dev-backend
```

3. **Create SSL Certificate:**
```bash
gcloud compute ssl-certificates create tomuleseidimitrie-dev-ssl \
    --domains=tomuleseidimitrie.dev --global
```

4. **Create Target Proxies:**
```bash
gcloud compute target-https-proxies create tomuleseidimitrie-dev-https-proxy \
    --url-map=tomuleseidimitrie-dev-urlmap \
    --ssl-certificates=tomuleseidimitrie-dev-ssl

gcloud compute target-http-proxies create tomuleseidimitrie-dev-http-proxy \
    --url-map=tomuleseidimitrie-dev-urlmap
```

5. **Reserve Static IP:**
```bash
gcloud compute addresses create tomuleseidimitrie-dev-ip --global
```

6. **Create Forwarding Rules:**
```bash
gcloud compute forwarding-rules create tomuleseidimitrie-dev-https-rule \
    --address=tomuleseidimitrie-dev-ip \
    --global \
    --target-https-proxy=tomuleseidimitrie-dev-https-proxy \
    --ports=443

gcloud compute forwarding-rules create tomuleseidimitrie-dev-http-rule \
    --address=tomuleseidimitrie-dev-ip \
    --global \
    --target-http-proxy=tomuleseidimitrie-dev-http-proxy \
    --ports=80
```

## 📁 Project Structure

```
my-portfolio/
├── app/                    # Next.js App Router
├── components/             # React components
├── public/                 # Static assets
├── out/                    # Build output (git ignored)
├── deploy-to-gcloud.sh     # Deployment script
├── setup-url-rewriting.sh  # URL rewriting configuration
├── content-types.txt       # MIME types for GCS
├── next.config.ts          # Next.js configuration
└── package.json           # Dependencies
```

## 🔧 Configuration Files

### Next.js Configuration (`next.config.ts`):
- `output: 'export'` - Static export
- `trailingSlash: false` - Clean URLs
- `assetPrefix` - Points to custom domain in production
- `images.unoptimized: true` - Required for static export

### Deployment Script (`deploy-to-gcloud.sh`):
- Builds Next.js application
- Uploads files to GCS bucket
- Sets proper MIME types
- Configures bucket permissions
- Commits changes to Git

## 🌍 Custom Domain Setup

1. **Domain Verification:** Verified ownership of `tomuleseidimitrie.dev`
2. **DNS Configuration:** A record pointing to Load Balancer IP `34.149.116.31`
3. **SSL Certificate:** Auto-managed by Google Cloud
4. **URL Rewriting:** Clean URLs without `.html` extensions

## 🚀 Automatic Deployment

Run the deployment script:
```bash
./deploy-to-gcloud.sh
```

This script:
1. ✅ Installs dependencies
2. ✅ Builds the Next.js application
3. ✅ Fixes asset paths for production
4. ✅ Uploads all files to GCS bucket
5. ✅ Sets cache-control headers
6. ✅ Configures bucket for website hosting
7. ✅ Sets public permissions
8. ✅ Commits and pushes to GitHub

## 💰 Cost Considerations

- **Google Cloud Storage:** ~$0.020 per GB/month
- **Load Balancer:** ~$18/month base + $0.008 per GB processed
- **SSL Certificate:** Free (Google-managed)
- **Egress Traffic:** $0.12 per GB (first 1TB free per month)

**Estimated Monthly Cost:** $20-30 for a personal portfolio

## 🔒 Security Features

- ✅ HTTPS enforced
- ✅ Google-managed SSL certificates
- ✅ CORS policies configured
- ✅ Public read-only access to static files
- ✅ No server-side code execution

## 🎯 Features Implemented

- ✅ Custom domain with HTTPS
- ✅ Clean URLs (no trailing slashes)
- ✅ Custom favicon from profile picture
- ✅ Multiple theme support (light/dark/pink)
- ✅ Responsive design
- ✅ Fast global CDN delivery
- ✅ Automatic deployment pipeline
- ✅ Version control integration

## 📞 Support Resources

- [Google Cloud Storage Documentation](https://cloud.google.com/storage/docs)
- [Google Cloud Load Balancer Documentation](https://cloud.google.com/load-balancing/docs)
- [Next.js Static Export Documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
