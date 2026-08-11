import { ArrowRight, CheckCircle2, ShieldCheck, Wrench } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const FinalCta = () => {
  return (
    <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground sm:py-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          {/* Icon */}
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
            <Wrench className="h-7 w-7" />
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to Get Things Fixed?
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-primary-foreground/80 sm:text-base">
            Find a trusted professional for your home service needs and book
            your appointment today.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="font-semibold"
            >
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
              <Link href="/register">Create an Account</Link>
            </Button>
          </div>

          {/* Trust Points */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 text-sm text-primary-foreground/80 sm:flex-row sm:gap-8">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" />
              <span>Verified Professionals</span>
            </div>

            <div className="hidden h-4 w-px bg-white/20 sm:block" />

            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              <span>Secure Booking</span>
            </div>

            <div className="hidden h-4 w-px bg-white/20 sm:block" />

            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              <span>Trusted Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
