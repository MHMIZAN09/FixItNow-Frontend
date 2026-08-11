import {
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  DollarSign,
  MapPin,
  Star,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TechnicianProfile } from "../../technician-dashboard/profile/page";

interface TechnicianProfileSectionProps {
  technician: TechnicianProfile;
}

const TechnicianProfileSection = ({
  technician,
}: TechnicianProfileSectionProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle>Technician Information</CardTitle>

            <p className="mt-1 text-sm text-muted-foreground">
              Professional and service information
            </p>
          </div>

          <div className="flex gap-2">
            <Badge variant={technician.isAvailable ? "default" : "secondary"}>
              {technician.isAvailable ? "Available" : "Unavailable"}
            </Badge>

            {technician.isVerified && (
              <Badge variant="outline">
                <CheckCircle2 className="mr-1 h-3.5 w-3.5" />
                Verified
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Bio */}
        <div>
          <p className="mb-2 text-sm font-medium">Professional Bio</p>

          <p className="text-sm leading-6 text-muted-foreground">
            {technician.bio || "No professional bio provided."}
          </p>
        </div>

        {/* Professional Information */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Experience */}
          <div className="rounded-lg border p-4">
            <BriefcaseBusiness className="mb-3 h-5 w-5 text-primary" />

            <p className="text-xs text-muted-foreground">Experience</p>

            <p className="mt-1 font-semibold">
              {technician.experienceYears} years
            </p>
          </div>

          {/* Hourly Rate */}
          <div className="rounded-lg border p-4">
            <DollarSign className="mb-3 h-5 w-5 text-primary" />

            <p className="text-xs text-muted-foreground">Hourly Rate</p>

            <p className="mt-1 font-semibold">
              {technician.hourlyRate
                ? `৳${technician.hourlyRate}`
                : "Not provided"}
            </p>
          </div>

          {/* Service Area */}
          <div className="rounded-lg border p-4">
            <MapPin className="mb-3 h-5 w-5 text-primary" />

            <p className="text-xs text-muted-foreground">Service Area</p>

            <p className="mt-1 font-semibold">
              {technician.serviceArea || "Not provided"}
            </p>
          </div>

          {/* Availability */}
          <div className="rounded-lg border p-4">
            <Clock3 className="mb-3 h-5 w-5 text-primary" />

            <p className="text-xs text-muted-foreground">Availability</p>

            <p className="mt-1 font-semibold">
              {technician.isAvailable ? "Available" : "Unavailable"}
            </p>
          </div>
        </div>

        {/* Location */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />

            <h3 className="font-semibold">Service Location</h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border p-4">
              <p className="text-xs text-muted-foreground">City</p>

              <p className="mt-1 font-medium">
                {technician.city || "Not provided"}
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="text-xs text-muted-foreground">Service Area</p>

              <p className="mt-1 font-medium">
                {technician.serviceArea || "Not provided"}
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="text-xs text-muted-foreground">Address</p>

              <p className="mt-1 font-medium">
                {technician.address || "Not provided"}
              </p>
            </div>
          </div>
        </div>

        {/* Performance */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />

            <h3 className="font-semibold">Performance</h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-muted/50 p-4">
              <p className="text-sm text-muted-foreground">Total Jobs</p>

              <p className="mt-1 text-2xl font-bold">{technician.totalJobs}</p>
            </div>

            <div className="rounded-lg bg-muted/50 p-4">
              <p className="text-sm text-muted-foreground">Completed Jobs</p>

              <p className="mt-1 text-2xl font-bold">
                {technician.completedJobs}
              </p>
            </div>

            <div className="rounded-lg bg-muted/50 p-4">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Star className="h-4 w-4" />
                Rating
              </div>

              <p className="mt-1 text-2xl font-bold">
                {technician.averageRating}
              </p>
            </div>

            <div className="rounded-lg bg-muted/50 p-4">
              <p className="text-sm text-muted-foreground">Total Reviews</p>

              <p className="mt-1 text-2xl font-bold">
                {technician.totalReviews}
              </p>
            </div>
          </div>
        </div>

        {/* Verification */}
        <div className="flex items-center justify-between rounded-lg border p-4">
          <div>
            <p className="font-medium">Verification</p>

            <p className="text-sm text-muted-foreground">
              Technician verification status
            </p>
          </div>

          <Badge variant={technician.isVerified ? "default" : "secondary"}>
            {technician.isVerified ? "Verified" : "Not Verified"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default TechnicianProfileSection;
