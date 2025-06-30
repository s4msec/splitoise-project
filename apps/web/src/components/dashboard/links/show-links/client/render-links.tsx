"use client";

import { useEffect, useRef } from "react";
import { useLinkData } from "@/contexts/links";
import { ShowLinks } from "@/components/dashboard/links/show-links";

interface RenderLinksProps {
  splitId: string;
  data: Link[];
}

const RenderLinks: React.FC<RenderLinksProps> = ({ splitId, data }) => {
  const { data: contextData, setData, skipHistoryNextUpdate } = useLinkData();
  const initialized = useRef(false);

  useEffect(() => {
    // Only initialize if the context is empty.
    if (!initialized.current && contextData.length === 0) {
      // Skip recording this initial update.
      skipHistoryNextUpdate();
      setData(data);
      initialized.current = true;
    }
  }, [data, contextData, setData, skipHistoryNextUpdate]);

  return (
    <div className="space-y-3">
      <ShowLinks splitId={splitId} />
    </div>
  );
};

export { RenderLinks };
