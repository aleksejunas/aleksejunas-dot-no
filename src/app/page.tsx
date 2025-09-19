// import Image from "next/image";
// import Link from "next/link";

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-[1fr_3fr] bg-[#f5f2ed] text-[#111]">
      {/* Left column */}
      <section className="flex flex-col justify-between p-6 text-sm">
        <div className="rotate-180 [writing-mode:vertical-rl] space-y-4">
          <a href="https://dribbble.com">DR</a>
          <a href="https://twitter.com">TW</a>
          <a href="https://linkedin.com">LI</a>
        </div>

        <div>
          <p className="font-medium text-8xl">
            Rolf Aleksejunas Øvrum Christensen
          </p>
          <p>Developer / Photographer</p>
          <p>
            Currently working at{" "}
            <a href="#" className="underline hover:opacity-70 transition">
              Detail Technologies
            </a>
          </p>
        </div>

        <div className="rotate-180 [writing-mode:vertical-rl]">© 2024</div>
      </section>

      {/* Right column */}
      <nav className="flex flex-col justify-center gap-6 p-6">
        {["WORK", "ABOUT", "SHOP", "CONTACT"].map((item) => (
          <a
            key={item}
            href={`/${item.toLowerCase()}`}
            className="font-serif text-[clamp(2rem,8vw,8rem)] leading-none uppercase hover:opacity-70 transition"
          >
            {item}
          </a>
        ))}
      </nav>
    </main>
  );
}

{
  /* <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"> */
}
{
  /*   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"></main> */
}
{
  /*   <div className="text-center"> */
}
{
  /*     <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-6xl"> */
}
{
  /*       Welcome to my Next.js site */
}
{
  /*     </h1> */
}
{
  /*     <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"></p> */
}
{
  /*     This is a simple site to demonstrate MDX in Next.js */
}
{
  /*   </div> */
}
{
  /**/
}
// {/*   {/* Small Typography example using Tailwind Typography (.prose) */} */}
// {/*   <article className="prose dark:prose-invert max-w-none"> */}
// {/*     <h2>Typography Example</h2> */}
{
  /*     <p> */
}
{
  /*       The <code>prose</code> class applies beautiful default styles to rich */
}
{
  /*       text. It handles headings, paragraphs, lists, links, and more. */
}
{
  /*     </p> */
}
{
  /*     <ul> */
}
{
  /*       <li>Semantic HTML elements</li> */
}
{
  /*       <li> */
}
{
  /*         Inline code like <code>const x = 42;</code> */
}
{
  /*       </li> */
}
{
  /*       <li> */
}
{
  /*         Links look nice by default —{" "} */
}
{
  /*         <a href="/mdx-page">see the MDX page</a> */
}
{
  /*       </li> */
}
{
  /*     </ul> */
}
{
  /*     <blockquote> */
}
{
  /*       This blockquote demonstrates the plugin’s default quote styling. */
}
{
  /*     </blockquote> */
}
{
  /*   </article> */
}
{
  /**/
}
{
  /*   <div className="flex gap-4 items-center flex-col sm:flex-row"> */
}
{
  /*     <Link */
}
{
  /*       className="rounded-full border border-solid */
}
{
  /*   border-transparent transition-colors flex items-center */
}
{
  /*   justify-center bg-foreground text-background gap-2 */
}
{
  /*   hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm */
}
{
  /*   sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto" */
}
{
  /*       href="/mdx-page" */
}
{
  /*     > */
}
{
  /*       View MDX Page */
}
{
  /*     </Link> */
}
{
  /*   </div> */
}
{
  /* </div> */
}
