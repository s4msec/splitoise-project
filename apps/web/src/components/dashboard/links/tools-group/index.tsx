import { ProbabilityShift } from "./tools/probability-shift";
import { UnusedLinks } from "./tools/unused-links"

const ToolsGroup: React.FC<{ children: React.ReactNode; className?: string }> = ({children, className}) => {
    return <div className={`${className} flex space-x-1`}>{children}</div>
};

const Tool = {
    UnusedLinks,
    ProbabilityShift
};
  
export { ToolsGroup, Tool };