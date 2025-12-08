"use client";

import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import Image from "next/image";

import {
  decrement,
  ICartItem,
  increment,
  remove,
} from "@/lib/features/cart-slice";
import { useAppDispatch } from "@/lib/hooks/hooks";
import Link from "next/link";

function CartItemsCard({ item }: { item: ICartItem }) {
  const dispatch = useAppDispatch();
  return (
    <div className=" flex flex-col lg:flex-row  lg:items-center lg:justify-between gap-[16px]">
      <div className="flex items-center gap-4">
        {/* image */}
        <div className="w-[64px] h-[64px] rounded-[12px] bg-neutral-300 relative">
          <Image src={item.image} fill alt="image"></Image>
        </div>
        {/* item details */}
        <div className="flex flex-col justify-evenly h-[64px] items-stretch">
          <Link href={`/product/${item.id}`}>
            <p className="text-muted-foreground font-custom">{item.name}</p>
          </Link>
          <p className="font-semibold font-custom">${item.unitPrice}</p>
        </div>
      </div>

      {/* add/remove button */}
      <div className="flex flex-row-reverse lg:flex-row  items-center  justify-between gap-4 lg:ml-auto">
        <div className="flex flex-row-reverse lg:flex-row items-center justify-center">
          <div className="rounded-[21px] flex items-center justify-between gap-2 ">
            <Button
              onClick={() => dispatch(decrement(item.id))}
              className="w-[28px] h-[28px] rounded-full flex items-center justify-center"
            >
              <MinusIcon />
            </Button>
            <span>{item.quantity}</span>
            <Button
              onClick={() => dispatch(increment(item.id))}
              className="w-[28px] h-[28px] rounded-full flex items-center justify-center"
            >
              <PlusIcon />
            </Button>
          </div>
          <Button
            onClick={() => dispatch(remove(item.id))}
            variant={"link"}
            className="font-custom"
          >
            Remove
          </Button>
        </div>

        {/* total price */}
        <span className="text-[18px] font-custom min-w-[80px] flex items-center justify-end">
          ${item.totalPrice}
        </span>
      </div>
    </div>
  );
}

export default CartItemsCard;
