import { getPosts } from "@/lib/contentful";
import { BlogCard } from "@/components/blog-card";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog",
  description: "All articles — film, literature, and ideas.",
};

export default async function BlogListPage() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
          All Posts
        </h1>
        <p className="mt-2 text-muted-foreground">
          {posts.length} {posts.length === 1 ? "article" : "articles"} published
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <p className="text-4xl mb-4">✍️</p>
          <h2 className="text-xl font-semibold text-foreground mb-2">
            No posts yet
          </h2>
          <p className="text-muted-foreground">
            Check back soon — articles are on the way.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}