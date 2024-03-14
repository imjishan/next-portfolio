import { Projects } from "./CardData";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";

const ProjectCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
      {Projects.map((project, index) => (
        <Card key={index} className="py-4 mx-auto rounded-2xl">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">{project.title}</p>
            <small className="text-default-500">{project.description}</small>
            <h4 className="font-bold text-large">{project.tags.join(", ")}</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt={project.title}
              className="object-cover rounded-xl"
              src={project.image}
              width={570}
              height={270}
            />
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
export default ProjectCard;
