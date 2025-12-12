import AdminProductTable from "@/components/modules/dashboard/admin/products/product-table-page";
import { SectionCards } from "@/components/section-cards";

function Product() {
  return (
    <div className="flex flex-col py-4 md:py-6  ">
      <SectionCards />
      <AdminProductTable />
    </div>
  );
}

export default Product;
