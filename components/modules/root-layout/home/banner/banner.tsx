import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { CarFront } from "lucide-react";
import Image from "next/image";

function Banner() {
  return (
    <div className="container max-w-[1240px] mx-auto rounded-xl border border-solid border-[#D9D9D9] p-5 h-[350px]  grid  grid-cols-6   overflow-clip  gap-5 text-[#14181F] font-custom  ">
      <div className="max-md:hidden   flex    flex-col col-span-2 rounded-xl ">
        <div className="flex">
          {" "}
          <div className="py-1.5 font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 flex flex-1 flex-row items-center gap-2 h-10   ">
            <Image
              src={"/banner/car-05.png"}
              width={20}
              height={20}
              alt="car"
            />
            Automobiles
          </div>
        </div>
      </div>

      <div className=" relative col-span-3    rounded-xl overflow-hidden ">
        <Image
          src={"/banner/banner.png"}
          alt="banner"
          fill
          className="rounded-xl"
        />
      </div>

      <div className="relative rounded-xl overflow-hidden col-span-1">
        <Image
          src={"/banner/banner01.png"}
          alt="banner"
          fill
          className="rounded-xl  object-cover  "
        />
      </div>
    </div>
  );
}

export default Banner;
