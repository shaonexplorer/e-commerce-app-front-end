"use server";

import { cookies } from "next/headers";

const base_url = process.env.NEXT_PUBLIC_BACKEND_URL;

export const GetSingleProduct = async (id: string) => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  try {
    const res = await fetch(`${base_url}/api/v1/product/${id}`, {
      headers: { Cookie: `accessToken=${accessToken}` },
      method: "GET",
    });
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const GetAllProducts = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  try {
    const res = await fetch(`${base_url}/api/v1/product/my`, {
      headers: { Cookie: `accessToken=${accessToken}` },
      method: "GET",
    });
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const GetPublicProducts = async (query?: string | null) => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  try {
    const res = await fetch(`${base_url}/api/v1/product?${query}`, {
      headers: { Cookie: `accessToken=${accessToken}` },
      method: "GET",
    });
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
