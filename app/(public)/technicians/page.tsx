import { getTechniciansAction } from "../_actions/technicians.actions";

const TechnicianPage = async () => {
  const result = await getTechniciansAction();
  console.log("Technicians:", result);
  return <div>TechnicianPage</div>;
};

export default TechnicianPage;
