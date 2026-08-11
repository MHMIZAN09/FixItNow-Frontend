import CategorySkeleton from "./category-skeleton";

const CategorySectionSkeleton = () => {
  return (
    <section className="border-t bg-muted/30 py-16 sm:py-20">
      <div className="container mx-auto px-4">
        {/* Header Skeleton */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="w-full max-w-2xl space-y-3">
            <SkeletonLine className="h-4 w-24" />

            <SkeletonLine className="h-9 w-full max-w-lg" />

            <SkeletonLine className="h-4 w-full max-w-xl" />
          </div>

          <SkeletonLine className="h-10 w-40" />
        </div>

        {/* Category Cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <CategorySkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkeletonLine = ({ className }: { className?: string }) => {
  return (
    <div className={`animate-pulse rounded-md bg-muted ${className ?? ""}`} />
  );
};

export default CategorySectionSkeleton;
