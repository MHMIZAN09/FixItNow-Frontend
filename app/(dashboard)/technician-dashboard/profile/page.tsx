import { getUserProfile } from "../../_actions/users.actions";

import AdminProfileSection from "../../_components/profile/admin-profile-section";
import CustomerProfileSection from "../../_components/profile/customer-profile-section";
import ProfileAccount from "../../_components/profile/profile-account";
import ProfileContact from "../../_components/profile/profile-contact";
import ProfileHeader from "../../_components/profile/profile-header";
import ProfileOverview from "../../_components/profile/profile-overview";
import TechnicianProfileSection from "../../_components/profile/technician-profile-section";

export interface TechnicianProfile {
  id?: string;
  userId?: string;

  bio: string | null;
  experienceYears: number;
  hourlyRate: string | null;
  serviceArea: string | null;
  city: string | null;
  address: string | null;
  latitude: number | null;
  longitude: number | null;

  isVerified: boolean;
  isAvailable: boolean;

  totalJobs: number;
  completedJobs: number;
  averageRating: string;
  totalReviews: number;

  createdAt?: string;
  updatedAt?: string;
}

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

  // IMPORTANT
  technicianProfile?: TechnicianProfile | null;
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

  console.log("User Profile Data:", user);

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6">
      {/* Profile Header */}
      <ProfileHeader user={user} />

      {/* Common Information */}
      <div className="grid gap-6 lg:grid-cols-2">
        <ProfileOverview user={user} />

        <ProfileContact user={user} />
      </div>

      {/* Technician */}
      {user.role === "TECHNICIAN" && user.technicianProfile && (
        <TechnicianProfileSection technician={user.technicianProfile} />
      )}

      {/* Customer */}
      {user.role === "CUSTOMER" && <CustomerProfileSection user={user} />}

      {/* Admin */}
      {user.role === "ADMIN" && <AdminProfileSection user={user} />}

      {/* Account */}
      <ProfileAccount user={user} />
    </div>
  );
};

export default ProfilePage;
