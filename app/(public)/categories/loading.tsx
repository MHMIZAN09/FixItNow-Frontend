import CategorySectionSkeleton from "../_components/categories/category-section-skeleton";

export default function Loading() {
  return (
    <main>
      {/* Hero Skeleton */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-5 text-center">
            <div className="mx-auto h-6 w-32 animate-pulse rounded-md bg-muted" />

            <div className="mx-auto h-12 w-full max-w-2xl animate-pulse rounded-md bg-muted" />

            <div className="mx-auto h-5 w-full max-w-xl animate-pulse rounded-md bg-muted" />

            <div className="mx-auto h-11 w-36 animate-pulse rounded-md bg-muted" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <CategorySectionSkeleton />
    </main>
  );
}
