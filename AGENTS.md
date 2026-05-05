# AGENTS.md

AI agent context for the ONIONSKINSTUDIOS portfolio project.

## Project Overview

Single-page portfolio for Onionskin Studios (photography/cinematography). The entire site lives in `src/routes/index.tsx` as one React component tree. There is no CMS — images reference Google Drive file IDs directly.

## Architecture

### Route Structure

| File | Purpose |
|------|---------|
| `src/routes/__root.tsx` | HTML shell, Google Fonts link tags, page title/meta |
| `src/routes/index.tsx` | Entire portfolio page (nav, hero, gallery, about, contact) |

All other scaffold routes (`/blog`, `/resume`, `/projects`, `/contact`) still exist from the template but are not linked from the UI. They can be removed if not needed.

### Key Decisions

- **Inline styles over Tailwind utilities**: The design uses CSS custom properties (`--ink`, `--paper`, `--warm`, `--dim`) that do not map to Tailwind tokens. Inline styles were chosen for component-level control without style collisions.
- **`src/styles.css`**: Contains only Tailwind imports, the CSS custom properties, body/grain styles, and the two keyframe animations (`fadeUp`, `scrollDrop`). Component-level rules live inline.
- **Reveal on scroll**: A `useRevealOnScroll` hook wires up an `IntersectionObserver` to add `.revealed` to `.reveal` elements. The CSS for `.reveal`/`.revealed` is injected via a `<style>` tag in the component to keep it co-located.
- **Google Drive images**: All images use the pattern `https://lh3.googleusercontent.com/d/{FILE_ID}=w{WIDTH}`. File IDs are declared in two arrays at the top of `index.tsx`: `galleryImages` (masonry) and `stripImages` (horizontal scroll strip).
- **Lightbox**: Controlled via `useState` in `OnionskinHome`. Keyboard navigation (Escape, Arrow keys) is attached via `useEffect`. Clicking the backdrop closes it.
- **Drag-to-scroll strip**: Implemented with native `mousedown/mousemove/mouseup` events on a `ref` in `useEffect`. No external library.

## Directory Structure

```
src/
  routes/
    __root.tsx        # HTML shell + Google Fonts
    index.tsx         # Full portfolio page
  styles.css          # Tailwind + CSS vars + keyframes
  lib/utils.ts        # cn() helper
```

## Coding Conventions

- TypeScript strict mode (`tsconfig.json`)
- Path alias `@/` → `src/`
- Component state via React hooks only
- No global state manager
- `cn()` helper in `src/lib/utils.ts` for conditional Tailwind class merging

## Updating Content

- **Gallery images**: Edit `galleryImages` array in `src/routes/index.tsx`
- **Strip images**: Edit `stripImages` array in `src/routes/index.tsx`
- **Hero/Featured images**: Hardcoded Drive IDs in the JSX, search for `driveUrl(` calls
- **About copy**: Inline strings in the About section JSX
- **Contact links**: `href` values in the `ContactLink` array at the bottom of the page

## Development

```bash
npm run dev      # Vite dev server on :3000
npm run build    # Production build → dist/client
netlify dev      # Netlify CLI dev with edge emulation on :8888
```
