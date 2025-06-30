import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

interface Props {
    route: string;
}

const BackButton: React.FC<Props> = ({route}) => {
    return (
        <Link href={`../${route}`}>
            <Button variant="outline"><ArrowLeft /> Voltar</Button>
        </Link>
    )
};

export { BackButton };