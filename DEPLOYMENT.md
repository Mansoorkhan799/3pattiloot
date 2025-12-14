# 🚀 Deployment Guide - Pakistani Gaming Hub

Complete guide for deploying your headless WordPress + Next.js gaming website to production.

## 📋 Pre-Deployment Checklist

Before deploying, ensure you have:

- [ ] WordPress site is live and accessible
- [ ] WordPress REST API is working (`/wp-json/wp/v2/posts`)
- [ ] SSL certificate installed on WordPress (HTTPS)
- [ ] Environment variables configured
- [ ] At least 10-20 posts published
- [ ] Featured images set for all posts
- [ ] Categories created and assigned
- [ ] Next.js build works locally (`npm run build`)
- [ ] All images optimized
- [ ] SEO plugin configured in WordPress

## 🌐 Deployment Options

### Option 1: Vercel (Recommended) ⭐

**Why Vercel?**
- Built specifically for Next.js
- Automatic deployments from Git
- Global CDN
- Serverless functions
- Zero configuration
- Free tier available

#### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js

3. **Add Environment Variables**
   
   In Vercel dashboard:
   ```
   NEXT_PUBLIC_WORDPRESS_API_URL = https://your-wordpress-site.com/wp-json/wp/v2
   WORDPRESS_API_URL = https://your-wordpress-site.com/wp-json/wp/v2
   NEXT_PUBLIC_SITE_URL = https://your-domain.com
   NEXT_PUBLIC_SITE_NAME = Pakistani Gaming Hub
   NEXT_PUBLIC_SITE_DESCRIPTION = Pakistan's Premier Gaming News
   REVALIDATE_TIME = 60
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site is live! 🎉

5. **Custom Domain (Optional)**
   - Go to Settings > Domains
   - Add your custom domain
   - Update DNS records as shown
   - SSL automatically provisioned

#### Automatic Deployments

Every push to `main` branch automatically deploys!

```bash
git add .
git commit -m "Update content"
git push
# Vercel automatically deploys
```

---

### Option 2: Netlify

**Why Netlify?**
- Easy deployment
- Free tier
- Great for static sites
- Form handling
- Split testing

#### Steps:

1. **Build Command**
   ```bash
   npm run build
   ```

2. **Publish Directory**
   ```
   .next
   ```

3. **Environment Variables**
   
   Add in Netlify dashboard under Site Settings > Environment:
   ```
   NEXT_PUBLIC_WORDPRESS_API_URL
   WORDPRESS_API_URL
   NEXT_PUBLIC_SITE_URL
   NEXT_PUBLIC_SITE_NAME
   NEXT_PUBLIC_SITE_DESCRIPTION
   REVALIDATE_TIME
   ```

4. **Deploy**
   - Connect GitHub repository
   - Configure build settings
   - Deploy!

---

### Option 3: Custom VPS (DigitalOcean, AWS, etc.)

**For advanced users who want full control**

#### Prerequisites:
- Ubuntu 20.04+ server
- Root or sudo access
- Domain name pointed to server

#### Step 1: Install Node.js

```bash
# SSH into your server
ssh root@your-server-ip

# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version
```

#### Step 2: Install PM2 (Process Manager)

```bash
sudo npm install -g pm2
```

#### Step 3: Clone Your Repository

```bash
cd /var/www
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

#### Step 4: Install Dependencies

```bash
npm install
```

#### Step 5: Create Environment File

```bash
nano .env.local
```

Add your environment variables, save with `Ctrl+X`, `Y`, `Enter`.

#### Step 6: Build

```bash
npm run build
```

#### Step 7: Start with PM2

```bash
pm2 start npm --name "gaming-site" -- start
pm2 save
pm2 startup
```

#### Step 8: Install Nginx

```bash
sudo apt update
sudo apt install nginx
```

#### Step 9: Configure Nginx

```bash
sudo nano /etc/nginx/sites-available/gaming-site
```

Add this configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/gaming-site /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### Step 10: Install SSL with Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

Follow the prompts. SSL will be automatically configured!

#### Step 11: Auto-renewal of SSL

```bash
sudo certbot renew --dry-run
```

Your site is now live with HTTPS! 🎉

---

## 🔄 Continuous Deployment

### Webhook for Auto-Deployment

Set up a webhook to automatically rebuild when WordPress content changes.

#### In Vercel:

1. Go to Settings > Git > Deploy Hooks
2. Create a new hook named "WordPress Update"
3. Copy the webhook URL

#### In WordPress:

Install **"WP Webhooks"** plugin:

1. Go to Settings > Webhooks
2. Add new webhook
3. Trigger: "Post Published"
4. URL: Your Vercel deploy hook URL
5. Now your site rebuilds when you publish a post!

---

## 📊 Post-Deployment

### 1. Test Everything

- [ ] Homepage loads correctly
- [ ] Posts display with images
- [ ] Categories work
- [ ] Navigation functional
- [ ] Mobile responsive
- [ ] Images optimized and loading
- [ ] SSL certificate active (HTTPS)
- [ ] Sitemap accessible (`/sitemap.xml`)
- [ ] Robots.txt accessible (`/robots.txt`)

### 2. Set Up Analytics

#### Google Analytics

Add to `app/layout.tsx` (inside `<head>`):

```tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `
}} />
```

### 3. Submit to Search Engines

#### Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership (via DNS or HTML file)
4. Submit sitemap: `https://your-site.com/sitemap.xml`

#### Bing Webmaster Tools

1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add your site
3. Verify ownership
4. Submit sitemap

### 4. Performance Optimization

#### Test Performance:

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

#### Optimization Tips:

1. **Enable caching** in WordPress
2. **Use CDN** for WordPress images (Cloudflare)
3. **Compress images** (use WebP format)
4. **Minimize API calls** (increase revalidate time)
5. **Enable compression** (Gzip/Brotli)

### 5. Security Hardening

#### WordPress:
- Keep WordPress & plugins updated
- Use strong passwords
- Install security plugin (Wordfence)
- Disable XML-RPC if not needed
- Limit login attempts
- Regular backups

#### Next.js:
- Keep dependencies updated
- Use environment variables for secrets
- Enable HTTPS only
- Add security headers (already in `next.config.js`)

---

## 🔧 Maintenance

### Regular Tasks:

**Weekly:**
- Monitor site performance
- Check for broken links
- Review analytics

**Monthly:**
- Update WordPress & plugins
- Update Next.js dependencies
- Backup WordPress database
- Check SSL certificate expiry
- Review and optimize images

**Quarterly:**
- Performance audit
- SEO audit
- Security audit
- Content review

### Updating Your Site:

```bash
# Update code
git pull

# Update dependencies
npm install

# Rebuild
npm run build

# Restart (if using PM2)
pm2 restart gaming-site
```

---

## 🐛 Common Issues & Solutions

### Issue: Build Failing

**Solution:**
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Issue: Images Not Loading

**Solution:**
- Check `next.config.js` image domains
- Verify WordPress media URLs are public
- Check CORS settings

### Issue: Content Not Updating

**Solution:**
- Clear Vercel cache
- Check `REVALIDATE_TIME` setting
- Manually trigger rebuild
- Verify WordPress API is accessible

### Issue: Slow Performance

**Solution:**
- Enable WordPress caching
- Use CDN for images
- Increase revalidate time
- Optimize database

---

## 📞 Need Help?

- **Documentation:** Check README.md and WORDPRESS-SETUP.md
- **Issues:** Open a GitHub issue
- **Community:** Join our Discord/Slack (if available)

---

## 🎉 Congratulations!

Your Pakistani Gaming Hub is now live! 🚀

Remember to:
1. Publish quality content regularly
2. Engage with your audience
3. Monitor performance and SEO
4. Keep everything updated
5. Share on social media

**Happy Gaming! 🎮**

