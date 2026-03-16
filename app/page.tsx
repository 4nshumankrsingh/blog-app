import { getPosts } from "@/lib/contentful";
import { Hero } from "@/components/hero";
import { BlogCard } from "@/components/blog-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export const revalidate = 60;

export default async function HomePage() {
  const latestPosts = await getPosts(3);
  const allPostsForTable = await getPosts();

  return (
    <>
      <Hero />

      {/* Latest Posts Grid */}
      <section className="container mx-auto max-w-5xl px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">Latest Posts</h2>
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-emerald-600 dark:text-emerald-400"
          >
            <Link href="/blog">
              View all <ArrowRightIcon className="ml-1 h-3 w-3" />
            </Link>
          </Button>
        </div>

        {latestPosts.length === 0 ? (
          <p className="text-muted-foreground text-center py-12">
            No posts yet. Check back soon!
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>

      {/* All Posts Table */}
      {allPostsForTable.length > 0 && (
        <section className="container mx-auto max-w-5xl px-4 pb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            All Articles
          </h2>
          <div className="rounded-md border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold">Title</TableHead>
                  <TableHead className="font-semibold hidden sm:table-cell">
                    Published
                  </TableHead>
                  <TableHead className="font-semibold text-right">
                    Link
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allPostsForTable.map((post) => (
                  <TableRow key={post.slug} className="hover:bg-muted/30">
                    <TableCell className="font-medium">{post.title}</TableCell>
                    <TableCell className="text-muted-foreground text-sm hidden sm:table-cell">
                      {new Date(post.publishedDate).toLocaleDateString(
                        "en-US",
                        { year: "numeric", month: "short", day: "numeric" }
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700"
                      >
                        <Link href={`/blog/${post.slug}`}>
                          Read <ArrowRightIcon className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      )}
    </>
  );
}