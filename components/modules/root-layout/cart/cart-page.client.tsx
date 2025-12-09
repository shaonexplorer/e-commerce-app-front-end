"use client";

import CartPageComp from "@/components/modules/root-layout/cart/cart-page";
import { useAppSelector } from "@/lib/hooks/hooks";

import EmptyCart from "./empty-cart";

function CartPage() {
  const cart = useAppSelector((state) => state.cart);
  return (
    <div>
      {!cart || cart?.items?.length < 1 ? <EmptyCart /> : <CartPageComp />}
    </div>
  );
}

export default CartPage;
