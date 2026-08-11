import { getServicesByIdAction } from "../../_actions/services.actions";
import ServiceDetails from "../../_components/services/service-details";

interface ServiceDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const ServiceDetailPage = async ({ params }: ServiceDetailPageProps) => {
  const { id } = await params;

  const result = await getServicesByIdAction(id);

  if (!result.success || !result.data) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Service not found</h1>

        <p className="mt-2 text-muted-foreground">
          The service you are looking for does not exist.
        </p>
      </div>
    );
  }

  return <ServiceDetails service={result.data} />;
};

export default ServiceDetailPage;
