"use client";

import { Button } from "@/components/ui/button";
import { Undo2, Redo2, ChevronsLeft } from "lucide-react";
import { ChangeHistory } from "./change-history";

import { ToolsGroup, Tool} from "@/components/dashboard/links/tools-group";
import { UtilitiesGroup, Utility } from "../../utilities-group";
import { useLinkData } from "@/contexts/links";
import Link from "next/link";

interface NavigationBarProps {
  redirectSlug: string | undefined;
  isGoogleDelayed: boolean;
  googleHour: string;
}

const RenderNavigationBar: React.FC<NavigationBarProps> = ({redirectSlug, isGoogleDelayed, googleHour}) => {
    const { data } = useLinkData();
    return (
        <div className="flex items-center mb-3 rounded-md">
          <div className="w-full">
            <div className="flex flex-row items-center">
              {data.length > 0 ? (
                <div className="flex flex-row items-center w-full">
                  <div className="w-full flex justify-center">
                    <div className="flex flex-row items-center bg-neutral-900 rounded-lg px-[5px] py-[5px] space-x-1 w-full">
                      <div className="flex space-x-1 w-full">
                          <Link href={`../splits`}>
                              <Button className="text-[12px] font-bold" variant={"secondary"}><ChevronsLeft /><span>Voltar</span></Button>
                          </Link>
                          <div className="flex space-x-1">
                              <ChangeHistory />
                          </div>
                          <div className="w-full">
                              <Utility.RedirectSlugStatus redirectSlug={redirectSlug} />
                          </div>
                      </div>
  
                      <div className="flex space-x-1">
                          <UtilitiesGroup className="w-full">
                            <Utility.AverageECPM />
                            <Utility.ProbabilityIndicator />
                            <Utility.GoogleIndicator isGoogleDelayed={isGoogleDelayed} googleHour={googleHour} />
                          </UtilitiesGroup>
                          <ToolsGroup className="w-full">
                            <Tool.UnusedLinks />
                            <Tool.ProbabilityShift />
                          </ToolsGroup>
                      </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-row items-center w-full transition-all">
              <div className="w-full flex justify-center">
                <div className="flex flex-row items-center bg-neutral-900 rounded-lg px-[5px] py-[5px] space-x-1 w-full">
                  <div className="flex w-full space-x-1">
                    <Link href={`../splits`}>
                        <Button className="text-[12px] font-bold" variant={"secondary"}><ChevronsLeft /><span>Voltar</span></Button>
                    </Link>
                    <div className="flex space-x-1">
                        <Button variant="secondary" size="icon" disabled={true}><Undo2 /></Button>
                        <Button variant="secondary" size="icon" disabled={true}><Redo2 /></Button>
                    </div>
                    <div className="w-full">
                        <Utility.RedirectSlugStatus redirectSlug={redirectSlug} />
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <UtilitiesGroup className="w-full">
                        <Utility.AverageECPM disabled />
                        <Utility.ProbabilityIndicator disabled />
                        <Utility.GoogleIndicator disabled />
                    </UtilitiesGroup>
                    <ToolsGroup className="w-full">
                        <Tool.UnusedLinks />
                        <Tool.ProbabilityShift />
                    </ToolsGroup>
                  </div>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    )
}

export {RenderNavigationBar};