import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  HeartHandshake,
  ShieldCheck,
  Star,
  Users,
  Wrench,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const values = [
  {
    title: "Trusted Professionals",
    description:
      "We help customers discover skilled and reliable technicians for their home service needs.",
    icon: BadgeCheck,
  },
  {
    title: "Simple Booking",
    description:
      "Find the right service, choose a technician, select a convenient time, and book with ease.",
    icon: CalendarCheck,
  },
  {
    title: "Safe & Secure",
    description:
      "We focus on creating a secure platform for customers and technicians to manage their services.",
    icon: ShieldCheck,
  },
  {
    title: "Customer First",
    description:
      "Our platform is designed around making home services easier, more convenient, and reliable.",
    icon: HeartHandshake,
  },
];

const stats = [
  {
    value: "100+",
    label: "Verified Technicians",
    icon: Users,
  },
  {
    value: "500+",
    label: "Services Completed",
    icon: Wrench,
  },
  {
    value: "4.8/5",
    label: "Average Rating",
    icon: Star,
  },
  {
    value: "24/7",
    label: "Service Access",
    icon: ShieldCheck,
  },
];

const AboutPage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-muted/30 py-20 sm:py-24">
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
              <Wrench className="h-7 w-7" />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-primary">
              About FixItNow
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Your Trusted Home Service Platform
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              FixItNow connects customers with skilled technicians for reliable
              home services. From plumbing and electrical work to cleaning and
              painting, we make finding professional help simple.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/services">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline">
                <Link href="/register">Join FixItNow</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Who We Are
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Making Home Services Easier for Everyone
              </h2>

              <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
                <p>
                  FixItNow is a home services marketplace designed to connect
                  customers with qualified technicians in one convenient
                  platform.
                </p>

                <p>
                  Instead of searching through multiple sources for a reliable
                  professional, customers can browse services, compare
                  technicians, check reviews, and request a booking directly
                  through FixItNow.
                </p>

                <p>
                  For technicians, FixItNow provides an opportunity to showcase
                  their skills, manage their availability, receive bookings, and
                  build a strong professional reputation.
                </p>
              </div>
            </div>

            {/* Visual Card */}
            <div className="relative">
              <div className="rounded-3xl border bg-muted/40 p-6 sm:p-8">
                <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <HeartHandshake className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold">
                    Built Around Trust
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    Every part of FixItNow is designed to make the connection
                    between customers and service professionals easier and more
                    trustworthy.
                  </p>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <BadgeCheck className="h-4 w-4" />
                      </div>

                      <span className="text-sm font-medium">
                        Professional Technicians
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <ShieldCheck className="h-4 w-4" />
                      </div>

                      <span className="text-sm font-medium">
                        Secure Platform
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Star className="h-4 w-4" />
                      </div>

                      <span className="text-sm font-medium">
                        Customer Reviews
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-muted/30 py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div key={stat.label} className="text-center">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>

                  <p className="mt-4 text-2xl font-bold sm:text-3xl">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              What We Value
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              What Makes FixItNow Different?
            </h2>

            <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
              We believe finding a home service professional should be simple,
              transparent, and convenient.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-2xl border bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">{value.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-t bg-muted/30 py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <HeartHandshake className="h-6 w-6" />
            </div>

            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              Our Mission
            </h2>

            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
              Our mission is to make professional home services accessible,
              convenient, and trustworthy by bringing customers and skilled
              technicians together through one simple platform.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-16 text-primary-foreground sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Wrench className="mx-auto h-9 w-9" />

            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Get Started?
            </h2>

            <p className="mt-4 text-sm leading-7 text-primary-foreground/80 sm:text-base">
              Find the right professional for your next home service project or
              join FixItNow as a technician.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/services">
                  Find a Service
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link href="/register?role=TECHNICIAN">
                  Become a Technician
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
