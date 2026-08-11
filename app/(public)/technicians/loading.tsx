import TechnicianSkeleton from "../_components/technicians/technician-skeleton";

const TechniciansLoading = () => {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-10 sm:py-14">
        <div className="mb-10 space-y-3">
          <div className="h-4 w-32 animate-pulse rounded bg-muted" />

          <div className="h-10 w-72 animate-pulse rounded bg-muted" />

          <div className="h-5 w-full max-w-2xl animate-pulse rounded bg-muted" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <TechnicianSkeleton key={index} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default TechniciansLoading;
