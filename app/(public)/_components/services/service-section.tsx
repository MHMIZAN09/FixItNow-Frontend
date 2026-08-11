import Link from "next/link";
import { getServicesAction } from "../../_actions/services.actions";
import ServiceCard from "./service-card";

export default async function ServiceSection() {
  const result = await getServicesAction();

  if (!result.success || !result.data?.length) {
    return (
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-2xl font-bold">No Services Available</h2>

          <p className="mt-2 text-gray-500">
            We could not find any services at the moment.
          </p>
        </div>
      </section>
    );
  }

  const services = result.data;

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Services */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service: any) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/services"
            className="inline-block rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
