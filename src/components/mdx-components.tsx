// filepath: src/components/mdx-components.tsx

const mdxComponents = {
  a: (props: React.ComponentPropsWithoutRef<"a">) => (
    <a {...props} className="text-blue-600 underline" />
  ),
  h1: (props: React.ComponentPropsWithoutRef<"h1">) => (
    <h1 {...props} className="text-3xl font-bold" />
  ),
  // Legg til flere komponenter etter behov
};

export default mdxComponents;
