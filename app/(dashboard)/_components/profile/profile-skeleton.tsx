import { Skeleton } from "@/components/ui/skeleton";

const ProfileSkeleton = () => {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-6">
      <div className="rounded-xl border p-6">
        <div className="flex items-center gap-5">
          <Skeleton className="h-20 w-20 rounded-full" />

          <div className="space-y-3">
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-4 w-56" />

            <div className="flex gap-2">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-20" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Skeleton className="h-72 rounded-xl" />
        <Skeleton className="h-72 rounded-xl" />
      </div>

      <Skeleton className="h-80 rounded-xl" />

      <Skeleton className="h-48 rounded-xl" />
    </div>
  );
};

export default ProfileSkeleton;
