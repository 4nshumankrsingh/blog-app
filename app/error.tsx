"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 text-center px-4">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20 mb-2">
        <ExclamationTriangleIcon className="h-9 w-9 text-red-500" />
      </div>
      <h2 className="text-2xl font-bold text-foreground">
        Something went wrong
      </h2>
      <p className="text-muted-foreground max-w-md">
        An unexpected error occurred. You can try again or go back home.
      </p>
      {error?.digest && (
        <p className="text-xs text-muted-foreground font-mono bg-muted px-2 py-1 rounded">
          Error ID: {error.digest}
        </p>
      )}
      <div className="flex gap-3 mt-2">
        <Button
          onClick={reset}
          className="bg-emerald-600 hover:bg-emerald-700 text-white"
        >
          Try again
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Go home</Link>
        </Button>
      </div>
    </div>
  );
}