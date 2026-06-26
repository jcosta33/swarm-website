// Palette grammar:
// core = corpus identity / loop / primary action
// evidence = review proof / verified output / pass states
// greenfield = new workspace or starter-kit paths only
// brownfield = existing-project adoption paths only
// change = edits / fixes / run work / blocked or attention states
// reference = docs / manuals / command catalogs / ledgers
// muted = hardware, chrome, and non-semantic labels
// Prefer these role names over raw color aliases in new component code.
// The hue family is intentional: core starts at gold HSL(34 71% 49%),
// brownfield/change stay in the warm earth arc, greenfield/evidence split into
// field/proof greens, and reference uses a tempered teal split-complement.
// A role is more than a color: use the same role for text, lamp, rail, border,
// hatch, icon, and hover treatment so accents read as product meaning.
export const signalRoleMeta = {
  core: {
    label: "core",
    family: "identity / action",
    hex: "#D88A24",
    relationship: "base hue: HSL(34 71% 49%)",
    tone: "orangy gold",
    use: "Corpus identity, primary actions, active navigation, and current loop state.",
    surface: "solid gilt plate, active rails, and primary controls",
    pattern: "single gilt rail with a soft center glow",
    avoid: "Do not use as a generic highlight when a more specific role exists.",
    example: "Start the loop, active nav, current step.",
  },
  evidence: {
    label: "evidence",
    family: "review / proof",
    hex: "#98C873",
    relationship: "proof green: HSL(94 44% 62%)",
    tone: "proof green",
    use: "Review proof, verified output, pass states, and evidence-oriented sections.",
    surface: "checkpoint ticks, pass lamps, and review rails",
    pattern: "small checkpoint marks and vertical proof ticks",
    avoid: "Do not use for setup paths, missing evidence, existing projects, or generic 'nice' accents.",
    example: "PASS, verified output, human-reviewed evidence.",
  },
  greenfield: {
    label: "greenfield",
    family: "setup path",
    hex: "#56C978",
    relationship: "field green: HSL(138 51% 56%)",
    tone: "fresh field green",
    use: "Fresh workspace setup paths, starter kits, and first-run tutorial paths.",
    surface: "upright seed rows and clean-start setup paths",
    pattern: "upright field rows",
    avoid: "Do not use for existing-project adoption, review success, or generic positive emphasis.",
    example: "New repo, starter kit, first-run tutorial.",
  },
  brownfield: {
    label: "brownfield",
    family: "setup path",
    hex: "#B87D56",
    relationship: "earth analogue: HSL(24 41% 53%)",
    tone: "brownfield earth",
    use: "Existing-project adoption, migration, and repo-history paths only.",
    surface: "diagonal survey hatching and adoption plates",
    pattern: "diagonal survey hatching",
    avoid: "Do not use for new work, success, warnings, or generic warmth.",
    example: "Existing project, adopting guide, repo with history.",
  },
  change: {
    label: "change",
    family: "work / attention",
    hex: "#CE7058",
    relationship: "red-clay analogue: HSL(12 55% 58%)",
    tone: "red clay",
    use: "Edits, fixes, run work, blocked states, and attention markers.",
    surface: "angled change hatching and work-in-progress rails",
    pattern: "angled change hatching",
    avoid: "Do not use for normal navigation or reference material.",
    example: "Change plans, run work, blocked, unverified, needs attention.",
  },
  reference: {
    label: "reference",
    family: "manual / catalog",
    hex: "#75BDAE",
    relationship: "tempered split-complement: HSL(167 35% 60%)",
    tone: "verdigris ledger",
    use: "Docs, manuals, command catalogs, ledgers, and index surfaces.",
    surface: "ledger rules, source notes, and reference shelves",
    pattern: "horizontal ledger rules",
    avoid: "Do not use for proof/pass states or primary calls to action.",
    example: "Docs source notes, CLI command catalog, manuals.",
  },
  muted: {
    label: "muted",
    family: "hardware / neutral",
    hex: "#BF7927",
    relationship: "aged brass analogue: HSL(32 66% 45%)",
    tone: "aged brass",
    use: "Hardware chrome, low-emphasis labels, and neutral UI detail.",
    surface: "screws, rulers, low-emphasis counters, and chassis trim",
    pattern: "quiet brass ruler marks",
    avoid: "Do not use when the color carries product meaning.",
    example: "Panel labels, screws, rails, low-emphasis counters.",
  },
} as const;

export const signalRoles = {
  core: {
    text: "text-signal-core",
    hex: "core",
    sectionKicker: "section-kicker-core",
    processItem: "process-item-signal-core",
    accentCard: "accent-card-core",
    hoverBorder: "hover-border-signal-core",
  },
  evidence: {
    text: "text-signal-evidence",
    hex: "evidence",
    sectionKicker: "section-kicker-evidence",
    processItem: "process-item-signal-evidence",
    accentCard: "accent-card-evidence",
    hoverBorder: "hover-border-signal-evidence",
  },
  greenfield: {
    text: "text-signal-greenfield",
    hex: "greenfield",
    sectionKicker: "section-kicker-greenfield",
    processItem: "process-item-signal-greenfield",
    accentCard: "accent-card-greenfield",
    hoverBorder: "hover-border-signal-greenfield",
  },
  brownfield: {
    text: "text-signal-brownfield",
    hex: "brownfield",
    sectionKicker: "section-kicker-brownfield",
    processItem: "process-item-signal-brownfield",
    accentCard: "accent-card-brownfield",
    hoverBorder: "hover-border-signal-brownfield",
  },
  change: {
    text: "text-signal-change",
    hex: "change",
    sectionKicker: "section-kicker-change",
    processItem: "process-item-signal-change",
    accentCard: "accent-card-change",
    hoverBorder: "hover-border-signal-change",
  },
  reference: {
    text: "text-signal-reference",
    hex: "reference",
    sectionKicker: "section-kicker-reference",
    processItem: "process-item-signal-reference",
    accentCard: "accent-card-reference",
    hoverBorder: "hover-border-signal-reference",
  },
  muted: {
    text: "text-signal-muted",
    hex: "muted",
    sectionKicker: "section-kicker-muted",
    processItem: "process-item-signal-muted",
    accentCard: "accent-card-muted",
    hoverBorder: "hover-border-signal-muted",
  },
} as const;

export type SignalRole = keyof typeof signalRoles;

export type SignalAlias = "yellow" | "gold" | "green" | "orange" | "olive" | "brass";

export type SignalInput = SignalRole | SignalAlias;

const aliases = {
  yellow: "core",
  gold: "core",
  green: "evidence",
  orange: "change",
  olive: "reference",
  brass: "muted",
} as const satisfies Record<SignalAlias, SignalRole>;

function isSignalAlias(signal: SignalInput): signal is SignalAlias {
  return signal in aliases;
}

export function normalizeSignalRole(signal: SignalInput): SignalRole {
  return isSignalAlias(signal) ? aliases[signal] : signal;
}
