import CategoryPage from "@/components/modules/root-layout/product-page/all-product-page/product-category-page";
import { Suspense } from "react";

async function ProductPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CategoryPage />
    </Suspense>
  );
}

export default ProductPage;
