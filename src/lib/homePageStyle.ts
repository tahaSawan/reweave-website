/**
 * Shared homepage visual language: type scale, ink/gold palette, card shells.
 * Import `home` in home-only sections to keep rhythm consistent.
 */
export const home = {
  // --- layout ---
  section: 'py-10 sm:py-12 lg:py-14',
  container: 'mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8',
  /** Narrow column (e.g. Why It Matters, some CTAs) */
  containerNarrow: 'mx-auto w-full max-w-3xl px-5 sm:px-6 lg:px-8',

  // --- light-surface type ---
  eyebrow: 'text-[11px] font-bold uppercase tracking-[0.22em] text-[#b5a48a]',
  /** Section title (non-hero) */
  h2: 'text-balance text-xl font-semibold leading-snug tracking-tight text-[#2c2c2c] sm:text-2xl',
  /** Short label under brand / card subheads */
  h3: 'text-sm font-bold leading-snug text-[#2c2c2c] sm:text-base',
  lead: 'text-sm font-medium leading-relaxed text-[#4a443c] sm:text-base',
  body: 'text-sm leading-relaxed text-[#4a443c] sm:text-[0.9375rem]',
  bodyMuted: 'text-sm leading-relaxed text-[#6b6358] sm:text-base',
  accent: 'font-semibold text-[#8f7350]',
  accentGold: 'text-[#C8A882]',
  ruleBar: 'h-px bg-[#C8A882]/70',

  // --- hero (dark) ---
  heroEyebrow: 'text-[11px] font-bold uppercase tracking-[0.22em] text-[#C8A882]',
  heroTitle:
    'text-balance text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl',
  heroLead: 'text-sm font-normal leading-relaxed text-white/90 sm:text-base',

  // --- cards (light) ---
  cardLight: 'rounded-xl border border-[#e6dfd4] bg-white p-5 shadow-sm sm:p-6',
  cardDark: 'rounded-xl border border-[#2c2c2c]/40 bg-[#1e1b18] p-5 shadow-sm sm:p-6',
  cardImperative: 'rounded-xl border border-white/10 bg-[#121212] p-5 sm:p-6',

  cardEyebrowLight: 'text-[10px] font-bold uppercase tracking-[0.2em] text-[#8f7350] sm:text-[11px]',
  cardEyebrowDark: 'text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8A882] sm:text-[11px]',
  cardTitle: 'text-sm font-bold leading-snug text-[#2c2c2c]',
  cardTitleOnDark: 'text-sm font-bold leading-snug text-white',
  cardBody: 'mt-3 text-sm leading-relaxed text-[#4a443c] sm:text-[0.9375rem]',
  cardBodyOnDark: 'mt-3 text-sm leading-relaxed text-[#c9bfb0] sm:text-[0.9375rem]',
  highlightOnDark: 'font-semibold text-[#e8d4b8]',

  cardInsetLight: 'rounded-lg border border-[#ebe4d9] bg-[#faf8f5] px-3 py-3 text-center sm:px-3.5 sm:py-3.5',
  cardInsetDark: 'rounded-lg border border-white/10 bg-white/[0.06] px-3 py-3 text-center sm:px-3.5 sm:py-3.5',

  statValue: 'text-lg font-semibold tabular-nums text-[#8f7350] sm:text-xl',
  statLabel: 'mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6b6358] sm:text-[11px]',
  statValueOnDark: 'text-lg font-semibold tabular-nums text-[#C8A882] sm:text-xl',
  statLabelOnDark: 'mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/75 sm:text-[11px]',

  // --- system shift right card ---
  shiftCard: 'rounded-xl border border-[#e0d9cf] bg-white/80 p-5 shadow-sm backdrop-blur-sm sm:p-6 lg:p-6',
  shiftKicker: 'text-xs font-medium uppercase tracking-[0.14em] text-[#2c2c2c] sm:text-sm',
  shiftTitle: 'mt-1 text-lg font-bold uppercase tracking-[0.08em] text-[#8f7350] sm:text-xl',
  shiftPillarLabel:
    'text-[10px] font-semibold uppercase leading-tight tracking-[0.08em] text-[#2c2c2c] sm:text-[11px]',

  // --- ecosystem tiles (dense grid; half step smaller than global body) ---
  ecoCardTitleLight:
    'text-balance text-xs font-semibold uppercase leading-snug tracking-[0.06em] text-[#2c2c2c] sm:text-sm',
  ecoCardTitleDark:
    'text-balance text-xs font-semibold uppercase leading-snug tracking-[0.06em] text-white sm:text-sm',
  ecoCardBodyLight: 'text-xs leading-relaxed text-[#4a443c] sm:text-sm sm:leading-relaxed',
  ecoCardBodyDark: 'text-xs leading-relaxed text-white/88 sm:text-sm sm:leading-relaxed',
  ecoCardShellLight:
    'rounded-xl border border-[#e8dcc6] bg-white px-3.5 py-3.5 shadow-sm transition-shadow duration-200 hover:shadow-md sm:px-4 sm:py-4',
  ecoCardShellDark:
    'rounded-xl border border-[#2c2c2c]/40 bg-[#1e1b18] px-3.5 py-3.5 shadow-sm transition-shadow duration-200 hover:shadow-md sm:px-4 sm:py-4',
  ecoCardShellData:
    'rounded-xl border border-[#C8A882]/20 bg-[#141210] px-3.5 py-3.5 shadow-sm transition-shadow duration-200 hover:shadow-[0_0_0_1px_rgba(200,168,130,0.25)] sm:px-4 sm:py-4',

  // --- brand display (intro) ---
  displayBrand: 'text-xl font-light tracking-tight text-[#b5a48a] sm:text-2xl',

  // --- CTA band ---
  ctaBand: 'bg-[#1a1a1a] text-white py-12 sm:py-14',
  ctaTitle: 'text-balance text-xl font-medium leading-snug text-white sm:text-2xl',
  ctaBullet: 'text-sm font-normal text-white/80',
  ctaButton:
    'rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#1a1a1a] transition-all duration-300 hover:bg-[#C8A882] hover:text-white',

  imperativeCardTitle: 'mb-4 text-sm font-bold uppercase tracking-[0.1em] text-white',
  imperativeCardBody: 'flex-1 text-sm leading-relaxed text-white sm:text-[0.9375rem]',

  heroFeatureTitle: 'text-[11px] font-bold uppercase tracking-[0.1em] text-white',
  heroFeatureDesc: 'mt-1 text-sm leading-snug text-white/70',

  pillarBarLabel: 'text-[11px] font-semibold uppercase tracking-[0.18em] text-white sm:text-xs',

  /** Dark card — gold facts (Imperative) */
  factGold: 'font-semibold text-[#C8A882]',
  factGoldBold: 'font-bold tabular-nums text-[#C8A882]',
} as const;
