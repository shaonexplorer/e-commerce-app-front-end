"use client";

import { IProduct } from "../offer-section/recommended-product/recommended";
import { ProductSection } from "./product-section";

function CategorySectionPage({
  title,
  products,
  image,
}: {
  title: string;
  products: IProduct[];
  image?: string;
}) {
  return (
    <div>
      <ProductSection
        title={title}
        products={products}
        onExploreClick={() => console.log("Explore all clicked")}
        image={image}
      />
    </div>
  );
}

export default CategorySectionPage;
