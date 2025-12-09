import { GetSingleProduct } from "@/actions/get-products";
import ProductPage from "@/components/modules/root-layout/product-page/product-page";
import { Suspense } from "react";

async function SingleProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await GetSingleProduct(id);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ProductPage product={res.data} />
    </Suspense>
  );
}

export default SingleProductPage;
