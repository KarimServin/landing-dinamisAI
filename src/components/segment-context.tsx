"use client";

import React, { createContext, useContext, useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

export type AudienceSegment = "empresa" | "persona";

interface SegmentContextType {
  segment: AudienceSegment;
  setSegment: (seg: AudienceSegment) => void;
  isGateOpen: boolean;
  openGate: () => void;
  closeGate: () => void;
}

const SegmentContext = createContext<SegmentContextType>({
  segment: "empresa",
  setSegment: () => {},
  isGateOpen: false,
  openGate: () => {},
  closeGate: () => {},
});

interface SegmentProviderInnerProps {
  children: React.ReactNode;
  initialSegment?: AudienceSegment;
}

function SegmentProviderInner({ children, initialSegment = "empresa" }: SegmentProviderInnerProps) {
  const searchParams = useSearchParams();
  const [segment, setSegment] = useState<AudienceSegment>(initialSegment);
  const [isGateOpen, setIsGateOpen] = useState<boolean>(false);

  useEffect(() => {
    // URL param overrides initialSegment (allows deep-linking to a specific segment)
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
      sessionStorage.setItem("dinamis_segment_gate_seen", "true");
    }
  };

  const openGate = () => setIsGateOpen(true);
  const closeGate = () => {
    setIsGateOpen(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("dinamis_segment_gate_seen", "true");
    }
  };

  return (
    <SegmentContext.Provider
      value={{
        segment,
        setSegment: updateSegment,
        isGateOpen,
        openGate,
        closeGate,
      }}
    >
      {children}
    </SegmentContext.Provider>
  );
}

interface SegmentProviderProps {
  children: React.ReactNode;
  initialSegment?: AudienceSegment;
}

export function SegmentProvider({ children, initialSegment }: SegmentProviderProps) {
  return (
    <Suspense fallback={<>{children}</>}>
      <SegmentProviderInner initialSegment={initialSegment}>
        {children}
      </SegmentProviderInner>
    </Suspense>
  );
}

export function useSegment() {
  return useContext(SegmentContext);
}
