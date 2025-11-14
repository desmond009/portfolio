# 🚀 Deployment Guide

This guide covers deploying your portfolio website to production environments.

## Frontend Deployment

### Option 1: Deploy to Vercel (Recommended)

Vercel is optimized for Vite applications and provides free hosting.

#### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Environment Variables**
   - Add `VITE_API_URL` pointing to your backend
   - Example: `https://your-backend.com/api`

4. **Deploy**
   - Click "Deploy"
   - Your site will be live at a Vercel URL

### Option 2: Deploy to Netlify

1. **Build Frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy**
   ```bash
   netlify deploy --prod --dir=frontend/dist
   ```

## Backend Deployment

### Option 1: Deploy to Railway (Recommended Free Tier)

1. **Sign up at [railway.app](https://railway.app)**
2. **Connect GitHub Repository**
3. **Set root directory to `backend`**
4. **Deploy** - Railway automatically deploys on push

### Option 2: Deploy to Heroku

1. **Install Heroku CLI**
2. **Login & Create App**
   ```bash
   heroku create your-app-name
   ```
3. **Deploy**
   ```bash
   git push heroku main
   ```

## Environment Variables

### Frontend
```
VITE_API_URL=https://your-backend-url.com/api
```

### Backend
```
PORT=5000
NODE_ENV=production
```

## Post-Deployment Checklist

- [ ] Frontend loads correctly
- [ ] Contact form submits successfully
- [ ] Resume downloads properly
- [ ] No console errors
- [ ] Mobile responsiveness checked
- [ ] SSL certificate installed

---

For detailed deployment instructions, see the full guide above.