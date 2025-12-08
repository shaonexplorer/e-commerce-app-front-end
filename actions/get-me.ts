"use server";

import { cookies } from "next/headers";

export const getMe = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;

  try {
    const base_url = process.env.NEXT_PUBLIC_BACKEND_URL;
    const res = await fetch(`${base_url}/api/v1/users/getMe`, {
      credentials: "include",
      headers: { Cookie: `accessToken=${accessToken}` },
    });
    const data = await res.json();

    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};
