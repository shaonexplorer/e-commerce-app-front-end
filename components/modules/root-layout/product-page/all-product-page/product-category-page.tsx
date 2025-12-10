"use client";

import { GetPublicProducts } from "@/actions/get-products";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import FilterSideBar from "./filter-sidebar";
import ProductCategoryListPage from "./product-list-page";

function CategoryPage() {
  const [product, setProduct] = useState(null);

  const pathname = usePathname();

  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams.toString());

  useEffect(() => {
    async function getFilteredProduct() {
      const res = await GetPublicProducts(params.toString());
      setProduct(res.data);
    }
    getFilteredProduct();
  }, [pathname, searchParams]);

  return (
    <div className="w-full flex gap-[24px] py-[40px]">
      <FilterSideBar params={params} />
      <ProductCategoryListPage product={product} params={params} />
    </div>
  );
}

export default CategoryPage;
