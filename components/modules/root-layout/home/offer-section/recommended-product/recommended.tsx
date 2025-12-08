import { GetPublicProducts } from "@/actions/get-products";
import { CardProduct } from "@/components/modules/dashboard/seller/product/card/product-card";
import Link from "next/link";

export interface IProduct {
  id: string;
  images: string[];
  title: string;
  price: number;
  quantity: number;
}

async function Recommended() {
  const items = await GetPublicProducts();
  return (
    <div className="flex flex-col   gap-5">
      <p className="font-bold text-xl text-[#1C1C1C] dark:text-muted-foreground">
        Recommended Items
      </p>
      <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-5">
        {items?.data?.slice(0, 10).map((item: IProduct) => (
          <Link href={`/product/${item.id}`} key={item.id}>
            <CardProduct productData={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Recommended;
