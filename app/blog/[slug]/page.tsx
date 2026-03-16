import { notFound } from "next/navigation";
import Image from "next/image";
import { getPostBySlug, getPosts } from "@/lib/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export const revalidate = 60;

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      ...(post.coverImage
        ? {
            images: [
              {
                url: post.coverImage.url,
                width: post.coverImage.width,
                height: post.coverImage.height,
                alt: post.coverImage.title,
              },
            ],
          }
        : {}),
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const htmlContent = documentToHtmlString(post.content);

  const formattedDate = new Date(post.publishedDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <article className="container mx-auto max-w-3xl px-4 py-12">

      <Button
        asChild
        variant="ghost"
        size="sm"
        className="mb-8 text-muted-foreground hover:text-foreground -ml-2"
      >
        <Link href="/blog">
          <ArrowLeftIcon className="mr-1 h-4 w-4" />
          Back to blog
        </Link>
      </Button>

      {/* Meta */}
      <header className="mb-8">
        <div className="mb-3">
          <Badge
            variant="secondary"
            className="text-xs bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 border-0"
          >
            {formattedDate}
          </Badge>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight mb-4">
          {post.title}
        </h1>
        <p className="text-lg text-muted-foreground">{post.excerpt}</p>
      </header>


      {post.coverImage && (
        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-10 border border-border">
          <Image
            src={post.coverImage.url}
            alt={post.coverImage.title || post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>
      )}


      <div
        className="prose prose-neutral dark:prose-invert prose-emerald max-w-none
          prose-headings:font-bold prose-headings:tracking-tight
          prose-a:text-emerald-600 dark:prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline
          prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
          prose-blockquote:border-emerald-500 prose-blockquote:text-muted-foreground
          prose-img:rounded-xl prose-img:border prose-img:border-border"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </article>
  );
}