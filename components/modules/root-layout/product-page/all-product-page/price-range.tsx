"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { usePathname, useRouter } from "next/navigation";

export default function PriceRange({ params }: { params: URLSearchParams }) {
  const min_price = 5;
  const max_price = 1240;
  const [value, setValue] = useState([min_price, max_price]);

  const formatPrice = (price: number) => {
    return price === max_price
      ? `$${price.toLocaleString()}+`
      : `$${price.toLocaleString()}`;
  };

  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="*:not-first:mt-3 max-w-[260px]">
      <Label className="tabular-nums">
        From {formatPrice(value[0])} to {formatPrice(value[1])}
      </Label>
      <div className="flex items-center gap-4">
        <Slider
          aria-label="Price range slider"
          max={max_price}
          min={min_price}
          onValueChange={setValue}
          value={value}
        />
        <Button
          variant="outline"
          onClick={() => {
            params.set("price", value[1].toString());
            router.push(`${pathname}?${params.toString()}`);
          }}
        >
          Go
        </Button>
      </div>
    </div>
  );
}
