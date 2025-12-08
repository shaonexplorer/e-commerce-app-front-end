import { GetPublicProducts } from "@/actions/get-products";
import OfferSection from "@/components/modules/root-layout/home/offer-section/offer-section";
import Recommended from "@/components/modules/root-layout/home/offer-section/recommended-product/recommended";
import CategorySectionPage from "@/components/modules/root-layout/home/product-section/category-section-page";
import SectionMain from "@/components/modules/root-layout/home/section-main/section-main";

async function HomePage() {
  const products = await GetPublicProducts();

  return (
    <div className="container max-w-[1240px] mx-auto flex flex-col py-10 gap-10">
      <SectionMain />
      <OfferSection />
      <CategorySectionPage
        products={products?.data?.slice(0, 8)}
        title="Home and outdoor
products"
        image={"/section-category/bg.png"}
      />
      <CategorySectionPage
        products={products?.data?.slice(0, 8)}
        title="Consumer electronics and gadgets"
        image={"/section-category/bg01.png"}
      />
      <Recommended />
    </div>
  );
}

export default HomePage;
