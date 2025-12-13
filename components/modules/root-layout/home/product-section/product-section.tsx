"use client";

import Link from "next/link";
import { CategorySidebar } from "./category-section";
import { SectionCard } from "./section-card";

export interface Product {
  id: string;
  title: string;
  price: number;
  images: string[];
  currency?: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
  onExploreClick?: () => void;
  image?: string;
}

export function ProductSection({
  title,
  products,
  onExploreClick,
  image,
}: ProductSectionProps) {
  return (
    <div
      className="  border border-[#dce0e5] dark:border-muted border-solid overflow-hidden relative rounded-[8px] w-full"
      data-name="Section"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar - full width on mobile, fixed width on desktop */}
        <div className="w-full lg:w-[294px] min-h-[300px] flex-shrink-0 grid grid-rows-1">
          <div className="row-span-1">
            <CategorySidebar
              title={title}
              onExploreClick={onExploreClick}
              image={image}
            />
          </div>
        </div>

        {/* Product Grid - responsive columns */}
        <div className="flex-1 overflow-clip">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-full">
            {products?.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                <SectionCard
                  name={product.title}
                  price={product.price}
                  image={product.images[0]}
                  currency={product.currency || "USD"}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
