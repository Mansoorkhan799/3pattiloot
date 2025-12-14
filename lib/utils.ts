// Utility functions

/**
 * Format date to readable format
 */
export function formatDate(dateString: string, locale = 'en-US'): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Format date to relative time (e.g., "2 days ago")
 */
export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (const [unit, seconds] of Object.entries(intervals)) {
    const interval = Math.floor(diffInSeconds / seconds);
    if (interval >= 1) {
      return `${interval} ${unit}${interval > 1 ? 's' : ''} ago`;
    }
  }

  return 'Just now';
}

/**
 * Truncate text to specified length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * Generate slug from text
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

/**
 * Get featured image URL from WordPress post
 */
export function getFeaturedImageUrl(post: any, size: string = 'full'): string | null {
  if (post._embedded?.['wp:featuredmedia']?.[0]) {
    const media = post._embedded['wp:featuredmedia'][0];
    
    if (size !== 'full' && media.media_details?.sizes?.[size]) {
      return media.media_details.sizes[size].source_url;
    }
    
    return media.source_url;
  }
  
  return null;
}

/**
 * Get author name from WordPress post
 */
export function getAuthorName(post: any): string {
  if (post._embedded?.author?.[0]) {
    return post._embedded.author[0].name;
  }
  return 'Unknown Author';
}

/**
 * Get categories from WordPress post
 */
export function getCategories(post: any): string[] {
  if (post._embedded?.['wp:term']?.[0]) {
    return post._embedded['wp:term'][0].map((term: any) => term.name);
  }
  return [];
}

/**
 * Get primary category from WordPress post
 */
export function getPrimaryCategory(post: any): string | null {
  const categories = getCategories(post);
  return categories.length > 0 ? categories[0] : null;
}

/**
 * Decode HTML entities
 */
export function decodeHtmlEntities(text: string): string {
  const entities: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&nbsp;': ' ',
  };

  return text.replace(/&[#\w]+;/g, (entity) => entities[entity] || entity);
}

/**
 * Class names utility (similar to clsx)
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Check if URL is external
 */
export function isExternalUrl(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://');
}

/**
 * Get domain from URL
 */
export function getDomain(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return '';
  }
}

