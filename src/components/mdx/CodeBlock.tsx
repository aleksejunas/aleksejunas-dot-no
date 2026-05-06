"use client";

import { useRef, useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

export default function CodeBlock({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"pre">) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    const text = preRef.current?.textContent ?? "";
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <pre ref={preRef} {...props}>
        {children}
      </pre>
      <button
        onClick={copy}
        aria-label="kopier kode"
        className="absolute top-2 right-2 px-2 py-1 text-xs font-mono rounded  border-foreground/20 bg-background text-muted opacity-30 group-hover:opacity-100 hover:text-foreground hover:border-foreground/40 transition-all duration-150"
      >
        {copied ? <FiCheck size={14} /> : <FiCopy size={14} />}
      </button>
    </div>
  );
}
