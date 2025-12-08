import CartItems from "./cart-items";
import OrderSummery from "./order-summery";

function CartPageComp() {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row gap-10 lg:gap-[48px] mt-10">
      <CartItems />
      <OrderSummery />
    </div>
  );
}

export default CartPageComp;
