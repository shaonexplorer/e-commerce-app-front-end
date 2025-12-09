"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { ArrowUpDown } from "lucide-react";
import OrderTableAction from "./order-table-action";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export interface Orders {
  id: string;
  totalAmount: number;
  status: string;
  buyer: {
    email: string;
    name?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export const OrdersColumns: ColumnDef<Orders>[] = [
  {
    accessorKey: "id",
    header: "Order Id",
  },
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

  {
    accessorKey: "totalAmount",
    header: ({ column }) => {
      return (
        <div className="flex items-center justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Total Amount
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-center">
          {row.getValue("totalAmount")}
        </div>
      );
    },
  },
  { id: "buyer", accessorKey: "buyer.email", header: "Customer Email" },
  {
    accessorKey: "createdAt",
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
        <div className=" ">{format(row.getValue("createdAt"), "PPpp")}</div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.getValue("id") as string;

      return <OrderTableAction id={id} />;
    },
  },
];
