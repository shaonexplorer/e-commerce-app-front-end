import CategoryPage from "@/components/modules/root-layout/product-page/all-product-page/product-category-page";

async function ProductPage({
  searchParams,
}: {
  searchParams: Promise<{ searchTerm: string }>;
}) {
  return (
    <div>
      <CategoryPage />
    </div>
  );
}

export default ProductPage;
