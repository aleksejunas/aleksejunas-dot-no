import React, { useState } from "react";

type AnimatedIconLinkProps = {
  href: string;
  label: string;
  Icon: React.ComponentType<{ size?: number }>;
  animationDuration?: string; // e.g., "0.5s"
  iconSize?: number; // e.g., 32
  width?: string | number; // e.g., "2.5em" or 40
  height?: string | number; // e.g., "2.5em" or 40
};

const AnimatedIconLink = ({
  href,
  label,
  Icon,
  animationDuration = "0.5s",
  iconSize = 32,
  width = "2.5em",
  height = "2.5em",
}: AnimatedIconLinkProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground font-bold uppercase focus:outline-none"
      style={{
        position: "relative",
        display: "inline-block",
        width,
        height,
        minWidth: width,
        minHeight: height,
        verticalAlign: "top",
        textAlign: "left",
        overflow: "hidden",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: hovered ? 0 : 1,
          transform: hovered ? "rotate(0deg)" : "rotate(-90deg)",
          transition: `opacity ${animationDuration}, transform ${animationDuration}`,
          width: "100%",
          height: "100%",
        }}
      >
        {label}
      </span>
      <span
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: hovered ? 1 : 0,
          transform: "rotate(0deg)", // Always upright
          transition: `opacity ${animationDuration}, transform ${animationDuration}`,
          width: "100%",
          height: "100%",
        }}
      >
        <Icon size={iconSize} />
      </span>
    </a>
  );
};

export default AnimatedIconLink;
