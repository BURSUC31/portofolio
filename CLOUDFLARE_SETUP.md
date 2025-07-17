# Cloudflare Setup Guide

This guide walks you through setting up Cloudflare with your Google Cloud Storage bucket for hosting your portfolio.

## Prerequisites

1. ✅ Domain registered and accessible
2. ✅ Google Cloud Storage bucket configured for static hosting
3. ✅ Portfolio built and deployed to Cloud Storage

## Step 1: Add Site to Cloudflare

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Click "Add a Site"
3. Enter your domain: `tomuleseidimitrie.dev`
4. Choose the Free plan
5. Cloudflare will scan your existing DNS records

## Step 2: Update DNS Settings

### Method A: CNAME to Storage (Recommended)
```
Type: CNAME
Name: @ (or tomuleseidimitrie.dev)
Content: storage.googleapis.com
Proxy status: Proxied (orange cloud)
```

### Method B: CNAME to Bucket URL (Alternative)
```
Type: CNAME
Name: @ (or tomuleseidimitrie.dev)
Content: c.storage.googleapis.com
Proxy status: Proxied (orange cloud)
```

### WWW Subdomain (Optional)
```
Type: CNAME
Name: www
Content: tomuleseidimitrie.dev
Proxy status: Proxied (orange cloud)
```

## Step 3: Update Nameservers

1. Cloudflare will provide you with nameservers (e.g., `alice.ns.cloudflare.com`)
2. Go to your domain registrar (GoDaddy, Namecheap, etc.)
3. Replace the current nameservers with Cloudflare's nameservers
4. Save the changes

⏰ **Note**: DNS propagation can take 24-48 hours

## Step 4: Configure SSL/TLS

1. Go to SSL/TLS tab in Cloudflare
2. Set encryption mode to **"Full (Strict)"**
3. Enable "Always Use HTTPS"
4. Enable "Automatic HTTPS Rewrites"

## Step 5: Set Up Page Rules

Go to Rules → Page Rules and create these rules:

### Rule 1: Redirect to HTTPS
```
URL: http://tomuleseidimitrie.dev/*
Settings: Always Use HTTPS
```

### Rule 2: Handle Directory URLs
```
URL: tomuleseidimitrie.dev/*
Settings: 
- Browser Cache TTL: 4 hours
- Edge Cache TTL: 2 hours
```

### Rule 3: Static Assets Caching (Optional)
```
URL: tomuleseidimitrie.dev/_next/*
Settings:
- Browser Cache TTL: 1 year
- Edge Cache TTL: 1 month
- Cache Level: Cache Everything
```

## Step 6: Performance Optimization

### Speed Tab Settings
- Auto Minify: Enable HTML, CSS, JS
- Brotli: Enable
- Rocket Loader: Enable (test this - might break some JS)
- Polish: Lossy (for image optimization)

### Caching Tab
- Caching Level: Standard
- Browser Cache Expiration: 4 hours

## Step 7: Test Your Setup

1. **Test Direct Storage Access:**
   ```
   https://storage.googleapis.com/tomuleseidimitrie.dev/index.html
   ```

2. **Test Cloudflare URLs:**
   ```
   https://tomuleseidimitrie.dev/
   https://www.tomuleseidimitrie.dev/
   ```

3. **Test HTTPS Redirect:**
   ```
   http://tomuleseidimitrie.dev/ (should redirect to HTTPS)
   ```

4. **Test Specific Pages:**
   ```
   https://tomuleseidimitrie.dev/projects/
   https://tomuleseidimitrie.dev/cv/
   https://tomuleseidimitrie.dev/photos/
   ```

## Troubleshooting

### Common Issues

1. **522 Connection Timed Out**
   - Check if Cloud Storage bucket is public
   - Verify DNS CNAME is correct
   - Wait for DNS propagation

2. **525 SSL Handshake Failed**
   - Change SSL mode to "Flexible" temporarily
   - Then switch back to "Full (Strict)" after testing

3. **404 Not Found**
   - Verify bucket has `index.html` at root
   - Check that trailing slashes work with your Next.js config

4. **Redirect Loop**
   - Check SSL/TLS mode (should be "Full (Strict)")
   - Disable "Always Use HTTPS" temporarily to test

### Verification Commands

```bash
# Check DNS resolution
dig tomuleseidimitrie.dev

# Test HTTP headers
curl -I https://tomuleseidimitrie.dev/

# Check SSL certificate
openssl s_client -connect tomuleseidimitrie.dev:443 -servername tomuleseidimitrie.dev
```

## Expected Results

✅ **What Should Work:**
- HTTPS automatically enabled
- Fast global CDN delivery
- Automatic image optimization
- DDoS protection
- Analytics and insights

✅ **Performance Benefits:**
- ~50-70% faster load times globally
- Better SEO scores
- Reduced bandwidth costs
- Built-in security features

✅ **Cost Savings:**
- $0/month for Cloudflare Free plan
- No Google Cloud Load Balancer costs (~$18/month saved)
- Reduced egress costs from GCS

## Post-Migration Checklist

- [ ] Domain resolves to Cloudflare
- [ ] HTTPS works without warnings
- [ ] All pages load correctly
- [ ] Images and assets load properly
- [ ] Navigation works (trailing slash URLs)
- [ ] Contact forms work (if any)
- [ ] Analytics tracking works
- [ ] SEO metadata intact

## Rollback Plan

If issues occur, you can quickly rollback:

1. Change DNS back to previous settings
2. Keep the old deployment script as backup
3. Google Cloud Load Balancer resources are preserved until manual cleanup

---

**Next Steps After Successful Migration:**
1. Monitor site for 24-48 hours
2. Run the cleanup script to remove Google Cloud Load Balancer
3. Update documentation and deployment processes
