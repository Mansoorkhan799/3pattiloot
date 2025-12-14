// WordPress API Integration
// This file handles all WordPress REST API calls

const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'http://localhost/wordpress/wp-json/wp/v2';
const REVALIDATE_TIME = parseInt(process.env.REVALIDATE_TIME || '60');

// WordPress Post Type
export interface WPPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  categories: number[];
  tags: number[];
  acf?: any; // Advanced Custom Fields
  _embedded?: {
    author?: WPAuthor[];
    'wp:featuredmedia'?: WPMedia[];
    'wp:term'?: WPTerm[][];
  };
}

// WordPress Category/Tag
export interface WPTerm {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
}

// WordPress Media/Image
export interface WPMedia {
  id: number;
  date: string;
  slug: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: {
    width: number;
    height: number;
    file: string;
    sizes: {
      [key: string]: {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
      };
    };
  };
  source_url: string;
}

// WordPress Author
export interface WPAuthor {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls: {
    [key: string]: string;
  };
}

// WordPress Page
export interface WPPage extends WPPost {
  parent: number;
  menu_order: number;
}

/**
 * Fetch data from WordPress REST API
 */
async function fetchAPI(endpoint: string, params: Record<string, any> = {}) {
  const queryParams = new URLSearchParams();
  
  Object.keys(params).forEach(key => {
    if (params[key] !== undefined && params[key] !== null) {
      queryParams.append(key, params[key].toString());
    }
  });

  const url = `${WP_API_URL}${endpoint}${queryParams.toString() ? '?' + queryParams.toString() : ''}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: REVALIDATE_TIME },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      console.error(`API Error: ${res.status} ${res.statusText}`);
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
}

/**
 * Get all posts with pagination
 */
export async function getPosts(page = 1, perPage = 10, categoryId?: number): Promise<WPPost[]> {
  const params: Record<string, any> = {
    page,
    per_page: perPage,
    _embed: true,
    status: 'publish',
  };

  if (categoryId) {
    params.categories = categoryId;
  }

  const posts = await fetchAPI('/posts', params);
  return posts || [];
}

/**
 * Get recent posts for homepage
 */
export async function getRecentPosts(limit = 6): Promise<WPPost[]> {
  return getPosts(1, limit);
}

/**
 * Get a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const posts = await fetchAPI('/posts', {
    slug,
    _embed: true,
  });

  return posts && posts.length > 0 ? posts[0] : null;
}

/**
 * Get all post slugs for static generation
 */
export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await fetchAPI('/posts', {
    per_page: 100,
    _fields: 'slug',
  });

  return posts ? posts.map((post: any) => post.slug) : [];
}

/**
 * Get all categories
 */
export async function getCategories(): Promise<WPTerm[]> {
  const categories = await fetchAPI('/categories', {
    per_page: 100,
    hide_empty: true,
  });

  return categories || [];
}

/**
 * Get category by slug
 */
export async function getCategoryBySlug(slug: string): Promise<WPTerm | null> {
  const categories = await fetchAPI('/categories', {
    slug,
  });

  return categories && categories.length > 0 ? categories[0] : null;
}

/**
 * Get all tags
 */
export async function getTags(): Promise<WPTerm[]> {
  const tags = await fetchAPI('/tags', {
    per_page: 100,
  });

  return tags || [];
}

/**
 * Get posts by category slug
 */
export async function getPostsByCategory(categorySlug: string, page = 1, perPage = 10): Promise<WPPost[]> {
  const category = await getCategoryBySlug(categorySlug);
  
  if (!category) {
    return [];
  }

  return getPosts(page, perPage, category.id);
}

/**
 * Search posts
 */
export async function searchPosts(query: string, perPage = 10): Promise<WPPost[]> {
  const posts = await fetchAPI('/posts', {
    search: query,
    per_page: perPage,
    _embed: true,
  });

  return posts || [];
}

/**
 * Get featured/sticky posts
 */
export async function getFeaturedPosts(limit = 3): Promise<WPPost[]> {
  const posts = await fetchAPI('/posts', {
    sticky: true,
    per_page: limit,
    _embed: true,
  });

  return posts || [];
}

/**
 * Get page by slug
 */
export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  const pages = await fetchAPI('/pages', {
    slug,
    _embed: true,
  });

  return pages && pages.length > 0 ? pages[0] : null;
}

/**
 * Get total post count for pagination
 */
export async function getTotalPosts(categoryId?: number): Promise<number> {
  const params: Record<string, any> = {
    per_page: 1,
    _fields: 'id',
  };

  if (categoryId) {
    params.categories = categoryId;
  }

  try {
    const url = `${WP_API_URL}/posts?${new URLSearchParams(params)}`;
    const res = await fetch(url, {
      next: { revalidate: REVALIDATE_TIME },
    });

    const totalHeader = res.headers.get('X-WP-Total');
    return totalHeader ? parseInt(totalHeader, 10) : 0;
  } catch (error) {
    console.error('Error fetching total posts:', error);
    return 0;
  }
}

