"use client";

import React, { createContext, useContext, useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

export type AudienceSegment = "empresa" | "persona";

interface SegmentContextType {
  segment: AudienceSegment;
  setSegment: (seg: AudienceSegment) => void;
}

const SegmentContext = createContext<SegmentContextType>({
  segment: "empresa",
  setSegment: () => {},
});

function SegmentProviderInner({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const [segment, setSegment] = useState<AudienceSegment>("empresa");

  useEffect(() => {
    const urlSeg = searchParams.get("segment") || searchParams.get("publico");
    if (urlSeg === "persona" || urlSeg === "empleo" || urlSeg === "candidato") {
      setSegment("persona");
    } else if (urlSeg === "empresa" || urlSeg === "liderazgo") {
      setSegment("empresa");
    }
  }, [searchParams]);

  const updateSegment = (newSeg: AudienceSegment) => {
    setSegment(newSeg);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("segment", newSeg);
      window.history.replaceState({}, "", url.toString());
    }
  };

  return (
    <SegmentContext.Provider value={{ segment, setSegment: updateSegment }}>
      {children}
    </SegmentContext.Provider>
  );
}

export function SegmentProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<>{children}</>}>
      <SegmentProviderInner>{children}</SegmentProviderInner>
    </Suspense>
  );
}

export function useSegment() {
  return useContext(SegmentContext);
}
