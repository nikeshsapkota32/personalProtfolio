# 🚀 Complete Deployment Guide

This guide will help you deploy your portfolio with AI chatbot and email functionality.

## ✅ What You Have

- **Next.js Frontend** with modern UI
- **FastAPI Backend** with Python
- **AI Chatbot** powered by Google Gemini
- **Contact Form** with email notifications via Resend
- **Secure API key management** (not committed to GitHub)

## 📋 Prerequisites

1. **GitHub Account**: https://github.com
2. **Vercel Account**: https://vercel.com (free)
3. **Render Account**: https://render.com (free)
4. **Resend Account**: https://resend.com (free - for emails)
5. **Google Gemini API Key**: ✅ Already configured

## 🔐 Important Security Notes

- ✅ Your API keys are stored in `.env` files
- ✅ `.gitignore` is configured to NEVER commit `.env` files
- ✅ API keys will be added as environment variables in production

## 📧 Step 1: Set Up Email Service (Resend)

1. Go to **https://resend.com** and sign up
2. Verify your email
3. Go to **API Keys** section
4. Click **Create API Key**
5. Copy the API key (starts with `re_`)
6. Add to `backend/.env`:
   ```
   RESEND_API_KEY=re_your_key_here
   CONTACT_TO_EMAIL=your-email@example.com
   ```

### Optional: Custom Domain Email
To send from your@domain.com instead of onboarding@resend.dev:
1. Go to Resend → **Domains**
2. Add your domain
3. Add DNS records (provided by Resend)
4. Update `FROM_EMAIL` in `.env`

## 📦 Step 2: Push to GitHub

```bash
# Make sure you're in the project root
cd C:\Users\Nikesh\Desktop\nikesh-portfolio

# Create repo at https://github.com/new (name: nikesh-portfolio)

# Add remote and push
git remote add origin https://github.com/YOUR_USERNAME/nikesh-portfolio.git
git branch -M main
git push -u origin main
```

## 🐍 Step 3: Deploy Backend to Render

### A. Create Web Service
1. Go to **https://render.com**
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub account
4. Select `nikesh-portfolio` repo
5. Configure:
   - **Name**: `portfolio-backend`
   - **Root Directory**: `backend`
   - **Runtime**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`

### B. Add Environment Variables
In Render dashboard, go to **Environment** tab and add:

```
GEMINI_API_KEY=AIzaSyCF83L8uOMp3NiYO7-L6oPnIh7AnXWXbuM
RESEND_API_KEY=re_your_resend_key
CONTACT_TO_EMAIL=your-email@example.com
FROM_EMAIL=Portfolio <onboarding@resend.dev>
FRONTEND_URL=https://nikesh-portfolio.vercel.app
```

### C. Deploy
1. Click **"Create Web Service"**
2. Wait 3-5 minutes for deployment
3. **Copy your backend URL** (e.g., `https://portfolio-backend-abc.onrender.com`)

## 🌐 Step 4: Deploy Frontend to Vercel

```bash
# Deploy with Vercel CLI
vercel
```

When prompted:
- **Set up and deploy**: Y
- **Link to existing project**: N
- **Project name**: nikesh-portfolio
- **Directory**: ./ (root)
- **Override settings**: N

### Add Environment Variable
```bash
vercel env add NEXT_PUBLIC_BACKEND_URL
```
Enter your Render backend URL (from Step 3C)

### Deploy to Production
```bash
vercel --prod
```

Your site will be live at: `https://nikesh-portfolio.vercel.app`

## 🎨 Step 5: Custom Domain (Optional)

### For Vercel (Frontend)
1. Go to Vercel Dashboard → Your Project → **Settings** → **Domains**
2. Add your domain (e.g., `nikeshsapkota.com`)
3. Follow DNS configuration instructions

### For Render (Backend)
1. Go to Render Dashboard → Your Service → **Settings**
2. Add custom domain (e.g., `api.nikeshsapkota.com`)
3. Add CNAME record in your DNS

## 🧪 Testing

### Test Locally
1. **Backend**: http://localhost:8000/docs
2. **Frontend**: http://localhost:3000
3. **AI Chat**: Click chat button in bottom-right
4. **Contact Form**: Fill and submit

### Test Production
1. Visit your Vercel URL
2. Test AI chatbot
3. Test contact form (check email)
4. Check API docs: `https://your-backend.onrender.com/docs`

## 🔄 Future Updates

To update your live site:

```bash
# Make changes locally
git add .
git commit -m "Your update message"
git push

# Vercel will auto-deploy frontend
# Render will auto-deploy backend
```

## 📊 Monitoring

- **Vercel Analytics**: Included automatically
- **Render Logs**: Check in Render dashboard
- **Gemini Usage**: Check in Google AI Studio

## 💰 Free Tier Limits

- **Vercel**: Unlimited hobby projects, 100GB bandwidth/month
- **Render**: 750 hours/month (1 instance 24/7)
- **Resend**: 100 emails/day, 3,000/month
- **Gemini**: 60 requests/minute (free tier)

## 🛟 Troubleshooting

### Backend Not Responding
- Check Render logs for errors
- Verify environment variables are set
- Check if API key is valid

### AI Chat Not Working
- Verify GEMINI_API_KEY is set in Render
- Check browser console for errors
- Test API directly: `https://your-backend.onrender.com/docs`

### Emails Not Sending
- Verify RESEND_API_KEY is correct
- Check Resend dashboard for logs
- Ensure CONTACT_TO_EMAIL is set

### CORS Errors
- Update FRONTEND_URL in backend environment
- Check CORS settings in `main.py`

## 📞 Support

Need help? Check:
- Backend API docs: `https://your-backend.onrender.com/docs`
- Render logs: Render Dashboard → Logs
- Vercel logs: Vercel Dashboard → Deployments

---

**Your portfolio is ready to impress! 🎉**
