import Image from "next/image";

function CustomLogo() {
  return (
    <div className="w-[36px] h-[36px] relative  rounded-xl overflow-clip">
      <Image src={"/logo/shape.png"} fill alt="logo" />
      <Image
        src={"/logo/elements.png"}
        width={18}
        height={18}
        alt="logo"
        className="absolute top-[8px] left-[8px]"
      />
    </div>
  );
}

export default CustomLogo;
