import { prisma } from "@/lib/prisma";

import { CreateProject } from "@/components/dashboard/project/create-project";
import { RenderProjects } from "@/components/dashboard/project/show-projects/client/render-projects";

export const dynamic = "force-dynamic";

const Projects: React.FC = async () => {
    const userId = 1;

    const projects: Project[] = await prisma.app.project.findMany({
        where: {
            userId: userId,
        },
    });

    return (
        <div className="transition-opacity duration-500 opacity-100 space-y-5">
            <div className="grid grid-cols-2">
                <div>
                    <h1 className="text-[35px] font-black uppercase">Projetos</h1>
                    <p className="dark:text-neutral-400 text-[12px]">
                        Aqui você poderá visualizar e editar os seus projetos.
                    </p>
                </div>
                <div className="flex justify-end items-center">
                    <CreateProject />
                </div>
            </div>
            <RenderProjects projects={projects} />
        </div>
    )
};

export default Projects;
