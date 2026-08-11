export interface CategoryService {
  id: string;
  technicianId: string;
  categoryId: string;
  name: string;
  description: string;
  price: string;
  estimatedDuration: number;
  status: "ACTIVE" | "INACTIVE";
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  description: string | null;
  image: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  services: CategoryService[];
}

export interface CategoryApiResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: Category[];
}
