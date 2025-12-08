function ButtonPrimaryTextLabelCompactDefault() {
  return (
    <div
      className="absolute h-[40px] left-[calc(50%+0.5px)] rounded-[20px] top-[180px] sm:top-[220px] md:top-[266px] translate-x-[-50%] w-[99px] cursor-pointer"
      data-name="Button/primary/text-label/compact/default"
    >
      <div className="box-border content-stretch flex gap-[6px] h-[40px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] w-[99px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.3px] whitespace-pre">
          Get offer
        </p>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[20px] shadow-[0px_1px_2px_0px_rgba(56,56,56,0.08)]"
      />
    </div>
  );
}

export function Banner2() {
  return (
    <div
      className="bg-[#1c2eb0] h-[240px] sm:h-[280px] md:h-[336px] overflow-clip relative rounded-[8px] shrink-0 w-full lg:w-[240px]"
      data-name="Banner"
    >
      <div className="absolute flex h-full items-center justify-center left-[calc(50%+0.5px)] top-0 translate-x-[-50%] w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] h-full w-full">
          <div className="h-full relative w-full" data-name="image 130">
            <div className="absolute inset-0 opacity-70 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute h-full left-0 max-w-none top-0 w-full object-cover"
                src={"/banner/banner2.png"}
              />
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] left-1/2 not-italic text-[16px] sm:text-[18px] text-center text-white top-[28px] translate-x-[-50%] w-[80%] max-w-[193px]">
        Get US $10 off with new supplier
      </p>
      <ButtonPrimaryTextLabelCompactDefault />
    </div>
  );
}
