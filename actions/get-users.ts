"use server";

import { cookies } from "next/headers";

export const getUsers = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  const base_url = process.env.NEXT_PUBLIC_BACKEND_URL;
  try {
    const res = await fetch(`${base_url}/api/v1/users`, {
      headers: { Cookie: `accessToken=${accessToken}` },
      method: "GET",
      next: { tags: ["users"] },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
