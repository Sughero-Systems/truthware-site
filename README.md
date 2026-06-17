# Truthware — Website Scaffold

A plain HTML/CSS/JS starting point for the Truthware site. No build step, no
framework — just open it in VS Code and go. This is intentionally a
**structural** pass: pages, navigation, and a basic style system are in
place, but the colours and fonts are placeholders, ready to be swapped once
Catherine's team sends through their website examples and colour picks.

## Folder structure

```
truthware-site/
├── index.html        Home page
├── about.html         Our Story page
├── shop.html           Shop page (placeholder product grid)
├── contact.html         Contact page (Netlify Forms wired up, no backend needed)
├── css/
│   └── styles.css     All styling — design tokens (colours/fonts) live at the top
├── js/
│   └── main.js          Mobile nav toggle
├── images/             Drop real product/brand photography in here
├── netlify.toml
└── .gitignore
```

## Previewing locally in VS Code

The easiest option is the **Live Server** extension:
1. Install the "Live Server" extension from the VS Code marketplace.
2. Right-click `index.html` → "Open with Live Server".

That's it — no terminal commands needed for local preview.

## Pushing to GitHub (PowerShell)

From inside the `truthware-site` folder in your terminal:

```powershell
git init
git add .
git commit -m "Initial commit: site scaffold"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Replace the `git remote add origin ...` line with the URL of a repo you've
created on GitHub first (GitHub.com → New repository → don't initialise
with a README, since this folder already has one).

## Deploying on Netlify

1. Log in to [netlify.com](https://www.netlify.com) and choose **"Add new site" → "Import an existing project"**.
2. Connect your GitHub account and pick the Truthware repo.
3. Build settings: leave the build command blank, and set the publish
   directory to `.` (this is already set in `netlify.toml`, so Netlify
   should pick it up automatically).
4. Deploy. Netlify will give you a live URL immediately, and every future
   `git push` to `main` will auto-redeploy the site.

Once it's deployed at least once, go to the site's **Forms** tab in the
Netlify dashboard — the contact form on `contact.html` will already be
detected and start collecting submissions, no extra setup required.

## When design feedback comes in

Everything that needs to change lives in one place: the `:root` block at
the very top of `css/styles.css`. Update the hex values and font names
there and the whole site updates with them. Page structure, navigation,
and components (buttons, tags, product cards, etc.) shouldn't need to
change — just the look.

## Next steps

- [ ] Swap placeholder colours/fonts in `css/styles.css` once team feedback lands
- [ ] Replace placeholder copy throughout with final wording
- [ ] Add real product photography to `images/` and swap into `shop.html` / `index.html`
- [ ] Decide on real shop/checkout functionality (e.g. Shopify Buy Buttons, Snipcart) once you know order volume and needs
- [ ] Point a custom domain at the Netlify site once one is registered
