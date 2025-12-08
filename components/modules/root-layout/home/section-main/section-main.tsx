import { Banner1 } from "../banner/banner1";
import { Banner2 } from "../banner/banner2";
import { Nav } from "./nav";

export default function SectionMain() {
  return (
    <div className="  relative rounded-[8px] w-full" data-name="Section-main">
      <div className="flex flex-col lg:flex-row items-stretch w-full">
        <div className="box-border content-stretch flex flex-col lg:flex-row gap-[12px] sm:gap-[20px] items-stretch overflow-clip p-[12px] sm:p-[20px] relative w-full">
          <Nav />
          <Banner1 />
          <Banner2 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#d9d9d9] dark:border-muted border-solid inset-0 pointer-events-none rounded-[8px]"
      />
    </div>
  );
}
