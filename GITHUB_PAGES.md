# Hosting on GitHub Pages

This site is configured to deploy to GitHub Pages at `https://be-lv.github.io/onionskinstudios/`

## Setup

1. Build the project:
   ```bash
   npm run build
   ```

2. Push to GitHub:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push
   ```

3. Enable GitHub Pages:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/docs`

Your site will be live in a few seconds!
