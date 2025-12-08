import { Badge } from "@/components/ui/badge";

import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";

export function CardDiscount({
  payload,
}: {
  payload: {
    title?: string;
    discount?: string;
    image?: string;
  };
}) {
  const { title, discount, image } = payload;
  return (
    <Card className=" w-[190px] h-[250px] border-inherit rounded-none border-r-0 border-t-0 border-b-0 shadow-none">
      <CardContent className="flex flex-col items-center  justify-center gap-[7px]">
        <Image
          src={image || "/discount/watch.png"}
          width={140}
          height={140}
          alt="watch"
        ></Image>
        <p>{title}</p>
        <Badge className="bg-[#ffdee0]  text-[#df0c3d] text-[15px]">
          -{discount}%
        </Badge>
      </CardContent>
    </Card>
  );
}
