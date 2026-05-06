import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactPage = () => {
  return (
    <main className="grid min-h-screen grid-cols-[1fr_4fr] p-6">
      <section className="text-sm border-r border-foreground/50 pr-6">
        <h1 className="font-sans font-bold text-xl uppercase rotate-180 [writing-mode:vertical-rl]">
          Contact
        </h1>
      </section>

      <section className="flex flex-col gap-10 pl-6 py-6 max-w-xl">

        <div className="space-y-2">
          <p className="text-xs font-mono text-muted uppercase tracking-wider">Ta kontakt</p>
          <p className="font-sans font-light text-base leading-relaxed">
            Beste måte å nå meg på er telefon eller LinkedIn.
            Jeg svarer som regel raskt.
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-xs font-mono text-muted uppercase tracking-wider">Telefon</p>
            <a
              href="tel:+4791579958"
              className="font-sans font-bold text-2xl hover:text-accent transition-colors"
            >
              +47 915 79 958
            </a>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-mono text-muted uppercase tracking-wider">GitHub</p>
            <Link
              href="https://github.com/aleksejunas"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-sans font-light text-lg hover:text-accent transition-colors"
            >
              <FaGithub size={20} />
              aleksejunas
            </Link>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-mono text-muted uppercase tracking-wider">LinkedIn</p>
            <Link
              href="https://linkedin.com/in/rolfdeveloper/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-sans font-light text-lg hover:text-accent transition-colors"
            >
              <FaLinkedin size={20} />
              rolfdeveloper
            </Link>
          </div>
        </div>

      </section>
    </main>
  );
};

export default ContactPage;
