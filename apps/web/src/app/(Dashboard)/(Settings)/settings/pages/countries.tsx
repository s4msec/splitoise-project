import { CreateCountry } from "@/components/settings/pages/countries/create-country";
import { ListCountry } from "@/components/settings/pages/countries/list-countries";

const ShowCountries = () => {
    return (
        <div className="bg-neutral-200 dark:bg-neutral-800 p-5 h-full">
            <div className="flex items-center">
                <div className="w-full">
                    <h1 className="text-lg font-bold">Locais/Línguas</h1>
                    <span className="dark:text-neutral-400">Configure locais e/ou línguas que ficarão disponíveis para uso em todos os projetos:</span>
                </div>
                <CreateCountry />
            </div>
            <div className="flex h-[calc(100vh-180px)]">
                <ListCountry />
            </div>
        </div>
    )
}

export { ShowCountries };