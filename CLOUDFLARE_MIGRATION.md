# Migration to Cloudflare + Cloud Storage

## 🎯 Goal: Reduce cost from $6-8/month to $0.02/month

### What We'll Do:
1. ✅ Remove Google Cloud Load Balancer ($6.25/month savings)
2. ✅ Keep Cloud Storage for hosting ($0.02/month)
3. ✅ Add Cloudflare for free HTTPS and CDN
4. ✅ Update DNS to point to Cloudflare
5. ⚠️ Accept that URLs will show `.html` extensions

### Steps:

#### 1. Update Next.js Configuration
- Remove `assetPrefix` (no longer needed)
- Set `trailingSlash: true` to generate `/photos/index.html` structure
- Update navigation links

#### 2. Clean Up Google Cloud Resources
- Delete Load Balancer components
- Delete SSL certificate
- Delete static IP
- Keep only the Storage bucket

#### 3. Configure Cloudflare
- Add domain to Cloudflare
- Configure DNS records
- Enable HTTPS/SSL
- Set up page rules for optimization

#### 4. Update Deployment
- Modify deployment script
- Remove load balancer references
- Direct deployment to storage only

Let's start the migration!
