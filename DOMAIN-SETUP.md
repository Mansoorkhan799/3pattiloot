# Domain Configuration for 3pattilootapk.com.pk

## Current Setup

The site is configured to work on all these URL variants:
- ✅ https://3pattilootapk.com.pk (Primary/Canonical URL)
- ✅ https://www.3pattilootapk.com.pk (Redirects to non-www)
- ✅ http://3pattilootapk.com.pk (Auto-redirects to HTTPS)
- ✅ http://www.3pattilootapk.com.pk (Auto-redirects to HTTPS non-www)

## Robots.txt Access

The robots.txt file is accessible at:
- https://3pattilootapk.com.pk/robots.txt
- All other variants redirect to the canonical URL first, then serve robots.txt

## Vercel Configuration

### Automatic HTTPS Redirect
Vercel automatically redirects HTTP to HTTPS. This is enabled by default when you:
1. Add your custom domain in Vercel dashboard
2. Configure DNS properly

### WWW to Non-WWW Redirect
The `vercel.json` file includes redirects that handle:
- www.3pattilootapk.com.pk → 3pattilootapk.com.pk

## Required Vercel Dashboard Settings

To complete the setup, you need to configure in Vercel Dashboard:

### 1. Add Both Domains
Navigate to: Project Settings → Domains

Add these domains:
1. `3pattilootapk.com.pk` (Primary)
2. `www.3pattilootapk.com.pk` (Will redirect to primary)

### 2. DNS Configuration

For your domain registrar, add these DNS records:

**For non-www (Primary):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 3. Enable HTTPS

In Vercel Dashboard:
- Go to Project Settings → Domains
- Ensure SSL is enabled (Vercel does this automatically)
- Check that both domains show "Valid Configuration"

### 4. Force HTTPS Redirect

Vercel automatically forces HTTPS for all custom domains. No additional configuration needed.

## Verification Steps

After deployment, test all variants:

```bash
# Test HTTPS (should work)
curl -I https://3pattilootapk.com.pk/robots.txt

# Test HTTPS with www (should redirect to non-www)
curl -I https://www.3pattilootapk.com.pk/robots.txt

# Test HTTP (should redirect to HTTPS)
curl -I http://3pattilootapk.com.pk/robots.txt

# Test HTTP with www (should redirect to HTTPS non-www)
curl -I http://www.3pattilootapk.com.pk/robots.txt
```

All should ultimately serve the robots.txt content with:
- Final URL: https://3pattilootapk.com.pk/robots.txt
- Status: 200 OK (after any redirects)
- Content-Type: text/plain

## Troubleshooting

If robots.txt is not accessible:

1. **Check Deployment**
   - Ensure the latest code is deployed to Vercel
   - Check build logs for errors

2. **Verify DNS**
   - Use [dns-lookup.com](https://dns-lookup.com) to verify DNS propagation
   - DNS can take 24-48 hours to fully propagate

3. **Check Vercel Dashboard**
   - Ensure both domains show "Valid Configuration"
   - Check that SSL certificates are issued

4. **Clear Cache**
   - Try accessing in incognito/private mode
   - Clear browser cache
   - Wait for Vercel's edge cache to update (usually < 60 seconds)

## Files Modified

- `/app/robots.ts` - Fixed domain URL
- `/vercel.json` - Added www redirect and robots.txt headers
- This documentation file

## Next Steps

1. Deploy the updated code to Vercel
2. Verify domains in Vercel dashboard
3. Test all URL variants
4. Submit sitemap to Google Search Console

