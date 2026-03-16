export default function BlogListLoading() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <div className="mb-10">
        <div className="h-8 w-32 rounded-md bg-muted animate-pulse mb-2" />
        <div className="h-4 w-24 rounded-md bg-muted animate-pulse" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-lg border border-border p-5 space-y-3"
          >
            <div className="h-3 w-20 rounded bg-muted animate-pulse" />
            <div className="h-5 w-3/4 rounded bg-muted animate-pulse" />
            <div className="h-3 w-full rounded bg-muted animate-pulse" />
            <div className="h-3 w-5/6 rounded bg-muted animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}