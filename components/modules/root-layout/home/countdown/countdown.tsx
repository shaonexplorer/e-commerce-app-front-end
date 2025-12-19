"use client";

import { useEffect, useState } from "react";

function CountDown() {
  const [time, setTime] = useState(14400000);
  useEffect(() => {
    const id = setInterval(() => {
      if (time > 1000) {
        setTime((prev) => prev - 1000);
      }
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  const Tseconds = time / 1000;
  const hours = Math.floor(time / (1000 * 3600));
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const secons = (time / 1000) % 60;

  console.log(
    `${Math.floor(time / (1000 * 3600))}H:${Math.floor(
      (time / (1000 * 60)) % 60
    )}M:${(time / 1000) % 60}S`
  );
  return (
    <div className="absolute top-[50px] left-[112px] sm:top-[25px] sm:left-[25px] flex flex-col justify-center gap-[17px]">
      <div className="flex flex-col justify-center items-center sm:items-start">
        <p className="font-bold text-[#111111] text-xl">Deals and offers</p>
        <p className="  text-muted-foreground  ">Electronic Gadgets</p>
      </div>

      <div className="flex items-center gap-[6px] text-[16px] text-neutral-100">
        <div className="w-[45px]   rounded-[8px] bg-gradient-to-b from-[#111111] to-[#415F89] flex flex-col  leading-4.5  items-center  py-[8px] ">
          <span className="font-bold">0{hours}</span>
          <p className="text-[14px]">Hour</p>
        </div>
        <div className="w-[45px]   rounded-[8px] bg-gradient-to-b from-[#111111] to-[#415F89]  flex flex-col  leading-4.5  items-center  py-[8px]">
          <span className="font-bold"> {minutes}</span>
          <p className="text-[14px]">Min</p>
        </div>
        <div className="w-[45px]  rounded-[8px] bg-gradient-to-b from-[#111111] to-[#415F89]  flex flex-col  leading-4.5  items-center  py-[8px]">
          <span className="font-bold"> {secons}</span>
          <p className="text-[14px]">Sec</p>
        </div>
      </div>
    </div>
  );
}

export default CountDown;
