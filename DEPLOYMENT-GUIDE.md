# 🚀 Deployment Guide for 3 Patti Loot Website

## Your Domain: 3pattilootapk.com.pk
## Hosting: Namecheap

---

## ✅ OPTION 1: VERCEL (RECOMMENDED - FREE)

### Why Vercel?
- ✅ Built for Next.js (your framework)
- ✅ Completely FREE
- ✅ Lightning fast CDN
- ✅ Automatic SSL certificate
- ✅ Auto-deploys from GitHub
- ✅ Easy custom domain setup

### Step-by-Step Deployment:

#### 1. Push Your Code to GitHub

```bash
cd /Users/mansoorkhan/Desktop/game

# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - 3 Patti Loot website"

# Create repository on GitHub.com first, then:
git remote add origin https://github.com/YOUR_USERNAME/3pattiloot.git
git branch -M main
git push -u origin main
```

#### 2. Deploy to Vercel

1. Go to **https://vercel.com**
2. Click **"Sign Up"** (use GitHub account)
3. Click **"Import Project"**
4. Select your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click **"Deploy"**
7. Wait 2-3 minutes ✅

#### 3. Connect Your Custom Domain

**In Vercel Dashboard:**
1. Go to your project
2. Click **"Settings"** → **"Domains"**
3. Add domain: `3pattilootapk.com.pk`
4. Vercel will show you DNS records

**In Namecheap:**
1. Login to Namecheap
2. Go to **"Domain List"** → Manage `3pattilootapk.com.pk`
3. Go to **"Advanced DNS"**
4. Add these records:

```
Type: A Record
Host: @
Value: 76.76.21.21
TTL: Automatic

Type: CNAME Record
Host: www
Value: cname.vercel-dns.com
TTL: Automatic
```

5. Wait 10-60 minutes for DNS propagation
6. Done! ✅

---

## ⚙️ OPTION 2: NAMECHEAP VPS (If You Have VPS)

### Requirements:
- VPS hosting (not shared hosting)
- Node.js support
- SSH access

### Step-by-Step:

#### 1. Connect to VPS via SSH

```bash
ssh username@your-vps-ip
```

#### 2. Install Node.js & PM2

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 (process manager)
sudo npm install -g pm2

# Verify installation
node --version
npm --version
```

#### 3. Upload Your Code

**Option A: Using Git**
```bash
cd /var/www
git clone https://github.com/YOUR_USERNAME/3pattiloot.git
cd 3pattiloot
```

**Option B: Using FTP/SCP**
- Use FileZilla or WinSCP to upload files
- Upload to `/var/www/3pattiloot/`

#### 4. Install Dependencies & Build

```bash
cd /var/www/3pattiloot

# Install dependencies
npm install

# Build the project
npm run build
```

#### 5. Create Environment File

```bash
nano .env.local
```

Add:
```env
NEXT_PUBLIC_SITE_URL=https://3pattilootapk.com.pk
NEXT_PUBLIC_SITE_NAME=3 Patti Loot
```

Save: `Ctrl+X`, `Y`, `Enter`

#### 6. Start with PM2

```bash
pm2 start npm --name "3pattiloot" -- start
pm2 save
pm2 startup
```

#### 7. Install & Configure Nginx

```bash
# Install Nginx
sudo apt install nginx -y

# Create config
sudo nano /etc/nginx/sites-available/3pattiloot
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name 3pattilootapk.com.pk www.3pattilootapk.com.pk;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/3pattiloot /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### 8. Install SSL Certificate (Free)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d 3pattilootapk.com.pk -d www.3pattilootapk.com.pk
```

#### 9. Configure Domain in Namecheap

1. Login to Namecheap
2. Domain List → Manage `3pattilootapk.com.pk`
3. Advanced DNS → Add:

```
Type: A Record
Host: @
Value: YOUR_VPS_IP
TTL: Automatic

Type: A Record
Host: www
Value: YOUR_VPS_IP
TTL: Automatic
```

Done! ✅

---

## 📦 OPTION 3: STATIC EXPORT (For Shared Hosting)

### If You Only Have Shared Hosting (cPanel)

#### 1. Export as Static Site

```bash
cd /Users/mansoorkhan/Desktop/game

# Add to next.config.js
output: 'export',
images: { unoptimized: true }

# Build
npm run build
```

#### 2. Upload to Namecheap

1. Login to cPanel
2. File Manager → `public_html`
3. Upload everything from `out/` folder
4. Done! ✅

**Note:** Some dynamic features won't work (forms, API routes)

---

## 🎯 RECOMMENDED SETUP

**My Recommendation:**

### Use Vercel (Option 1) because:
1. ✅ **FREE** - No hosting costs
2. ✅ **Easy** - 5 minutes setup
3. ✅ **Fast** - Global CDN
4. ✅ **SSL** - Free HTTPS
5. ✅ **Auto-deploy** - Push to GitHub = Auto update
6. ✅ **Full Next.js support** - All features work

### Then use Namecheap only for:
- Domain registration (already have)
- DNS management (point to Vercel)

---

## 🔄 UPDATE WORKFLOW

After deployment, to update your site:

### With Vercel:
```bash
# Make changes
git add .
git commit -m "Updated content"
git push
# Vercel auto-deploys in 2 minutes!
```

### With VPS:
```bash
ssh username@vps-ip
cd /var/www/3pattiloot
git pull
npm run build
pm2 restart 3pattiloot
```

---

## 📝 IMPORTANT: UPDATE SITE URL

After deployment, update your .env.local:

```env
NEXT_PUBLIC_SITE_URL=https://3pattilootapk.com.pk
NEXT_PUBLIC_SITE_NAME=3 Patti Loot
NEXT_PUBLIC_SITE_DESCRIPTION=Download 3 Patti Loot APK - Pakistan's #1 Online Card Gaming App
```

---

## 🆘 NEED HELP?

Contact me with:
- Your chosen option (1, 2, or 3)
- Any error messages
- Your hosting type (shared/VPS)

---

## 📊 CHECKLIST AFTER GOING LIVE

- [ ] Test all pages load correctly
- [ ] Test mobile menu works
- [ ] Test all download buttons work
- [ ] Check SSL certificate (https://)
- [ ] Test all blog posts load
- [ ] Submit sitemap to Google Search Console
- [ ] Verify social media links work
- [ ] Test forms (contact page)

---

Good luck! 🎴✨

