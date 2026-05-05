# ONIONSKINSTUDIOS

A photography and cinematography portfolio site for Onionskin Studios — a one-person visual practice based in Yenagoa, Bayelsa State, Nigeria.

## About

The site presents selected photographic work through a masonry gallery with lightbox, a horizontal drag-scroll strip of quick studies, and an about section. The aesthetic is dark, editorial, and typographically precise — film grain overlay, warm accent tones, and serif/mono type pairing.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (React 19, TanStack Router v1) |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + inline styles |
| Fonts | Cormorant Garamond, Syne Mono, Syne (Google Fonts) |
| Images | Google Drive CDN (`lh3.googleusercontent.com`) |
| Deployment | Netlify |

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:3000`. If using the Netlify CLI for edge function emulation:

```bash
netlify dev   # serves at http://localhost:8888
```

## Build

```bash
npm run build
```

Output goes to `dist/client` (configured in `netlify.toml`).

## Image Source

Gallery images are loaded from Google Drive public share links using the `lh3.googleusercontent.com/d/{id}=w{width}` pattern. To update images, replace the Drive file IDs in `src/routes/index.tsx`.
