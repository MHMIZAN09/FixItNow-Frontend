import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  MapPin,
  ShieldCheck,
  Star,
  UserRound,
} from "lucide-react";
import Link from "next/link";

interface Technician {
  id: string;
  bio: string | null;
  experienceYears: number;
  hourlyRate: string | null;
  serviceArea: string | null;
  city: string | null;
  address: string | null;
  isVerified: boolean;
  isAvailable: boolean;
  averageRating: string;
  totalReviews: number;
}

interface Service {
  id: string;
  technicianId: string;
  categoryId: string;
  name: string;
  description: string | null;
  price: string;
  estimatedDuration: number;
  status: string;
  technician: Technician;
}

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const technician = service.technician;

  const rating = Number(technician.averageRating);

  const location = technician.serviceArea || technician.city || "Dhaka";

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gray-300 hover:shadow-xl">
      {/* =====================================================
          SERVICE HEADER
      ====================================================== */}
      <div className="relative overflow-hidden bg-linear-to-br from-blue-600 via-indigo-600 to-violet-600 px-6 pb-7 pt-6 text-white">
        {/* Decorative background */}
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

        <div className="absolute -bottom-12 -left-8 h-28 w-28 rounded-full bg-white/10 blur-2xl" />

        <div className="relative">
          {/* Status + Verified */}
          <div className="mb-5 flex items-center justify-between gap-3">
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur-sm">
              {service.status}
            </span>

            {technician.isVerified && (
              <span className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                <ShieldCheck className="h-3.5 w-3.5" />
                Verified
              </span>
            )}
          </div>

          {/* Service Name */}
          <h3 className="line-clamp-1 text-2xl font-bold tracking-tight">
            {service.name}
          </h3>

          {/* Description */}
          <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-blue-50">
            {service.description ||
              "Professional home service from an experienced technician."}
          </p>
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="p-6">
        {/* Price + Duration */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
              Starting Price
            </p>

            <p className="mt-1 text-3xl font-bold tracking-tight text-gray-900">
              ৳{Number(service.price).toLocaleString("en-BD")}
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 px-3 py-2.5 text-right">
            <p className="text-xs font-medium text-gray-400">Duration</p>

            <div className="mt-1 flex items-center justify-end gap-1.5 text-sm font-semibold text-gray-700">
              <Clock3 className="h-4 w-4 text-blue-600" />
              {service.estimatedDuration} min
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-5 border-t border-gray-100" />

        {/* =====================================================
            TECHNICIAN
        ====================================================== */}
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-blue-100 to-indigo-100 ring-4 ring-gray-50">
            <UserRound className="h-5 w-5 text-blue-600" />
          </div>

          {/* Name + Experience */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <h4 className="truncate font-semibold text-gray-900">
                {technician?.user?.name || "Unknown Technician"}
              </h4>

              {technician.isVerified && (
                <BadgeCheck className="h-4 w-4 shrink-0 text-blue-600" />
              )}
            </div>

            <p className="mt-0.5 text-sm text-gray-500">
              {technician.experienceYears} years experience
            </p>
          </div>
        </div>

        {/* =====================================================
            RATING
        ====================================================== */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />

              <span className="text-sm font-semibold text-gray-900">
                {rating > 0 ? rating.toFixed(1) : "New"}
              </span>
            </div>

            <span className="text-sm text-gray-400">
              ({technician.totalReviews} reviews)
            </span>
          </div>

          {/* Availability */}
          <span
            className={`flex items-center gap-1.5 text-xs font-semibold ${
              technician.isAvailable ? "text-emerald-600" : "text-red-500"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${
                technician.isAvailable ? "bg-emerald-500" : "bg-red-500"
              }`}
            />

            {technician.isAvailable ? "Available" : "Unavailable"}
          </span>
        </div>

        {/* =====================================================
            LOCATION
        ====================================================== */}
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2.5">
          <MapPin className="h-4 w-4 shrink-0 text-gray-400" />

          <span className="truncate text-sm text-gray-600">{location}</span>
        </div>

        {/* =====================================================
            CTA
        ====================================================== */}
        <Link
          href={`/services/${service.id}`}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-gray-800 group-hover:shadow-md"
        >
          View Service Details
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
