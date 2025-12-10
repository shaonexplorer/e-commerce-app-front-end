"use server";

import { cookies } from "next/headers";

export const getInvoice = async (id: string) => {
  const base_url = process.env.NEXT_PUBLIC_BACKEND_URL;
  const token = (await cookies()).get("accessToken")?.value;
  try {
    const res = await fetch(`${base_url}/api/v1/invoice/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${token}`,
      },
    });
    const blob = await res.blob();
    return blob as import("buffer").Blob;
  } catch (error) {
    console.log(error);
  }
};
