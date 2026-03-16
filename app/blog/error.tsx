"use client";

import { Button } from "@/components/ui/button";

export default function BlogListError({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center px-4">
      <h2 className="text-xl font-bold">Couldn't load posts</h2>
      <p className="text-muted-foreground">
        There was a problem fetching the blog list.
      </p>
      <Button
        onClick={reset}
        className="bg-emerald-600 hover:bg-emerald-700 text-white"
      >
        Try again
      </Button>
    </div>
  );
}