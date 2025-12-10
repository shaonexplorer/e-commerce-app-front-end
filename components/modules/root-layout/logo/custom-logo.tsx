import Image from "next/image";

function CustomLogo() {
  return (
    <div className="w-[36px] h-[36px] relative  rounded-xl overflow-clip">
      <Image src={"/logo/shape.png"} fill alt="logo" />
    </div>
  );
}

export default CustomLogo;
