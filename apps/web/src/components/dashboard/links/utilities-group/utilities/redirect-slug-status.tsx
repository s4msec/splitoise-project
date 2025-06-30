"use client";

import { useLinkData } from "@/contexts/links";

interface Props {
    redirectSlug: string | undefined;
}

const RedirectSlugStatus: React.FC<Props> = ({redirectSlug}) => {
    const {initialData} = useLinkData();
    return (
        <div className="flex items-center h-[36px] rounded-md transition-all cursor-default">
            <div className="flex items-center dark:bg-neutral-700 h-full rounded-l-md px-2">
                <div className="w-5 h-5 rounded-full flex justify-center items-center">
                    <div className={`absolute w-3 h-3 ${initialData.length > 0 ? "bg-green-500" : "bg-neutral-400"} rounded-full animate-ping`} />
                    <div className={`w-3 h-3 ${initialData.length > 0 ? "bg-green-500" : "bg-neutral-400"} rounded-full`} />
                </div>
            </div>
            <div className="flex items-center bg-gradient-to-r from-secondary via-secondary to-neutral-800 h-full rounded-r-md w-full">
                <span className="text-[12px] text-neutral-400 ml-3 mr-2">{redirectSlug}</span>
            </div>
        </div>
    );
};

export { RedirectSlugStatus };
