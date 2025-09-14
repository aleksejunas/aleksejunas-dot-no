// This file is used to define global MDX Components. For example, at the same level as 'pages' or 'app', or inside 'src' if applicable

// GOOD TO KNOW:
// mdx-components.tsx is required to use '@next/mdx' with App Router and will not work without it.
// Learn more about the mdx-components.tsx file convention. https://nextjs.org/docs/app/api-reference/file-conventions/mdx-components
// Learn how to use custom styles and components: https://nextjs.org/docs/app/guides/mdx#using-custom-styles-and-components

import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-white text-4xl bg-pink-400 p-4 mb-4">{children}</h1>
  ),
  img: (props) => (
    <Image
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      {...(props as ImageProps)}
      alt="Next.js Logo"
    />
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
