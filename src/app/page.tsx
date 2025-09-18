import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"></main>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-6xl">
          Welcome to my Next.js site
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"></p>
        This is a simple site to demonstrate MDX in Next.js
      </div>

      {/* Small Typography example using Tailwind Typography (.prose) */}
      <article className="prose dark:prose-invert max-w-none">
        <h2>Typography Example</h2>
        <p>
          The <code>prose</code> class applies beautiful default styles to rich
          text. It handles headings, paragraphs, lists, links, and more.
        </p>
        <ul>
          <li>Semantic HTML elements</li>
          <li>
            Inline code like <code>const x = 42;</code>
          </li>
          <li>
            Links look nice by default —{" "}
            <a href="/mdx-page">see the MDX page</a>
          </li>
        </ul>
        <blockquote>
          This blockquote demonstrates the plugin’s default quote styling.
        </blockquote>
      </article>

      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <Link
          className="rounded-full border border-solid
      border-transparent transition-colors flex items-center
      justify-center bg-foreground text-background gap-2
      hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm
      sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          href="/mdx-page"
        >
          View MDX Page
        </Link>
      </div>
    </div>
  );
}

{
  /* <Image */
}
{
  /*   className="dark:invert" */
}
{
  /*   src="/next.svg" */
}
{
  /*   alt="Next.js logo" */
}
{
  /*   width={180} */
}
{
  /*   height={38} */
}
{
  /*   priority */
}
{
  /* /> */
}
{
  /* <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left"> */
}
{
  /*   <li className="mb-2 tracking-[-.01em]"> */
}
{
  /*     Get started by editing{" "} */
}
{
  /*     <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded"> */
}
{
  /*       src/app/page.tsx */
}
{
  /*     </code> */
}
{
  /*     . */
}
{
  /*   </li> */
}
{
  /*   <li className="tracking-[-.01em]"> */
}
{
  /*     Save and see your changes instantly. */
}
{
  /*   </li> */
}
{
  /* </ol> */
}
{
  /**/
}
{
  /* <div className="flex gap-4 items-center flex-col sm:flex-row"> */
}
{
  /*   <a */
}
{
  /*     className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto" */
}
{
  /*     href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" */
}
{
  /*     target="_blank" */
}
{
  /*     rel="noopener noreferrer" */
}
{
  /*   > */
}
{
  /*     <Image */
}
{
  /*       className="dark:invert" */
}
{
  /*       src="/vercel.svg" */
}
{
  /*       alt="Vercel logomark" */
}
{
  /*       width={20} */
}
{
  /*       height={20} */
}
{
  /*     /> */
}
{
  /*     Deploy now */
}
{
  /*   </a> */
}
{
  /*   <a */
}
{
  /*     className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]" */
}
{
  /*     href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" */
}
{
  /*     target="_blank" */
}
{
  /*     rel="noopener noreferrer" */
}
{
  /*   > */
}
{
  /*     Read our docs */
}
{
  /*   </a> */
}
{
  /* </div> */
}
