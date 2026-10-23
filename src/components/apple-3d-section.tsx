"use client";

import React, { useRef, useEffect, useState } from "react";

interface Apple3DSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  isHero?: boolean;
}

/**
 * Reveal sutil de sección: fade-in + desplazamiento corto al entrar en viewport.
 * Sin perspectiva, blur ni efectos decorativos para no distraer de la lectura.
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
    if (isHero) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [isHero]);

  return (
    <div
      ref={containerRef}
      id={id}
      className={`relative w-full transition-[opacity,transform] duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
    >
      {children}
    </div>
  );
}
