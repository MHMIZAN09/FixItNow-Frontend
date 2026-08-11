import { Skeleton } from "@/components/ui/skeleton";

const CategorySkeleton = () => {
  return (
    <div className="h-full overflow-hidden rounded-2xl border bg-background">
      {/* Image Skeleton */}
      <Skeleton className="h-40 w-full rounded-none" />

      {/* Content Skeleton */}
      <div className="space-y-4 p-5">
        {/* Title */}
        <Skeleton className="h-5 w-32" />

        {/* Description */}
        <div className="space-y-2">
          <Skeleton className="h-3.5 w-full" />
          <Skeleton className="h-3.5 w-4/5" />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-1">
          <Skeleton className="h-3.5 w-20" />

          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default CategorySkeleton;
