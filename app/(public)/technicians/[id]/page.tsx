import {
  ArrowLeft,
  BadgeCheck,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  Clock,
  MapPin,
  Star,
  UserRound,
  XCircle,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  TechnicianAvailability,
  TechnicianService,
} from "../../../../types/technician";
import { getTechnicianByIdAction } from "../../_actions/technicians.actions";

interface TechnicianDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const DAYS_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const TechnicianDetailsPage = async ({
  params,
}: TechnicianDetailsPageProps) => {
  const { id } = await params;

  const result = await getTechnicianByIdAction(id);

  if (!result.success || !result.data) {
    return (
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-md text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <UserRound className="h-8 w-8 text-muted-foreground" />
            </div>

            <h1 className="mt-6 text-2xl font-bold">Technician Not Found</h1>

            <p className="mt-3 text-sm text-muted-foreground">
              {result.message}
            </p>

            <Button asChild className="mt-6">
              <Link href="/technicians">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Technicians
              </Link>
            </Button>
          </div>
        </div>
      </main>
    );
  }

  const technician = result.data;

  const name = technician.user?.name || "Professional Technician";

  const rating = Number(technician.averageRating || 0);

  const availableSchedules =
    technician.availability?.filter(
      (schedule: TechnicianAvailability) => schedule.status === "AVAILABLE",
    ) ?? [];

  const unavailableSchedules =
    technician.availability?.filter(
      (schedule: TechnicianAvailability) => schedule.status === "UNAVAILABLE",
    ) ?? [];

  return (
    <main className="min-h-screen bg-background">
      {/* Back Navigation */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-5">
          <Button asChild variant="ghost" className="-ml-3">
            <Link href="/technicians">
              <ArrowLeft className="mr-2 h-4 w-4" />
              All Technicians
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
            {/* ===================================================== */}
            {/* LEFT SIDE - PROFILE */}
            {/* ===================================================== */}

            <aside>
              <div className="sticky top-6 overflow-hidden rounded-2xl border bg-card shadow-sm">
                {/* Profile Image */}
                <div className="aspect-square bg-muted">
                  {technician.user?.profileImage ? (
                    <img
                      src={technician.user.profileImage}
                      alt={name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <UserRound className="h-28 w-28 text-muted-foreground/30" />
                    </div>
                  )}
                </div>

                {/* Profile Content */}
                <div className="p-6">
                  {/* Status */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        technician.isAvailable
                          ? "bg-green-500/10 text-green-600"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {technician.isAvailable
                        ? "Available Now"
                        : "Currently Unavailable"}
                    </span>

                    {technician.isVerified && (
                      <span className="flex items-center gap-1 text-xs font-semibold text-primary">
                        <BadgeCheck className="h-4 w-4" />
                        Verified
                      </span>
                    )}
                  </div>

                  {/* Name */}
                  <h1 className="mt-5 text-2xl font-bold">{name}</h1>

                  {/* Location */}
                  <div className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0" />

                    <span>
                      {technician.address ||
                        technician.city ||
                        technician.serviceArea ||
                        "Location not specified"}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />

                      <span className="font-semibold">{rating.toFixed(1)}</span>
                    </div>

                    <span className="text-sm text-muted-foreground">
                      ({technician.totalReviews} reviews)
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="my-6 border-t" />

                  {/* Quick Information */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Experience
                      </span>

                      <span className="font-semibold">
                        {technician.experienceYears} years
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Completed Jobs
                      </span>

                      <span className="font-semibold">
                        {technician.completedJobs}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Hourly Rate
                      </span>

                      <span className="font-semibold">
                        {technician.hourlyRate
                          ? `৳${technician.hourlyRate}/hour`
                          : "Not specified"}
                      </span>
                    </div>
                  </div>

                  {/* Book Button */}
                  <Button
                    asChild
                    className="mt-7 w-full"
                    disabled={!technician.isAvailable}
                  >
                    <Link
                      href={`/bookings/create?technicianId=${technician.id}`}
                    >
                      Book Technician
                    </Link>
                  </Button>
                </div>
              </div>
            </aside>

            {/* ===================================================== */}
            {/* RIGHT SIDE - DETAILS */}
            {/* ===================================================== */}

            <div>
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                  <Briefcase className="h-4 w-4" />
                  Professional Technician
                </div>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  {name}
                </h2>

                <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">
                  {technician.bio ||
                    "This technician has not added a professional bio yet."}
                </p>
              </div>

              {/* ================================================= */}
              {/* STATS */}
              {/* ================================================= */}

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {/* Experience */}
                <div className="rounded-xl border bg-card p-5">
                  <Briefcase className="h-5 w-5 text-primary" />

                  <p className="mt-3 text-2xl font-bold">
                    {technician.experienceYears}
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Years Experience
                  </p>
                </div>

                {/* Rating */}
                <div className="rounded-xl border bg-card p-5">
                  <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />

                  <p className="mt-3 text-2xl font-bold">{rating.toFixed(1)}</p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Average Rating
                  </p>
                </div>

                {/* Completed Jobs */}
                <div className="rounded-xl border bg-card p-5">
                  <CheckCircle2 className="h-5 w-5 text-primary" />

                  <p className="mt-3 text-2xl font-bold">
                    {technician.completedJobs}
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Completed Jobs
                  </p>
                </div>

                {/* Reviews */}
                <div className="rounded-xl border bg-card p-5">
                  <Star className="h-5 w-5 text-primary" />

                  <p className="mt-3 text-2xl font-bold">
                    {technician.totalReviews}
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Total Reviews
                  </p>
                </div>
              </div>

              {/* ================================================= */}
              {/* PROFESSIONAL INFORMATION */}
              {/* ================================================= */}

              <div className="mt-12">
                <h3 className="text-xl font-bold">Professional Information</h3>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {/* Service Area */}
                  <div className="flex items-center gap-4 rounded-xl border bg-card p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">
                        Service Area
                      </p>

                      <p className="mt-1 font-semibold">
                        {technician.serviceArea ||
                          technician.city ||
                          "Not specified"}
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-center gap-4 rounded-xl border bg-card p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">Address</p>

                      <p className="mt-1 font-semibold">
                        {technician.address || "Not specified"}
                      </p>
                    </div>
                  </div>

                  {/* Hourly Rate */}
                  <div className="flex items-center gap-4 rounded-xl border bg-card p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">
                        Hourly Rate
                      </p>

                      <p className="mt-1 font-semibold">
                        {technician.hourlyRate
                          ? `৳${technician.hourlyRate}/hour`
                          : "Not specified"}
                      </p>
                    </div>
                  </div>

                  {/* Verification */}
                  <div className="flex items-center gap-4 rounded-xl border bg-card p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <BadgeCheck className="h-5 w-5 text-primary" />
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">
                        Verification
                      </p>

                      <p className="mt-1 font-semibold">
                        {technician.isVerified
                          ? "Verified Technician"
                          : "Not Verified"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ================================================= */}
              {/* SERVICES */}
              {/* ================================================= */}

              <div className="mt-12">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">Services Offered</h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                      Professional services provided by {name}.
                    </p>
                  </div>
                </div>

                {technician.services?.length > 0 ? (
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {technician.services.map((service: TechnicianService) => (
                      <div
                        key={service.id}
                        className="rounded-xl border bg-card p-5"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h4 className="font-semibold">{service.name}</h4>

                            {service.category && (
                              <span className="mt-2 inline-block rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                                {service.category.name}
                              </span>
                            )}
                          </div>

                          <span
                            className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                              service.status === "ACTIVE"
                                ? "bg-green-500/10 text-green-600"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {service.status}
                          </span>
                        </div>

                        <p className="mt-4 text-sm leading-6 text-muted-foreground">
                          {service.description}
                        </p>

                        <div className="mt-5 flex items-center justify-between border-t pt-4">
                          <div>
                            <p className="text-xs text-muted-foreground">
                              Service Price
                            </p>

                            <p className="mt-1 text-lg font-bold">
                              ৳{service.price}
                            </p>
                          </div>

                          <div className="text-right">
                            <p className="text-xs text-muted-foreground">
                              Duration
                            </p>

                            <p className="mt-1 flex items-center gap-1 text-sm font-semibold">
                              <Clock className="h-4 w-4" />
                              {service.estimatedDuration} min
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-5 rounded-xl border border-dashed p-8 text-center">
                    <Briefcase className="mx-auto h-8 w-8 text-muted-foreground/50" />

                    <p className="mt-3 text-sm text-muted-foreground">
                      No services have been added yet.
                    </p>
                  </div>
                )}
              </div>

              {/* ================================================= */}
              {/* WEEKLY AVAILABILITY */}
              {/* ================================================= */}

              <div className="mt-12">
                <div>
                  <h3 className="flex items-center gap-2 text-xl font-bold">
                    <CalendarDays className="h-5 w-5 text-primary" />
                    Weekly Availability
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Check when {name} is available for bookings.
                  </p>
                </div>

                <div className="mt-5 overflow-hidden rounded-xl border bg-card">
                  {technician.availability?.length > 0 ? (
                    <div className="divide-y">
                      {DAYS_OF_WEEK.map((day, index) => {
                        const schedule = technician.availability.find(
                          (item: TechnicianAvailability) =>
                            item.dayOfWeek === index,
                        );

                        const isAvailable = schedule?.status === "AVAILABLE";

                        return (
                          <div
                            key={day}
                            className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between"
                          >
                            {/* Day */}
                            <div className="flex items-center gap-4">
                              <div
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                                  isAvailable ? "bg-green-500/10" : "bg-muted"
                                }`}
                              >
                                {isAvailable ? (
                                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                                ) : (
                                  <XCircle className="h-5 w-5 text-muted-foreground" />
                                )}
                              </div>

                              <div>
                                <p className="font-semibold">{day}</p>

                                <p className="text-sm text-muted-foreground">
                                  {isAvailable && schedule
                                    ? `${schedule.startTime} - ${schedule.endTime}`
                                    : "Not available"}
                                </p>
                              </div>
                            </div>

                            {/* Status */}
                            <span
                              className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                                isAvailable
                                  ? "bg-green-500/10 text-green-600"
                                  : "bg-muted text-muted-foreground"
                              }`}
                            >
                              {isAvailable ? "Available" : "Unavailable"}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="p-8 text-center">
                      <CalendarDays className="mx-auto h-8 w-8 text-muted-foreground/50" />

                      <p className="mt-3 text-sm text-muted-foreground">
                        Availability schedule has not been configured.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* ================================================= */}
              {/* AVAILABILITY SUMMARY */}
              {/* ================================================= */}

              {technician.availability?.length > 0 && (
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border bg-green-500/5 p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      </div>

                      <div>
                        <p className="text-2xl font-bold">
                          {availableSchedules.length}
                        </p>

                        <p className="text-xs text-muted-foreground">
                          Available Days
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border bg-muted/40 p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                        <XCircle className="h-5 w-5 text-muted-foreground" />
                      </div>

                      <div>
                        <p className="text-2xl font-bold">
                          {unavailableSchedules.length}
                        </p>

                        <p className="text-xs text-muted-foreground">
                          Unavailable Days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ================================================= */}
              {/* CTA */}
              {/* ================================================= */}

              <div className="mt-12 overflow-hidden rounded-2xl bg-primary p-6 text-primary-foreground sm:p-8">
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-bold">
                    Need help with your home?
                  </h3>

                  <p className="mt-2 text-sm leading-6 opacity-90">
                    Book {name} and get professional home service from an
                    experienced technician.
                  </p>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button
                      asChild
                      variant="secondary"
                      disabled={!technician.isAvailable}
                    >
                      <Link
                        href={`/bookings/create?technicianId=${technician.id}`}
                      >
                        Book Technician
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                    >
                      <Link href="/technicians">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        View Other Technicians
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TechnicianDetailsPage;
