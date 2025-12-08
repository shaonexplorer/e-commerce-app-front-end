"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const UpdateOrderStatus = async (id: string, status: string) => {
  const base_url = process.env.NEXT_PUBLIC_BACKEND_URL;
  const token = (await cookies()).get("accessToken")?.value;
  try {
    const res = await fetch(`${base_url}/api/v1/order/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${token}`,
      },
      body: JSON.stringify({ status }),
    });
    const data = await res.json();
    revalidateTag("orders", { expire: 0 });
    return data;
  } catch (error) {
    console.log(error);
  }
};
