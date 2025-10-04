import React from "react";

export default function BackgroundGradientWrapper({ children }) {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: `linear-gradient(
          180deg,
          rgba(165,180,252,0.1) 0%,    /* very light pastel indigo */
          rgba(216,180,254,0.08) 40%,  /* very light pastel purple */
          rgba(251,207,232,0.06) 70%,  /* faint pastel pink */
          rgba(252,215,127,0.05) 100%  /* subtle pastel orange */
        )`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {children}
    </div>
  );
}
