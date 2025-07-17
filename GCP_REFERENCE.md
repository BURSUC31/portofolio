# Google Cloud Platform Products - Quick Reference

## 🏗️ Infrastructure Components Used

| Product | Purpose | Resource Name | Configuration |
|---------|---------|---------------|---------------|
| **Cloud Storage** | Static hosting | `tomuleseidimitrie.dev` | Website hosting, public read |
| **HTTP(S) Load Balancer** | SSL + routing | `tomuleseidimitrie-dev-urlmap` | URL rewriting, HTTPS redirect |
| **Backend Bucket** | LB → Storage link | `tomuleseidimitrie-dev-backend` | Links LB to GCS bucket |
| **SSL Certificate** | HTTPS encryption | `tomuleseidimitrie-dev-ssl` | Google-managed, auto-renewal |
| **Static IP** | Fixed IP address | `tomuleseidimitrie-dev-ip` | `34.149.116.31` |
| **Target Proxies** | Traffic routing | HTTPS + HTTP proxies | Route to URL map |
| **Forwarding Rules** | Port routing | Port 80/443 rules | HTTP→HTTPS redirect |

## 💰 Monthly Cost Breakdown

| Service | Usage | Cost |
|---------|-------|------|
| Cloud Storage | ~1GB storage | ~$0.02 |
| **Load Balancer** | **Base fee** | **~$6.25** |
| Load Balancer | Data processing | ~$0.008/GB processed |
| SSL Certificate | Google-managed | Free |
| Data Egress | <1GB/month | Free (first 1TB) |
| **Total Estimated** | | **~$6-8/month** |

### Load Balancer Pricing Details:
- **Global HTTP(S) Load Balancer:** $6.25/month base fee
- **Data Processing:** $0.008 per GB processed
- **SSL Certificate:** Free (Google-managed)
- **For a personal portfolio:** ~$6-8/month total

## 🔧 Key Commands

### Deployment
```bash
./deploy-to-gcloud.sh
```

### URL Rewriting Setup
```bash
./setup-url-rewriting.sh
```

### Manual Upload
```bash
gsutil -m cp -r out/* gs://tomuleseidimitrie.dev/
```

### Check SSL Status
```bash
gcloud compute ssl-certificates describe tomuleseidimitrie-dev-ssl --global
```

## 🌍 Live URLs

- **Production:** https://tomuleseidimitrie.dev
- **Direct Storage:** https://storage.googleapis.com/tomuleseidimitrie.dev/index.html
- **GitHub Repo:** https://github.com/BURSUC31/portofolio

## 📊 Monitoring & Management

- **Google Cloud Console:** https://console.cloud.google.com
- **Project ID:** `dimitrie-tomulesei`
- **Region:** `europe-west1`
- **Load Balancer IP:** `34.149.116.31`
