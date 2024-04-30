import Rounded from "@/components/Button";
import Link from "next/link";

const Aboutbutton = () => {
  return (
    <Link href={"/about"}>
      <div className="" data-scroll data-scroll-speed={0.1}>
        <Rounded className="w-40 h-40 bg-[#1C1D20] text-white rounded-full flex items-center top-[26rem] md:top-72 lg:right-32 right-12 justify-center cursor-pointer absolute">
          <p className="m-0 text-base z-10 relative">About me</p>
        </Rounded>
      </div>
    </Link>
  );
};
export default Aboutbutton;
