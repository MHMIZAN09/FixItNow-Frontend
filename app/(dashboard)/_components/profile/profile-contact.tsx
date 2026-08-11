import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, MapPin } from "lucide-react";
import { UserProfile } from '../../admin-dashboard/profile/page';


interface ProfileContactProps {
  user: UserProfile;
}

const ProfileContact = ({ user }: ProfileContactProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="flex items-start gap-3">
          <Home className="mt-0.5 h-4 w-4 text-muted-foreground" />

          <div>
            <p className="text-xs text-muted-foreground">Address</p>

            <p className="font-medium">{user.address || "Not provided"}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />

          <div>
            <p className="text-xs text-muted-foreground">City</p>

            <p className="font-medium">{user.city || "Not provided"}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />

          <div>
            <p className="text-xs text-muted-foreground">Area</p>

            <p className="font-medium">{user.area || "Not provided"}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileContact;
