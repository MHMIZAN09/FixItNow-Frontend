"use server";

import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type LoginState = {
  success: boolean;
  statusCode?: number;
  message?: string;
  data?: {
    accessToken: string;
    refreshToken: string;
  };
};

type RegisterState = {
  success: boolean;
  statusCode?: number;
  message?: string;
  data?: {
    name: string;
    email: string;
    role: string;
    profileImage?: string;
  };
};

export const loginAction = async (
  prevState: LoginState,
  formData: FormData,
) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const payload = {
    email,
    password,
  };

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  if (result.success) {
    const cookieStore = await cookies();

    cookieStore.set("accessToken", result.data.accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });

    cookieStore.set("refreshToken", result.data.refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });

    const decodedToken = jwt.decode(result.data.accessToken) as JwtPayload;

    if (decodedToken.role === "CUSTOMER") {
      redirect("/dashboard");
    }

    if (decodedToken.role === "ADMIN") {
      redirect("/admin-dashboard");
    }

    if (decodedToken.role === "TECHNICIAN") {
      redirect("/technician-dashboard");
    }
  }

  return result;
};

export const registerAction = async (
  prevState: RegisterState,
  formData: FormData,
) => {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const role = formData.get("role") as string;

    const image = formData.get("profileImage");

    let profileImageUrl = "";

    // Upload image to ImgBB
    if (image instanceof File && image.size > 0) {
      const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

      if (!allowedTypes.includes(image.type)) {
        return {
          success: false,
          statusCode: 400,
          message: "Invalid image type. Only JPG, PNG and WEBP are allowed.",
        };
      }

      if (image.size > 2 * 1024 * 1024) {
        return {
          success: false,
          statusCode: 400,
          message: "Profile image must be less than 2MB.",
        };
      }

      const imageFormData = new FormData();

      imageFormData.append("image", image);

      const imageResponse = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`,
        {
          method: "POST",
          body: imageFormData,
        },
      );

      const imageResult = await imageResponse.json();

      if (!imageResponse.ok || !imageResult.success) {
        return {
          success: false,
          statusCode: 400,
          message: "Profile image upload failed.",
        };
      }

      profileImageUrl = imageResult.data.url;
    }

    // Backend payload
    const payload = {
      name,
      email,
      password,
      role,
      profileImage: profileImageUrl || undefined,
    };

    // Register API
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    const result = await res.json();

    // Backend error
    if (!res.ok || !result.success) {
      return result;
    }

    // Return success information
    return {
      success: true,
      statusCode: result.statusCode ?? 201,
      message: result.message ?? "Registration successful.",
      redirectTo: "/login",
    };
  } catch (error) {
    console.error("Register action error:", error);

    return {
      success: false,
      statusCode: 500,
      message: "Something went wrong. Please try again.",
    };
  }
};
