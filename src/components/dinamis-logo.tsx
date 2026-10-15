import React from "react";

interface DinamisBrandLogoProps {
  className?: string;
  isDark?: boolean;
}

// Efecto de 3 rayas horizontales situadas estrictamente en la parte inferior del logo (el 68% superior es sólido)
const STRIPED_MASK_STYLE: React.CSSProperties = {
  WebkitMaskImage: `linear-gradient(
    to bottom,
    #000 0%,
    #000 68%,
    transparent 68%,
    transparent 71.5%,
    #000 71.5%,
    #000 79.5%,
    transparent 79.5%,
    transparent 83%,
    #000 83%,
    #000 91%,
    transparent 91%,
    transparent 94.5%,
    #000 94.5%,
    #000 100%
  )`,
  maskImage: `linear-gradient(
    to bottom,
    #000 0%,
    #000 68%,
    transparent 68%,
    transparent 71.5%,
    #000 71.5%,
    #000 79.5%,
    transparent 79.5%,
    transparent 83%,
    #000 83%,
    #000 91%,
    transparent 91%,
    transparent 94.5%,
    #000 94.5%,
    #000 100%
  )`,
};

export function DinamisBrandLogo({ className = "", isDark = false }: DinamisBrandLogoProps) {
  return (
    <div
      className={`inline-flex items-baseline select-none group cursor-pointer transition-transform duration-200 hover:scale-[1.02] ${className}`}
    >
      {/* "DinamisAI" con tipografía Outfit y exactamente 3 rayas horizontales */}
      <span
        className={`text-[29px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-black tracking-[-0.04em] leading-none transition-colors duration-200 inline-block ${
          isDark ? "text-white" : "text-[#0a0a0a]"
        }`}
        style={{
          fontFamily: "var(--font-logo), 'Outfit', sans-serif",
          ...STRIPED_MASK_STYLE,
        }}
      >
        DinamisAI
      </span>
    </div>
  );
}
