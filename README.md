# Alexis Bojorquez — Portfolio

A minimalist, responsive portfolio website for a UX/UI & Visual Designer.

**Live site:** _Add your URL once GitHub Pages is enabled_

---

## Stack

- Vanilla HTML / CSS / JS — no frameworks, no build step
- Google Fonts (Roboto + Roboto Mono)
- Hosted on GitHub Pages

## Structure

```
alexis-portfolio/
├── index.html          ← Main page (home + case studies + contact)
├── css/
│   └── styles.css      ← All styles, design tokens, responsive rules
├── js/
│   └── main.js         ← Nav routing, word rotator, form, view toggle
├── assets/             ← Images, resume.pdf, favicon (add your own)
└── README.md
```

## Local development

No build step. Just open `index.html` in a browser, or run a tiny local server for live-reload behavior:

```bash
# Python (already on Mac/most Linux)
python3 -m http.server 8000
# Then visit http://localhost:8000

# Or with Node (if you have it)
npx serve
```

In **VS Code**, the easiest workflow is the "Live Server" extension by Ritwick Dey — right-click `index.html` → "Open with Live Server" and it auto-reloads on save.

## Editing

- **Content (text/projects)**: edit `index.html` directly. Project metadata for case study pages lives in the `projects` object inside `js/main.js`.
- **Design tokens (colors, spacing, fonts)**: top of `css/styles.css` — all CSS custom properties live in `:root`.
- **Hero rotating words**: edit the `words` array in `js/main.js`.

## Replacing placeholder content

1. **Project images** — currently using Unsplash URLs. Drop your real screenshots into `assets/` and update the `src` attributes in `index.html` (search for `unsplash.com`).
2. **Resume** — drop your resume as `assets/resume.pdf` and update the download link in the Contact section (search for `/resume.pdf` and change to `assets/resume.pdf`).
3. **Avatar** — currently shows "AB" initials with a gradient. Replace by editing the `.hero__avatar` markup in `index.html` to use an `<img>`.
4. **Email** — replace `hello@alexisbojorquez.com` everywhere (search & replace).
5. **LinkedIn** — update the URL in the contact section and footer.

## Contact form

The form currently shows a fake success state — it does not actually send emails. Easy options:

- **Formspree** (formspree.io): sign up free, get an endpoint, add `action="https://formspree.io/f/YOUR-ID"` and `method="POST"` to the `<form>`, then remove the `e.preventDefault()` line in `main.js`.
- **Netlify Forms**: if hosting on Netlify, add `netlify` as an attribute on the `<form>` tag.

## Deploy to GitHub Pages

1. Push to GitHub (`git push origin main`).
2. In the repo on github.com: **Settings → Pages → Source: Deploy from a branch → main / (root)**.
3. Wait ~60 seconds. Your site goes live at `https://<username>.github.io/<repo-name>/`.
4. Add a custom domain (optional): set it in the same Pages settings panel, and add DNS records at your registrar.

## License

Personal portfolio — feel free to fork as a reference for your own work, but please replace all content.
