import { GetPublicProducts } from "@/actions/get-products";
import OfferSection from "@/components/modules/root-layout/home/offer-section/offer-section";
import Recommended from "@/components/modules/root-layout/home/offer-section/recommended-product/recommended";
import CategorySectionPage from "@/components/modules/root-layout/home/product-section/category-section-page";
import SectionMain from "@/components/modules/root-layout/home/section-main/section-main";
import { Suspense } from "react";

async function HomePage() {
  const products = await GetPublicProducts();
  const first = products?.data?.length - 8;
  const last = products?.data?.length;
  const customProducts = products?.data?.slice(first, last);

  return (
    <div className="container max-w-[1240px] mx-auto flex flex-col py-10 gap-10">
      <SectionMain />
      <OfferSection />
      <CategorySectionPage
        products={customProducts}
        title="Home and outdoor
products"
        image={"/section-category/bg.png"}
      />
      <CategorySectionPage
        products={customProducts}
        title="Consumer electronics and gadgets"
        image={"/section-category/bg01.png"}
      />
      <Recommended />
    </div>
  );
}

export default HomePage;
