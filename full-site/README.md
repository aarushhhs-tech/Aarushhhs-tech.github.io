# Aarush Sharma — Portfolio

Built with [Astro](https://astro.build). All content lives in `src/data/resume.ts`.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy to GitHub Pages

1. Push this folder to a GitHub repo (branch `main`).
2. In `astro.config.mjs`, set `site` to `https://<username>.github.io` and `base`:
   - repo named `<username>.github.io` → `base: '/'`
   - any other repo name → `base: '/<repo-name>'`
3. In the repo: **Settings → Pages → Source: GitHub Actions**.
4. Push — `.github/workflows/deploy.yml` builds and publishes automatically.

The résumé PDF is served from `public/Aarush_Sharma_Resume.pdf`.
