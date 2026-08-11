import { CalendarCheck, Search, ShieldCheck, UserCheck } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Choose a Service",
    description:
      "Browse our wide range of home services and find exactly what you need.",
    icon: Search,
  },
  {
    step: "02",
    title: "Find a Technician",
    description:
      "Explore verified professionals, check their experience, ratings, and reviews.",
    icon: UserCheck,
  },
  {
    step: "03",
    title: "Book a Time Slot",
    description:
      "Choose a convenient date and time and send your booking request.",
    icon: CalendarCheck,
  },
  {
    step: "04",
    title: "Get Your Service",
    description:
      "Your technician arrives at the scheduled time and gets the job done.",
    icon: ShieldCheck,
  },
];

const HowItWorks = () => {
  return (
    <section className="border-t bg-muted/30 py-16 sm:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Simple Process
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            How FixItNow Works
          </h2>

          <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
            Getting professional help for your home has never been easier. Just
            follow these four simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Connecting Line */}
          <div className="absolute left-[12%] right-[12%] top-12 hidden h-px bg-border lg:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.step} className="relative z-10 text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border bg-background shadow-sm">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                </div>

                <span className="mt-5 inline-block text-xs font-bold tracking-wider text-primary">
                  STEP {step.step}
                </span>

                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
