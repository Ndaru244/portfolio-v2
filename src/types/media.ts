export interface MediaItem {
  id: string;
  name: string;
  url: string;
  type: "image" | "video" | "document" | "other";
  alt?: string;
  createdAt?: string;
}
