"use server";
const API_URL = process.env.BACKEND_API_URL;

export const getCategoriesAction = async () => {
  try {
    const response = await fetch(`${API_URL}/api/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 }, // Revalidate the data every 60 seconds
    });

    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const getCategoriesByIdAction = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/api/categories/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 }, // Revalidate the data every 60 seconds
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch category with ID: ${id}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching category with ID ${id}:`, error);
    throw error;
  }
};
