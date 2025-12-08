"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const editProduct = async (payload: FormData, id: string) => {
  const accessToken = (await cookies()).get("accessToken")?.value;

  const base_url = process.env.NEXT_PUBLIC_BACKEND_URL;

  try {
    const res = await fetch(`${base_url}/api/v1/product/${id}`, {
      headers: { Cookie: `accessToken=${accessToken}` },
      method: "PATCH",
      body: payload,
    });

    const data = await res.json();

    console.log(data);

    revalidateTag("products", { expire: 0 });
    // revalidatePath("seller/product");

    return data;
  } catch (error) {
    console.log(error);
  }
};
