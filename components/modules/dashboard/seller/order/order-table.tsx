import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { cookies } from "next/headers";
import { format } from "date-fns";
import { SellerOrderDataTable } from "./sellerOrderDataTable";
import { SellerOrdersColumns } from "./seller-order-column";

export interface IOrderItems {
  id: string;
  orderId: string;
  productId: string;
  sellerId: string;
  quantity: number;
  price: number;
  status: string;
  Product: Product;
  order: Order;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  quantity: number;
  images: string[];
  videoUrl: null;
  sellerId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  id: string;
  buyerId: string;
  totalAmount: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export default async function OrderTable() {
  let items: IOrderItems[] = [];

  const base_url = process.env.NEXT_PUBLIC_BACKEND_URL;

  const cookieStore = await cookies();
  const access_token = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${base_url}/api/v1/order`, {
    method: "GET",
    credentials: "include",
    headers: { Cookie: `accessToken=${access_token as string}` },
    cache: "no-store",
    next: { tags: ["orders"] },
  });

  const data = await res.json();

  items = data.data;

  return (
    <div className=" ">
      <SellerOrderDataTable data={items} columns={SellerOrdersColumns} />
    </div>
  );
}
