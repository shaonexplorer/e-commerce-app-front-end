import { GetSingleProduct } from "@/actions/get-products";
import ProductPage from "@/components/modules/root-layout/product-page/product-page";

async function SingleProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await GetSingleProduct(id);
  return <ProductPage product={res.data} />;
}

export default SingleProductPage;
