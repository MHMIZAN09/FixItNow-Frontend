import { ShieldCheck, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { UserProfile } from "../../admin-dashboard/profile/page";

interface AdminProfileSectionProps {
  user: UserProfile;
}

const AdminProfileSection = ({ user }: AdminProfileSectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Administration</CardTitle>

        <p className="text-sm text-muted-foreground">
          Administrator account information
        </p>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border p-4">
            <ShieldCheck className="mb-3 h-5 w-5 text-primary" />

            <p className="text-sm text-muted-foreground">Account Role</p>

            <div className="mt-2">
              <Badge>{user.role}</Badge>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <Users className="mb-3 h-5 w-5 text-primary" />

            <p className="text-sm text-muted-foreground">Access Level</p>

            <p className="mt-1 font-semibold">Full Administration Access</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminProfileSection;
