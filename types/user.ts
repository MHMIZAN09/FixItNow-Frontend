export type UserRole = "ADMIN" | "TECHNICIAN" | "CUSTOMER";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  profileImage: string | null;
  role: UserRole;
  status: "ACTIVE" | "BANNED";
  address: string | null;
  city: string | null;
  area: string | null;
  lastLoginAt: string | null;
  emailVerifiedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface UserProfileResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: UserProfile;
}
