const AboutPage = () => {
  return (
    <main className="grid min-h-screen grid-cols-[1fr_4fr] p-6">
      <section className="text-sm border-r border-foreground/50 pr-6">
        <h1 className="font-sans font-bold text-xl uppercase rotate-180 [writing-mode:vertical-rl]">
          About
        </h1>
      </section>

      <section className="flex flex-col gap-10 pl-6 py-6 max-w-2xl">

        <div className="space-y-2">
          <p className="text-xs font-mono text-muted uppercase tracking-wider">Hvem</p>
          <h2 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl uppercase leading-none">
            Rolf Aleksejunas<br />Christensen
          </h2>
          <p className="font-sans font-light text-lg text-muted">
            Developer / Photographer
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-mono text-muted uppercase tracking-wider">Bakgrunn</p>
          <p className="font-sans font-light text-base leading-relaxed">
            Jeg er en utvikler med et bredt interessefelt — fra webapplikasjoner og mobilapper
            til embedded systemer og lokale LLM-eksperimenter. Jeg trives best når jeg bygger
            ting fra bunnen av og lærer underveis, gjerne i grenselandet mellom hardware og software.
          </p>
          <p className="font-sans font-light text-base leading-relaxed text-muted">
            Ved siden av koding fotograferer jeg — to disipliner som begge handler om å se
            nøye på verden og ta bevisste valg om hva man vil formidle.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-mono text-muted uppercase tracking-wider">Stack</p>
          <ul className="flex flex-wrap gap-2">
            {[
              "TypeScript", "React", "Next.js", "React Native",
              "Go", "Astro", "Tailwind CSS", "Supabase",
              "Linux", "C++", "Arduino / ESP32",
            ].map((tech) => (
              <li
                key={tech}
                className="text-[11px] uppercase tracking-wider border border-foreground/30 px-3 py-1 rounded-full"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-mono text-muted uppercase tracking-wider">Interesser</p>
          <p className="font-sans font-light text-base leading-relaxed">
            Drivhus med tropiske planter på vestlandet. Solstice-tracking og årstidsrytmer.
            Lokale språkmodeller som kjører uten internett. Fokusverktøy og Pomodoro-varianter.
            Analoge kameraer og mørkerom.
          </p>
        </div>

      </section>
    </main>
  );
};

export default AboutPage;
