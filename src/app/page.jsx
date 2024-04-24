import Rounded from "@/components/Button";

const page = () => {
  return (
    <>
      <div className="mt-20 lg:w-[44rem]">
        <h1 className="font-bold text-3xl md:text-5xl text-zinc-500">
          i'm jishan
        </h1>
        <h1 className="text-4xl font-bold md:text-5xl">
          Transforming client visions into vibrant digital realities
        </h1>
      </div>
      <div
        className="hidden md:block lg:block"
        data-scroll
        data-scroll-speed={0.1}
      >
        <Rounded className="w-40 h-40 bg-[#1C1D20] text-white rounded-full flex items-center top-80 right-1/4 justify-center cursor-pointer absolute">
          <p className="m-0 text-base z-10 relative">About me</p>
        </Rounded>
      </div>
    </>
  );
};
export default page;
