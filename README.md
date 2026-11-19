# Mitchelle James — Artist Website

Portfolio site for painter Mitchelle James ([@mitchyj_ev_art](https://www.instagram.com/mitchyj_ev_art/)).
Built with Next.js 16 (App Router), React 19 and Tailwind CSS 4.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Pages

- `/` — home: the name with artwork tiles floating around it
- `/work` — all paintings; `/work/[slug]` — one page per painting
- `/info` — about, press and the "keep the gold at home" theme

## Editing content

- `data/works.js` — the paintings (titles, medium, descriptions, image paths). Titles marked
  `workingTitle: true` are placeholders until the real titles are confirmed.
- `data/site.js` — name, tagline, social links, email, press.
- Images live in `public/works/`, `public/details/` (crops used for the home tiles and
  painting pages) and `public/artist/`. The home tiles are listed in `components/HomeCanvas.js`.

To add a painting, drop the image in `public/works/` and add an entry to `data/works.js`
with its pixel `width` and `height`.
