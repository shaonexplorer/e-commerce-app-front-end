import Image from "next/image";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  currency?: string;
}

export function SectionCard({
  name,
  price,
  image,
  currency = "USD",
}: ProductCardProps) {
  return (
    <div
      className="h-[150px] relative shrink-0 bg-muted hover:bg-muted/80  group transition-all duration-500 "
      data-name="_Template-1/card-prod-group"
    >
      <div className="h-[150px] overflow-clip relative rounded-[inherit] w-full">
        <div
          className="absolute right-[10.25px] size-40 sm:size-[80px]  sm:top-[59px]   group-hover:scale-110 transition-all duration-500"
          data-name="img"
        >
          <Image
            alt={name}
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full  "
            src={image}
            fill
          />
        </div>
        <div className="absolute content-stretch flex flex-col gap-[6px] items-start left-[16px] top-[16px] w-[131px]">
          <p className="relative shrink-0  w-full">{name}</p>
          <p className="relative shrink-0 text-[#525e6f] dark:text-muted-foreground w-full text-sm">
            From
            <br aria-hidden="true" />
            {currency} {price}
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#dce0e5] dark:border-[#525e6f]  border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}
