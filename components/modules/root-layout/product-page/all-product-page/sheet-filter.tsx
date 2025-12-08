import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FilterIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import PriceRange from "./price-range";

export function SheetFilter({ params }: { params: URLSearchParams }) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <FilterIcon className="lg:hidden" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="w-[312px] mt-20 pl-5">
          <div className="w-full flex flex-col gap-[24px]  ">
            {/* category */}
            <div className="flex flex-col gap-[16px]">
              <p className="font-medium text-[16px]">CATEGORY</p>
              <RadioGroup
                defaultValue={params.get("category") || "all"}
                className="text-muted-foreground"
                onValueChange={(value) => {
                  params.set("category", value);
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
      </SheetContent>
    </Sheet>
  );
}
