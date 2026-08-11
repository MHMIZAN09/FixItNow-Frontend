"use client";

import {
  ArrowLeft,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Star,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Availability {
  id: string;
  technicianId: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  status: "AVAILABLE" | "UNAVAILABLE";
}

interface Review {
  id?: string;
  rating?: number;
  comment?: string;
  user?: {
    name?: string;
    profileImage?: string | null;
  };
}

interface TechnicianUser {
  id: string;
  name: string;
  profileImage?: string | null;
}

interface Technician {
  id: string;
  bio: string | null;
  experienceYears: number;
  serviceArea: string | null;
  city: string | null;
  isVerified: boolean;
  isAvailable: boolean;
  completedJobs: number;
  averageRating: string;
  totalReviews: number;

  user: TechnicianUser;

  availability: Availability[];
  reviews: Review[];
}

interface Service {
  id: string;
  technicianId: string;
  categoryId: string;
  name: string;
  description: string | null;
  price: string;
  estimatedDuration: number | null;
  status: "ACTIVE" | "INACTIVE";
  createdAt: string;
  updatedAt: string;

  technician: Technician;
}

interface ServiceDetailsProps {
  service: Service;
}

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const getImageUrl = (imageUrl?: string | null) => {
  if (!imageUrl) {
    return "/images/default-avatar.png";
  }

  try {
    const url = new URL(imageUrl);

    if (url.protocol === "http:" || url.protocol === "https:") {
      return imageUrl;
    }

    return "/images/default-avatar.png";
  } catch {
    return "/images/default-avatar.png";
  }
};

const formatPrice = (price: string) => {
  return new Intl.NumberFormat("en-BD", {
    maximumFractionDigits: 0,
  }).format(Number(price));
};

const formatDuration = (minutes: number | null) => {
  if (!minutes) return "Not specified";

  if (minutes < 60) {
    return `${minutes} minutes`;
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (remainingMinutes === 0) {
    return `${hours} hour${hours > 1 ? "s" : ""}`;
  }

  return `${hours}h ${remainingMinutes}m`;
};

const ServiceDetails = ({ service }: ServiceDetailsProps) => {
  const technician = service.technician;

  const technicianName = technician?.user?.name || "Technician";

  const profileImage = getImageUrl(technician?.user?.profileImage);

  const rating = Number(technician?.averageRating || 0);

  const availableDays =
    technician?.availability?.filter((item) => item.status === "AVAILABLE") ||
    [];

  return (
    <main className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>

        <span>/</span>

        <Link href="/services" className="hover:text-primary">
          Services
        </Link>

        <span>/</span>

        <span className="font-medium text-foreground">{service.name}</span>
      </div>

      {/* Back */}
      <Link
        href="/services"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Services
      </Link>

      {/* Service Overview */}
      <section className="grid gap-8 lg:grid-cols-[1.15fr_1fr]">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-muted">
          <Image
            src="/images/service-placeholder.jpg"
            alt={service.name}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <span className="w-fit rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            {service.status}
          </span>

          <h1 className="mt-4 text-3xl font-bold md:text-4xl">
            {service.name}
          </h1>

          {/* Rating */}
          <div className="mt-4 flex items-center gap-2">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />

            <span className="font-semibold">
              {rating > 0 ? rating.toFixed(1) : "New"}
            </span>

            <span className="text-sm text-muted-foreground">
              ({technician.totalReviews} reviews)
            </span>
          </div>

          <p className="mt-5 leading-7 text-muted-foreground">
            {service.description ||
              "Professional home service provided by an experienced technician."}
          </p>

          {/* Price / Duration */}
          <div className="mt-6 flex flex-wrap items-center gap-6">
            <div>
              <p className="text-sm text-muted-foreground">Service Price</p>

              <p className="mt-1 text-3xl font-bold text-primary">
                ৳{formatPrice(service.price)}
              </p>
            </div>

            <div className="h-10 w-px bg-border" />

            <div>
              <p className="text-sm text-muted-foreground">
                Estimated Duration
              </p>

              <div className="mt-1 flex items-center gap-2 font-semibold">
                <Clock3 className="h-4 w-4" />

                {formatDuration(service.estimatedDuration)}
              </div>
            </div>
          </div>

          <Link
            href={`/booking?serviceId=${service.id}`}
            className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3.5 font-semibold text-primary-foreground hover:opacity-90 sm:w-fit"
          >
            <CalendarDays className="mr-2 h-5 w-5" />
            Book Now
          </Link>
        </div>
      </section>

      {/* Content + Sidebar */}
      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_350px]">
        {/* Main */}
        <div className="space-y-10">
          {/* About */}
          <section>
            <h2 className="text-2xl font-bold">About This Service</h2>

            <div className="mt-4 rounded-xl border p-6">
              <p className="leading-8 text-muted-foreground">
                {service.description ||
                  "Professional service provided by our experienced technician."}
              </p>
            </div>
          </section>

          {/* Service Details */}
          <section>
            <h2 className="text-2xl font-bold">Service Details</h2>

            <div className="mt-4 overflow-hidden rounded-xl border">
              <div className="grid grid-cols-2 border-b p-4">
                <span className="text-sm text-muted-foreground">Category</span>

                <span className="text-right font-medium">Service Category</span>
              </div>

              <div className="grid grid-cols-2 border-b p-4">
                <span className="text-sm text-muted-foreground">Price</span>

                <span className="text-right font-semibold">
                  ৳{formatPrice(service.price)}
                </span>
              </div>

              <div className="grid grid-cols-2 border-b p-4">
                <span className="text-sm text-muted-foreground">Duration</span>

                <span className="text-right font-medium">
                  {formatDuration(service.estimatedDuration)}
                </span>
              </div>

              <div className="grid grid-cols-2 p-4">
                <span className="text-sm text-muted-foreground">
                  Service Area
                </span>

                <span className="text-right font-medium">
                  {technician.city || technician.serviceArea || "Not specified"}
                </span>
              </div>
            </div>
          </section>

          {/* Availability */}
          <section>
            <div className="flex items-center gap-2">
              <CalendarDays className="h-6 w-6 text-primary" />

              <h2 className="text-2xl font-bold">Availability</h2>
            </div>

            {availableDays.length > 0 ? (
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {availableDays.map((item) => (
                  <div key={item.id} className="rounded-xl border p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">
                        {DAYS[item.dayOfWeek]}
                      </span>

                      <span className="text-xs font-medium text-green-600">
                        Available
                      </span>
                    </div>

                    <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock3 className="h-4 w-4" />
                      {item.startTime} - {item.endTime}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-4 rounded-xl border p-6 text-center">
                <p className="text-muted-foreground">
                  No availability information found.
                </p>
              </div>
            )}
          </section>

          {/* Reviews */}
          <section>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Customer Reviews</h2>

              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />

                <span className="font-bold">
                  {rating > 0 ? rating.toFixed(1) : "0.0"}
                </span>

                <span className="text-sm text-muted-foreground">/ 5</span>
              </div>
            </div>

            {technician.reviews.length > 0 ? (
              <div className="mt-5 space-y-4">
                {technician.reviews.map((review, index) => (
                  <div
                    key={review.id ?? index}
                    className="rounded-xl border p-5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full bg-muted">
                        <Image
                          src={getImageUrl(review.user?.profileImage)}
                          alt={review.user?.name || "Customer"}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <p className="font-semibold">
                          {review.user?.name || "Customer"}
                        </p>

                        <div className="flex">
                          {Array.from({
                            length: review.rating || 5,
                          }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {review.comment && (
                      <p className="mt-4 text-sm leading-6 text-muted-foreground">
                        {review.comment}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-5 rounded-xl border p-8 text-center">
                <Star className="mx-auto h-8 w-8 text-muted-foreground" />

                <h3 className="mt-3 font-semibold">No reviews yet</h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  Be the first customer to review this service.
                </p>
              </div>
            )}
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-6 lg:self-start">
          {/* Technician */}
          <div className="rounded-2xl border p-6 shadow-sm">
            <h2 className="text-xl font-bold">Technician</h2>

            <div className="mt-5 flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full bg-muted">
                <Image
                  src={profileImage}
                  alt={technicianName}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{technicianName}</h3>

                  {technician.isVerified && (
                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
                  )}
                </div>

                <div className="mt-1 flex items-center gap-1 text-sm">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

                  <span className="font-medium">
                    {rating > 0 ? rating.toFixed(1) : "New"}
                  </span>

                  <span className="text-muted-foreground">
                    ({technician.totalReviews})
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <BriefcaseBusiness className="mt-0.5 h-5 w-5 text-muted-foreground" />

                <div>
                  <p className="text-xs text-muted-foreground">Experience</p>

                  <p className="font-medium">
                    {technician.experienceYears} years
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-muted-foreground" />

                <div>
                  <p className="text-xs text-muted-foreground">Service Area</p>

                  <p className="font-medium">
                    {technician.serviceArea ||
                      technician.city ||
                      "Not specified"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <UserRound className="mt-0.5 h-5 w-5 text-muted-foreground" />

                <div>
                  <p className="text-xs text-muted-foreground">
                    Completed Jobs
                  </p>

                  <p className="font-medium">{technician.completedJobs}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className={`mt-1 h-3 w-3 rounded-full ${
                    technician.isAvailable ? "bg-green-500" : "bg-red-500"
                  }`}
                />

                <div>
                  <p className="text-xs text-muted-foreground">
                    Current Status
                  </p>

                  <p className="font-medium">
                    {technician.isAvailable
                      ? "Available"
                      : "Currently unavailable"}
                  </p>
                </div>
              </div>
            </div>

            {technician.bio && (
              <div className="mt-6 border-t pt-5">
                <p className="text-sm leading-6 text-muted-foreground">
                  {technician.bio}
                </p>
              </div>
            )}

            <Link
              href={`/technicians/${technician.id}`}
              className="mt-6 flex w-full items-center justify-center rounded-lg border px-4 py-3 text-sm font-semibold hover:bg-muted"
            >
              View Profile
            </Link>
          </div>

          {/* Booking */}
          <div className="mt-5 rounded-2xl border p-6 shadow-sm">
            <h2 className="text-xl font-bold">Book This Service</h2>

            <p className="mt-2 text-sm text-muted-foreground">{service.name}</p>

            <div className="mt-5 flex items-end justify-between">
              <span className="text-sm text-muted-foreground">Price</span>

              <span className="text-2xl font-bold text-primary">
                ৳{formatPrice(service.price)}
              </span>
            </div>

            <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <Clock3 className="h-4 w-4" />

              {formatDuration(service.estimatedDuration)}
            </div>

            <Link
              href={`/booking?serviceId=${service.id}`}
              className="mt-6 flex w-full items-center justify-center rounded-lg bg-primary px-5 py-3.5 font-semibold text-primary-foreground hover:opacity-90"
            >
              <CalendarDays className="mr-2 h-5 w-5" />
              Book Now
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default ServiceDetails;
