import svgPaths from "./svg-path-product-page";

function VuesaxBoldCup() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/cup">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="cup">
          <path
            d={svgPaths.p21565d80}
            fill="var(--fill-0, #B6349A)"
            id="Vector"
          />
          <path
            d={svgPaths.p3e5ee800}
            fill="var(--fill-0, #B6349A)"
            id="Vector_2"
          />
          <g id="Vector_3" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Cup() {
  return (
    <div
      className="absolute left-[10px] size-[20px] top-[10px]"
      data-name="cup"
    >
      <VuesaxBoldCup />
    </div>
  );
}

function Icon() {
  return (
    <div
      className="bg-[#f8f7f8] relative rounded-[253.425px] shrink-0 size-[40px]"
      data-name="Icon"
    >
      <Cup />
    </div>
  );
}

function VuesaxLinearArrowRight() {
  return (
    <div
      className="absolute contents inset-0"
      data-name="vuesax/linear/arrow-right"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="arrow-right">
          <path
            d={svgPaths.p232a3c80}
            id="Vector"
            stroke="var(--stroke-0, #B6349A)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.5"
          />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-right">
      <VuesaxLinearArrowRight />
    </div>
  );
}

function Button() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[39px] shrink-0"
      data-name="Button"
    >
      <div className="flex flex-col font-['Degular_Demo:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b6349a] text-[12px] text-center text-nowrap tracking-[-0.2px]">
        <p className="leading-[16px] whitespace-pre">View More</p>
      </div>
      <ArrowRight />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Icon />
      <div className="basis-0 flex flex-col font-custom font-medium grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px]   tracking-[-0.2px]">
        <p className="leading-[1.5]">Best Seller Product</p>
      </div>
      <Button />
    </div>
  );
}

function VuesaxBoldVerify() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/verify">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="verify">
          <path
            d={svgPaths.p6440df0}
            fill="var(--fill-0, #008000)"
            id="Vector"
          />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Verify() {
  return (
    <div
      className="absolute left-[11px] size-[18px] top-[11px]"
      data-name="verify"
    >
      <VuesaxBoldVerify />
    </div>
  );
}

function Icon1() {
  return (
    <div
      className="bg-[#f8f7f8] relative rounded-[253.425px] shrink-0 size-[40px]"
      data-name="Icon"
    >
      <Verify />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Icon1 />
      <div className="flex flex-col font-custom font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px]   tracking-[-0.2px] w-[372px]">
        <p className="leading-[1.5]">100% satisfaction guarantee</p>
      </div>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative size-full max-w-[360px] sm:max-w-[380px]">
      <div className="flex flex-col font-custom font-medium justify-center leading-[0] not-italic relative shrink-0 text-muted-foreground text-[16px] tracking-[-0.2px] w-full">
        <p className="leading-[1.5]">About Product</p>
      </div>
      <Frame />
      <Frame1 />
    </div>
  );
}
