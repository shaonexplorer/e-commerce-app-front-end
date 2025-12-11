"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FilterIcon } from "lucide-react";
import { IProduct } from "../../home/offer-section/recommended-product/recommended";
import Link from "next/link";
import { CardProduct } from "@/components/modules/dashboard/seller/product/card/product-card";
import { usePathname, useRouter } from "next/navigation";
import { SheetFilter } from "./sheet-filter";
import SkeletonCardProduct from "./skeleton-product-card";
import { NoProductFound } from "./product-not-found";

function ProductCategoryListPage({
  product,
  params,
}: {
  product: IProduct[] | null;
  params: URLSearchParams;
}) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex-1 flex flex-col gap-[24px]">
      {/* col 01 */}
      <div className="w-full flex items-center justify-between">
        <div className="  lg:hidden">
          {" "}
          <SheetFilter params={params} />
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <p>Sort by:</p>
          <Select
            onValueChange={(value) => {
              params.set("orderBy", value);
              router.push(`${pathname}?${params.toString()}`);
            }}
          >
            <SelectTrigger className="sm:w-[180px]">
              <SelectValue placeholder="Price Low" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="priceHigh">Price High</SelectItem>
              <SelectItem value="priceLow">Price Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* col 02 */}
      <div className="h-[44px] bg-muted  flex items-center justify-between px-[24px]">
        {/* <div className="flex items-center gap2">
          <p className="text-muted-foreground">Active Filters:</p>
        </div> */}
        <div className="flex items-center gap-2 ml-auto">
          <p className="font-semibold  ">{product?.length}</p>{" "}
          <span className="text-muted-foreground">Results found.</span>
        </div>
      </div>
      {/* col 03 product lists */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[16px]">
        {!product ? (
          <>
            <SkeletonCardProduct />
            <SkeletonCardProduct />
            <SkeletonCardProduct />
            <SkeletonCardProduct />
            <SkeletonCardProduct />
            <SkeletonCardProduct />
            <SkeletonCardProduct />
            <SkeletonCardProduct />
          </>
        ) : product && product.length < 1 ? (
          <NoProductFound />
        ) : (
          product.map((item) => (
            <Link href={`/product/${item.id}`} key={item.id}>
              <CardProduct productData={item} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductCategoryListPage;
