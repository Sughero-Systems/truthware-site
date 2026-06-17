# TruthWare — Website

A plain HTML/CSS/JS site, no build step, no framework. Rebuilt around
Kathryn's "recognition apparel" direction: quiet, architectural, text-led,
recognition before commerce.

## Folder structure

```
truthware-site/
├── index.html         Home — hero only, no products
├── collections.html    Index of named collections ("ways in," not categories)
├── flagship.html        ← worked example of a single collection page (template)
├── language.html        Index of the phrase dictionary
├── look-again.html       ← worked example of a single phrase page (template)
├── journal.html        Journal index (placeholder entries, no post pages yet)
├── about.html           Brand story + sourcing/process
├── shop.html             Product grid
├── contact.html           Netlify Forms-ready contact form
├── css/
│   └── styles.css       All styling — design tokens at the top
├── js/
│   └── main.js            Mobile nav toggle + the "signal" reveal effect
├── images/
├── netlify.toml
└── .gitignore
```

## The design system, in short

Two neutrals that invert for dark sections (**bone** background / **ink**
text, or the reverse), plus one deliberate accent color called **the
signal** — used only at moments of recognition: a word shifting colour as
you scroll past it, a phrase's headline on its own page, an active link.
Everything else stays quiet on purpose. All of this lives at the top of
`css/styles.css` — that's the one file to touch for any palette or type
change.

Type: **Fraunces** (display/headlines), **Public Sans** (body),
**IBM Plex Mono** (small architectural details — dates, specs, metadata).

The "signal reveal" effect (`js/main.js`) uses an IntersectionObserver to
shift specific words/elements from ink to the signal colour once they
scroll into view — a literal nod to "look again." It's currently used in
three places: the word "seeing" in the homepage hero, collection names on
the Collections page, and phrase names on The Language index. Add the
`reveal-signal` class to any element to extend it elsewhere; it degrades
gracefully (no animation, just the end state) for anyone with reduced
motion enabled.

## Templates to duplicate

Two page types are built as **one worked example each**, meant to be
copied for every real entry:

- **A collection page** — `flagship.html`. Duplicate it for each of the
  other five collections named on `collections.html` (Phrase Phases,
  Over / Under, Verb Traps, High Bandwidth, Kids), then link the new file
  from that row on `collections.html`.
- **A phrase / dictionary page** — `look-again.html`. Duplicate it for
  every real phrase, following the same five sections Kathryn's notes
  call for: the phrase, its collection(s), its insert card, notes, and
  related phrases. Link each one from `language.html`.

## A naming note

Kathryn's brief consistently writes the name as **TruthWare** (capital W),
so that's what's used across the logo, nav, and copy. The domain
(`truthware.me`) and file names stay lowercase since domains/files aren't
case-sensitive in practice — just flagging the visible styling choice in
case it wasn't deliberate.

## Local preview, GitHub, and Netlify

Same as before — nothing about the deployment process changes:

- **Local preview:** VS Code's Live Server extension, or `npx serve` from
  the project folder.
- **GitHub / Netlify:** the site is already live and connected — pushing
  to `main` auto-deploys. No new setup needed for this update.

## Next steps

- [ ] Write the real phrases and replace the placeholder examples throughout (Look Again., Same Picture Different Eyes, etc. are all invented placeholders)
- [ ] Duplicate `flagship.html` and `look-again.html` for the rest of the collections and phrases
- [ ] Add real photography per the brief's direction (real people, natural light, architectural — no staged lifestyle shots) to replace the flat placeholder panels
- [ ] Decide whether Journal entries get individual pages, and build that template once there's real content
- [ ] Confirm the TruthWare capitalization is intentional
