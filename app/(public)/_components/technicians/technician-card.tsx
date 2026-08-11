import {
  BadgeCheck,
  Briefcase,
  Clock,
  MapPin,
  Star,
  UserRound,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

interface TechnicianCardProps {
  technician: {
    id: string;
    bio: string | null;
    experienceYears: number;
    hourlyRate: string | null;
    serviceArea: string | null;
    city: string | null;
    isVerified: boolean;
    isAvailable: boolean;
    totalJobs: number;
    completedJobs: number;
    averageRating: string;
    totalReviews: number;
    user: {
      name?: string;
      email?: string;
      profileImage?: string | null;
    };
  };
}

const TechnicianCard = ({ technician }: TechnicianCardProps) => {
  const name = technician.user?.name || "Professional Technician";

  const location =
    technician.city || technician.serviceArea || "Location not specified";

  const rating = Number(technician.averageRating || 0);

  return (
    <article className="group overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Profile Image */}
      <div className="relative h-56 overflow-hidden bg-muted">
        {technician.user?.profileImage ? (
          <img
            src={technician.user.profileImage}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <UserRound className="h-20 w-20 text-muted-foreground/30" />
          </div>
        )}

        {/* Availability */}
        <div className="absolute right-4 top-4">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md ${
              technician.isAvailable
                ? "bg-green-500/90 text-white"
                : "bg-black/70 text-white"
            }`}
          >
            {technician.isAvailable ? "Available" : "Unavailable"}
          </span>
        </div>

        {/* Verified */}
        {technician.isVerified && (
          <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold backdrop-blur">
            <BadgeCheck className="h-4 w-4 text-primary" />
            Verified
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Name */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold tracking-tight">{name}</h3>

            <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              {location}
            </div>
          </div>

          {/* Rating */}
          <div className="flex shrink-0 items-center gap-1">
            <Star className="h-4 w-4 fill-current text-yellow-500" />
            <span className="text-sm font-semibold">{rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Bio */}
        <p className="mt-4 line-clamp-2 min-h-10 text-sm leading-5 text-muted-foreground">
          {technician.bio ||
            "Professional home service technician ready to help you."}
        </p>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-muted/50 p-3">
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-primary" />

              <span className="text-xs text-muted-foreground">Experience</span>
            </div>

            <p className="mt-1 text-sm font-semibold">
              {technician.experienceYears} years
            </p>
          </div>

          <div className="rounded-xl bg-muted/50 p-3">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />

              <span className="text-xs text-muted-foreground">Rate</span>
            </div>

            <p className="mt-1 text-sm font-semibold">
              {technician.hourlyRate
                ? `৳${technician.hourlyRate}/hr`
                : "Not set"}
            </p>
          </div>
        </div>

        {/* Reviews / Jobs */}
        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
          <span>
            {technician.totalReviews}{" "}
            {technician.totalReviews === 1 ? "Review" : "Reviews"}
          </span>

          <span>{technician.completedJobs} completed jobs</span>
        </div>

        {/* Button */}
        <Button asChild className="mt-5 w-full">
          <Link href={`/technicians/${technician.id}`}>View Profile</Link>
        </Button>
      </div>
    </article>
  );
};

export default TechnicianCard;
