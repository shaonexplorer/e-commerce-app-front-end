import CartPage from "@/components/modules/root-layout/cart/cart-page.client";
import { Suspense } from "react";

function Page() {
  return (
    <Suspense fallback={<p>Loading..</p>}>
      <CartPage />
    </Suspense>
  );
}

export default Page;
