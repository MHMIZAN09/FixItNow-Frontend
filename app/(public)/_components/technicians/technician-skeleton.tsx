import { Skeleton } from "@/components/ui/skeleton";

const TechnicianSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-2xl border bg-card">
      <Skeleton className="h-56 w-full" />

      <div className="space-y-4 p-5">
        <div className="flex justify-between">
          <div className="space-y-2">
            <Skeleton className="h-5 w-36" />
            <Skeleton className="h-4 w-24" />
          </div>

          <Skeleton className="h-5 w-10" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Skeleton className="h-16 w-full rounded-xl" />
          <Skeleton className="h-16 w-full rounded-xl" />
        </div>

        <Skeleton className="h-4 w-32" />

        <Skeleton className="h-10 w-full rounded-md" />
      </div>
    </div>
  );
};

export default TechnicianSkeleton;
