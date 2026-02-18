const projects = [
  {
    title: "Prosjekt 1",
    subtitle: "Frontend / UI-eksperiment",
    description:
      "Kort beskrivelse av prosjektet, hva du bygde og hvorfor. Fokus på interaksjon og leken typografi.",
    year: "2024",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://example.com/prosjekt-1",
  },
  {
    title: "Prosjekt 2",
    subtitle: "Fullstack / Case study",
    description:
      "En annen case som viser frem noe du er stolt av. Vekt på struktur, performance og DX.",
    year: "2023",
    tech: ["React", "Node.js"],
    link: "https://example.com/prosjekt-2",
  },
  {
    title: "Prosjekt 3",
    subtitle: "Linux / Ollama / tailscale experiment",
    description:
      "Jeg kjører en lokal LLM på én maskin, tilgjengelig via Tailscale. En Go-backend styrer prompt, validerer JSON og genererer MDX-filer til bloggen.",
    year: "2023",
    tech: ["Linux", "Ollama", "Tailscale", "Go", "MDX"],
    link: "https://example.com/prosjekt-3",
  },
  {
    title: "Prosjekt 4",
    subtitle: "Astro Dev Restaurant Website",
    description:
      "Website for en restaurant som jeg har bygd. Dette er en eksperiment med Astro, Tailwind CSS og Sanity.",
    year: "2026",
    tech: ["Astro", "Sanity", "Tailwind CSS"],
    link: "https://example.com/prosjekt-4",
  },
  {
    title: "Nordic Tropicana",
    subtitle: "Embedded / Backend",
    description:
      "A system for monitoring a greenhouse for growing bananas and pineapples with a esp32",
    year: "2023",
    tech: ["arduino", "C++", "thinger.io"],
    link: "https://example.com/prosjekt-5",
  },
];

const WorksPage = () => {
  return (
    <main className="grid min-h-screen grid-cols-[1fr_4fr] p-6 overflow-hidden">
      {/* Venstre kolonne – likner blog/hjem, vertikal label */}
      <section className="text-sm border-r border-foreground/50 pr-6 flex flex-col justify-between">
        <h1 className="font-sans font-bold text-xl uppercase rotate-180 [writing-mode:vertical-rl] space-y-4 tracking-[0.3em]">
          Works
        </h1>
        <p className="font-sans font-thin text-xs rotate-180 [writing-mode:vertical-rl] opacity-70">
          Utvalgte prosjekter, eksperimenter og caser.
        </p>
      </section>

      {/* Høyre kolonne – selve listen */}
      <section className="flex flex-col justify-center gap-10 pl-6">
        <header className="space-y-2">
          <p className="font-sans font-thin text-sm uppercase tracking-[0.3em]">
            Selected works
          </p>
          <p className="font-sans font-light text-lg max-w-xl text-muted">
            En uformell liste over ting jeg har bygget og lært av – fra små
            UI–eksperimenter til mer tunge caser.
          </p>
        </header>

        <ul className="space-y-6">
          {projects.map((project) => (
            <li key={project.title}>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-2 cursor-pointer"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <div className="space-y-1">
                    <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl leading-none uppercase transition mb-4 group-hover:text-rose-400 group-hover:skew-y-[-1deg] group-hover:-translate-x-2 ">
                      {project.title}
                    </h2>
                    {project.subtitle && (
                      <p className="font-sans text-xs uppercase tracking-[0.25em] text-muted">
                        {project.subtitle}
                      </p>
                    )}
                  </div>
                  {project.year && (
                    <span className="text-xl font-mono opacity-70 group-hover:opacity-100 group-hover:text-rose-400 transition">
                      {project.year}
                    </span>
                  )}
                </div>

                <p className="font-sans text-sm text-muted max-w-2xl group-hover:opacity-90">
                  {project.description}
                </p>

                {project.tech && (
                  <ul className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((t) => (
                      <li
                        key={t}
                        className="text-[10px] uppercase tracking-[0.2em] border border-foreground/40 px-3 py-1 rounded-full group-hover:border-rose-400/70 transition"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default WorksPage;
