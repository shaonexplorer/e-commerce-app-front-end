"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const bannUser = async (id: string) => {
  const accessToken = (await cookies()).get("accessToken")?.value;

  const base_url = process.env.NEXT_PUBLIC_BACKEND_URL;

  try {
    const res = await fetch(`${base_url}/api/v1/users/${id}`, {
      headers: { Cookie: `accessToken=${accessToken}` },
      method: "POST",
    });

    const data = await res.json();

    revalidateTag("users", { expire: 0 });

    return data;
  } catch (error) {
    console.log(error);
  }
};
