"use server";

import { cookies } from "next/headers";

const API_URL = process.env.BACKEND_API_URL;

export const getAllUsersAction = async () => {
  try {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
      return {
        success: false,
        statusCode: 401,
        message: "User is not authenticated. Access token is missing.",
      };
    }

    const res = await fetch(`${API_URL}/api/admin/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `accessToken=${accessToken}`,
      },
      next: { revalidate: 30 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export async function getUserProfile() {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      statusCode: 401,
      message: "User is not authenticated. Access token is missing.",
    };
  }

  const res = await fetch(`${API_URL}/api/users/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      cookie: `accessToken=${accessToken}`,
    },
    cache: "no-store",
  });

  const result = await res.json();
  // console.log('result', result);
  return result;
}
