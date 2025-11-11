// ============================================
// CREATIVE HARBOR - TYPE DEFINITIONS
// ============================================

export interface ContentItem {
  id: string;
  title: string;
  description?: string;
  content_type: 'music' | 'book' | 'art' | 'video';
  image_url: string;
  media_url?: string;
  featured: boolean;
  tags: string[];
  created_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image?: string;
  author_name: string;
  tags: string[];
  published: boolean;
  featured: boolean;
  view_count: number;
  published_at: string;
  created_at: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  stock_quantity: number;
  featured: boolean;
  tags: string[];
}

export interface Discussion {
  id: string;
  title: string;
  content: string;
  author_name: string;
  category: string;
  tags: string[];
  upvotes: number;
  reply_count: number;
  pinned: boolean;
  locked: boolean;
  created_at: string;
}

export interface DiscussionReply {
  id: string;
  discussion_id: string;
  content: string;
  author_name: string;
  upvotes: number;
  created_at: string;
}

export interface ChatMessage {
  id: string;
  author_name: string;
  author_avatar?: string;
  message: string;
  created_at: string;
}
