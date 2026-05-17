# Chris Randall — Developer Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/46648482-644c-4c80-bafb-872057e51b6b/deploy-status)](https://app.netlify.com/sites/next-dev-starter/deploys)

Personal portfolio and developer site for Chris Randall, built with Next.js 14 and deployed on Netlify.

**Live site:** [chrisrandall.dev](https://www.chrisrandall.dev)

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **UI:** React 18, MUI v5, styled-components v6
- **Styling:** SCSS Modules, Tailwind CSS, Framer Motion
- **Fonts:** next/font/google (Poppins, Playfair Display, Barlow Semi Condensed, Roboto, Inter)
- **Deploy:** Netlify

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, selected work, about |
| `/resume` | Resume / experience |
| `/projects` | Full project list |

---

## Local Development

### Prerequisites

This project requires **Node.js 20 LTS**. It will not run correctly on Node 21.0.0 due to a known incompatibility between that version and the Dart-compiled Sass binary.

If you don't have `nvm`:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Then close and reopen your terminal.

### Setup

```bash
git clone <repo-url>
cd randall-dev-portfolio
nvm install        # installs Node 20 from .nvmrc
nvm use
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Start production server locally |

---

## Project Structure

```
app/
  layout.js           # Root layout, fonts, global metadata
  page.js             # Home page
  resume/page.js      # Resume page
  projects/page.js    # Projects page
components/
  NavBar.js           # Sticky nav with mobile hamburger menu
  Footer.js           # Footer with links
  Logo.js             # SVG logo mark
  Image.js            # next/image wrapper with aspect ratio helpers
  Text.js             # styled-components text span
  Input.js            # styled-components labeled input
styles/
  globals.scss        # Global styles
  _navbar.scss        # Nav styles (also imported globally)
  _homepage.scss      # Home page partials
  _projects.scss      # Projects page partials
public/
  favicon.svg
  grad.svg            # Hero background gradient
```

**Path aliases** (configured in `jsconfig.json`):
- `@components/*` → `components/*`
- `@styles/*` → `styles/*`

---

## Deployment

Deploys automatically to Netlify on push to `main`.

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"
```
