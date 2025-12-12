"use client";

import { useAppSelector } from "@/lib/hooks/hooks";
import svgPaths from "./svg-orders";
import { createPayment } from "@/actions/create-payment";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { getAccessToken } from "@/actions/get-accessToken";

function Frame1() {
  const cart = useAppSelector((state) => state.cart);
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center not-italic pl-[16px] pr-0 py-0 relative  text-muted-foreground text-[16px] tracking-[0.1px] w-full">
          <p className="basis-0   font-custom grow leading-[22px] min-h-px min-w-px relative shrink-0">
            Items total
          </p>
          <div className="flex flex-col font-['Degular_Demo:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-nowrap">
            <p className="leading-[22px] whitespace-pre font-custom">
              ${cart.totalPrice.toFixed()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center not-italic pl-[16px] pr-0 py-0 relative text-muted-foreground text-[16px] tracking-[0.1px] w-full">
          <p className="basis-0 font-custom grow leading-[22px] min-h-px min-w-px relative shrink-0">
            Delivery fee
          </p>
          <div className="flex flex-col font-['Degular_Demo:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-nowrap">
            <p className="leading-[22px] whitespace-pre font-custom">$5.78</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
      data-name="List"
    >
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <List />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-custom leading-[24px] not-italic relative shrink-0   text-[20px] tracking-[0.1px] w-full">
        Order Summary
      </p>
      <Frame5 />
    </div>
  );
}

function Frame() {
  const cart = useAppSelector((state) => state.cart);
  return (
    <div className="content-stretch flex items-center justify-between not-italic relative shrink-0 text-[16px] text-nowrap w-full whitespace-pre">
      <p className="font-custom font-semibold leading-[1.7] relative shrink-0  ">
        Subtotal
      </p>
      <p className="font-custom font-normal leading-[1.6] relative shrink-0 text-muted-foreground">
        ${(cart.totalPrice + 5.78).toFixed()}
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame6 />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div
          className="absolute bottom-0 left-0 right-0 top-[-1px]"
          style={
            { "--stroke-0": "rgba(240, 238, 240, 1)" } as React.CSSProperties
          }
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 320 1"
          >
            <line
              id="Divider"
              stroke="var(--stroke-0, #F0EEF0)"
              x2="320"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <Frame />
    </div>
  );
}

function VuesaxLinearCard() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/card">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="card">
          <path
            d="M2 8.50496H22"
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.5"
          />
          <path
            d="M6 16.505H8"
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.5"
          />
          <path
            d="M10.5 16.505H14.5"
            id="Vector_3"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p34478e00}
            id="Vector_4"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <g id="Vector_5" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Card() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="card">
      <VuesaxLinearCard />
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Card />
      <div className="flex flex-col font-['Degular_Demo:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[20px] whitespace-pre font-custom">Checkout</p>
      </div>
    </div>
  );
}

function Button() {
  const cart = useAppSelector((state) => state.cart);
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const loadingId = toast.loading("Checking Out..");
      const accessToken = await getAccessToken();
      if (!accessToken) {
        toast.error("Please log in", { id: loadingId });
        return router.push("/login");
      }
      const res = await createPayment(cart.items);
      console.log(res);
      if (res?.data?.session.url) {
        toast.success("Order Created", { id: loadingId });
        router.push(`${res?.data?.session.url}`);
      } else if (!res.success) {
        toast.error(res.message, { id: loadingId });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      onClick={() => handleSubmit()}
      className="bg-[#b6349a] relative rounded-[39px] shrink-0 w-full cursor-pointer"
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative w-full">
          <Frame3 />
          <div className="flex flex-col font-['Degular_Demo:Semibold',sans-serif] h-full justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-right text-white w-[57px]">
            <p className="leading-[20px] font-custom">
              ${(cart.totalPrice + 5.78).toFixed()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full ">
      <Frame7 />
      <Button />
    </div>
  );
}

export default function OrderSummery() {
  return (
    <div
      className="bg-muted/40 relative rounded-[32px] shadow-[0px_4px_40px_0px_rgba(0,0,0,0.04)] size-full "
      data-name="Title&Subtitle"
    >
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
          {/* <Frame9 /> */}
          <Frame8 />
        </div>
      </div>
    </div>
  );
}
