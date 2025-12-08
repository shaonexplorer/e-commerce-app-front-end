import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FieldValues, useForm } from "react-hook-form";

import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ImageUploader from "../image-uploader";
import { useFileUpload } from "@/hooks/use-file-upload";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProductSchema } from "@/zod/schema";

import { createProduct } from "@/actions/create-product";
import { toast } from "sonner";
import { useState } from "react";

interface IProduct {
  title: string;
  description: string;
  category: string;
  price: number;
  quantity: number;
  images?: File;
}

export function CreateProduct() {
  const [open, setOpen] = useState(false);

  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      price: "",
      quantity: "",
      category: "",
    },
    resolver: zodResolver(createProductSchema),
  });

  const handleSubmit = async (data: FieldValues) => {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      const typedKey = key as keyof IProduct;
      formData.append(typedKey, data[typedKey]);
    });

    files.forEach((file) => {
      formData.append("images", file.file as File);
    });

    const id = toast.loading("Creating product...");
    const result = await createProduct(formData);
    if (result.success) {
      toast.success("Product created successfully", { id });
      setOpen(false);
    } else {
      toast.error("Failed to create product", { id });
    }
  };

  const maxSizeMB = 5;
  const maxSize = maxSizeMB * 1024 * 1024; // 5MB default
  const maxFiles = 6;

  const [
    { files, isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      removeFile,
      getInputProps,
    },
  ] = useFileUpload({
    accept: "image/svg+xml,image/png,image/jpeg,image/jpg,image/gif",
    maxSize,
    multiple: true,
    maxFiles,
  });
  const previewUrl = files[0]?.preview || null;
  //   const fileName = files[0]?.file.name || null;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">Create Product</Button>
      </SheetTrigger>
      <SheetContent className="overflow-auto">
        <SheetHeader>
          <SheetTitle>Create Product</SheetTitle>
          <SheetDescription>
            Make changes to your product here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6 mx-4"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Description</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Product description"
                      rows={5}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center">
                    <FormLabel>Price</FormLabel>
                  </div>

                  <FormControl>
                    <Input
                      placeholder="Price"
                      value={field.value as number | string | undefined}
                      onChange={(e) =>
                        field.onChange(
                          e.target.value === "" ? undefined : e.target.value
                        )
                      }
                      onBlur={field.onBlur}
                      name={field.name}
                      ref={field.ref}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center">
                    <FormLabel>Quantity</FormLabel>
                  </div>

                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Quantity"
                      value={field.value as number | string | undefined}
                      onChange={(e) =>
                        field.onChange(
                          e.target.value === ""
                            ? undefined
                            : Number(e.target.value)
                        )
                      }
                      onBlur={field.onBlur}
                      name={field.name}
                      ref={field.ref}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center">
                    <FormLabel htmlFor="password">Category</FormLabel>
                  </div>

                  <FormControl>
                    <Select
                      onValueChange={field.onChange} // Maps the select change to the form's change handler
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="electronis">
                            Electronics
                          </SelectItem>
                          <SelectItem value="fashion">Fashion</SelectItem>
                          <SelectItem value="household">Household</SelectItem>
                          <SelectItem value="agriculter">Agriculter</SelectItem>
                          <SelectItem value="computer">Computer</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <ImageUploader
              handleDragEnter={handleDragEnter}
              handleDragLeave={handleDragLeave}
              handleDragOver={handleDragOver}
              handleDrop={handleDrop}
              isDragging={isDragging}
              getInputProps={getInputProps}
              previewUrl={previewUrl}
              files={files}
              maxSizeMB={maxSizeMB}
              openFileDialog={openFileDialog}
              removeFile={removeFile}
              errors={errors}
            />

            <SheetFooter className="w-full">
              <Button type="submit">Save changes</Button>
              <SheetClose asChild>
                <Button variant="outline">Close</Button>
              </SheetClose>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
