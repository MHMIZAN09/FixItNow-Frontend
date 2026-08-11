import ServiceSkeleton from "./service-skeleton";

export default function ServiceSectionSkeleton() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 space-y-3">
          <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />

          <div className="h-8 w-64 animate-pulse rounded bg-gray-200" />

          <div className="h-4 w-96 max-w-full animate-pulse rounded bg-gray-200" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <ServiceSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
