import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Users,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const TechnicianCta = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl border bg-muted/40">
          {/* Background Decoration */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative grid gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center lg:px-14 lg:py-14">
            {/* Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 text-xs font-semibold text-primary shadow-sm">
                <BriefcaseBusiness className="h-3.5 w-3.5" />
                For Professionals
              </div>

              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                Grow Your Business with FixItNow
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                Are you a skilled home service professional? Join FixItNow,
                showcase your expertise, connect with new customers, and grow
                your business.
              </p>

              {/* Benefits */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Reach More Customers</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Manage Your Bookings</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Build Your Reputation</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Set Your Availability</span>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/register?role=TECHNICIAN">
                    Join as a Technician
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2">
              <div className="rounded-2xl border bg-background p-5 text-center shadow-sm">
                <Users className="mx-auto h-6 w-6 text-primary" />

                <p className="mt-3 text-2xl font-bold">100+</p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Professionals
                </p>
              </div>

              <div className="rounded-2xl border bg-background p-5 text-center shadow-sm">
                <BriefcaseBusiness className="mx-auto h-6 w-6 text-primary" />

                <p className="mt-3 text-2xl font-bold">500+</p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Jobs Completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicianCta;
