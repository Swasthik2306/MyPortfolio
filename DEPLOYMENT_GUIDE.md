# Deployment Guide

## Vercel Deployment (Recommended)

### Prerequisites
- GitHub account
- Vercel account (sign up at https://vercel.com)
- Git installed on your system

### Step 1: Push to GitHub

1. **Create a GitHub repository**
   - Go to https://github.com/new
   - Create a new public repository named `my-portfolio`
   - Don't initialize with README (we already have one)

2. **Push your code to GitHub**
   ```bash
   cd D:\Personal_Projects\MyProtfolio
   git remote add origin https://github.com/<YOUR_USERNAME>/my-portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

#### Option A: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd D:\Personal_Projects\MyProtfolio
   vercel --prod
   ```

4. **Follow the prompts:**
   - Select your project directory
   - Confirm build settings
   - Wait for deployment to complete

#### Option B: Using Vercel Dashboard

1. **Connect GitHub Account**
   - Go to https://vercel.com
   - Sign in or create an account
   - Click "New Project"
   - Import Git Repository
   - Select `my-portfolio` repository

2. **Configure Project**
   - **Framework Preset**: Vite (or select manually)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Environment Variables**: (leave empty for now)

3. **Deploy**
   - Click "Deploy"
   - Wait for the build and deployment to complete

### Step 3: Configure Domain (Optional)

1. **Custom Domain Setup**
   - Go to your Vercel project dashboard
   - Click "Settings" → "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

2. **SSL Certificate**
   - Automatically provided by Vercel

### Step 4: Set Up Deployment Previews

Vercel automatically creates preview URLs for pull requests!

- Every PR gets a unique deployment URL
- Useful for testing before merging to main
- Shared links for feedback

### Step 5: Environment Variables (If Needed)

1. **In Vercel Dashboard:**
   - Project Settings → Environment Variables
   - Add any required variables
   - Redeploy

2. **Example:**
   ```
   VITE_API_URL=https://api.yourapi.com
   ```

## Alternative Deployment Options

### Netlify

1. **Install netlify-cli**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build locally**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod --dir=dist
   ```

### Firebase Hosting

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

## Monitoring & Analytics

### Vercel Analytics
- Automatically included
- View dashboard at: https://vercel.com/dashboard

### Google Analytics (Optional Setup)

1. **Add Google Analytics**
   - Create account at https://analytics.google.com
   - Get tracking ID
   - Add to meta tags in index.html

2. **Implement tracking**
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_ID');
   </script>
   ```

## Performance Monitoring

### Lighthouse
- Vercel automatically generates Lighthouse reports
- View in Deployments tab

### Web Vitals
```bash
npm install web-vitals
```

Add to App.tsx:
```typescript
import {getCLS, getFID, getFCP, getLCP, getTTFB} from 'web-vitals';

export function sendWebVitals(metric: any) {
  console.log(metric);
}

getCLS(sendWebVitals);
getFID(sendWebVitals);
getFCP(sendWebVitals);
getLCP(sendWebVitals);
getTTFB(sendWebVitals);
```

## Updating After Deployment

1. **Make changes locally**
   ```bash
   # Make your changes
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. **Automatic Deployment**
   - Vercel automatically redeploys on push to main
   - Check deployment status in dashboard
   - Preview URL is updated

## Troubleshooting

### Build Fails

1. **Clear node_modules and reinstall**
   ```bash
   rm -r node_modules
   npm install
   npm run build
   ```

2. **Check Node.js version**
   ```bash
   node --version
   # Should be 18+ (20+ recommended)
   ```

### Deployment Errors

1. **Check Vercel logs**
   - Go to project dashboard
   - Click on failed deployment
   - View build logs for errors

2. **Common issues:**
   - TypeScript errors
   - Missing environment variables
   - Build timeout

### Performance Issues

1. **Check Performance Tab**
   - Vercel Dashboard → Performance
   - Monitor response times
   - Analyze slowest endpoints

2. **Optimize:**
   - Compress images
   - Code splitting
   - Lazy loading components

## Rollback

If deployment has issues:

1. **In Vercel Dashboard:**
   - Deployments tab
   - Find previous successful deployment
   - Click "Rollback"

Or via CLI:
```bash
vercel env ls  # List environments
vercel --prod  # Redeploy current state
```

## Maintenance

### Regular Updates

- **Check for dependency updates monthly**
  ```bash
  npm outdated
  npm update
  ```

- **Security audits**
  ```bash
  npm audit
  npm audit fix
  ```

- **Test locally before deploying**
  ```bash
  npm run dev
  npm run build
  npm run preview
  ```

### Monitoring

- Monitor error rates
- Check performance metrics
- Review user feedback
- Update content regularly

## Success!

Your portfolio is now live! 🎉

**Next Steps:**
1. Share your portfolio URL
2. Add to LinkedIn/resume
3. Monitor analytics
4. Keep content updated
5. Gather feedback

---

**Questions?** Check the README.md for additional information.
