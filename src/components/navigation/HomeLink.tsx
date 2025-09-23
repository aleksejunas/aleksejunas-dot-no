"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Home from "@/components/icons/Home";

const HomeLink = () => {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <Link href="/">
      <div className="absolute top-6 right-6  cursor-pointer">
        <Home className="h-10 2-10 fill-black dark:fill-white" />
      </div>
    </Link>
  );
};

export default HomeLink;
