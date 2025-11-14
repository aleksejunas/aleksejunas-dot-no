import React, { useState } from "react";

type AnimatedIconLinkProps = {
  href: string;
  label: string;
  shortLabel?: string; // e.g., "GH"
  Icon: React.ComponentType<{ size?: number }>;
  animationDuration?: string; // e.g., "0.5s"
  iconSize?: number; // e.g., 32
  hoverColor?: string; // e.g., css color variable
};

const AnimatedIconLink = ({
  href,
  label,
  shortLabel,
  Icon,
  animationDuration = "0.5s",
  iconSize = 32,
  // TODO: Change from hardcoded to CSS color variable
  hoverColor = "#f43f5e", // Tailwind rose-500
}: AnimatedIconLinkProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="focus:outline-none"
      style={{
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
        transition: `box-shadow ${animationDuration}`,
        borderRadius: "0.5em",
        padding: "0.25em",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: iconSize,
          height: iconSize,
          borderRadius: "50%",
          transition: `transform ${animationDuration}, color ${animationDuration}`,
          transform: hovered ? "scale(1.15) translateY(-2px)" : "scale(1)",
          boxShadow: hovered
            ? `0 4px 16px 0 ${hoverColor}33`
            : "0 2px 8px 0 #00000011",
          color: hovered ? hoverColor : "inherit",
          backgroundColor: "transparent",
        }}
      >
        <Icon size={iconSize} />
      </span>
      <span className="sr-only">{shortLabel ?? label}</span>
    </a>
  );
};

export default AnimatedIconLink;
