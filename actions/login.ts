"use server";

import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const loginAction = async (props: FieldValues) => {
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const { email, password } = props;

  try {
    const res = await fetch(`${BACKEND_URL}/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    (await cookies()).set("accessToken", data.accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
    });

    (await cookies()).set("refreshToken", data.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
