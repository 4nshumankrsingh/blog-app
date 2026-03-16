import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export function Hero() {
  return (
    <section className="bg-linear-to-b from-emerald-50 to-white dark:from-emerald-950/20 dark:to-background py-20 px-4">
      <div className="container mx-auto max-w-5xl text-center">
        <span className="inline-block rounded-full bg-emerald-100 dark:bg-emerald-900/40 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300 mb-4">
          Welcome
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
          Thoughts on{" "}
          <span className="text-emerald-600 dark:text-emerald-400">
            film, literature & ideas
          </span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          A space for honest reviews and long-form reflections — from classic
          cinema to economic theory.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            <Link href="/blog">
              Read the blog <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}