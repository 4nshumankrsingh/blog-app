import { contentfulClient } from "./client";
import type { BlogPost } from "./types";
import type { Entry, Asset } from "contentful";

function mapEntry(entry: Entry<any>): BlogPost {
  const fields = entry.fields as Record<string, any>;
  const imageAsset = fields.coverImage as Asset | undefined;

  return {
    title: fields.title as string,
    slug: fields.slug as string,
    excerpt: fields.excerpt as string,
    content: fields.content,
    publishedDate: fields.publishedDate as string,
    coverImage: imageAsset?.fields?.file
      ? {
          url: `https:${imageAsset.fields.file.url}`,
          title: (imageAsset.fields.title as string) ?? "",
          width: (imageAsset.fields.file.details as any)?.image?.width ?? 800,
          height: (imageAsset.fields.file.details as any)?.image?.height ?? 600,
        }
      : null,
  };
}

export async function getPosts(limit?: number): Promise<BlogPost[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: "blogPost",
      order: ["-fields.publishedDate"],
      ...(limit ? { limit } : {}),
    });

    return response.items.map(mapEntry);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}