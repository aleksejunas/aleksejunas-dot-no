"use client";
import { useState, useEffect } from "react";

const PunkThemeToggleButton = () => {
  const [isPunkTheme, setIsPunkTheme] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isPunkTheme) root.setAttribute("data-style", "punk");
    else root.removeAttribute("data-style");
  }, [isPunkTheme]);

  return (
    <button
      onClick={() => setIsPunkTheme(!isPunkTheme)}
      className="fixed bottom-4 right-4 z-50 rounded-full bg-accent text-fg px-3 py-2 text-sm font-semibold shadow-lg"
    >
      {isPunkTheme ? <span className="skull">💀</span> : "⚡ Punk"}
    </button>
  );
};

export default PunkThemeToggleButton;
