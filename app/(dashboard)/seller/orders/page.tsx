import OrderTable from "@/components/modules/dashboard/seller/order/order-table";
import { SectionCards } from "@/components/section-cards";

function Orders() {
  return (
    <div className="py-4 md:py-6   ">
      <SectionCards />
      <OrderTable />
    </div>
  );
}

export default Orders;
