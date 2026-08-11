import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const CategoryDetailsLoading = () => {
  return (
    <main className="min-h-screen">
      {/* Back Button */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-5">
          <Button variant="ghost" size="sm" disabled className="-ml-3">
            <ArrowLeft className="mr-2 h-4 w-4" />
            All Categories
          </Button>
        </div>
      </section>

      {/* Category Details */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {/* Category Header */}
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              {/* Image Skeleton */}
              <Skeleton className="aspect-video w-full rounded-2xl" />

              {/* Content Skeleton */}
              <div className="space-y-5">
                <Skeleton className="h-6 w-32 rounded-full" />

                <Skeleton className="h-10 w-3/4" />

                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>

                {/* Stats */}
                <div className="flex gap-3">
                  <div className="rounded-lg border p-4">
                    <Skeleton className="h-7 w-10" />
                    <Skeleton className="mt-2 h-3 w-28" />
                  </div>

                  <div className="rounded-lg border p-4">
                    <Skeleton className="h-7 w-16" />
                    <Skeleton className="mt-2 h-3 w-24" />
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <section>
              <div className="mb-6 space-y-2">
                <Skeleton className="h-7 w-52" />
                <Skeleton className="h-4 w-80 max-w-full" />
              </div>

              {/* Service Cards */}
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="rounded-2xl border bg-card p-5">
                    <div className="flex items-start justify-between gap-4">
                      <Skeleton className="h-10 w-10 rounded-xl" />

                      <Skeleton className="h-6 w-20" />
                    </div>

                    <Skeleton className="mt-5 h-6 w-3/4" />

                    <div className="mt-3 space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-5/6" />
                    </div>

                    <Skeleton className="mt-5 h-4 w-28" />

                    <Skeleton className="mt-5 h-10 w-full rounded-md" />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CategoryDetailsLoading;
