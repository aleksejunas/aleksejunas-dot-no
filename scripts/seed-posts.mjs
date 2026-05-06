// scripts/seed-posts.mjs
// Kjør med: node scripts/seed-posts.mjs
// Krever SUPABASE_SERVICE_ROLE_KEY i .env.local

import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { resolve } from "path";

// Les .env.local manuelt
const envPath = resolve(process.cwd(), ".env.local");
const env = Object.fromEntries(
  readFileSync(envPath, "utf-8")
    .split("\n")
    .filter((l) => l && !l.startsWith("#") && l.includes("="))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    })
);

const supabaseUrl = env["NEXT_PUBLIC_SUPABASE_URL"];
const serviceRoleKey = env["SUPABASE_SERVICE_ROLE_KEY"];

if (!supabaseUrl || !serviceRoleKey) {
  console.error(
    "Mangler NEXT_PUBLIC_SUPABASE_URL eller SUPABASE_SERVICE_ROLE_KEY i .env.local"
  );
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey);

const USER_ID = "04b83d7d-4f70-4de9-b2e2-7ada8e8a0482";

const posts = [
  {
    user_id: USER_ID,
    title: "Ghost Host — lokal LLM over Tailscale",
    slug: "ghost-host-lokal-llm-over-tailscale",
    content: `# Ghost Host — lokal LLM over Tailscale

Jeg har lenge vært nysgjerrig på om det går an å kjøre en nyttig språkmodell
helt lokalt, uten å sende én eneste prompt til en ekstern server. Svaret er ja.
Og det er overraskende enkelt å få til.

## Oppsettet

Utgangspunktet er en stasjonær maskin som kjører **Ollama** med en lokal modell
— i mitt tilfelle \`qwen2.5-coder\` for kode og \`mistral\` for generell tekst.
Maskinen er alltid på, koblet til strøm og nett, og eksponert via **Tailscale**
slik at jeg kan nå den fra laptoppen eller telefonen uansett hvor jeg er.

\`\`\`bash
# Start Ollama og eksponer på Tailscale-IP
OLLAMA_HOST=0.0.0.0 ollama serve
\`\`\`

## Go-backenden

For å gjøre dette nyttig bygde jeg en liten **Go**-backend som:

1. Tar imot et prompt via HTTP
2. Sender det til Ollama
3. Validerer at svaret er gyldig JSON
4. Genererer en MDX-fil klar for bloggen

Det er ikke rakettvitenskap, men det er overraskende tilfredsstillende å se
en komplett bloggpost dukke opp i \`/posts\`-mappen etter noen sekunder —
uten at noe har forlatt hjemmenettverket.

## Hva jeg har lært

Lokale modeller er ikke like smarte som GPT-4 eller Claude. Men de er *gode nok*
for mange oppgaver, og latensen er forutsigbar. Ingen rate limits, ingen API-kostnader,
ingen bekymringer for at prompts lagres et sted.

Det er en annen følelse å jobbe med noe som fysisk befinner seg i rommet ved siden av.
`,
  },
  {
    user_id: USER_ID,
    title: "Nordic Tropicana — banan i Bergen",
    slug: "nordic-tropicana-banan-i-bergen",
    content: `# Nordic Tropicana — banan i Bergen

Jeg dyrker bananplanter og ananas på vestlandet. Det er kanskje ikke det mest
åpenbare hobbyprosjektet for en utvikler i Norge, men her er vi.

## Problemet med norsk klima

Bananplanter trenger temperaturer over 15°C for å trives, gjerne 22–28°C.
Bergen i januar byr ikke akkurat på det. Løsningen er et oppvarmet drivhus —
og siden jeg er utvikler, måtte det selvsagt ha et overvåkningssystem.

## ESP32 og sensorer

En **ESP32** med DHT22-sensor logger temperatur og luftfuktighet hvert minutt
og sender dataen til **Thinger.io**. Jeg får varsel på telefonen hvis
temperaturen faller under 18°C om natten.

\`\`\`cpp
#include <DHT.h>
#define DHTPIN 4
#define DHTTYPE DHT22
DHT dht(DHTPIN, DHTTYPE);

void loop() {
  float temp = dht.readTemperature();
  float hum  = dht.readHumidity();
  // send til thinger.io
}
\`\`\`

## Status

Bananplanten er nå 1,8 meter høy og har produsert ett knippe bananer.
De var små, litt syrlige, og fullstendig uegnet for eksport.
Men de var mine, og de vokste i Norge, og det er nok.

Ananasprosjektet er i gang. Ananasplanten tar 18–24 måneder fra stikkling til frukt.
Jeg er tålmodig.
`,
  },
  {
    user_id: USER_ID,
    title: "Hyprland — ett år etter",
    slug: "hyprland-ett-ar-etter",
    content: `# Hyprland — ett år etter

Jeg har brukt **Hyprland** som window manager i over ett år nå. Her er en ærlig
gjennomgang av hva som fungerer, hva som irriterer, og om jeg ville gjort det igjen.

## Hva er Hyprland?

Hyprland er en tiling window manager for Wayland med animasjoner og en konfigurasjon
som er lesbar for mennesker. Den er skrevet i C++ og er rask.

## Det gode

Arbeidsflaten er nøyaktig slik jeg vil ha den. Ingen rammer jeg ikke trenger,
ingen menyer jeg ikke bruker. Alt er en keybind unna.

Animasjonene er ikke bare pynt — de gir visuell feedback som faktisk hjelper
hjernen å holde styr på hvilke workspaces som er åpne.

Konfigurasjonen er tekstbasert og lever i dotfiles-repoet mitt. Ny maskin?
\`bash setup_dotfiles.sh --install\` og alt er på plass.

## Det krevende

**Screen sharing** fungerer, men krevde mer research enn det burde.
\`xdg-desktop-portal-hyprland\` må installeres og konfigureres riktig,
og rekkefølgen av \`exec-once\`-kommandoer i konfigen betyr noe.

**GTK-theming** er et eget kapittel. To systemer — gsettings og settings.ini —
må holdes i sync. Jeg har løst det med et eget script som skriver til begge.

## Ville jeg gjort det igjen?

Ja. Men jeg ville startet med en ferdig NixOS- eller Arch-konfigurasjon som
utgangspunkt i stedet for å bygge alt fra scratch. Det sparer mange kvelder.
`,
  },
  {
    user_id: USER_ID,
    title: "tmux + tmuxinator — aldri miste arbeidsøkten igjen",
    slug: "tmux-tmuxinator-aldri-miste-arbeidsokten-igjen",
    content: `# tmux + tmuxinator — aldri miste arbeidsøkten igjen

Før tmux åpnet jeg terminalen og begynte å tenke: *hvilke mapper var det igjen?
Hvilke prosesser kjørte?* Nå åpner jeg terminalen, skriver \`mux start aleksejunas\`,
og hele arbeidsøkten er tilbake på sekunder.

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

## Tips

- \`Ctrl+b d\` — detach fra økt (økt lever videre i bakgrunnen)
- \`Ctrl+b s\` — list alle aktive økter
- \`mux list\` — list alle tmuxinator-konfiger
- \`mux stop aleksejunas\` — drep hele øktoppsettet

Kombiner dette med **zsh-alias** for rask tilgang:

\`\`\`bash
alias dev="mux start aleksejunas"
\`\`\`

Én kommando, hele arbeidsøkten tilbake. Verdt de 20 minuttene det tar å sette opp.
`,
  },
  {
    user_id: USER_ID,
    title: "Dotfiles med symlinker — én kommando, ferdig oppsett",
    slug: "dotfiles-med-symlinker-en-kommando-ferdig-oppsett",
    content: `# Dotfiles med symlinker — én kommando, ferdig oppsett

Jeg har reinstallert Arch/Manjaro mange ganger. Første gang tok det tre dager
å få alt slik jeg ville ha det. Nå tar det under én time, og mesteparten er
ventetid mens pakker installeres.

Nøkkelen er dotfiles i et git-repo med symlinker.

## Strukturen

\`\`\`
~/dotfiles/
  nvim/          → ~/.config/nvim
  kitty/         → ~/.config/kitty
  hypr/          → ~/.config/hypr
  zsh-home/
    .zshrc       → ~/.zshrc
    .zshenv      → ~/.zshenv
  setup_dotfiles.sh
  packages.txt
\`\`\`

Alt som normalt ligger i \`~/.config/\` bor i \`~/dotfiles/\` og er symlinket dit.
Endringer pusher jeg til GitHub. Ny maskin: \`git clone\` og kjør setup-scriptet.

## setup_dotfiles.sh

Scriptet har tre moduser:

\`\`\`bash
bash setup_dotfiles.sh --install    # opprett alle symlinker
bash setup_dotfiles.sh --collect    # kopier eksisterende konfig inn i repo
bash setup_dotfiles.sh --diagnose   # sjekk at alt er i sync
\`\`\`

\`--install\` gjør i praksis dette for hver konfig:

\`\`\`bash
ln -sf ~/dotfiles/nvim ~/.config/nvim
ln -sf ~/dotfiles/kitty ~/.config/kitty
# osv.
\`\`\`

## packages.txt

En flat liste over alle pakker jeg vil ha installert:

\`\`\`
hyprland
kitty
neovim
lazygit
tmux
tmuxinator
yazi
\`\`\`

Installer alt med én linje:

\`\`\`bash
grep -v '^#' packages.txt | grep -v '^$' | paru -S -
\`\`\`

## Fordelen

Konfig er kode. Jeg committer endringer, ser diff i git, og kan rulle tilbake
hvis noe ødelegger oppsettet. Det er den samme arbeidsflaten som kildekode —
fordi det *er* kildekode.
`,
  },
];

async function seed() {
  console.log(`Setter inn ${posts.length} blogginnlegg...`);

  for (const post of posts) {
    const { error } = await supabase.from("posts").insert(post);
    if (error) {
      console.error(`Feil på "${post.title}":`, error.message);
    } else {
      console.log(`✓ ${post.title}`);
    }
  }

  console.log("Ferdig.");
}

seed();
