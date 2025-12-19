"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CategorySidebarProps {
  title: string;
  image?: string;
  onExploreClick?: () => void;
}

// function IconBtnRight() {
//   return (
//     <div className="relative shrink-0 size-[20px]" data-name="icon-btn-right">
//       <div
//         className="absolute bottom-[10%] left-[45%] right-1/4 top-[30%]"
//         data-name="elements"
//       >
//         <div className="absolute inset-[-6.25%_-12.5%]">
//           <svg
//             className="block size-full"
//             fill="none"
//             preserveAspectRatio="none"
//             viewBox="0 0 8 14"
//           >
//             <g>
//               <path
//                 d={svgPaths.p367d6460}
//                 id="Vector"
//                 stroke="var(--stroke-0, #14181F)"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="1.5"
//               />
//             </g>
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// }

function ExploreButton({ onClick }: { onClick?: () => void }) {
  return (
    <Link href={"/product"}>
      <button
        onClick={onClick}
        className="bg-white h-[40px] relative rounded-[8px] shrink-0 cursor-pointer transition-transform hover:scale-105"
        data-name="Button"
      >
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
          <p className="relative shrink-0 text-[#14181f] text-nowrap whitespace-pre font-semibold">
            Explore all
          </p>
          {/* <IconBtnRight /> */}
          {/* <ChevronRight  /> */}
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_12px_12px_0px_inset_rgba(255,255,255,0.12),0px_-2px_2px_0px_inset_rgba(48,48,48,0.1)]" />
        <div
          aria-hidden="true"
          className="absolute border border-[#dce0e5] border-solid inset-0 pointer-events-none rounded-[8px]"
        />
      </button>
    </Link>
  );
}

export function CategorySidebar({
  title,
  onExploreClick,
  image,
}: CategorySidebarProps) {
  return (
    <div
      className="bg-[#eee5c8] h-full overflow-clip relative w-full"
      data-name="block-aside"
    >
      <div className="relative w-full h-full">
        <Image
          alt=""
          className="object-cover"
          src={image || "/section-category/bg.png"}
          fill
        />
      </div>

      <div
        className="absolute content-stretch flex flex-col gap-[16px] items-start left-[24px] top-[23px] w-[235px]"
        data-name="info"
      >
        <div className="min-w-full relative shrink-0 text-[#14181f]">
          <p className="mb-0 font-bold text-[#111111] text-xl">{title}</p>
        </div>
        <ExploreButton onClick={onExploreClick} />
      </div>
    </div>
  );
}
