"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { ArrowUpDown } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export interface SellerOrders {
  id: string;
  Product: { title: string; category: string };
  status: string;
  price: number;
  quantity: number;
  order: { createdAt: string };
}

export const SellerOrdersColumns: ColumnDef<SellerOrders>[] = [
  { id: "product", accessorKey: "Product.title", header: "Product Name" },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center justify-center"
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <div className=" ">
          <Badge
            className={cn(
              status === "PENDING" && "bg-amber-400",
              status === "PROCESSING" && "bg-fuchsia-500",
              status === "SHIPPED" && "bg-green-400",
              status === "DELIVERED" && "bg-green-600",
              status === "CANCELED" && "bg-amber-800"
            )}
          >
            {status.toLowerCase()}
          </Badge>
        </div>
      );
    },
  },
  { accessorKey: "Product.category", header: "Category" },
  { accessorKey: "quantity", header: "Quantity" },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <div className="flex items-center justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Price
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-center">
          {row.getValue("price")}
        </div>
      );
    },
  },

  {
    id: "orderDate",
    accessorKey: "order.createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Order Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className=" ">{format(row.getValue("orderDate"), "PPpp")}</div>
      );
    },
  },
  //   {
  //     id: "actions",
  //     cell: ({ row }) => {
  //       const id = row.getValue("id") as string;

  //       return <OrderTableAction id={id} />;
  //     },
  //   },
];
