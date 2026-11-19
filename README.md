# Mitchelle James — Artist Website

Portfolio site for painter Mitchelle James ([@mitchyj_ev_art](https://www.instagram.com/mitchyj_ev_art/)).
Built with Next.js 16 (App Router), React 19 and Tailwind CSS 4.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Pages

- `/` — home: hero (the name with artwork tiles floating around it), About, Featured works,
  How we work (steps in `data/process.js`) and the footer
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

## Contact form

The form on the home page (`/#contact`) emails enquiries through [Resend](https://resend.com).
Add these environment variables in Vercel (Project → Settings → Environment Variables), then redeploy:

| Variable | Value |
| --- | --- |
| `RESEND_API_KEY` | API key from resend.com |
| `CONTACT_TO_EMAIL` | the inbox enquiries should go to |
| `CONTACT_FROM_EMAIL` | optional — e.g. `Website <hello@yourdomain.com>` once your domain is verified in Resend |

Until they are set, the form validates input but tells visitors to message on Instagram instead.
Replies go straight to the visitor (their email is set as reply-to).
