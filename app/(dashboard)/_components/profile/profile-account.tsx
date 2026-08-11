import { CalendarDays, CheckCircle2, Clock } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserProfile } from '../../admin-dashboard/profile/page';


interface ProfileAccountProps {
  user: UserProfile;
}

const formatDate = (date: string | null) => {
  if (!date) {
    return "Never";
  }

  return new Date(date).toLocaleString();
};

const ProfileAccount = ({ user }: ProfileAccountProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Information</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border p-4">
            <CalendarDays className="mb-3 h-5 w-5 text-primary" />

            <p className="text-xs text-muted-foreground">Member Since</p>

            <p className="mt-1 font-medium">{formatDate(user.createdAt)}</p>
          </div>

          <div className="rounded-lg border p-4">
            <Clock className="mb-3 h-5 w-5 text-primary" />

            <p className="text-xs text-muted-foreground">Last Login</p>

            <p className="mt-1 font-medium">{formatDate(user.lastLoginAt)}</p>
          </div>

          <div className="rounded-lg border p-4">
            <CheckCircle2 className="mb-3 h-5 w-5 text-primary" />

            <p className="text-xs text-muted-foreground">Email Verification</p>

            <p className="mt-1 font-medium">
              {user.emailVerifiedAt ? "Verified" : "Not verified"}
            </p>
          </div>

          <div className="rounded-lg border p-4">
            <p className="text-xs text-muted-foreground">Account Status</p>

            <p className="mt-1 font-semibold">{user.status}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileAccount;
