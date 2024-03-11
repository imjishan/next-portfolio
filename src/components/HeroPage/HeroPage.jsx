import { MdOutlineHorizontalRule } from "react-icons/md";
import AvatarCom from "./Avatar";
import { ArrowRightSquare, MailIcon } from "lucide-react";
const HeroPage = () => {
  return (
    <>
      <div className="font-bold text-4xl mt-8 pt-2 md:text-5xl lg:w-3/5 dark:text-white dark:bg-black">
        <div className="flex items-center">
          I'm Jishan <MdOutlineHorizontalRule />
        </div>{" "}
        A full-stack web developer, Crafting Effective web Solutions.
      </div>
      {/* <div className="flex items-center text-[16px] gap-1 mt-6 pt-2 pb-2 bg-black text-white pl-2">
        Let's turn digital product dream into reality <MailIcon />
      </div> */}
    </>
  );
};
export default HeroPage;
