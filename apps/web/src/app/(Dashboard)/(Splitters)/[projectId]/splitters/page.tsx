import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { PiGearFill } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@heroui/skeleton";
import { RenderSplitters } from "@/components/dashboard/splitter/show-splitters/client/render-splitters";
import { CreateSplitter } from "@/components/dashboard/splitter/create-splitter";
import { BackButton } from "@/components/back-button";

const Splitters: React.FC<{ params: Promise<{ projectId: string }> }> = async ({ params }) => {
    const { projectId } = await params;

    const project = await prisma.app.project.findUnique({
        where: { uuid: projectId },
    });

    if (!project) {
        return notFound();
    }

    const splitters = await prisma.app.splitter.findMany({
        where: { projectId: project.id },
        include: {
            category: true,
            country: true,
        }
    });

    return (
        <div className="transition-opacity duration-500 opacity-100">
            <div className="flex items-center mb-3">
                <div className="w-full">
                    <div className="flex flex-row items-center">
                        <div className="flex flex-row space-x-2 w-full">
                            <BackButton route="projects" />
                            <div className="flex items-center space-x-2 w-full">
                                {/* Skeleton for Project Icon */}
                                {/* {!project.icon ? (
                                    <Skeleton className="w-[30px] h-[30px] rounded-lg" />
                                ) : (
                                    <Image
                                        className="rounded-lg"
                                        width={20}
                                        height={20}
                                        alt="project icon"
                                        src={`/api/v1/images/${project.icon}`}
                                    />
                                )} */}

                                {/* Skeleton for Project Name */}
                                {!project.name ? (
                                    <Skeleton className="w-[100px] h-4 rounded-lg" />
                                ) : (
                                    <span className="text-[12px] font-bold">{project.name}</span>
                                )}
                            </div>
                        </div>
                        <div className="flex w-full justify-end items-center space-x-3">
                            <Button variant="outline" size="icon">
                                <PiGearFill />
                            </Button>
                            <CreateSplitter projectId={project.id.toString()} />
                        </div>
                    </div>

                    <div className="flex flex-row w-full items-center mt-1">
                        <div>
                            <h1 className="text-[35px] font-black uppercase">Splitters</h1>
                            <p className="text-[12px] dark:text-neutral-400">
                                Aqui você poderá visualizar e editar os seus projetos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <RenderSplitters data={splitters} />
        </div>
    );
};

export default Splitters;
