# Taaseen Khan — Portfolio

A fast, responsive single-page portfolio built with **Vite + React + TypeScript**. Dark, minimal design with a toggleable robot buddy that walks down the right edge of the screen as you scroll.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Where everything lives

All content is data-driven — you should rarely need to touch a component.

| File | What it controls |
|---|---|
| `src/data/profile.ts` | Name, email, **GitHub/LinkedIn URLs**, tagline, about paragraphs |
| `src/data/experience.ts` | Jobs shown in the tabbed Experience section |
| `src/data/projects.ts` | Project cards (add new projects here) |
| `src/data/skills.ts` | Skill groups and chips |
| `public/resume.pdf` | The resume the site links to — replace this file to update it |

> **First thing to do:** open `src/data/profile.ts` and confirm the `github` and `linkedin` URLs match your actual profiles, and update the placeholder project links in `src/data/projects.ts`.

### Adding a project

Append an object to the array in `src/data/projects.ts`:

```ts
{
  title: "My New App",
  period: "2026",
  description: "One or two sentences about what it does and why it's interesting.",
  stack: ["Next.js", "PostgreSQL"],
  live: "https://mynewapp.com",        // optional — shows the external-link icon
  github: "https://github.com/...",    // optional — shows the GitHub icon
  featured: true,                       // optional — spans the full row
}
```

The grid re-renders automatically; no other changes needed.

## Contact form

Out of the box, "send message" opens the visitor's email app with the subject and message pre-filled (no backend required).

To deliver messages straight to your inbox instead:
1. Create a free form at [formspree.io](https://formspree.io) (50 submissions/month free).
2. Copy your endpoint (looks like `https://formspree.io/f/abcdwxyz`).
3. Paste it into `FORM_ENDPOINT` at the top of `src/components/Contact.tsx`.

## The scroll buddy

The robot in the right margin mirrors your scroll progress — its legs only move while the page is moving. Visitors can switch it off with the **buddy** toggle in the nav (the choice is remembered in `localStorage`). It hides automatically on small screens and respects `prefers-reduced-motion`.

## Deploying with a custom domain

The site is fully static, so any static host works. The easiest path:

### 1. Push to GitHub

```bash
git init && git add -A && git commit -m "Initial portfolio"
git remote add origin https://github.com/<you>/portfolio.git
git push -u origin main
```

### 2. Deploy on Vercel (recommended)

1. Go to [vercel.com](https://vercel.com), sign in with GitHub, and **Import** the repo.
2. Vercel auto-detects Vite — accept the defaults (build: `npm run build`, output: `dist`). Deploy.
3. You'll get a live `*.vercel.app` URL immediately. Every push to `main` redeploys automatically.

(Netlify and Cloudflare Pages work identically: build command `npm run build`, publish directory `dist`.)

### 3. Attach your domain (e.g. `taaseenkhan.com`)

1. Buy the domain from a registrar — Cloudflare Registrar (at-cost pricing), Namecheap, or Porkbun are good choices. `.com` runs roughly $10–12/year.
2. In Vercel: **Project → Settings → Domains → Add**, enter `taaseenkhan.com` (and `www.taaseenkhan.com`).
3. Vercel shows you the DNS records to add at your registrar — typically an `A` record for the apex pointing to Vercel's IP and a `CNAME` for `www`. Add them in your registrar's DNS panel.
4. Wait for DNS to propagate (usually minutes, up to a few hours). Vercel provisions HTTPS automatically.

That's it — the site, your resume PDF, and the contact form all work from the custom domain with zero server maintenance.
