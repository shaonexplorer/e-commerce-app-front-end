"use server";

export const getOrderItems = async (orderId: string) => {
  const base_url = process.env.NEXT_PUBLIC_BACKEND_URL;
  try {
    const res = await fetch(`${base_url}/api/v1/order/orderItems/${orderId}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleOrder = async (orderId: string) => {
  const base_url = process.env.NEXT_PUBLIC_BACKEND_URL;
  try {
    const res = await fetch(`${base_url}/api/v1/order/${orderId}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
