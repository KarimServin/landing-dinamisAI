import React from "react";
import Image from "next/image";

interface DinamisBrandLogoProps {
  className?: string;
  isDark?: boolean;
  priority?: boolean;
}

export function DinamisBrandLogo({
  className = "",
  isDark = false,
  priority = false,
}: DinamisBrandLogoProps) {
  return (
    <div
      className={`inline-flex items-center select-none group cursor-pointer transition-transform duration-200 hover:opacity-90 ${className}`}
    >
      <Image
        src={
          isDark
            ? "/images/grupo-dinamis-logo-pure-white.webp"
            : "/images/grupo-dinamis-logo.webp"
        }
        alt="Grupo Dinamis"
        width={isDark ? 991 : 1024}
        height={isDark ? 151 : 195}
        className="h-7 sm:h-8 md:h-9 w-auto object-contain"
        style={{ width: "auto" }}
        priority={priority}
      />
    </div>
  );
}

export const GrupoDinamisLogo = DinamisBrandLogo;
