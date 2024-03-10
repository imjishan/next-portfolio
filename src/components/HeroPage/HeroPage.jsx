import { MdOutlineHorizontalRule } from "react-icons/md";
import AvatarCom from "./Avatar";

const HeroPage = () => {
  return (
    <>
      <AvatarCom />
      <div className="font-bold text-4xl mt-8 pt-2 md:text-5xl lg:w-3/5">
        <div className="flex items-center">
          I'm Jishan <MdOutlineHorizontalRule />
        </div>{" "}
        A full-stack web developer, Crafting Effective web Solutions.
      </div>
    </>
  );
};
export default HeroPage;
