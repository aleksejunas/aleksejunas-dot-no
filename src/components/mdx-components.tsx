// filepath: src/components/mdx-components.tsx

import CodeBlock from "./mdx/CodeBlock";

const mdxComponents = {
  pre: CodeBlock,
  a: (props: React.ComponentPropsWithoutRef<"a">) => (
    <a {...props} className="text-accent underline hover:opacity-80 transition-opacity" />
  ),
  h1: (props: React.ComponentPropsWithoutRef<"h1">) => (
    <h1 {...props} className="text-3xl font-bold" />
  ),
  // Legg til flere komponenter etter behov
};

export default mdxComponents;
