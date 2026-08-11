import type { Category } from "./category";

export interface Service {
  id: string;
  technicianId: string;
  categoryId: string;
  name: string;
  description: string | null;
  price: string;
  estimatedDuration: number | null;
  status: "ACTIVE" | "INACTIVE";
  createdAt: string;
  updatedAt: string;
  category: Category;
}

export interface ServicesResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: Service[];
}

export interface ServiceResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: Service;
}
