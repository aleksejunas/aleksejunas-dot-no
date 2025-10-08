// import Image from "next/image";
import Link from "next/link";
import EnterAnimation from "@/components/motion/EnterAnimation";

const links = {
  BLOG: "/blog",
  WORKS: "/works",
  ABOUT: "/about",
  CONTACT: "/contact",
  MDX: "/mdx",
};

const HomePage = () => {
  const currentYear = new Date().getFullYear();
  const myName = ["Rolf", "Aleksejunas", "Christensen"];

  return (
    // bg-[#ECE7E1]
    <main className="grid min-h-screen grid-cols-[1fr_1fr] bg-background text-[#111] dark:bg-background dark:text-[#ECE7E1] overflow-hidden">
      {/* Left column */}
      <section className="flex flex-col justify-between p-6 text-sm">
        <div className="rotate-180 [writing-mode:vertical-rl] space-y-4">
          {/* TODO: Animate so it goes horizontal */}
          <a href="https://github.com/aleksejunas" target="_blank">
            GH
          </a>
          {/* TODO: Animate so it goes horizontal */}
          <a href="https://linkedin.com/in/rolfdeveloper/" target="_blank">
            LI
          </a>
        </div>
        <div>
          {myName.map((part, idx) => (
            <p key={idx} className="font-sans font-thin text-xl">
              {part}
            </p>
          ))}
          {/* <p className="font-sans font-semibold text-xl"> */}
          {/*   Rolf Aleksejunas Øvrum Christensen */}
          {/* </p> */}
          <p className="font-semibold font-sans">Developer / Photographer</p>
          <br />
          <p className="font-sans ">+4791579958</p>
          <br />
          Currently working on
          <div>
            <a
              href="https://github.com/aleksejunas/aleksejunas-dot-no"
              className="underline hover:opacity-70 transition"
            >
              <p className="font-sans font-light"> This very site</p>
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
          <EnterAnimation
            key={text}
            whileHover={{
              scale: 1.1,
              marginRight: "35px",
              skewY: "5deg",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              key={text}
              href={href}
              className="font-sans font-bold  text-4xl  sm:text-5xl lg:text-9xl leading-none uppercase transition hover:text-rose-400"
            >
              {text}
            </Link>
          </EnterAnimation>
        ))}
      </nav>
    </main>
  );
};

export default HomePage;
