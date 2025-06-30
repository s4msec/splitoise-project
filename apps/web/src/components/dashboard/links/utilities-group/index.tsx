import { AverageECPM } from "./utilities/average-ecpm";
import { ProbabilityIndicator } from "./utilities/probability-indicator";
import { RedirectSlugStatus } from "./utilities/redirect-slug-status";
import { GoogleIndicator } from "./utilities/google-indicator";

const UtilitiesGroup: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
  return <div className={`${className} flex space-x-1`}>{children}</div>;
};

const Utility = {
  RedirectSlugStatus,
  AverageECPM,
  ProbabilityIndicator,
  GoogleIndicator
};

export { UtilitiesGroup, Utility };
