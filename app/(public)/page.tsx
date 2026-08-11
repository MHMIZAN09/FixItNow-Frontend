import FinalCta from "../../components/home/final-cta";
import Hero from "../../components/home/hero";
import HowItWorks from "../../components/home/how-it-works";
import TechnicianCta from "../../components/home/technician-cta";
import Testimonials from "../../components/home/testimonials";
import WhyChooseUs from "../../components/home/why-choose-us";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HowItWorks />

      <WhyChooseUs />

      <Testimonials />

      <TechnicianCta />

      <FinalCta />
    </main>
  );
}
