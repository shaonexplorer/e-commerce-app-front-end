"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const deleteProduct = async (id: string) => {
  const base_url = process.env.NEXT_PUBLIC_BACKEND_URL;
  const accessToken = (await cookies()).get("accessToken")?.value;
  try {
    const res = await fetch(`${base_url}/api/v1/product/${id}`, {
      headers: { Cookie: `accessToken=${accessToken}` },
      method: "DELETE",
    });

    const data = await res.json();

    revalidateTag("products", { expire: 0 });

    return data;
  } catch (error) {
    console.log(error);
  }
};
