import {
  BadgeCheck,
  Clock3,
  CreditCard,
  Headphones,
  ShieldCheck,
  Star,
} from "lucide-react";

const benefits = [
  {
    title: "Verified Professionals",
    description:
      "Connect with trusted technicians whose profiles and professional details are carefully reviewed.",
    icon: BadgeCheck,
  },
  {
    title: "Secure Payments",
    description:
      "Make payments securely through trusted payment providers after your booking is accepted.",
    icon: CreditCard,
  },
  {
    title: "Quality Service",
    description:
      "Choose professionals based on ratings, reviews, experience, and service details.",
    icon: Star,
  },
  {
    title: "Flexible Scheduling",
    description:
      "Choose available time slots that work best for your home service needs.",
    icon: Clock3,
  },
  {
    title: "Safe & Reliable",
    description:
      "Our platform helps you find reliable professionals for your everyday home service needs.",
    icon: ShieldCheck,
  },
  {
    title: "Dedicated Support",
    description:
      "Get assistance when you need help with your bookings or platform experience.",
    icon: Headphones,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Why FixItNow
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose FixItNow?
          </h2>

          <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
            We make it simple to find reliable professionals and get your home
            service needs taken care of.
          </p>
        </div>

        {/* Benefits */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="group rounded-2xl border bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-lg font-semibold">{benefit.title}</h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
