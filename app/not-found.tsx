import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center px-4">
      <p className="text-6xl font-extrabold text-emerald-600 dark:text-emerald-400">
        404
      </p>
      <h2 className="text-2xl font-bold text-foreground">Page not found</h2>
      <p className="text-muted-foreground max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white">
        <Link href="/">Go home</Link>
      </Button>
    </div>
  );
}