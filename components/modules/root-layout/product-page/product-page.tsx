"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Frame2 from "./product-detail-01";
import { IProduct } from "../home/offer-section/recommended-product/recommended";
import Group1 from "./product-detail-02";

import { add } from "@/lib/features/cart-slice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks/hooks";
import { toast } from "sonner";

function ProductPage({ product }: { product: IProduct }) {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  console.log(cart);

  return (
    <div className="mt-[68px] flex flex-col gap-[50px] w-full">
      {/* column 01 */}
      <div className="flex flex-col gap-[16px] xl:flex-row sm:gap-[120px] w-full">
        {/* image div */}
        <div className="border boder-[#F4F0F0] dark:border-none bg-muted/30 rounded-[32px] w-full sm:min-w-[740px] sm:h-[540px] overflow-clip flex items-center justify-center">
          <Image
            src={product.images[0] || "/products/bag-removebg-preview.png"}
            alt="productImage"
            width={300}
            height={300}
            className="object-center"
          />
        </div>
        {/* product detail */}
        <div className="w-full flex flex-col gap-[30px]">
          <div className="flex flex-col gap-[16px]">
            <h1 className="text-3xl font-semibold">
              {product.title ||
                "Chosen Foods 100% Pure Avocado Oil Spray 4.7 oz"}
            </h1>
            <div className="flex flex-col gap-2">
              <p className="text-xs ">$2.71/lb</p>
              <p className="text-[24px] font-semibold font-mono">
                ${product.price}
              </p>
              <p className="text-xs text-blue-500">
                {product.quantity || 12} Left
              </p>
            </div>

            <Button
              onClick={() => {
                dispatch(add(product));
                toast.success("product added successfully");
              }}
              className="sm:h-[56px] rounded-full w-full flex items-center gap-[8px]"
            >
              <ShoppingCart size={24} />
              <p>Add To Cart</p>
            </Button>
          </div>
          <Frame2 />
        </div>
      </div>
      {/* column 02 */}
      <Group1 />
    </div>
  );
}

export default ProductPage;
