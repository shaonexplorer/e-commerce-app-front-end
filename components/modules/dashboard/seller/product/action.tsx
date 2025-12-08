import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { DeleteAlertDialog } from "./alert-dialog-delete";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { EditProduct } from "./sheet/edit-product";

function TableAction({ id }: { id: string }) {
  const [open, setOpen] = useState(false);
  return (
    <AlertDialog>
      <Sheet open={open} onOpenChange={setOpen}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <SheetTrigger asChild>
              <DropdownMenuItem>Edit</DropdownMenuItem>
            </SheetTrigger>

            <AlertDialogTrigger asChild>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </AlertDialogTrigger>
          </DropdownMenuContent>
        </DropdownMenu>
        <DeleteAlertDialog id={id} />
        <EditProduct setOpen={setOpen} id={id} />
      </Sheet>
    </AlertDialog>
  );
}

export default TableAction;
