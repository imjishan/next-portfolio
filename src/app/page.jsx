import Aboutbutton from "@/components/AboutmeButton/Aboutbutton";
import Hero from "@/components/Hero/Hero";
import Paragraph from "@/components/Text/Paragraph";
import { Separator } from "@/components/ui/separator";
const page = () => {
  return (
    <>
      <Hero />
      <Separator className="my-16" />
      <Aboutbutton />
      <Paragraph />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </>
  );
};
export default page;
