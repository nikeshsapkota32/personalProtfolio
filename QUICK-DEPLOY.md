# 🚀 Quick Deploy - Backend Setup

## ✅ Frontend is LIVE!
**Production URL:** https://personalprotfolionikesh-m2d91ewva.vercel.app

## 🐍 Deploy Backend (5 minutes)

### Step 1: Deploy to Render

1. Go to **https://render.com** and sign in with GitHub
2. Click **"New +"** → **"Web Service"**
3. Find and select **`personalProtfolio`** repository
4. Configure the service:

```
Name: portfolio-backend
Root Directory: backend
Environment: Python 3
Build Command: pip install -r requirements.txt
Start Command: uvicorn main:app --host 0.0.0.0 --port $PORT
```

5. Click **"Advanced"** and add Environment Variables:

```
GEMINI_API_KEY=AIzaSyCF83L8uOMp3NiYO7-L6oPnIh7AnXWXbuM
CONTACT_TO_EMAIL=your-email@example.com
FROM_EMAIL=Portfolio <onboarding@resend.dev>
FRONTEND_URL=https://personalprotfolionikesh-m2d91ewva.vercel.app
```

6. Click **"Create Web Service"**
7. Wait 3-5 minutes for deployment
8. **Copy your backend URL** (e.g., `https://portfolio-backend-xyz.onrender.com`)

### Step 2: Update Frontend with Backend URL

Run this command with YOUR backend URL:

```powershell
vercel env add NEXT_PUBLIC_BACKEND_URL production
```

When prompted, enter your Render backend URL (the one you just copied).

Then redeploy:

```powershell
vercel --prod
```

### Step 3: Set Up Email (Optional)

1. Go to **https://resend.com** and sign up
2. Click **"API Keys"** → **"Create API Key"**
3. Copy the API key (starts with `re_`)
4. Go back to Render → Your Service → **Environment**
5. Add: `RESEND_API_KEY=re_your_key_here`
6. Click **"Save Changes"** (backend will auto-redeploy)

## ✅ Test Your Site

1. Visit: https://personalprotfolionikesh-m2d91ewva.vercel.app
2. Click the **chat button** (bottom-right) - Test AI chatbot
3. Fill out **contact form** - Test email functionality
4. Check API docs: `https://your-backend-url.onrender.com/docs`

## 🎨 Custom Domain (Optional)

### Add to Vercel:
1. Go to Vercel Dashboard → Your Project → **Settings** → **Domains**
2. Add your domain (e.g., `nikeshsapkota.com`)
3. Follow DNS instructions

### Add to Render:
1. Go to Render Dashboard → Your Service → **Settings**
2. Add custom domain (e.g., `api.nikeshsapkota.com`)
3. Add CNAME record to your DNS

## 🔄 Future Updates

Just push to GitHub:

```bash
git add .
git commit -m "Update message"
git push
```

Both Vercel and Render will auto-deploy! 🚀

## 💰 All Free!
- ✅ Vercel: Free forever for personal projects
- ✅ Render: Free tier with 750 hours/month
- ✅ Resend: 100 emails/day free
- ✅ Gemini: 60 requests/minute free

---

**Need help?** Check the full DEPLOYMENT.md guide or backend API docs.
