"use server";

import { cookies } from "next/headers";

export const signOut = async () => {
  try {
    const base_url = process.env.NEXT_PUBLIC_BACKEND_URL;
    const res = await fetch(`${base_url}/api/v1/auth/logOut`, {
      credentials: "include",
      method: "POST",
      headers: { "content-Type": "application/json" },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const clearCookies = async () => {
  try {
    (await cookies()).delete("accessToken");
    (await cookies()).delete("refreshToken");
  } catch (error) {
    console.log(error);
  }
};
