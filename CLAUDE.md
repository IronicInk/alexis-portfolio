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

Vanilla HTML / CSS / JS — no frameworks, no dependencies, no package manager. Google Fonts loaded via CDN. Intended to deploy on GitHub Pages (push to `main`, enable Pages in repo settings).

## Architecture

The site is a single HTML file acting as a two-page SPA. Navigation works by toggling the `is-active` class on `.page` elements — there is no URL routing, no history API. Two pages exist in the DOM at all times: `[data-page="home"]` and `[data-page="project"]`.

**Client-side routing** (`main.js`): any element with a `data-nav` attribute triggers `navigate()` on click. When navigating to `data-nav="project"`, JavaScript reads `data-project` to look up the project in the `projects` object and injects all content into the case study template via `data-field` attributes. This means there is only one case study template in the HTML — all six projects share it.

**Adding a new project** requires two steps:
1. Add an entry to the `projects` object in `main.js` with the correct `next`/`nextTitle` chain.
2. Add a `<button class="card">` in `index.html` inside the appropriate `#cards-featured` or `#cards-additional` container, with `data-nav="project"` and `data-project="your-key"`.

## CSS system

All design tokens are CSS custom properties in `:root` at the top of `styles.css` — colors, spacing scale, fonts, easing curves, and durations. Change those to retheme the whole site.

The `.cards` container supports two layout modes controlled by the `data-view` attribute (`"list"` or `"card"`). CSS selectors `.cards[data-view="list"]` and `.cards[data-view="card"]` handle the two layouts entirely; the JS `setView()` function only toggles the attribute and the toggle button state.

## Placeholder content to replace

- **Images**: currently Unsplash URLs. Search for `unsplash.com` in `index.html` and `main.js` to find all occurrences.
- **Email**: `hello@alexisbojorquez.com` — search and replace everywhere.
- **Resume**: the download link points to `/resume.pdf`; drop the file at `assets/resume.pdf` and update the `href`.
- **Avatar**: the `.hero__avatar` div shows "AB" initials; swap for an `<img>` tag to use a real photo.
- **LinkedIn/Dribbble**: footer links are bare `href="#"` placeholders.

## Contact form

The form uses `e.preventDefault()` and shows a fake success state — it does not send anything. To wire it up:
- **Formspree**: add `action="https://formspree.io/f/YOUR-ID" method="POST"` to the `<form>` and remove the `e.preventDefault()` in `main.js`.
- **Netlify Forms**: add the `netlify` attribute to the `<form>` tag.
