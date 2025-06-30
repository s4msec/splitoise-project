import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Undo2, Redo2 } from "lucide-react";
import { useLinkData } from "@/contexts/links";

const ChangeHistory = () => {
  const { undo, redo, canUndo, canRedo } = useLinkData();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Listen for ctrlKey (or metaKey for macOS) with no alt key pressed.
      if ((event.ctrlKey || event.metaKey) && !event.altKey) {
        // Handle undo: Ctrl+Z or Cmd+Z
        if (event.key.toLowerCase() === "z") {
          event.preventDefault();
          if (canUndo) {
            undo();
          }
        }
        // Handle redo: Ctrl+Y or Cmd+Y
        else if (event.key.toLowerCase() === "y") {
          event.preventDefault();
          if (canRedo) {
            redo();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [undo, redo, canUndo, canRedo]);

  return (
    <>
      <Button className="transition-all" variant="secondary" size="icon" onClick={undo} disabled={!canUndo}>
        <Undo2 />
      </Button>
      <Button className="transition-all" variant="secondary" size="icon" onClick={redo} disabled={!canRedo}>
        <Redo2 />
      </Button>
    </>
  );
};

export { ChangeHistory };
