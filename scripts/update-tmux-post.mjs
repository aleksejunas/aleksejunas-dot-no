// scripts/update-tmux-post.mjs
// Kjør med: node scripts/update-tmux-post.mjs

import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { resolve } from "path";

const env = Object.fromEntries(
  readFileSync(resolve(process.cwd(), ".env.local"), "utf-8")
    .split("\n")
    .filter((l) => l && !l.startsWith("#") && l.includes("="))
    .map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; })
);

const supabase = createClient(env["NEXT_PUBLIC_SUPABASE_URL"], env["SUPABASE_SERVICE_ROLE_KEY"]);

const content = `# tmux + tmuxinator — aldri miste arbeidsøkten igjen

Med ett unntak: skriv \`tmxs\` og velg session med fzf. Men det kommer vi tilbake til.

## Hva er tmux?

**tmux** er en terminal multiplexer. Det betyr at du kan ha flere vinduer og
panel i én terminaløkt, og at øktene overlever selv om du lukker terminalen.

## Hva er tmuxinator?

**tmuxinator** er et Ruby-verktøy som lar deg definere tmux-oppsett i YAML.
Du beskriver hvilke vinduer, paneler og kommandoer du vil ha, og tmuxinator
starter alt for deg.

## Et ekte eksempel

Her er konfigen jeg bruker for dette prosjektet:

\`\`\`yaml
name: aleksejunas
root: ~/Kode/Projects/AleksejunasDotNo/aleksejunas-dot-no

windows:
  - editor:
      layout: main-vertical
      panes:
        - nvim .
        - pnpm dev
  - git:
      panes:
        - lazygit
  - shell:
      panes:
        - ""
\`\`\`

Lagre den i \`~/.config/tmuxinator/aleksejunas.yml\` og kjør:

\`\`\`bash
mux start aleksejunas
\`\`\`

Tre vinduer åpner seg: neovim + dev-server side om side, lazygit, og et tomt shell.

## tmxs — fzf-launcher for tmuxinator

Etter hvert som man samler opp flere tmuxinator-konfiger blir \`mux start <navn>\`
tungvint. Jeg lagde \`tmxs\` — et lite zsh-script som åpner en fzf-picker over
alle tilgjengelige sessions:

\`\`\`zsh
#!/usr/bin/zsh
set -euo pipefail

project="$(tmuxinator list -n | fzf || true)"
[ -z "\${project:-}" ] && exit 0

# Hvis vi ikke er inni tmux: bare start normalt
if [ -z "\${TMUX:-}" ]; then
  tmuxinator start "$project"
  exit 0
fi

current="$(tmux display-message -p '#S')"
target="$project"

# Start target-session hvis den ikke finnes (uten å attach'e/ta over)
if ! tmux has-session -t "$target" 2>/dev/null; then
  tmuxinator start "$target" --no-attach
fi

# Bytt klienten til target
tmux switch-client -t "$target"

# Drep alt annet enn target
tmux list-sessions -F '#S' | grep -vx "$target" | while read -r s; do
  tmux kill-session -t "$s" 2>/dev/null || true
done
\`\`\`

Lagre som \`~/Scripts/tmxs\`, gjør den kjørbar (\`chmod +x\`) og legg til alias:

\`\`\`bash
alias tmxs="~/Scripts/tmxs"
\`\`\`

Scriptet håndterer tre scenarioer:
- **Utenfor tmux**: starter session normalt
- **Inni tmux, session finnes**: switcher direkte
- **Inni tmux, session finnes ikke**: starter uten attach, switcher, dreper alt annet

## Tips

- \`Ctrl+b d\` — detach fra økt (økt lever videre i bakgrunnen)
- \`Ctrl+b s\` — list alle aktive økter
- \`mux list\` — list alle tmuxinator-konfiger
- \`tmxs\` — pick session med fzf og switch

Kombiner med zsh-alias for rask tilgang:

\`\`\`bash
alias dev="mux start aleksejunas"
\`\`\`

Én kommando, hele arbeidsøkten tilbake. Verdt de 20 minuttene det tar å sette opp.
`;

const { error } = await supabase
  .from("posts")
  .update({ content })
  .eq("slug", "tmux-tmuxinator-aldri-miste-arbeidsokten-igjen");

if (error) {
  console.error("Feil:", error.message);
} else {
  console.log("✓ Innlegg oppdatert");
}
