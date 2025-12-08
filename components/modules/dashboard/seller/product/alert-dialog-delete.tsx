"use client";

import { deleteProduct } from "@/actions/delete-product";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

export function DeleteAlertDialog({ id }: { id?: string }) {
  const handleDelete = async () => {
    const loadingId = toast.loading("Deleting product...");
    const res = await deleteProduct(id as string);
    if (res.success) {
      toast.success("Product deleted successfully", { id: loadingId });
    } else {
      toast.error("Something went wrong", { id: loadingId });
    }
    console.log(res);
  };
  return (
    <>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </>
  );
}
