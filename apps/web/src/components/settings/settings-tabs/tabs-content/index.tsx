import { ShowUsers } from "@/app/(Dashboard)/(Settings)/settings/pages/users";
import { ShowCategories } from "@/app/(Dashboard)/(Settings)/settings/pages/categories";
import { ShowCountries } from "@/app/(Dashboard)/(Settings)/settings/pages/countries";
import { ServerManagement } from "@/app/(Dashboard)/(Settings)/settings/pages/server-management";
import { PixelSettings } from "@/app/(Dashboard)/(Settings)/settings/pages/pixels";

import { TabsContent } from "@/components/ui/tabs";

const TabsGroupContent = () => {
    return (
        <>
            <TabsContent className="h-full w-full mt-0" value="users">
                <ShowUsers />
            </TabsContent>
            <TabsContent className="h-full w-full mt-0" value="countries">
                <ShowCountries />
            </TabsContent>
            <TabsContent className="h-full w-full mt-0" value="categories">
                <ShowCategories />
            </TabsContent>
            <TabsContent className="h-full w-full mt-0" value="pixels">
                <PixelSettings />
            </TabsContent>
            <TabsContent className="h-full w-full mt-0" value="server-management">
                <ServerManagement />
            </TabsContent>
        </>
    )
};

export {TabsGroupContent};