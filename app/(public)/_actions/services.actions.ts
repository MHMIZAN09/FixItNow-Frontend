"use server";
const API_URL = process.env.BACKEND_API_URL;

export const getServicesAction = async () => {
  try {
    const response = await fetch(`${API_URL}/api/services`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 }, // Revalidate the data every 60 seconds
    });

    if (!response.ok) {
      throw new Error("Failed to fetch services");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw error;
  }
};

export const getServicesByIdAction = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/api/services/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 }, // Revalidate the data every 60 seconds
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch service with ID: ${id}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching service with ID ${id}:`, error);
    throw error;
  }
};
