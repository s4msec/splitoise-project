import type { Metadata } from "next";
import { HeroUIProvider } from "@heroui/react";

import "@/app/globals.css";
import { NavbarProvider } from "@/contexts/navbar-context";
import { NavbarItemsProvider } from "@/contexts/navbar-context/items-context";

import PagesLayout from "@/components/pages-layout";

export const metadata: Metadata = {
  title: "Splitoise - Dashboard",
  description: "A simple dashboard, where you can manage your redirecting.",
};

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <HeroUIProvider>
        <NavbarProvider>
            <NavbarItemsProvider>
                <PagesLayout>
                    {children}
                </PagesLayout>
            </NavbarItemsProvider>
        </NavbarProvider>
    </HeroUIProvider>
  );
}

export default DashboardLayout;
