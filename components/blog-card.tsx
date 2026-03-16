import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import type { BlogPost } from "@/lib/contentful/types";

interface BlogCardProps {
  post: BlogPost;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="flex flex-col h-full border-border hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between gap-2 mb-2">
          <Badge
            variant="secondary"
            className="text-xs bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 border-0"
          >
            {formatDate(post.publishedDate)}
          </Badge>
        </div>
        <CardTitle className="text-lg leading-snug hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {post.excerpt}
        </p>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 p-0"
        >
          <Link href={`/blog/${post.slug}`}>
            Read more <ArrowRightIcon className="ml-1 h-3 w-3" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}