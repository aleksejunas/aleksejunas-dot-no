import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogPage = () => {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"></main>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-gray-50 sm:text-6xl">
          {" "}
          Welcome to the Blog Page
        </h1>
      </div>
    </div>
  );
};

export default BlogPage;
