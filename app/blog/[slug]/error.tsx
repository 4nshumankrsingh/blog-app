"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogDetailError({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center px-4">
      <h2 className="text-xl font-bold">Couldn't load this post</h2>
      <p className="text-muted-foreground">
        There was a problem fetching this article.
      </p>
      <div className="flex gap-3">
        <Button
          onClick={reset}
          className="bg-emerald-600 hover:bg-emerald-700 text-white"
        >
          Try again
        </Button>
        <Button asChild variant="outline">
          <Link href="/blog">Back to blog</Link>
        </Button>
      </div>
    </div>
  );
}