export default function BlogDetailLoading() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12 space-y-6">
      <div className="h-4 w-24 rounded bg-muted animate-pulse" />
      <div className="space-y-3 mt-8">
        <div className="h-3 w-16 rounded bg-muted animate-pulse" />
        <div className="h-9 w-3/4 rounded bg-muted animate-pulse" />
        <div className="h-9 w-1/2 rounded bg-muted animate-pulse" />
        <div className="h-5 w-full rounded bg-muted animate-pulse mt-4" />
      </div>
      <div className="aspect-video rounded-xl bg-muted animate-pulse w-full" />
      <div className="space-y-3 pt-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`h-4 rounded bg-muted animate-pulse ${
              i % 4 === 3 ? "w-2/3" : "w-full"
            }`}
          />
        ))}
      </div>
    </div>
  );
}