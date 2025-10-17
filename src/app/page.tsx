"use client";
import Link from "next/link";
import EnterAnimation from "@/components/motion/EnterAnimation";
import AnimatedIconLink from "@/components/motion/AnimatedIconsLink";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
    <main className="grid min-h-screen grid-cols-[1fr_1fr] bg-background text-[#111] dark:bg-background dark:text-[#ECE7E1] overflow-hidden">
      {/* Left column */}
      <section className="flex flex-col justify-between p-6 text-sm">
        {/* <div className="rotate-180 [writing-mode:vertical-rl] space-y-4"> */}
        <div className="flex flex-col  gap-4">
          {/* TODO: Add animation that spins the link text from vertical to horizontal position on hover */}
          <AnimatedIconLink
            href="https://github.com/aleksejunas"
            label="GH"
            Icon={FaGithub}
            animationDuration="0.7s"
            iconSize={40}
            width="2.5em"
            height="2.5em"
          />
          <AnimatedIconLink
            href="https://linkedin.com/in/rolfdeveloper/"
            label="LI"
            Icon={FaLinkedin}
            animationDuration="0.7s"
            iconSize={40}
            width="2.5em"
            height="2.5em"
          />
        </div>
        <div>
          {myName.map((part, idx) => (
            <p key={idx} className="font-sans font-thin text-xl">
              {part}
            </p>
          ))}
          <p className="font-semibold font-sans">Developer / Photographer</p>
          <br />
          <p className="font-sans ">+4791579958</p>
          <br />
          Currently working on
          <div>
            <a
              href="https://github.com/aleksejunas/aleksejunas-dot-no"
              className="underline hover:opacity-70 hover:text-rose-400 transition focus:outline-none"
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
              className="font-sans font-bold text-4xl sm:text-5xl lg:text-9xl leading-none uppercase transition hover:text-rose-400 focus:outline-none"
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
