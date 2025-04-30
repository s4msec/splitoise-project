import React from "react";
import { Welcome } from "@/components/welcome";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4 md:p-8">
      <Welcome />
    </div>
  );
}
