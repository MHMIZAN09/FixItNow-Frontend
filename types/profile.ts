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

  technicianProfile?: TechnicianProfile | null;
}
