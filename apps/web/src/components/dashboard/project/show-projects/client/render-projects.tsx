"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/dashboard/project/project-card";
import { Search } from "@/components/search";
import { ScrollShadow } from "@heroui/scroll-shadow";

const RenderProjects: React.FC<{ projects: Project[] }> = ({ projects }) => {
    const [query, setQuery] = useState("");

    const handleSearch = (searchQuery: string) => {
        setQuery(searchQuery.toLowerCase());
    };

    const filteredProjects = projects.filter((project) =>
        project.name.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query)
    );

    return (
        <div className="space-y-3">
            <Search onSearch={handleSearch} />
            <ScrollShadow hideScrollBar className="h-[calc(100vh-250px)] transition-all" size={200}>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </ScrollShadow>
        </div>
    );
};

export {RenderProjects};
