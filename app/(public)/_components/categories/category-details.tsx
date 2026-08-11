import Link from 'next/link';
import { ArrowRight, Clock, Wrench } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface CategoryDetailsProps {
  category: {
    id: string;
    name: string;
    description: string;
    image: string | null;
    isActive: boolean;
    services: {
      id: string;
      name: string;
      description: string;
      price: string;
      estimatedDuration: number;
      status: string;
    }[];
  };
}

const CategoryDetails = ({
  category,
}: CategoryDetailsProps) => {
  const activeServices = category.services.filter(
    (service) => service.status === 'ACTIVE',
  );

  return (
    <div className="space-y-12">
      {/* ================= CATEGORY HEADER ================= */}
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden rounded-2xl border bg-muted">
          {category.image ? (
            <img
              src={category.image}
              alt={category.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <Wrench className="h-20 w-20 text-muted-foreground/40" />
            </div>
          )}
        </div>

        {/* Content */}
        <div>
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Service Category
          </span>

          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {category.name}
          </h1>

          <p className="mt-4 leading-7 text-muted-foreground">
            {category.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <div className="rounded-lg border bg-card px-4 py-3">
              <p className="text-2xl font-bold">
                {activeServices.length}
              </p>

              <p className="text-xs text-muted-foreground">
                Available Services
              </p>
            </div>

            <div className="rounded-lg border bg-card px-4 py-3">
              <p className="text-2xl font-bold">
                {category.isActive ? 'Active' : 'Inactive'}
              </p>

              <p className="text-xs text-muted-foreground">
                Category Status
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SERVICES ================= */}
      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-tight">
            Available Services
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Choose a service from this category.
          </p>
        </div>

        {activeServices.length === 0 ? (
          <div className="rounded-2xl border bg-muted/30 p-10 text-center">
            <Wrench className="mx-auto h-8 w-8 text-muted-foreground" />

            <h3 className="mt-4 font-semibold">
              No services available
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              There are currently no active services in this
              category.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {activeServices.map((service) => (
              <div
                key={service.id}
                className="group rounded-2xl border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Wrench className="h-5 w-5" />
                  </div>

                  <span className="text-lg font-bold text-primary">
                    ৳{service.price}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold">
                  {service.name}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
                  {service.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-4 w-4" />

                  <span>
                    {service.estimatedDuration} minutes
                  </span>
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="mt-5 w-full"
                >
                  <Link
                    href={`/services?categoryId=${category.id}`}
                  >
                    Find Technicians
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default CategoryDetails;
