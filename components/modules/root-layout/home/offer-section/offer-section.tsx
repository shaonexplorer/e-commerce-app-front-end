import { CardDiscount } from "@/components/modules/dashboard/seller/product/card/discount-card";
import Image from "next/image";
import CountDown from "../countdown/countdown";

const items = [
  { title: "Smart Watch", discount: "25", image: "/discount/watch.png" },
  {
    title: "Game Headphone",
    discount: "30",
    image: "/discount/headphone.png",
  },
  { title: "Gaming Laptop", discount: "15", image: "/discount/laptop.png" },
  { title: "Samsung Galaxy S2", discount: "20", image: "/discount/mobile.png" },
  {
    title: "Canon Camera",
    discount: "10",
    image: "/discount/camera.png",
  },
];

function OfferSection() {
  return (
    <div className="container w-full max-w-[1240px] mx-auto border-[#dce0e5] border dark:border-muted rounded-xl flex flex-col lg:flex-row items-center justify-center gap-0 overflow-clip">
      <div className="lg:flex-1 h-[250px] min-w-[300px] w-full flex-nowrap relative dark:bg-card-foreground">
        {/* <Image
          src={"/discount/coundown.png"}
          width={200}
          height={116}
          alt="countdown"
          className="absolute  top-[25px] left-[25px]"
        ></Image> */}
        <CountDown />
      </div>
      <div className="w-full grid  grid-cols-2 sm:grid-cols-4 md:grid-cols-5    gap-0  ">
        {items.map((item) => (
          <CardDiscount payload={item} key={item.title} />
        ))}
      </div>
    </div>
  );
}

export default OfferSection;
