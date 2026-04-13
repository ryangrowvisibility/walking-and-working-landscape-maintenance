"use client";

import { useState } from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-xl p-5 transition-all duration-200 cursor-default"
      style={{
        backgroundColor: hovered ? "oklch(0.30 0.09 148 / 0.06)" : "oklch(0.99 0.006 100)",
        border: `1px solid ${hovered ? "oklch(0.44 0.10 148 / 0.30)" : "oklch(0.86 0.018 100)"}`,
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered ? "0 6px 20px oklch(0.30 0.09 148 / 0.10)" : "none",
      }}
      role="article"
      aria-label={title}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors duration-200"
        style={{ backgroundColor: hovered ? "oklch(0.30 0.09 148 / 0.14)" : "oklch(0.30 0.09 148 / 0.08)" }}
      >
        <div style={{ color: "oklch(0.30 0.09 148)" }}>{icon}</div>
      </div>
      <h3
        className="font-semibold text-sm mb-1.5"
        style={{ fontFamily: "var(--font-display, Epilogue, sans-serif)", color: "oklch(0.14 0.02 148)", letterSpacing: "0.01em" }}
      >
        {title}
      </h3>
      <p className="text-xs leading-relaxed" style={{ color: "oklch(0.48 0.025 148)" }}>
        {description}
      </p>
    </div>
  );
}
