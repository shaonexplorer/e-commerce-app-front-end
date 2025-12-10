import { cookies } from "next/headers";

import { OrdersColumns } from "./order-columns";
import { OrderDataTable } from "./order-data-table";

export default async function AdminOrderTable() {
  const base_url = process.env.NEXT_PUBLIC_BACKEND_URL;

  const access_token = (await cookies()).get("accessToken")?.value;

  const res = await fetch(`${base_url}/api/v1/order/all`, {
    method: "GET",
    credentials: "include",
    headers: { Cookie: `accessToken=${access_token as string}` },
    next: { tags: ["orders"] },
  });

  const data = await res.json();

  return (
    <div className="container mx-auto  py-10  ">
      <OrderDataTable columns={OrdersColumns} data={data.data} />
    </div>
  );
}
