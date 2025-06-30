import { Card, CardHeader, CardTitle, CardFooter} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Edit, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SplitterCard: React.FC<{data: Splitter}> = ({data}) => {
    return (
        <Link href={`${data.uuid}/splits`}>
        <Card className="cursor-pointer transition-all rounded-lg shadow-none hover:border-neutral-700 hover:dark:border-neutral-500">
            <div className="flex">
                <div className="flex justify-center items-center ml-8">
                    {/* <Image src={`/api/v1/images/${data.country?.icon}?directory=locales`} width={25} height={25} alt="Splitter Icon" /> */}
                </div>
                <CardHeader className="space-y-5 w-full">
                    <CardTitle className="flex flex-col space-y-1">
                        <h1 className="text-lg font-bold">{data.category?.name}</h1>
                        <span className="text-[12px] text-neutral-400">{data.country?.name}</span>
                    </CardTitle>
                </CardHeader>
            </div>

            <CardFooter className="flex flex-col space-y-2 items-start">
                <Separator className="mt-2 mb-2" />
                <div className="flex">
                    <Button className="bg-background hover:bg-secondary text-primary px-3"><Edit /></Button>
                    <Button className="bg-background hover:bg-secondary text-primary px-3"><Trash /></Button>    
                </div>
            </CardFooter>
        </Card>
        </Link>
    )
};

export { SplitterCard };