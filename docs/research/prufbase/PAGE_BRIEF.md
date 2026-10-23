# Prufbase landing (built on the trustmrr.com clone)

Source of truth for copy and brand: the project export "Prufbase — полный экспорт проекта" (sections 4, 8, 10).
The first commit of this branch holds the pixel clone of trustmrr.com; the landing reuses its page skeleton and
swaps brand, copy, data and tokens.

## Clone block -> Prufbase block
| trustmrr.com | Prufbase |
|---|---|
| Sponsor rails (fixed, 5 rows each side) | "Место для спонсора" slots (sponsor spot is a P1 ad-on) |
| Hero + search + Add startup | "Пруф вместо скриншота" + waitlist form (`/api/waitlist`) |
| Recently listed / Best deals strips | "Недавно подтверждены" / "Продаются" (demo projects) |
| Leaderboard + DataFast iframe | Catalog table (MRR, 12-month sparkline, growth) + project profile preview with badge snippet |
| "What's happening?" feed | Problem + "Как работает" (3 steps, feature roadmap) |
| Closing CTA (Buffett) | Waitlist CTA |
| Category chips | Payment providers by stage (ЮKassa/CloudPayments -> Robokassa/Prodamus -> Т-Kassa/Open Banking) |
| Footer, theme toggle | Footer with anchors, dark/light toggle |
| Newsletter popup | Removed (waitlist form replaces it) |
| New | Security ("Ключ только читает"), audiences, FAQ |

## Design system (export section 4)
Dark home theme `#0B0C0E`, light guest theme, single amber accent `#F0A34E` (dark ink `#9A5806` for amber text on light),
Inter for UI + JetBrains Mono for numbers (tabular figures), wordmark `Prufbase/` with an amber slash, radii <= 12px, no shadows.

## Data
All projects, founders and figures in the catalog and cards are DEMO DATA (labelled in the UI): `src/components/sites/prufbase/data.ts`.
The security and provider statements come from the export; "open-sourcing the connector" is phrased as a plan.

## Open points
- `/api/waitlist` appends to `.data/waitlist.jsonl` (git-ignored). Replace with a database/mail service before deploying to serverless hosting.
- Badge format and embed code are illustrative (open question in the PRD).
- No privacy policy / terms pages yet, so the footer does not link to them.

## Theme borrowed from linear.app (second pass)
Only theme, type, colour and motion were taken; layout, copy and component positions are unchanged.
Evidence: `docs/design-references/linear/` (`info.json` = computed styles, CSS variables, keyframes, font URLs).

| Aspect | Taken from Linear | Where |
|---|---|---|
| Canvas / panels | `#08090a` / `#0f1011`, hairlines `#ffffff14`, text `#f7f8f8` / `#8a8f98` | `.dark` tokens in `globals.css` |
| Brand | indigo `#5e6ad2`, accent text `#828fff`, focus ring `#7170ff` (replaces the amber from the project export) | `--primary`, `--brand-ink` |
| Font | Inter Variable (same OFL file Linear serves) with `cv01`, `ss03`; weights 510 / 590 | `src/app/fonts`, `--font-weight-*` |
| Type | h1 64px / 510 / -0.022em, headings 48px, body 15px | `hero.tsx`, `section-heading.tsx` |
| Buttons | pill CTA `#e5e5e6` -> `#fff` on hover, 5-layer shadow, 160ms `cubic-bezier(.25,.46,.45,.94)` | `waitlist-form.tsx`, `--default-transition-*` |
| Hero motion | words blur(10px)+translateY(20%) -> 0, 1s `cubic-bezier(.25,.1,.25,1)`, 33ms stagger, 400ms delay | `split-text.tsx`, `reveal-word` |
| Section motion | soft blur-in tied to scroll (`animation-timeline: view()`, progressive enhancement) | `.reveal` |

Not copied: Berkeley Mono and Tiempos (commercial fonts; numbers keep JetBrains Mono) and Linear's fixed glass header (this page has no header).
To get the amber accent back, set `--primary`, `--ring`, `--chart-1` and `--brand-ink` in `globals.css`.
