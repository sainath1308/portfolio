# Portfolio — Epallapally Sainath Reddy

A static, dependency-free portfolio site (plain HTML/CSS/JS).

## Files
- `index.html` — page content
- `style.css` — styles
- `script.js` — mobile nav toggle + footer year
- `assets/resume.pdf` — downloadable résumé (linked from the hero button)

## Run locally
Just open `index.html` in a browser, or serve it:
```
npx serve .
```

## Deploy to Vercel
1. Push this folder to a new GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Framework preset: "Other" (no build step needed) — leave build command empty, output directory as root.
4. Deploy.

## Deploy to GitHub Pages (alternative)
1. Push to GitHub.
2. Repo Settings → Pages → Deploy from branch → `main` / root.

## To edit later
- Update your résumé PDF: replace `assets/resume.pdf` with the new file (keep the same filename).
- Colors and fonts are defined as CSS variables at the top of `style.css` under `:root`.
