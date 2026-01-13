"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Home from "@/components/icons/Home";

const HomeLink = () => {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <Link
      href="/"
      aria-label="Back to home"
      className="inline-flex rounded-full p-2 transition hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <Home className="h-10 w-10 fill-black dark:fill-white" />
    </Link>
  );
};

export default HomeLink;
