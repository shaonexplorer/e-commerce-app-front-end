"use server";

import { cookies } from "next/headers";

export const getAccessToken = async () => {
  try {
    const accessToken = (await cookies()).get("accessToken")?.value;
    return accessToken;
  } catch (error) {
    console.log(error);
  }
};
