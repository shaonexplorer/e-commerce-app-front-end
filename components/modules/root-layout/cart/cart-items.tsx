"use client";

import CartItemsCard from "./cart-items-card";
import { useAppSelector } from "@/lib/hooks/hooks";

function CartItems() {
  const cart = useAppSelector((state) => state.cart);

  return (
    <div className="  bg-muted/40   rounded-[32px] overflow-clip  p-4 lg:p-[24px] w-full lg:min-w-[850px] flex flex-col gap-5">
      {cart.items.map((item) => (
        <CartItemsCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CartItems;
