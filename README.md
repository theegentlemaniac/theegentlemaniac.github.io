# Thee Gentlemaniac — Ndumiso Maphanga

Welcome to the source for my personal portfolio website. This repo powers the static site you see at:

→ https://theegentlemaniac.github.io

A short, human-friendly summary of what you'll find here and how to run or update it.

## What's in this repo

- `index.html` — The homepage and single-page portfolio layout.
- `css/` — Stylesheets (layout, hero, sections, tech-drawer, etc.).
- `js/` — Small scripts for typing animation and scroll reveals.
- `images/` — Assets used on the site (profile image, project images, small videos).
- `Ndumiso Resume.pdf` — Downloadable resume linked from the hero section.
- `netlify.toml` — Optional Netlify config (kept for history).

## Live site

The site is live via GitHub Pages:

https://theegentlemaniac.github.io

If you don't see the latest changes right away, wait ~60–120 seconds for GitHub Pages to redeploy after a push and then hard-refresh the page (Ctrl+F5).

## Tech stack

- Plain HTML, modern CSS (variables + responsive), and vanilla JavaScript.
- Deployed with GitHub Pages (static site).

## Local development

1. Clone the repo (if needed):

```bash
git clone https://github.com/theegentlemaniac/theegentlemaniac.github.io.git
cd theegentlemaniac.github.io
```

2. Serve locally (any static server). Example with Python 3:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

Or use the built-in VS Code Live Server extension.

## Notes & tips

- Large video files in `images/` may slow down pushes; consider hosting heavy media externally (Cloudinary, S3) and using optimized video fallbacks.
- Netlify config (`netlify.toml`) is harmless here but not needed for GitHub Pages.
- The resume is included at the repo root and linked with the `download` attribute in the hero CTA.

## License

This repo contains personal work — reuse or redistribution is permitted on a case-by-case basis; contact me before reusing assets or code.

---

If you'd like, I can also:
- Add a small CONTRIBUTING.md or LICENSE
- Optimize images and move videos to an external host
- Create a minimal CI step that validates HTML/CSS

Contact: https://github.com/theegentlemaniac
