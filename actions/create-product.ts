"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const createProduct = async (payload: FormData) => {
  const accessToken = (await cookies()).get("accessToken")?.value;

  const base_url = process.env.NEXT_PUBLIC_BACKEND_URL;

  try {
    const res = await fetch(`${base_url}/api/v1/product/create`, {
      headers: { Cookie: `accessToken=${accessToken}` },
      method: "POST",
      body: payload,
    });

    const data = await res.json();

    revalidateTag("products", { expire: 0 });
    // revalidatePath("seller/product");

    return data;
  } catch (error) {
    console.log(error);
  }
};
