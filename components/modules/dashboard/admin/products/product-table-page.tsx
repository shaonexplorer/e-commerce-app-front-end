import { cookies } from "next/headers";
import { columns } from "../../seller/product/table/column";
import { DataTable } from "../../seller/product/table/data-table";

export default async function AdminProductTable() {
  const base_url = process.env.NEXT_PUBLIC_BACKEND_URL;

  const access_token = (await cookies()).get("accessToken")?.value;

  const res = await fetch(`${base_url}/api/v1/product`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Cookie: `accessToken=${access_token}`,
    },
    next: { tags: ["products"] },
  });

  const data = await res.json();

  return (
    <div className=" px-4  py-6 md:px-6  ">
      <DataTable columns={columns} data={data.data} />
    </div>
  );
}
