export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverUrl?: string;
  published: boolean;
  publishedAt?: string;
  order: number;
}
