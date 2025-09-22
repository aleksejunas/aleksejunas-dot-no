// import Image from "next/image";
import Link from "next/link";
import EnterAnimation from "@/components/motion/EnterAnimation";

const links = {
  BLOG: "/blog-page",
  WORKS: "/works-page",
  ABOUT: "/about-page",
  CONTACT: "/contact-page",
  MDX: "/mdx-page",
};

const HomePage = () => {
  const currentYear = new Date().getFullYear();
  return (
    <main className="grid min-h-screen grid-cols-[1fr_3fr] bg-[#ECE7E1] text-[#111] dark:bg-[#111] dark:text-[#ECE7E1]">
      {/* Left column */}
      <section className="flex flex-col justify-between p-6 text-sm">
        <div className="rotate-180 [writing-mode:vertical-rl] space-y-4">
          <a href="https://github.com/aleksejunas" target="_blank">
            GH
          </a>
          <a href="https://linkedin.com/rolfdeveloper" target="_blank">
            LI
          </a>
        </div>
        <div>
          <p className="font-medium text-xl">
            Rolf Aleksejunas Øvrum Christensen
          </p>
          <p>Developer / Photographer</p>
          Currently working on{" "}
          <div>
            <a
              href="https://github.com/aleksejunas/aleksejunas-dot-no"
              className="underline hover:opacity-70 transition"
            >
              <p> This very site</p>
            </a>
          </div>
        </div>
        <div className="rotate-180 [writing-mode:vertical-rl]">
          © {currentYear}
        </div>
      </section>
      {/* Right column */}
      <nav className="flex flex-col justify-center gap-6 p-6">
        {Object.entries(links).map(([text, href]) => (
          <EnterAnimation key={text}>
            {" "}
            <Link
              key={text}
              href={href}
              className="font-serif text-[clamp(2rem,38vw,10rem)] leading-none uppercase hover:text-rose-400 transition"
            >
              {" "}
              {text}
            </Link>
          </EnterAnimation>
        ))}
      </nav>
    </main>
  );
};

export default HomePage;
