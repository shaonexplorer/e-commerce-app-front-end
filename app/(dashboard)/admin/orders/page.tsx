import AdminOrderTable from "@/components/modules/dashboard/admin/orders/orders-table-page";
import { SectionCards } from "@/components/section-cards";

function Orders() {
  return (
    <div className="flex flex-col py-4 md:py-6  ">
      <SectionCards />
      <AdminOrderTable />
    </div>
  );
}

export default Orders;
