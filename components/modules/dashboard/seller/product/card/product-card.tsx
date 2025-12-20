"use client";

import { IProduct } from "@/components/modules/root-layout/home/offer-section/recommended-product/recommended";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { add } from "@/lib/features/cart-slice";
import { useAppDispatch } from "@/lib/hooks/hooks";
import { CirclePlus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

export function CardProduct({ productData }: { productData: IProduct }) {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useAppDispatch();
  const { images, title, price } = productData;
  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full hover:shadow-foreground hover:shadow-sm hover:scale-105 transition-all duration-500   sm:max-w-[232px] p-0 overflow-clip shadow-none border-[#dce0e5] border dark:border-muted"
    >
      <CardContent className="p-0 overflow-clip relative">
        <div className="relative max-w-[232px] h-[220px]">
          <Image
            src={images[0] || "/card/pic-07.png"}
            alt="Product Image"
            fill
            className="object-cover hover:scale-95 transition-all duration-500"
          />
          {isHovered && (
            <div
              onClick={(e) => {
                e.preventDefault();
                console.log("clicked");
                dispatch(add(productData));
                toast.success("product added successfully");
              }}
              className="absolute  right-5 top-5 z-50"
            >
              <CirclePlus />
            </div>
          )}
        </div>

        <div className="flex flex-col justify-around items-stretch p-4 gap-2">
          <p className="text-[18px] font-medium font-inter leading-[1.4]">
            ${price || 99.5}
          </p>

          <Image
            src={"/card/Rating.png"}
            alt="price"
            width={115}
            height={24}
          ></Image>

          <p className="font-normal h-11 leading-[1.4] not-italic relative shrink-0 text-[#525e6f] dark:text-muted-foreground text-[15px] tracking-[-0.3px] w-full">
            {title || "Samsung Galaxy Note 4 SM-N910C 32GB"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
