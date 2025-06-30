"use client";

import { useState } from "react";
import { SplitterCard } from "../splitter-card";
import { Search } from "@/components/search";
import { ScrollShadow } from "@heroui/scroll-shadow";

const RenderSplitters: React.FC<{ data?: Splitter[] }> = ({ data }) => {
    const [query, setQuery] = useState("");

    const handleSearch = (searchQuery: string) => {
        setQuery(searchQuery.toLowerCase());
    };

    const filteredProjects = data?.filter((splitter) =>
        splitter.category?.name.toString().includes(query) ||
        splitter.country?.name.toLowerCase().includes(query)
    );

    return (
        <div className="space-y-3">
            <Search onSearch={handleSearch} />
            <ScrollShadow hideScrollBar className="h-[calc(100vh-300px)]" size={100}>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3">
                    {filteredProjects?.map((splitter, index) => (
                        <SplitterCard key={index} data={splitter} />
                    ))}
                </div>
            </ScrollShadow>
        </div>
    );
};

export {RenderSplitters};
