import Aboutbutton from "@/components/AboutmeButton/Aboutbutton";
import Desc from "@/components/Description/Desc";
import Hero from "@/components/Hero/Hero";
import { Separator } from "@/components/ui/separator";

const page = () => {
  return (
    <>
      <Hero />
      <Separator className="my-12" />
      <Desc />
    </>
  );
};
export default page;
