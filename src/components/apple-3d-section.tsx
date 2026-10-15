"use client";

import React, { useRef, useEffect, useState } from "react";

interface Apple3DSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  isHero?: boolean;
}

/**
 * Apple & Framer 3D Section Transition with Dynamic Atmospheric Flair
 * 
 * 1. 3D Spatial Lift: Enters with a volumetric perspective glide, subtle scale, and dimensional lift.
 * 2. Luminous Laser Beam Sweep: An Apple-inspired light beam sweeps across the top rim on entrance.
 * 3. Atmospheric Ambient Aura: A soft radial warmth glow blooms behind the section in deep space.
 * 4. Settle & Lock: Once docked into reading view, settles cleanly into 100% crisp typography.
 */
export function Apple3DSection({
  children,
  className = "",
  id,
  isHero = false,
}: Apple3DSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(isHero);

  useEffect(() => {
    if (isHero) {
      setIsVisible(true);
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const element = containerRef.current;
    if (!element) return;

    // Trigger reveal when the section enters the bottom 14% of the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.05,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [isHero]);

  return (
    <div
      ref={containerRef}
      id={id}
      className={`relative w-full ${className}`}
      style={{
        perspective: "1400px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Volumetric Atmospheric Ambient Glow behind section */}
      {!isHero && (
        <div
          className={`absolute inset-0 max-w-5xl mx-auto -z-10 pointer-events-none transition-all duration-1000 ease-out ${
            isVisible ? "opacity-70 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <div className="w-full h-48 mx-auto bg-gradient-to-r from-transparent via-[#ff8b1e]/15 to-transparent blur-3xl rounded-full transform -translate-y-12" />
        </div>
      )}

      {/* 3D Apple Spatial Plane with Smooth Settle-and-Lock */}
      <div
        className="relative w-full preserve-3d"
        style={{
          transform:
            isHero || isVisible
              ? "perspective(1400px) translateY(0px) scale(1) rotateX(0deg) translateZ(0px)"
              : "perspective(1400px) translateY(44px) scale(0.975) rotateX(3.2deg) translateZ(-35px)",
          opacity: isHero || isVisible ? 1 : 0,
          filter: isHero || isVisible ? "blur(0px)" : "blur(4px)",
          transition:
            "transform 850ms cubic-bezier(0.18, 0.95, 0.28, 1), opacity 700ms cubic-bezier(0.18, 0.95, 0.28, 1), filter 600ms ease-out",
          willChange: isVisible ? "auto" : "transform, opacity, filter",
          transformOrigin: "50% 12%",
        }}
      >
        {/* Apple Luminous Top Rim Laser Sweep (Shines dynamically when section enters) */}
        {!isHero && (
          <div className="absolute -top-px inset-x-0 h-[2px] overflow-hidden pointer-events-none z-20">
            {/* Base micro-glow */}
            <div
              className={`w-full h-full bg-gradient-to-r from-transparent via-[#ff8b1e]/30 to-transparent transition-opacity duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            />
            {/* Kinetic Laser Shimmer Beam */}
            {isVisible && (
              <div className="absolute inset-y-0 w-64 bg-gradient-to-r from-transparent via-[#ff8b1e] via-[#da551d] to-transparent animate-beam-sweep blur-[1px]" />
            )}
          </div>
        )}

        {children}
      </div>
    </div>
  );
}
