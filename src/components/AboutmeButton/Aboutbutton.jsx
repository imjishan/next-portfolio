import Rounded from "@/components/Button";

const Aboutbutton = () => {
  return (
    <div className="" data-scroll data-scroll-speed={0.1}>
      <Rounded className="w-40 h-40 bg-[#1C1D20] text-white rounded-full flex items-center top-96 right-1/4 justify-center cursor-pointer absolute">
        <p className="m-0 text-base z-10 relative">About me</p>
      </Rounded>
    </div>
  );
};
export default Aboutbutton;
