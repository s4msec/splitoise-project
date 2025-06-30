import { SettingsTabs } from "@/components/settings/settings-tabs";
import { TabsGroupContent as SettingsContent } from "@/components/settings/settings-tabs/tabs-content";

const Settings = async () => {
  return (
    <div className="h-full">
        <SettingsTabs>
            <SettingsContent />
        </SettingsTabs>
    </div>
  )
}

export default Settings; 