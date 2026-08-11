import { Suspense } from "react";
import ServiceSection from "../_components/services/service-section";
import ServiceSectionSkeleton from "../_components/services/service-section-skeleton";

const ServicesPage = () => {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-14 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              FixItNow Professionals
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
              Find a Services
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              Connect with skilled and reliable home service professionals for
              your everyday repair and maintenance needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight">
              Available Services
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Choose a professional that matches your needs.
            </p>
          </div>

          <Suspense
            fallback={
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 8 }).map((_, index) => (
                  <ServiceSectionSkeleton key={index} />
                ))}
              </div>
            }
          >
            <ServiceSection />
          </Suspense>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
