import { cookies } from "next/headers";
import { columns } from "./column";
import { DataTable } from "./data-table";

export default async function ProductTable() {
  const base_url = process.env.NEXT_PUBLIC_BACKEND_URL;

  const access_token = (await cookies()).get("accessToken")?.value;

  const res = await fetch(`${base_url}/api/v1/product/my`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Cookie: `accessToken=${access_token}`,
    },
    next: { tags: ["products"] },
  });

  const data = await res.json();

  return (
    <div className="container mx-auto  py-10  ">
      <DataTable columns={columns} data={data?.data} />
    </div>
  );
}
