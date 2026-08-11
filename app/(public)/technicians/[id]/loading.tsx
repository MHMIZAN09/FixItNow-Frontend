import { Skeleton } from "@/components/ui/skeleton";

const TechnicianDetailsLoading = () => {
  return (
    <main className="min-h-screen">
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-5">
          <Skeleton className="h-9 w-36" />
        </div>
      </div>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[350px_1fr]">
            {/* Profile */}
            <div className="overflow-hidden rounded-2xl border">
              <Skeleton className="aspect-square w-full" />

              <div className="space-y-4 p-5">
                <div className="flex justify-between">
                  <Skeleton className="h-6 w-24 rounded-full" />
                  <Skeleton className="h-5 w-20" />
                </div>

                <Skeleton className="h-8 w-48" />
                <Skeleton className="h-4 w-56" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>

            {/* Details */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-10 w-64" />

                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              </div>

              {/* Stats */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="rounded-xl border p-4">
                    <Skeleton className="h-5 w-5" />
                    <Skeleton className="mt-3 h-7 w-14" />
                    <Skeleton className="mt-2 h-3 w-24" />
                  </div>
                ))}
              </div>

              {/* Professional Info */}
              <div>
                <Skeleton className="h-7 w-64" />

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <Skeleton className="h-20 w-full rounded-xl" />
                  <Skeleton className="h-20 w-full rounded-xl" />
                </div>
              </div>

              {/* CTA */}
              <Skeleton className="h-36 w-full rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TechnicianDetailsLoading;
