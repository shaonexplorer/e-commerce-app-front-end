"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { usePathname, useRouter } from "next/navigation";
import PriceRange from "./price-range";

function FilterSideBar({ params }: { params: URLSearchParams }) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="w-[312px] hidden lg:flex ">
      <div className="w-full flex flex-col gap-[24px]  ">
        {/* category */}
        <div className="flex flex-col gap-[16px]">
          <p className="font-medium text-[16px]">CATEGORY</p>
          <RadioGroup
            defaultValue={params.get("category") || "all"}
            className="text-muted-foreground"
            onValueChange={(value) => {
              if (value == "all") {
                params.delete("category");
              } else {
                params.set("category", value);
              }

              router.push(`${pathname}?${params.toString()}`);
            }}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="option-one" />
              <Label htmlFor="option-one">All</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="fashion" id="option-one" />
              <Label htmlFor="option-one">Fashion & Clothing</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="household" id="option-two" />
              <Label htmlFor="option-two">HouseHold & Kitchen</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="agriculter" id="option-two" />
              <Label htmlFor="option-two">Agriculter & Plants</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="computer" id="option-two" />
              <Label htmlFor="option-two">Computer & Phones</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="electronis" id="option-two" />
              <Label htmlFor="option-two">Electronics & Gadgets</Label>
            </div>
          </RadioGroup>
        </div>
        <Separator />
        {/* price */}
        <div className="flex flex-col gap-[16px]">
          <p className="font-medium">PRICE RANGE</p>
          <PriceRange params={params} />
        </div>
      </div>
    </div>
  );
}

export default FilterSideBar;
