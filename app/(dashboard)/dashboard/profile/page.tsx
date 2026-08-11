import { getUserProfile } from "../../_actions/users.actions";
import CustomerProfileSection from "../../_components/profile/customer-profile-section";
import ProfileAccount from "../../_components/profile/profile-account";
import ProfileContact from "../../_components/profile/profile-contact";
import ProfileHeader from "../../_components/profile/profile-header";
import ProfileOverview from "../../_components/profile/profile-overview";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  profileImage: string | null;
  role: "ADMIN" | "TECHNICIAN" | "CUSTOMER";
  status: "ACTIVE" | "BANNED";
  address: string | null;
  city: string | null;
  area: string | null;
  lastLoginAt: string | null;
  emailVerifiedAt: string | null;
  createdAt: string;
  updatedAt: string;

  technician?: TechnicianProfile | null;
}

export interface TechnicianProfile {
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
}

const ProfilePage = async () => {
  const result = await getUserProfile();

  if (!result?.success || !result?.data) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold">Unable to load profile</h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Please login again and try again.
          </p>
        </div>
      </div>
    );
  }

  const user = result.data as UserProfile;

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6">
      {/* Profile Header */}
      <ProfileHeader user={user} />

      {/* Common Information */}
      <div className="grid gap-6 lg:grid-cols-2">
        <ProfileOverview user={user} />

        <ProfileContact user={user} />
      </div>

      {user.role === "CUSTOMER" && <CustomerProfileSection user={user} />}

      {/* Account Information */}
      <ProfileAccount user={user} />
    </div>
  );
};

export default ProfilePage;
