import type { NextConfig } from "next";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  experimental: {
    mdxRs: true,
  },
  turbopack: {
    // Force Turbopack to treat this directory as the workspace root to silence dev warnings.
    root: __dirname,
  },
  // Configure 'pageExtensions' to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

// Add MDX support
const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
