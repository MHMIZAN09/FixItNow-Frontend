import {
  ArrowRight,
  CheckCircle2,
  Search,
  ShieldCheck,
  Star,
  Wrench,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b bg-background">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute -left-40 top-40 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
          {/* ==================== LEFT CONTENT ==================== */}
          <div className="max-w-2xl">
            {/* Trust Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-primary" />

              <span>Trusted & Verified Home Professionals</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.08]">
              Reliable Home Services,
              <span className="block text-primary">
                Right When You Need Them.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Find skilled and trusted professionals for plumbing, electrical,
              cleaning, painting, and more. Book the right technician for your
              home in just a few clicks.
            </p>

            {/* Search Box */}
            <div className="mt-8 rounded-2xl border bg-background p-2 shadow-lg shadow-primary/5 sm:flex sm:items-center">
              <div className="flex flex-1 items-center px-3">
                <Search className="mr-3 h-5 w-5 shrink-0 text-muted-foreground" />

                <Input
                  type="text"
                  placeholder="What service do you need?"
                  className="h-11 border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
                />
              </div>

              <Button size="lg" className="mt-2 w-full sm:mt-0 sm:w-auto">
                Find a Service
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/services">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href="/register?role=TECHNICIAN">
                  Become a Technician
                </Link>
              </Button>
            </div>

            {/* Trust Points */}
            <div className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                <span>Verified Professionals</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                <span>Secure Booking</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                <span>Trusted Reviews</span>
              </div>
            </div>
          </div>

          {/* ==================== RIGHT CONTENT ==================== */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto max-w-lg">
              {/* Main Visual */}
              <div className="relative overflow-hidden rounded-3xl border bg-muted shadow-2xl">
                <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 via-background to-muted">
                  <div className="flex h-full flex-col items-center justify-center p-10 text-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-primary text-primary-foreground shadow-xl shadow-primary/20">
                      <Wrench className="h-12 w-12" />
                    </div>

                    <h2 className="mt-8 text-2xl font-bold">
                      Home Service Made Simple
                    </h2>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                      Connect with qualified professionals who are ready to help
                      with your next home project.
                    </p>

                    {/* Rating */}
                    <div className="mt-6 flex items-center gap-2 rounded-full border bg-background px-4 py-2 shadow-sm">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-current text-yellow-500" />
                        <span className="font-semibold">4.9</span>
                      </div>

                      <span className="text-sm text-muted-foreground">
                        Trusted by customers
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card - Verified */}
              <div className="absolute -left-8 top-12 rounded-2xl border bg-background p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">Verified</p>
                    <p className="text-xs text-muted-foreground">
                      Professionals
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Card - Rating */}
              <div className="absolute -bottom-6 -right-6 rounded-2xl border bg-background p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/10">
                    <Star className="h-5 w-5 text-yellow-500" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">4.9/5 Rating</p>
                    <p className="text-xs text-muted-foreground">
                      Customer satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
