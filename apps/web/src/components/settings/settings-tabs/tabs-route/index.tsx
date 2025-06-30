import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Globe, List, Database, MousePointerClick } from "lucide-react";

const TabsRoutes = () => {    
    return (
        <TabsList className="flex flex-col justify-start h-full space-y-2 bg-neutral-300 dark:bg-neutral-900 rounded-tr-none rounded-br-none">
            <TabsTrigger className="flex w-full justify-start items-center text-black/40 data-[state=active]:text-black p-2 dark:text-white/40 dark:data-[state=active]:text-primary" value="categories">
                    <List className="mr-2 h-4 w-4" /> Categorias
            </TabsTrigger>
            <TabsTrigger className="flex w-full justify-start items-center text-black/40 data-[state=active]:text-black p-2 dark:text-white/40 dark:data-[state=active]:text-primary" value="countries">
                    <Globe className="mr-2 h-4 w-4" /> Locais/Idiomas
            </TabsTrigger>
            <TabsTrigger className="flex w-full justify-start items-center text-black/40 data-[state=active]:text-black p-2 dark:text-white/40 dark:data-[state=active]:text-primary" value="pixels">
                    <MousePointerClick className="mr-2 h-4 w-4" /> Pixel
            </TabsTrigger>
           
           <div className="relative top-[calc(100vh-280px)]">
                <TabsTrigger className="flex w-full justify-start items-center text-black/40 data-[state=active]:text-black p-2 dark:text-white/40 dark:data-[state=active]:text-primary" value="users">
                        <Users className="mr-2 h-4 w-4" /> Usuários
                </TabsTrigger>
                <TabsTrigger className="flex w-full justify-start items-center text-black/40 data-[state=active]:text-black p-2 dark:text-white/40 dark:data-[state=active]:text-primary" value="server-management">
                        <Database className="mr-2 h-4 w-4" /> Gerenciar Servidor
                </TabsTrigger>
           </div>
        </TabsList>
    )
}

export {TabsRoutes};