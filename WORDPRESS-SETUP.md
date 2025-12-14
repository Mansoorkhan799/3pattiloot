# WordPress Setup Guide for Headless Gaming Website

This guide will help you set up WordPress as a headless CMS for your Pakistani Gaming Hub Next.js frontend.

## 🎯 Prerequisites

- WordPress installation (local or hosted)
- Admin access to WordPress dashboard
- Basic knowledge of WordPress

## 📦 Required WordPress Plugins

### 1. **Essential Plugins**

Install these plugins for optimal functionality:

#### a) WPGraphQL (Optional but Recommended)
- **Plugin Name:** WPGraphQL
- **Purpose:** Better API performance with GraphQL
- **Installation:** `Plugins > Add New > Search "WPGraphQL"`

#### b) Yoast SEO or Rank Math
- **Purpose:** Better SEO control and meta descriptions
- **Installation:** `Plugins > Add New > Search "Yoast SEO"`

#### c) Advanced Custom Fields (ACF) - Optional
- **Purpose:** Add custom fields to posts (game ratings, specs, etc.)
- **Installation:** `Plugins > Add New > Search "Advanced Custom Fields"`

#### d) WP REST API Controller (Optional)
- **Purpose:** Control what data is exposed via REST API
- **Installation:** `Plugins > Add New > Search "WP REST API Controller"`

### 2. **Recommended Security Plugins**

- **Wordfence Security** - For security monitoring
- **JWT Authentication for WP REST API** - If you need authentication

## ⚙️ WordPress Configuration

### Step 1: Enable REST API

WordPress REST API is enabled by default. Verify it's working:

```
https://your-wordpress-site.com/wp-json/wp/v2/posts
```

You should see JSON data returned.

### Step 2: Configure Permalinks

1. Go to `Settings > Permalinks`
2. Select **"Post name"** structure
3. Click **Save Changes**

This creates SEO-friendly URLs.

### Step 3: Set Up Categories

Create these gaming-specific categories:

1. Go to `Posts > Categories`
2. Create the following categories:
   - **News** - Latest gaming news
   - **Reviews** - Game reviews
   - **Guides** - Gaming tutorials and walkthroughs
   - **eSports** - Tournament coverage
   - **PC Games** - PC gaming content
   - **Mobile Games** - Mobile gaming (PUBG, Free Fire, etc.)
   - **Console Games** - PlayStation, Xbox content
   - **Tournaments** - Gaming tournament updates

### Step 4: Enable Featured Images

1. Go to `Appearance > Customize > Additional CSS` (or your theme settings)
2. Ensure your theme supports featured images
3. For each post, set a featured image (minimum 1200x630px for best SEO)

### Step 5: Configure CORS (If Needed)

If your WordPress and Next.js are on different domains, add this to your `wp-config.php` or use a plugin:

```php
// Add to wp-config.php before "That's all, stop editing!"

// Enable CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
```

**Better option:** Use **"WP Cors" plugin** for easier management.

### Step 6: Create Sample Content

Create some sample posts to test:

1. Go to `Posts > Add New`
2. Title: "Your First Gaming Article"
3. Add content with images
4. Set a featured image
5. Select a category
6. Publish

## 🔐 Optional: Authentication Setup

If you want to restrict API access:

### Install JWT Authentication

1. Install **"JWT Authentication for WP REST API"** plugin
2. Add to `wp-config.php`:

```php
define('JWT_AUTH_SECRET_KEY', 'your-secret-key-here');
define('JWT_AUTH_CORS_ENABLE', true);
```

3. Add to `.htaccess`:

```apache
RewriteEngine on
RewriteCond %{HTTP:Authorization} ^(.*)
RewriteRule ^(.*) - [E=HTTP_AUTHORIZATION:%1]
```

## 🎨 Custom Post Types (Optional)

For gaming-specific content, create custom post types:

### Game Reviews Post Type

Add this to your theme's `functions.php`:

```php
function create_game_review_post_type() {
    register_post_type('game_review',
        array(
            'labels' => array(
                'name' => __('Game Reviews'),
                'singular_name' => __('Game Review')
            ),
            'public' => true,
            'has_archive' => true,
            'show_in_rest' => true, // Enable REST API
            'supports' => array('title', 'editor', 'thumbnail', 'excerpt')
        )
    );
}
add_action('init', 'create_game_review_post_type');
```

## 📊 Add Custom Fields with ACF

For game reviews, add these custom fields:

1. Install **Advanced Custom Fields** plugin
2. Go to `Custom Fields > Add New`
3. Create field group: "Game Review Details"
4. Add fields:
   - **Game Rating** (Number: 0-10)
   - **Developer** (Text)
   - **Publisher** (Text)
   - **Release Date** (Date Picker)
   - **Platforms** (Checkbox: PC, PlayStation, Xbox, Mobile)
   - **Pros** (Text Area)
   - **Cons** (Text Area)

5. Set location rule: Post Type = Game Review
6. Make sure **"Show in REST API"** is enabled

## 🚀 WordPress Performance Optimization

### Recommended Plugins for Performance

1. **WP Rocket** or **W3 Total Cache** - Caching
2. **Imagify** or **ShortPixel** - Image optimization
3. **Autoptimize** - Code minification

### Enable Gzip Compression

Add to `.htaccess`:

```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>
```

## 🔗 Connect Next.js to WordPress

### Update Environment Variables

Create `.env.local` in your Next.js project:

```env
NEXT_PUBLIC_WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
NEXT_PUBLIC_SITE_URL=https://your-gaming-site.com
NEXT_PUBLIC_SITE_NAME=Pakistani Gaming Hub
NEXT_PUBLIC_SITE_DESCRIPTION=Pakistan's Premier Gaming News, Reviews, and eSports Coverage
REVALIDATE_TIME=60
```

### Test the Connection

Run your Next.js development server:

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` - your WordPress content should load!

## 📝 Content Publishing Workflow

1. **Write in WordPress:** Create posts in WordPress dashboard
2. **Auto-Sync:** Next.js fetches content via REST API
3. **Revalidation:** Content updates every 60 seconds (configurable)
4. **Deploy:** Changes appear automatically on frontend

## 🎮 Gaming-Specific Tips

### For Pakistani Gaming Content

1. **Local Tournament Coverage:** Create category for local esports events
2. **Regional Game Launches:** Cover Pakistan-specific game releases
3. **Mobile Gaming Focus:** PUBG Mobile, Free Fire, COD Mobile are popular
4. **Urdu Content:** Consider adding Urdu language support
5. **Community Features:** Enable comments for community engagement

### SEO Best Practices

1. **Title Format:** "Game Name - Review/Guide | Pakistani Gaming Hub"
2. **Meta Descriptions:** 150-160 characters, include keywords
3. **Image Alt Text:** Describe images for accessibility and SEO
4. **Internal Linking:** Link to related articles
5. **Categories & Tags:** Use consistently

## 🐛 Troubleshooting

### API Not Working?

1. Check permalinks are set to "Post name"
2. Verify REST API is enabled: `/wp-json/wp/v2/posts`
3. Check CORS settings if on different domains
4. Disable security plugins temporarily to test

### Images Not Loading?

1. Verify featured images are set
2. Check image URLs in API response
3. Ensure Next.js `next.config.js` allows your WordPress domain

### Slow Performance?

1. Enable WordPress caching
2. Optimize images before uploading
3. Use CDN for WordPress media
4. Increase `REVALIDATE_TIME` in `.env.local`

## 📚 Additional Resources

- [WordPress REST API Handbook](https://developer.wordpress.org/rest-api/)
- [WPGraphQL Documentation](https://www.wpgraphql.com/docs/introduction)
- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)

## ✅ Launch Checklist

Before going live:

- [ ] All plugins installed and configured
- [ ] Categories created
- [ ] At least 10-20 posts published
- [ ] Featured images set for all posts
- [ ] SEO plugin configured
- [ ] Performance optimization enabled
- [ ] CORS configured (if needed)
- [ ] SSL certificate installed (HTTPS)
- [ ] Backup system in place
- [ ] Analytics tracking added

---

**Need Help?** Check the main README.md for deployment instructions and troubleshooting.

