import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Shield, User } from "lucide-react";
import { UserProfile } from "../../admin-dashboard/profile/page";

interface ProfileOverviewProps {
  user: UserProfile;
}

const ProfileOverview = ({ user }: ProfileOverviewProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="flex items-start gap-3">
          <User className="mt-0.5 h-4 w-4 text-muted-foreground" />

          <div>
            <p className="text-xs text-muted-foreground">Full Name</p>

            <p className="font-medium">{user.name || "Not provided"}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Mail className="mt-0.5 h-4 w-4 text-muted-foreground" />

          <div>
            <p className="text-xs text-muted-foreground">Email</p>

            <p className="font-medium break-all">
              {user.email || "Not provided"}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Phone className="mt-0.5 h-4 w-4 text-muted-foreground" />

          <div>
            <p className="text-xs text-muted-foreground">Phone</p>

            <p className="font-medium">{user.phone || "Not provided"}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Shield className="mt-0.5 h-4 w-4 text-muted-foreground" />

          <div>
            <p className="text-xs text-muted-foreground">Role</p>

            <p className="font-medium">{user.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileOverview;
