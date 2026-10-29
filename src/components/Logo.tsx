import React from "react";
import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  showTagline?: boolean;
  className?: string;
}

export default function Logo({
  width = 180,
  height = 42,
  showTagline = false,
  className = "",
}: LogoProps) {
  return (
    <div
      className={`logo-wrapper ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          borderRadius: "8px",
          overflow: "hidden",
          padding: "4px 8px",
          background: "rgba(255, 255, 255, 0.98)",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
          border: "1px solid rgba(226, 232, 240, 0.8)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
      >
        <Image
          src="/logo.png"
          alt="Spectrum 7 - Technology Solutions"
          width={width}
          height={height}
          priority
          style={{
            objectFit: "contain",
            display: "block",
            height: "auto",
            maxWidth: "100%",
          }}
        />
      </div>

      {showTagline && (
        <span
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            borderLeft: "1px solid var(--border-light)",
            paddingLeft: "10px",
          }}
        >
          Enterprise Engineering
        </span>
      )}
    </div>
  );
}
