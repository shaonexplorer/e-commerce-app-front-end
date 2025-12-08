import { Skeleton } from "@/components/ui/skeleton";

function SkeletonCardProduct() {
  return (
    <div className="w-[212px] h-[360px] flex flex-col gap-4 p-2 rounded-xl overflow-clip">
      <Skeleton className="w-full h-[220px]" />
      <Skeleton className="w-[90px] h-[20px]" />
      <Skeleton className="w-[115px] h-[20px]" />
      <Skeleton className="w-[130px] h-[20px]" />
    </div>
  );
}

export default SkeletonCardProduct;
