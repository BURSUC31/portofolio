# Migration to Cloudflare + Cloud Storage

## 🎯 Goal: Reduce cost from $6-8/month to $0.02/month

### Current Google Cloud Resources Found:
- ❌ Static IP Address: `tomuleseidimitrie-dev-ip` (34.149.116.31)
- ❌ HTTPS Forwarding Rule: `tomuleseidimitrie-dev-https-rule`
- ❌ HTTP Forwarding Rule: `tomuleseidimitrie-dev-http-rule`
- ❌ HTTPS Target Proxy: `tomuleseidimitrie-dev-https-proxy`
- ❌ HTTP Target Proxy: `tomuleseidimitrie-dev-http-proxy`
- ❌ URL Map: `tomuleseidimitrie-dev-urlmap`
- ❌ Backend Bucket: `tomuleseidimitrie-dev-backend`
- ❌ SSL Certificate: `tomuleseidimitrie-dev-ssl`
- ✅ Storage Bucket: `tomuleseidimitrie.dev` (KEEP for Cloudflare)

### What We'll Do:
1. 🗑️ Delete all Load Balancer components ($6.25/month savings)
2. ✅ Keep Cloud Storage for hosting ($0.02/month)
3. ✅ Use Cloudflare for free HTTPS and CDN
4. ✅ Update DNS to point to Cloudflare
5. ⚠️ Accept that URLs will show `.html` extensions

### Ready to Execute:

#### Step 1: Clean Up Google Cloud Resources
```bash
./cleanup-gcloud-resources.sh
```

#### Step 2: Deploy to Cloudflare
```bash
./deploy-cloudflare.sh
```

#### Step 3: Configure Cloudflare DNS
- Point CNAME to: `storage.googleapis.com`
- Enable HTTPS/SSL (Full mode)
- Set up page rules for optimization

**💰 Total Monthly Savings: ~$6.25 → from $6.27/month to $0.02/month**
