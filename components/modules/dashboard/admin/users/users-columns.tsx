"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { ArrowUpDown } from "lucide-react";

import { AdminUsersTableAction } from "./users-table-action";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export interface Users {
  id: string;
  name: string;
  email: string;
  role: string;
  isBanned: boolean;
  createdAt: string;
  updatedAt: string;
}

export const AdminUsersColumns: ColumnDef<Users>[] = [
  {
    accessorKey: "email",
    header: "User Email",
  },

  { id: "name", accessorKey: "name", header: "User Name" },
  {
    id: "role",
    accessorKey: "role",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Role
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const role = row.getValue("role");
      return <div className=" ">{role as string}</div>;
    },
  },
  {
    id: "status",
    accessorKey: "isBanned",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as boolean;
      return (
        <div>
          {!status ? (
            <Badge variant={"default"}>Active</Badge>
          ) : (
            <Badge variant={"destructive"}>Banned</Badge>
          )}
        </div>
      );
    },
  },

  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created At
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
      const id = row.original.id;

      return <AdminUsersTableAction id={id} />;
    },
  },
];
