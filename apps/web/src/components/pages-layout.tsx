"use client";

import { useNavbarContext } from "@/contexts/navbar-context";
import Aside from "@/components/aside";
import Preloader from "./preloader";

const PagesLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
    const { expanded } = useNavbarContext();

    return (
        <div className={`w-full flex h-screen`}>
            <Aside />
            <div
                className={`flex flex-grow flex-col w-full z-[9] lg:mt-[30px] ${
                    !expanded ? "lg:ml-[90px]" : "lg:ml-[288px]"
                } transition-all delay-75`}
            > 
                <div className="flex-grow">
                    <Preloader />
                    <main className="flex flex-col mr-5 space-y-5 p-3 h-[98vh] lg:h-[95vh]">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default PagesLayout;
