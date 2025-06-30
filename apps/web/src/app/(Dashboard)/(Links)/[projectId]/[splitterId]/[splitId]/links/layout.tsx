import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster"

import "@/app/globals.css";

import { LinkDataProvider } from "@/contexts/links";

export const metadata: Metadata = {
  title: "Splitoise - Seus Links",
  description: "A simple dashboard, where you can manage your redirecting.",
};

const LinksLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <LinkDataProvider>
        {children}
        <Toaster />
    </LinkDataProvider>
  );
}

export default LinksLayout;
