import {
  IconBallAmericanFootball,
  IconBallBasketball,
  IconBook,
  IconClothesRack,
  IconClothesRackOff,
  IconFridge,
  IconMenu2,
  IconMenu4,
  IconMenuDeep,
  IconMenuOrder,
  IconShirt,
  IconSofa,
  IconSunElectricity,
} from "@tabler/icons-react";
import { CarFront } from "lucide-react";
import Link from "next/link";

const items = [
  { id: 1, title: "Automobiles", icon: CarFront, href: "/product" },
  { id: 2, title: "Home appliance", icon: IconFridge, href: "/product" },
  { id: 3, title: "Tools,equipments", icon: IconSofa, href: "/product" },
  { id: 4, title: "Books & magazines", icon: IconBook, href: "/product" },
  {
    id: 5,
    title: "Electronic gadgets",
    icon: IconSunElectricity,
    href: "/product",
  },
  { id: 6, title: "Clothing and wear", icon: IconShirt, href: "/product" },
  {
    id: 7,
    title: "Sports and outdoor",
    icon: IconBallAmericanFootball,
    href: "/product",
  },
  { id: 8, title: "More category", icon: IconMenu4, href: "/product" },
];

function SideBarItem({ item }: { item: (typeof items)[0] }) {
  return (
    <Link
      href={item.href}
      className="w-full flex items-center gap-[12px] h-[40px] px-[10px] rounded-xl hover:bg-muted hover:translate-x-1 transition-all duration-300 durration-500 font-semibold"
    >
      <item.icon />
      {item.title}
    </Link>
  );
}

export function Nav() {
  return (
    <div
      className="content-stretch flex flex-col justify-center relative shrink-0 w-full lg:w-[274px]"
      data-name="Nav"
    >
      {items.map((item) => (
        <SideBarItem item={item} key={item.id} />
      ))}

      {/* <BaseSidebarClassic />
      <BaseSidebarClassic1 />
      <BaseSidebarClassic2 />
      <BaseSidebarClassic3 />
      <BaseSidebarClassic4 />
      <BaseSidebarClassic5 />
      <BaseSidebarClassic6 />
      <BaseSidebarClassic7 /> */}
    </div>
  );
}
