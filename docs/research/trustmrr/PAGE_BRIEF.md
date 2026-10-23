# trustmrr.com home page

Source: https://trustmrr.com/ (Next.js + Tailwind v4 + shadcn, Inconsolata). Captured 2026-10-23.

## Route map
| Source | Local | Files |
|---|---|---|
| `/` | `/` | `src/app/page.tsx`, `src/components/sites/trustmrr/*` |
| every other pathname (`/startup/*`, `/acquire`, `/feed`, ...) | not cloned, links go to `https://trustmrr.com<path>` | `links.ts` |

## Sections (top to bottom)
Fixed sponsor rails (>= lg, 16.666% wide, 5 rows) - hero + search - "Recently listed" / "Best deals" strips (220px cards, horizontal scroll) - leaderboard card (50 rows; the DataFast analytics iframe sits between rows 25 and 26 on md+; one 50-row table below md) - "What's happening?" tweet feed (CSS columns 1/2/3) - closing CTA - category chips - footer - fixed newsletter popup.

## Layout and type
Page background `muted`; `main` and footer sit in `lg:mx-[16.666%]`; content `container max-w-5xl px-4` (960px at 1440). Inconsolata variable, base 16px, h1 48px/700 (md), table text 14px.

## Evidence
`docs/design-references/trustmrr/`: `desktop-full.png`, `mobile-full.png` (source), `local-*.png` (clone), `cmp-*.png` (side-by-side), `data.json`/`flags.json`/`more.json` (extracted content), `asset-map.json` (source URL -> local path). Assets are fetched by `scripts/download-trustmrr-assets.mjs`.

## Known gaps
- Sponsor rail picks are random per load on the source; the clone pins the set seen in the reference capture.
- Leaderboard "Show more", "Add startup", search, tweet like/reply/share and the "Sort by" select are not wired to the backend; they link to the live site or are inert (see README of the delivery message).
- Newsletter form acknowledges locally and sends nothing.
- Only the first 50 leaderboard rows and 10 feed items captured at the time are included.
