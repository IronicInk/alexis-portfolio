# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running locally

No build step — open `index.html` directly or use a local server for live-reload:

```bash
python3 -m http.server 8000
# or
npx serve
```

In VS Code, the "Live Server" extension (right-click `index.html` → "Open with Live Server") is the fastest workflow.

## Stack

Vanilla HTML / CSS / JS — no frameworks, no dependencies, no package manager. Google Fonts loaded via CDN. Deployed on GitHub Pages (push to `main`, Pages is already enabled in repo settings).

## Architecture

The site is a single HTML file acting as a two-page SPA. Navigation works by toggling the `is-active` class on `.page` elements — there is no URL routing, no history API. Two pages exist in the DOM at all times: `[data-page="home"]` and `[data-page="project"]`.

**Client-side routing** (`main.js`): any element with a `data-nav` attribute triggers `navigate()` on click. When navigating to `data-nav="project"`, JavaScript reads `data-project` to look up the project in the `projects` object and injects all content into the case study template via `data-field` attributes. This means there is only one case study template in the HTML — all projects share it.

**Adding a new project** requires two steps:
1. Add an entry to the `projects` object in `main.js` with the correct `next`/`nextTitle` chain.
2. Add a `<button class="card">` in `index.html` inside the appropriate `#cards-featured` or `#cards-additional` container, with `data-nav="project"` and `data-project="your-key"`.

**Home sections** (in order): hero (`#top`, with dot-field `<canvas>`), Work (`#work`), Approach/principles (`#approach`), About (`#about`), Contact (`#contact`, inverted panel). Nav links scrollspy against these ids.

**Project options** in `main.js`: `device: true` shows the banner as a phone screenshot on a mat (no cropping); add `solutionImage: 'url'` to show the figure in the Solution section (hidden otherwise). Optional sections `process` (+ `processLede`, `.process__step` items) and `flows` (+ `flowsLede`, `.flow` cards) appear only when defined — any `<section data-optional="key">` is hidden unless the project has that key. A `system` section (Design System, + `systemLede`) works the same way, and `researchMedia` adds figures under Research. Both take `.gallery` markup: `<figure class="shot">` (full width; add `shot--half` for two-up, `shot--tall` to center a portrait image on a 4:5 mat) with `.shot__frame > img` and a `figcaption`. Gallery images aren't cropped by CSS, so pre-crop them. Undefined fields are cleared on navigate. Section numbers come from a CSS counter and alt backgrounds are assigned in `navigate()`, so neither is hardcoded. Card thumbnails for phone screenshots use `card__media card__media--device`.

## CSS system

All design tokens are CSS custom properties in `:root` at the top of `styles.css` — colors, spacing scale, fonts, easing curves, and durations. Change those to retheme the whole site. Dark mode overrides the same tokens under `:root[data-theme="dark"]`; the inline script in `<head>` sets `data-theme` before paint (stored choice in `localStorage.theme`, else OS preference). Any new color must be added to both blocks.

Fonts: Instrument Serif (display), Instrument Sans (body), JetBrains Mono (labels).

**Inspect mode** (nav button or `G` key) overlays a 12-col grid + 8pt baseline and labels any element carrying a `data-spec="..."` attribute. Don't put `data-spec` on elements with `overflow: hidden` or that already use `::after`.

**Scroll reveal**: add `data-reveal` (optionally `style="--reveal-delay: 120ms"`) to fade an element in. Don't put it on `.card` itself (it overrides the card's hover transition) — put it on the container.

The `.cards` container supports two layout modes controlled by the `data-view` attribute (`"list"` or `"card"`). CSS selectors `.cards[data-view="list"]` and `.cards[data-view="card"]` handle the two layouts entirely; the JS `setView()` function only toggles the attribute and the toggle button state.

---

## Current project inventory (as of June 2026)

### Featured projects (`#cards-featured`)
Projects appear in this order in the grid:

| Key | Title | Card image |
|-----|-------|------------|
| `khqauth` | KHQ Authentication (lead project — wide first card) | `assets/khq-auth/cover.jpg` |
| `mythicaltracker` | Mythical Tracker | `https://ironicink.github.io/Goblin-Tracker/screenshot1.jpg` |
| `eatxplore` | ASU Events Page | `assets/asu-events/cover.jpg` (also research, design-system and mobile shots in that folder) |
| `norden` | ASU Rankings Page | Unsplash placeholder |
| `mirror` | KHQ Side Panel Update | Unsplash placeholder |

### Additional work (`#cards-additional`)

| Key | Title | Card image |
|-----|-------|------------|
| `cookfresh` | Config HQ — IVR Instances | Unsplash placeholder |
| `rei` | Storm Center 5 — Wind Icon | Unsplash placeholder |
| `upup` | MyHQ+ & EZ-PAY+ — Color Label Behavior | Unsplash placeholder |

### Next/prev chain (must stay consistent)
```
khqauth → mythicaltracker → eatxplore → norden → mirror → cookfresh → rei → upup → khqauth
```
If you add or remove a project, update BOTH the outgoing project's `next`/`nextTitle` AND the incoming project's `next`/`nextTitle` to keep the loop intact.

---

## Mythical Tracker — context

`mythicaltracker` is a real shipped product by Ironic Ink Designs LLC, not a client design project. It is the only entry in the portfolio that is both designed and developed by the owner.

- **Live app:** https://ironicink.github.io/Goblin-Tracker/
- **Google Play:** In closed testing (12 testers, 14-day requirement before production)
- **Tech:** Vanilla HTML/CSS/JS PWA, service worker offline caching, localStorage state
- **Screenshots:** Served from the Goblin-Tracker GitHub Pages repo
  - `screenshot1.jpg` = commander select screen (used as card preview)
  - `screenshot2.jpg` = game screen with Ready/Sick pools (used as case study banner)
  - Note: screenshot2 shows an older version of the header (New Game button was later moved to the hamburger menu). Update screenshots when new Play Store screenshots are taken.
- **Case study banner:** `https://ironicink.github.io/Goblin-Tracker/screenshot2.jpg`

---

## Placeholder content still to replace

- **KHQ Authentication images**: `assets/khq-auth/*.jpg` are interim Figma presentation boards (desktop + mobile on a dark mat). Sizes: `cover` 2400×1500 (16:10 — card and banner, edges get cropped), `flow-*` 1200×900 (4:3), `solution` 1600×1200 (shown 16:9). Swap in final exports at the same names/sizes.
- **Images**: `norden`, `mirror`, `cookfresh`, `rei` and `upup` still use Unsplash URLs. Search for `unsplash.com` in `index.html` and `main.js` to find all occurrences.
- **Email**: `hello@alexisbojorquez.com` — search and replace everywhere with the real contact email.
- **Resume**: download link points to `/resume.pdf`; drop the file at `assets/resume.pdf` and update the `href`.
- **Avatar**: the `.hero__avatar` div shows "AB" initials; swap for an `<img>` tag to use a real photo.
- **LinkedIn/Dribbble**: footer links are bare `href="#"` placeholders — update with real profile URLs.
- **Hero name / copy**: references "Alexis Bojorquez" — update to the real owner's name and bio.

## Contact form

The form uses `e.preventDefault()` and shows a fake success state — it does not send anything. To wire it up:
- **Formspree**: add `action="https://formspree.io/f/YOUR-ID" method="POST"` to the `<form>` and remove the `e.preventDefault()` in `main.js`.
- **Netlify Forms**: add the `netlify` attribute to the `<form>` tag.
