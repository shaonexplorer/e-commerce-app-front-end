"use server";

import { ICartItem } from "@/lib/features/cart-slice";
import { cookies } from "next/headers";

export const createPayment = async (cartItems: ICartItem[]) => {
  const base_url = process.env.NEXT_PUBLIC_BACKEND_URL;
  const token = (await cookies()).get("accessToken")?.value;
  try {
    const res = await fetch(`${base_url}/api/v1/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${token}`,
      },
      body: JSON.stringify({ items: cartItems }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
