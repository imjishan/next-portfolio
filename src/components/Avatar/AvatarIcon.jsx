import { Avatar } from "@nextui-org/react";

const AvatarIcon = () => {
  return (
    <div className="flex text-center">
      <Avatar src="/jishan.png" size="sm" fallback={"JA"} />
      <h1 className="mt-1 ml-[6px] text-zinc-500 hover:scale-105 hover:text-zinc-700 cursor-pointer transition-all ease-in-out">
        @JishanCodes
      </h1>
    </div>
  );
};
export default AvatarIcon;
