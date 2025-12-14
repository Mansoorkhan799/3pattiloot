import { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://3pattilootpk.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'CCBot',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        crawlDelay: 1,
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

