import Image from "next/image";

function Advertise() {
  return (
    <div className="flex flex-col space-y-4 mt-10">
      <div className="grid grid-cols-4  h-[250px]  w-full  gap-2">
        <div className="col-span-1 relative  rounded-2xl overflow-hidden ">
          <Image
            src={"/home/01.png"}
            alt="advertise"
            fill
            className=" object-cover  "
          />
        </div>
        <div className=" col-span-2  relative  rounded-2xl overflow-hidden ">
          <Image
            src={"/home/02.png"}
            alt="advertise"
            fill
            className=" object-cover"
          />
        </div>
        <div className="col-span-1 relative rounded-2xl overflow-hidden">
          <Image
            src={"/home/03.png"}
            alt="advertise"
            fill
            className=" object-cover"
          />
        </div>
      </div>
      {/* column 2 */}
      <div className="grid grid-cols-6  h-[250px]  w-full  gap-2">
        <div className="col-span-1 relative  rounded-2xl overflow-hidden ">
          <Image
            src={"/home/04.png"}
            alt="advertise"
            fill
            className=" object-cover  "
          />
        </div>
        <div className=" col-span-4  relative  rounded-2xl overflow-hidden ">
          <Image
            src={"/home/05.png"}
            alt="advertise"
            fill
            className=" object-cover"
          />
        </div>
        <div className="col-span-1 relative rounded-2xl overflow-hidden">
          <Image
            src={"/home/06.png"}
            alt="advertise"
            fill
            className=" object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Advertise;
