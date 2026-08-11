export interface TechnicianUser {
  id: string;
  name: string;
  profileImage: string | null;
}

export interface TechnicianCategory {
  id: string;
  name: string;
  description: string;
  image: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TechnicianService {
  id: string;
  technicianId: string;
  categoryId: string;
  name: string;
  description: string;
  price: string;
  estimatedDuration: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  category: TechnicianCategory;
}

export interface TechnicianAvailability {
  id: string;
  technicianId: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  status: "AVAILABLE" | "UNAVAILABLE";
  createdAt: string;
  updatedAt: string;
}

export interface Technician {
  id: string;
  bio: string | null;
  experienceYears: number;
  hourlyRate: string | null;
  serviceArea: string | null;
  city: string | null;
  address: string | null;
  isVerified: boolean;
  isAvailable: boolean;
  totalJobs: number;
  completedJobs: number;
  averageRating: string;
  totalReviews: number;
  user: TechnicianUser;
  services: TechnicianService[];
  availability: TechnicianAvailability[];
}

export interface TechnicianResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: Technician;
}
