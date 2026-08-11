import { Technician } from "../../../../types/technician";
import { getTechniciansAction } from "../../_actions/technicians.actions";

import TechnicianCard from "./technician-card";

const TechnicianSection = async () => {
  const result = await getTechniciansAction();

  if (!result.success) {
    return (
      <div className="rounded-2xl border bg-card p-10 text-center">
        <h3 className="text-lg font-semibold">Unable to load technicians</h3>

        <p className="mt-2 text-sm text-muted-foreground">{result.message}</p>
      </div>
    );
  }

  const technicians: Technician[] = result.data.filter(
    (technician: Technician) => technician.isAvailable,
  );

  if (technicians.length === 0) {
    return (
      <div className="rounded-2xl border bg-muted/30 p-10 text-center">
        <h3 className="text-lg font-semibold">No technicians available</h3>

        <p className="mt-2 text-sm text-muted-foreground">
          There are currently no available technicians. Please check back later.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {technicians.map((technician: Technician) => (
        <TechnicianCard key={technician.id} technician={technician} />
      ))}
    </div>
  );
};

export default TechnicianSection;
