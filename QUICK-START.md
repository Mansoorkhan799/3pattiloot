# ⚡ Quick Start Guide

Get your Pakistani Gaming Hub running in 5 minutes!

## 🎯 Step 1: Install Dependencies (1 minute)

```bash
npm install
```

## 🎯 Step 2: Configure Environment (2 minutes)

Create `.env.local` file in the root directory:

```bash
# Copy the example file
cp .env.local.example .env.local
```

Edit `.env.local` and update these values:

```env
NEXT_PUBLIC_WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Pakistani Gaming Hub
NEXT_PUBLIC_SITE_DESCRIPTION=Pakistan's Premier Gaming News, Reviews, and eSports Coverage
REVALIDATE_TIME=60
```

**Don't have WordPress yet?**
- Use free hosting: [wordpress.com](https://wordpress.com)
- Or install locally: [Local by Flywheel](https://localwp.com/)

## 🎯 Step 3: Test WordPress API (30 seconds)

Open your browser and visit:
```
https://your-wordpress-site.com/wp-json/wp/v2/posts
```

You should see JSON data. If not, check:
- Permalinks are set to "Post name" in WordPress
- REST API is enabled
- Site is accessible

## 🎯 Step 4: Run Development Server (30 seconds)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🎯 Step 5: Create Content in WordPress (1 minute)

1. Go to your WordPress admin
2. Create a new post
3. Add title, content, featured image
4. Select a category
5. Publish!
6. Refresh your Next.js site - you should see the post!

---

## ✅ You're Done!

Your gaming website is running! 🎉

### Next Steps:

1. **Read the full guides:**
   - [README.md](./README.md) - Complete documentation
   - [WORDPRESS-SETUP.md](./WORDPRESS-SETUP.md) - WordPress configuration
   - [DEPLOYMENT.md](./DEPLOYMENT.md) - Deploy to production

2. **Customize your site:**
   - Edit colors in `tailwind.config.ts`
   - Modify components in `components/`
   - Update site info in `.env.local`

3. **Add more content:**
   - Create categories (News, Reviews, Guides, eSports)
   - Write articles with featured images
   - Optimize for SEO

4. **Deploy to production:**
   - Push to GitHub
   - Deploy on Vercel (1-click)
   - Add custom domain

---

## 🆘 Troubleshooting

### "Cannot connect to WordPress API"
- Check if WordPress URL in `.env.local` is correct
- Test API endpoint in browser
- Check CORS settings

### "No posts showing"
- Make sure you have published posts in WordPress
- Check if posts have featured images
- Verify API is returning data

### "Images not loading"
- Verify WordPress media URLs are accessible
- Check `next.config.js` allows your WordPress domain
- Ensure HTTPS for production

### "Build errors"
```bash
rm -rf .next node_modules
npm install
npm run dev
```

---

## 📚 Useful Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run start        # Run production build

# Utilities
npm run lint         # Check for errors
```

---

## 🎮 What's Included?

✅ **Modern Next.js 14** setup with App Router  
✅ **TypeScript** for type safety  
✅ **Tailwind CSS** for styling  
✅ **WordPress integration** via REST API  
✅ **SEO optimized** with meta tags, schemas, sitemap  
✅ **Responsive design** for all devices  
✅ **Gaming-themed UI** with dark mode  
✅ **Performance optimized** for fast loading  
✅ **Production ready** - deploy anywhere  

---

## 💡 Pro Tips

1. **Content Strategy:** Post consistently (2-3 articles per week)
2. **SEO:** Focus on Pakistani gaming keywords (PUBG Mobile Pakistan, Free Fire Pakistan, etc.)
3. **Images:** Always use featured images (1200x630px minimum)
4. **Categories:** Use 4-6 main categories for organization
5. **Performance:** Keep revalidation time at 60 seconds for fresh content

---

**Need help?** Check the full README.md or open an issue on GitHub.

**Happy Gaming! 🚀🎮**

