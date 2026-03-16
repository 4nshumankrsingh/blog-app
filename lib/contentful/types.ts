export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: any; 
  coverImage: {
    url: string;
    title: string;
    width: number;
    height: number;
  } | null;
  publishedDate: string;
}