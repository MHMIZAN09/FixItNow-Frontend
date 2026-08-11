import { CalendarDays, ShoppingBag } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserProfile } from '../../admin-dashboard/profile/page';


interface CustomerProfileSectionProps {
  user: UserProfile;
}

const CustomerProfileSection = ({ user }: CustomerProfileSectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Information</CardTitle>

        <p className="text-sm text-muted-foreground">
          Your FixItNow customer account
        </p>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border p-4">
            <ShoppingBag className="mb-3 h-5 w-5 text-primary" />

            <p className="text-sm text-muted-foreground">Customer ID</p>

            <p className="mt-1 break-all font-medium">{user.id}</p>
          </div>

          <div className="rounded-lg border p-4">
            <CalendarDays className="mb-3 h-5 w-5 text-primary" />

            <p className="text-sm text-muted-foreground">Member Since</p>

            <p className="mt-1 font-medium">
              {new Date(user.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomerProfileSection;
