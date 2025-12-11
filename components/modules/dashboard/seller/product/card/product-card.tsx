import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

export function CardProduct({
  productData,
}: {
  productData: {
    id: string;
    images: string[];
    title: string;
    price: number;
    quantity: number;
  };
}) {
  const { images, title, price } = productData;
  return (
    <Card className="w-full hover:shadow-foreground hover:shadow-sm transition-all duration-500   sm:max-w-[232px] p-0 overflow-clip shadow-none border-[#dce0e5] border dark:border-muted">
      <CardContent className="p-0 overflow-clip">
        <div className="relative max-w-[232px] h-[220px]">
          <Image
            src={images[0] || "/card/pic-07.png"}
            alt="Product Image"
            fill
            className="object-cover hover:scale-95 transition-all duration-500"
          />
        </div>

        <div className="flex flex-col justify-around items-stretch p-4 gap-2">
          <p className="text-[18px] font-medium font-inter leading-[1.4]">
            ${price || 99.5}
          </p>

          <Image
            src={"/card/Rating.png"}
            alt="price"
            width={115}
            height={24}
          ></Image>

          <p className="font-normal h-11 leading-[1.4] not-italic relative shrink-0 text-[#525e6f] dark:text-muted-foreground text-[15px] tracking-[-0.3px] w-full">
            {title || "Samsung Galaxy Note 4 SM-N910C 32GB"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
