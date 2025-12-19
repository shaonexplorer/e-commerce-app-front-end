"use client";

import { ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Image from "next/image";

function Text() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[4px] items-start leading-[normal] left-[20px] sm:left-[46px] not-italic text-[24px] sm:text-[36px] top-[25px] sm:top-[45px] tracking-[-0.36px]"
      data-name="text"
    >
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#3348ff] w-[280px] sm:w-[354px]">
        New trending
      </p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#1c1c1c] w-[280px] sm:w-[354px]">
        Electronic items
      </p>
    </div>
  );
}

function LearnMore() {
  return (
    <div
      className="absolute bg-white h-[40px] left-[20px] sm:left-[46px] rounded-[8px] top-[130px] sm:top-[168px] cursor-pointer"
      data-name="Button"
    >
      <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#14181f] text-[15px] text-nowrap tracking-[-0.3px] whitespace-pre">
          Learn more
        </p>
        {/* <IconBtnRight /> */}
        {/* <ChevronRight /> */}
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(56,56,56,0.08)]"
      />
    </div>
  );
}

export function Banner1() {
  return (
    <div
      className="basis-0 bg-[#cce0ff] grow h-[240px] sm:h-[280px] md:h-[336px] min-h-px min-w-px overflow-clip relative rounded-[8px] shrink-0"
      data-name="banner"
    >
      <div
        className="absolute h-full  inset-0  w-full"
        data-name="Banner-board-800x420 1"
      >
        {/* <img
          alt=""
          className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full"
          src={"/banner/banner1.png"}
        /> */}
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src={"/banner/bn-04.png"}
              alt="banner"
              width={650}
              height={350}
              className="object-center "
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/banner/bn-02.png"}
              alt="banner"
              width={650}
              height={350}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/banner/bn-03.jpg"}
              alt="banner"
              width={650}
              height={350}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* <Text />
      <LearnMore /> */}
    </div>
  );
}
