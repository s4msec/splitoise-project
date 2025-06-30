import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DeleteButton } from "./delete-button";
import { EditProject } from "../edit-project";

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {

  return (
    <>
      <Link href={`${project.uuid}/splitters`}>
        <Card className="cursor-pointer transition-all rounded-lg shadow-none hover:border-neutral-700 hover:dark:border-neutral-500">
          <CardHeader>
            <CardTitle>
              <div className="flex flex-wrap items-center space-x-4 md:space-x-6">
                {/* <Image
                  className="rounded-lg transition-all"
                  width={30}
                  height={30}
                  src={`/api/v1/images/${project.icon}`}
                  alt={`${project.name} Logo`}
                /> */}
                <div className="flex-1 space-y-1">
                  <span className="block text-lg font-semibold text-black dark:text-white transition-all">
                    {project.name}
                  </span>
                  <CardDescription className="text-neutral-400 text-[12px] transition-all">
                    {project.description}
                  </CardDescription>
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardFooter className="flex flex-col space-y-2 items-start">
            <Separator className="mt-2 mb-2" />
            <div className="flex space-x-1">
              <EditProject projectId={project.id} />
              <DeleteButton projectId={project.id} />
              {/* Pixel settings moved to /settings */}
            </div>
          </CardFooter>
        </Card>
      </Link>
      {/* Settings modal removed */}
    </>
  );
};

export { ProjectCard };
