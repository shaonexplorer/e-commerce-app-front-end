import ProductTable from "@/components/modules/dashboard/seller/product/table/page";
import { SectionCards } from "@/components/section-cards";

function Product() {
  return (
    <div className=" flex flex-col py-4 md:py-6">
      <SectionCards />
      <ProductTable />
    </div>
  );
}

export default Product;
