import { contentfulClient } from "./client";
import type { BlogPost } from "./types";
import type { Asset } from "contentful";

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: "blogPost",
      "fields.slug": slug,
      limit: 1,
    });

    if (!response.items.length) return null;

    const entry = response.items[0];
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
            width:
              (imageAsset.fields.file.details as any)?.image?.width ?? 800,
            height:
              (imageAsset.fields.file.details as any)?.image?.height ?? 600,
          }
        : null,
    };
  } catch (error) {
    console.error(`Error fetching post with slug "${slug}":`, error);
    return null;
  }
}