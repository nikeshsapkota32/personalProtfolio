# 🌐 GitHub Pages Setup

## ✅ Your site has been deployed!

**URL:** https://nikeshsapkota32.github.io/personalProtfolio/

## 🔧 Enable GitHub Pages (One-time setup)

1. Go to: https://github.com/nikeshsapkota32/personalProtfolio/settings/pages

2. Under **"Source"**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`

3. Click **"Save"**

4. Wait 2-3 minutes for deployment

5. Visit: **https://nikeshsapkota32.github.io/personalProtfolio/**

## 🚀 Future Deployments

Anytime you want to update your live site:

```bash
npm run deploy
```

That's it! This will:
1. Build your Next.js app
2. Deploy to GitHub Pages
3. Update your live site

## 🎨 Custom Domain (Optional)

### Want a custom domain like `nikeshsapkota.com`?

1. Buy a domain from:
   - Namecheap: https://www.namecheap.com
   - Google Domains: https://domains.google
   - Cloudflare: https://www.cloudflare.com/products/registrar/

2. In your domain registrar, add these DNS records:

   **For apex domain (nikeshsapkota.com):**
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: nikeshsapkota32.github.io
   ```

3. In GitHub repo settings → Pages → Custom domain:
   - Enter: `nikeshsapkota.com`
   - Click Save

4. Wait 24-48 hours for DNS propagation

5. Enable "Enforce HTTPS"

## 📝 Current Setup

- ✅ Next.js configured for static export
- ✅ Base path: `/personalProtfolio`
- ✅ Deployed to `gh-pages` branch
- ✅ AI Chatbot ready (needs backend deployment)
- ✅ Contact form ready (needs backend deployment)

## 🐍 Backend Deployment

Your Python backend is still needed for:
- AI Chatbot functionality
- Contact form emails

Follow `QUICK-DEPLOY.md` to deploy backend to Render.

---

**Your portfolio is now live on GitHub Pages!** 🎉
