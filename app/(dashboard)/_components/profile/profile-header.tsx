import { BadgeCheck, MapPin, Pencil } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserProfile } from '../../admin-dashboard/profile/page';


interface ProfileHeaderProps {
  user: UserProfile;
}

const getInitials = (name?: string) => {
  if (!name?.trim()) {
    return "U";
  }

  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
};

const ProfileHeader = ({ user }: ProfileHeaderProps) => {
  return (
    <div className="rounded-xl border bg-card">
      <div className="p-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <Avatar className="h-20 w-20 border">
              <AvatarImage src={user.profileImage ?? ""} alt={user.name} />

              <AvatarFallback className="text-xl">
                {getInitials(user.name)}
              </AvatarFallback>
            </Avatar>

            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold">{user.name}</h1>

                {user.role === "TECHNICIAN" && (
                  <BadgeCheck className="h-5 w-5 text-primary" />
                )}
              </div>

              <p className="text-sm text-muted-foreground">{user.email}</p>

              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary">{user.role}</Badge>

                <Badge
                  variant={user.status === "ACTIVE" ? "default" : "destructive"}
                >
                  {user.status}
                </Badge>

                {user.city && (
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    {user.city}
                  </span>
                )}
              </div>
            </div>
          </div>

          <Button variant="outline">
            <Pencil className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
