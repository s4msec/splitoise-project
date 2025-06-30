"use client"

import { useState } from "react"
import { Tabs } from "@/components/ui/tabs"

import { TabsRoutes } from "@/components/settings/settings-tabs/tabs-route";

const SettingsTabs: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [activeTab, setActiveTab] = useState("categories")

  return (
    <div className="flex flex-col border-2 border-neutral-300 dark:border-neutral-900 h-full rounded-lg">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex h-full">
              <TabsRoutes />
            {children}
        </Tabs>
    </div>
  )
}

export {SettingsTabs}
