"use client";

import { Button } from "@repo/ui/components/button";
import { useToast } from "@repo/ui/hooks/use-toast";

const HelloWorld = () => {
  const { toast } = useToast();

  return (
    <div>
      <Button size="lg" onClick={() => toast.success("Hello World")}>
        Hello World
      </Button>
    </div>
  );
};

export default HelloWorld;
