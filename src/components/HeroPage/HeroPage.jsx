import Image from "next/image";
import { MdOutlineHorizontalRule } from "react-icons/md";
import ProjectCard from "./Card";
const HeroPage = () => {
  return (
    <>
      <div className="font-bold text-4xl mt-8 pt-2 md:text-5xl lg:w-3/5 dark:text-white dark:bg-black">
        <div className="flex items-center">
          I'm Jishan <MdOutlineHorizontalRule />
        </div>{" "}
        A full-stack web developer, Crafting Effective web Solutions.
      </div>
      <br />
      <br />
      <ProjectCard />
    </>
  );
};
export default HeroPage;
