import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 text-center px-4">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 mb-2">
        <MagnifyingGlassIcon className="h-9 w-9 text-emerald-600 dark:text-emerald-400" />
      </div>
      <p className="text-6xl font-extrabold text-emerald-600 dark:text-emerald-400">
        404
      </p>
      <h2 className="text-2xl font-bold text-foreground">Page not found</h2>
      <p className="text-muted-foreground max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="flex gap-3 mt-2">
        <Button
          asChild
          className="bg-emerald-600 hover:bg-emerald-700 text-white"
        >
          <Link href="/">Go home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/blog">Browse blog</Link>
        </Button>
      </div>
    </div>
  );
}