import svgPaths from "./svg-path-product-page-01";

function TitleSubtitle() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-start leading-[1.7] not-italic relative shrink-0 w-full"
      data-name="Title&Subtitle"
    >
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0   text-[22px] sm:text-nowrap sm:whitespace-pre">
        Customer Reviews
      </p>
      <p className="font-['Inter:Medium',sans-serif] font-medium min-w-full relative shrink-0 text-muted-foreground text-[14px] w-[min-content]">
        Average rating: 4.5 (5391)
      </p>
    </div>
  );
}

function VuesaxLinearStar() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/star">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="star">
          <path
            d={svgPaths.p19f4fed0}
            id="Vector"
            stroke="var(--stroke-0, #292D32)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Star() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star">
      <VuesaxLinearStar />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[34px] min-w-[34px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.7] not-italic relative shrink-0 text-[14px]   sm:text-nowrap sm:whitespace-pre">
        5
      </p>
      <Star />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 grow h-[8px] min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0">
      <div className="absolute bg-[#f8f7f8] h-[8px] left-0 top-0 w-full lg:w-[1240px]" />
      <div className="absolute bg-[#b6349a] h-[8px] left-0 rounded-[24px] top-0  w-[238px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] md:gap-[16px] items-center relative shrink-0 w-full">
      <Frame9 />
      <Frame />
      <span className="font-['Inter:Regular',sans-serif] font-normal leading-[1.7] not-italic relative shrink-0 text-[14px]   sm:text-nowrap sm:whitespace-nowrap">
        4.28K
      </span>
    </div>
  );
}

function VuesaxLinearStar1() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/star">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="star">
          <path
            d={svgPaths.p19f4fed0}
            id="Vector"
            stroke="var(--stroke-0, #292D32)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Star1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star">
      <VuesaxLinearStar1 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[34px] min-w-[34px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.7] not-italic relative shrink-0 text-[14px]    sm:text-nowrap sm:whitespace-pre">
        4
      </p>
      <Star1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 grow h-[8px] min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0">
      <div className="absolute bg-[#f8f7f8] h-[8px] left-0 top-0 w-full lg:w-[1248px]" />
      <div className="absolute bg-[#b6349a] h-[8px] left-0 rounded-[24px] top-0 w-[206px]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] md:gap-[16px] items-center relative shrink-0 w-full">
      <Frame10 />
      <Frame1 />
      <span className="font-['Inter:Regular',sans-serif] font-normal leading-[1.7] not-italic relative shrink-0 text-[14px]   sm:text-nowrap sm:whitespace-nowrap">
        4.28K
      </span>
    </div>
  );
}

function VuesaxLinearStar2() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/star">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="star">
          <path
            d={svgPaths.p19f4fed0}
            id="Vector"
            stroke="var(--stroke-0, #292D32)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Star2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star">
      <VuesaxLinearStar2 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[34px] min-w-[34px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.7] not-italic relative shrink-0 text-[14px]    sm:text-nowrap sm:whitespace-pre">
        3
      </p>
      <Star2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 grow h-[8px] min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0">
      <div className="absolute bg-[#f8f7f8] h-[8px] left-0 top-0 w-full lg:w-[1248px]" />
      <div className="absolute bg-[#b6349a] h-[8px] left-0 rounded-[24px] top-0 w-[100px]" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[8px] md:gap-[16px] items-center relative shrink-0 w-full">
      <Frame11 />
      <Frame2 />
      <span className="font-['Inter:Regular',sans-serif] font-normal leading-[1.7] not-italic relative shrink-0 text-[14px]   sm:text-nowrap sm:whitespace-nowrap">
        4.28K
      </span>
    </div>
  );
}

function VuesaxLinearStar3() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/star">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="star">
          <path
            d={svgPaths.p19f4fed0}
            id="Vector"
            stroke="var(--stroke-0, #292D32)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Star3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star">
      <VuesaxLinearStar3 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[34px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.7] not-italic relative shrink-0 text-[14px]    sm:text-nowrap sm:whitespace-pre">
        2
      </p>
      <Star3 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 grow h-[8px] min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0">
      <div className="absolute bg-[#f8f7f8] h-[8px] left-0 top-0 w-full lg:w-[1248px]" />
      <div className="absolute bg-[#b6349a] h-[8px] left-0 rounded-[24px] top-0 w-[112px]" />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[8px] md:gap-[16px] items-center relative shrink-0 w-full">
      <Frame16 />
      <Frame3 />
      <span className="font-['Inter:Regular',sans-serif] font-normal leading-[1.7] not-italic relative shrink-0 text-[14px]   sm:text-nowrap sm:whitespace-nowrap">
        4.28K
      </span>
    </div>
  );
}

function VuesaxLinearStar4() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/star">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="star">
          <path
            d={svgPaths.p19f4fed0}
            id="Vector"
            stroke="var(--stroke-0, #292D32)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Star4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star">
      <VuesaxLinearStar4 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[34px] min-w-[34px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.7] not-italic relative shrink-0 text-[14px]   sm:text-nowrap sm:whitespace-pre">
        1
      </p>
      <Star4 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 grow h-[8px] min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0">
      <div className="absolute bg-[#f8f7f8] h-[8px] left-0 top-0 w-full lg:w-[1248px]" />
      <div className="absolute bg-[#b6349a] h-[8px] left-0 rounded-[24px] top-0 w-[47px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] md:gap-[16px] items-center relative shrink-0 w-full">
      <Frame20 />
      <Frame4 />
      <span className="font-['Inter:Regular',sans-serif] font-normal leading-[1.7] not-italic relative shrink-0 text-[14px]   sm:text-nowrap sm:whitespace-nowrap">
        4.28K
      </span>
    </div>
  );
}

function List() {
  return (
    <div
      className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full"
      data-name="List"
    >
      <Frame6 />
      <Frame8 />
      <Frame15 />
      <Frame18 />
      <Frame7 />
    </div>
  );
}

function CustomerReviews() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full lg:w-[384px] "
      data-name="Customer Reviews"
    >
      <TitleSubtitle />
      <List />
    </div>
  );
}

function VuesaxBoldStar() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/star">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="star">
          <path
            d={svgPaths.p256f2000}
            fill="var(--fill-0, #FF6B00)"
            id="Vector"
          />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Star5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star">
      <VuesaxBoldStar />
    </div>
  );
}

function VuesaxLinearStar5() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/star">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="star">
          <path
            d={svgPaths.p19f4fed0}
            id="Vector"
            stroke="var(--stroke-0, #292D32)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Star6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star">
      <VuesaxLinearStar5 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      {[...Array(4).keys()].map((_, i) => (
        <Star5 key={i} />
      ))}
      <Star6 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full  ">
      <Frame12 />
      <p className="font-custom font-normal leading-[1.7] not-italic relative shrink-0 text-muted-foreground   text-[13px] w-full sm:break-words">{`This review was collected as part of a promotion.] I forgot to post my photos from my review! So here is my review again. A perfect combination of softness, strength, and proper friction to make any user leaving clean and spotless!! I have been purchasing for years and Angel Soft isn't too thick where you think you are using a towel and it's not too thin leaving you with unexpected tears during use!! Some say I have an addition to Angel Soft, I say it's dedication for a great product!! See the attached photos from my last purchase!`}</p>
    </div>
  );
}

function User() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
      data-name="User"
    >
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.7] not-italic relative shrink-0 text-[14px]   w-full">
        Perfect Combination!!
      </p>
      <Frame13 />
    </div>
  );
}

function VuesaxBoldStar1() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/star">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="star">
          <path
            d={svgPaths.p256f2000}
            fill="var(--fill-0, #FF6B00)"
            id="Vector"
          />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Star7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star">
      <VuesaxBoldStar1 />
    </div>
  );
}

function VuesaxLinearStar6() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/star">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="star">
          <path
            d={svgPaths.p19f4fed0}
            id="Vector"
            stroke="var(--stroke-0, #292D32)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Star8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star">
      <VuesaxLinearStar6 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      {[...Array(4).keys()].map((_, i) => (
        <Star7 key={i} />
      ))}
      <Star8 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame21 />
      <p className="font-custom font-normal leading-[1.7] not-italic relative shrink-0 text-muted-foreground   text-[14px] w-full break-words">{`This review was collected as part of a promotion.] I forgot to post my photos from my review! So here is my review again. A perfect combination of softness, strength, and proper friction to make any user leaving clean and spotless!! I have been purchasing for years and Angel Soft isn't too thick where you think you are using a towel and it's not too thin leaving you with unexpected tears during use!! Some say I have an addition to Angel Soft, I say it's dedication for a great product!! See the attached photos from my last purchase!`}</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.7] not-italic relative shrink-0 text-[14px]    w-full">
        Perfect Combination!!
      </p>
      <Frame22 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <User />
      <Frame14 />
    </div>
  );
}

function VuesaxLinearArrowDown() {
  return (
    <div
      className="absolute contents inset-0"
      data-name="vuesax/linear/arrow-down"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="arrow-down">
          <path
            d={svgPaths.p399cce80}
            id="Vector"
            stroke="var(--stroke-0, #B6349A)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="0.875"
          />
          <path
            d={svgPaths.p2d441300}
            id="Vector_2"
            opacity="0"
            stroke="var(--stroke-0, #B6349A)"
            strokeWidth="0.583333"
          />
        </g>
      </svg>
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="arrow-down">
      <VuesaxLinearArrowDown />
    </div>
  );
}

function Frame17() {
  return (
    <div className="lg:absolute content-stretch flex gap-[4px] items-center lg:right-0 lg:top-0 mt-4 lg:mt-0">
      <div className="flex flex-col font-['Degular_Demo:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b6349a] text-[14px] text-center sm:text-nowrap">
        <p className="leading-[18px] whitespace-pre">Recent</p>
      </div>
      <ArrowDown />
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start   min-w-px relative shrink-0 w-full lg:w-auto">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.7] min-w-full not-italic relative shrink-0    text-[22px] w-[min-content]">
        Reviews
      </p>
      <Frame19 />
      <Frame17 />
    </div>
  );
}

function Reviews() {
  return (
    <div
      className="  relative rounded-[16px] md:rounded-[24px] lg:rounded-[32px] shrink-0 w-full bg-muted/30 "
      data-name="Reviews"
    >
      <div className="overflow-clip  rounded-[inherit] size-full  ">
        <div className="box-border content-stretch flex flex-col lg:flex-row gap-[32px] lg:gap-[64px] items-start p-[16px] md:p-[24px] relative w-full">
          <CustomerReviews />
          <Frame5 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#f8f7f8] dark:border-none border-solid inset-0 pointer-events-none rounded-[16px] md:rounded-[24px] lg:rounded-[32px]"
      />
    </div>
  );
}

function VuesaxLinearArrowUp() {
  return (
    <div
      className="absolute contents inset-0"
      data-name="vuesax/linear/arrow-up"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="arrow-up">
          <path
            d={svgPaths.p1ea1d480}
            id="Vector"
            stroke="var(--stroke-0, #292D32)"
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

function ArrowUp() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow-up">
      <VuesaxLinearArrowUp />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[1.7] min-h-px min-w-px not-italic relative shrink-0 text-[16px]  ">
        Details
      </p>
      <ArrowUp />
    </div>
  );
}

function Group() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
      data-name="Group"
    >
      <Frame23 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.7] not-italic relative shrink-0 text-muted-foreground text-[14px] w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. U
      </p>
    </div>
  );
}

function VuesaxLinearArrowDown1() {
  return (
    <div
      className="absolute contents inset-0"
      data-name="vuesax/linear/arrow-down"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="arrow-down">
          <path
            d={svgPaths.p336ed396}
            id="Vector"
            stroke="var(--stroke-0, #292D32)"
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

function ArrowDown1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow-down">
      <VuesaxLinearArrowDown1 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[1.7] min-h-px min-w-px not-italic relative shrink-0 text-[16px]  ">
        Conservation and storage
      </p>
      <ArrowDown1 />
    </div>
  );
}

function VuesaxLinearArrowDown2() {
  return (
    <div
      className="absolute contents inset-0"
      data-name="vuesax/linear/arrow-down"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="arrow-down">
          <path
            d={svgPaths.p336ed396}
            id="Vector"
            stroke="var(--stroke-0, #292D32)"
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

function ArrowDown2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow-down">
      <VuesaxLinearArrowDown2 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[1.7] min-h-px min-w-px not-italic relative shrink-0 text-[16px]  ">
        Ingredients
      </p>
      <ArrowDown2 />
    </div>
  );
}

function List1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
      data-name="List"
    >
      <Group />
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
            viewBox="0 0 1280 1"
          >
            <line
              id="Divider"
              stroke="var(--stroke-0, #F0EEF0)"
              x2="1280"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <Frame25 />
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
            viewBox="0 0 1280 1"
          >
            <line
              id="Divider"
              stroke="var(--stroke-0, #F0EEF0)"
              x2="1280"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <Frame24 />
    </div>
  );
}

export default function Group1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] md:gap-[32px] items-start relative w-full   "
      data-name="Group"
    >
      <Reviews />
      {/* <List1 /> */}
    </div>
  );
}
