import { CreateCategory } from "@/components/settings/pages/categories/create-category";
import { ListCategories } from "@/components/settings/pages/categories/list-categories";

const ShowCategories = () => {
    return (
        <div className="bg-neutral-200 dark:bg-neutral-800 p-5 h-full">
            <div className="flex items-center">
                <div className="w-full">
                    <h1 className="text-lg font-bold">Categorias</h1>
                    <span className="dark:text-neutral-400">Configure as categorias que ficarão disponíveis para uso em todos os projetos:</span>
                </div>
                <CreateCategory />
            </div>
            <div className="flex h-[calc(100vh-180px)]">
                <ListCategories />
            </div>
        </div>
    )
}

export { ShowCategories };