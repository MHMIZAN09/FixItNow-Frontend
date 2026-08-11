"use server";

import { cookies } from "next/headers";

const API_URL = process.env.BACKEND_API_URL;
export const getMe = async () => {
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

    const res = await fetch(`${API_URL}/api/auth/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        cookie: `accessToken=${accessToken}`,
      },
      cache: "no-store",
    });

    const result = await res.json();
    // console.log('getMe result:', result);
    return result;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return {
      success: false,
      statusCode: 500,
      message: "An error occurred while fetching user data.",
    };
  }
};
