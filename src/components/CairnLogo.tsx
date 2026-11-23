import React from "react";

interface CairnLogoProps {
  size?: number;
}

export function CairnLogo({ size = 32 }: CairnLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label="Cairno Labs"
      style={{ display: "block", flexShrink: 0 }}
    >
      {/* Base basalt plinth bar */}
      <path
        d="M8 43H56V50L50 56H18L8 46V43Z"
        style={{ fill: "var(--cairno-stone-base)" }}
      />
      {/* Mid fjord-teal architectural spine and upper arch */}
      <path
        d="M8 18L18 8H39V21H25L21 25V39H8V18Z"
        style={{ fill: "var(--cairno-stone-mid)" }}
      />
      {/* Top alpine ochre apex capstone */}
      <path
        d="M43 8H50L56 14V21H43V8Z"
        style={{ fill: "var(--cairno-stone-top)" }}
      />
    </svg>
  );
}
