"use server";

import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

export const register = async (props: FieldValues) => {
  try {
    const base_url = process.env.NEXT_PUBLIC_BACKEND_URL;
    const res = await fetch(`${base_url}/api/v1/users/register`, {
      credentials: "include",
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ ...props }),
    });
    const data = await res.json();

    revalidateTag("users", { expire: 0 });
    return data;
  } catch (error) {
    console.log(error);
  }
};
