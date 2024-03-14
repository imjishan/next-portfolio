import { Button } from "@nextui-org/react";
import Image from "next/image";
import { MdOutlineHorizontalRule } from "react-icons/md";
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
      <br />
      <div className="w-auto h-auto">
        <Image
          src={"/project1.jpg"}
          alt="image of project"
          width={1000}
          height={350}
          className="mx-auto" // Add this class to center the image
        />
      </div>
      <Button>Jishan</Button>
    </>
  );
};
export default HeroPage;
