export function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="container mx-auto max-w-5xl px-4 py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} BlogApp. Built with Next.js & Contentful.
      </div>
    </footer>
  );
}