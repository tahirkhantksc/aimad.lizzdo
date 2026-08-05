# Aimad | Premium Personal Portfolio

This repository contains the source code for Aimad's premium personal portfolio, built with React, Vite, Tailwind CSS, and DK (Decap) CMS.

## Features
- **Static Site Generation**: Extremely fast, built with Vite and React.
- **DK (Decap) CMS**: Content management without touching code.
- **SEO Optimized**: Meta tags, robots.txt, sitemap.xml included.
- **Cloudflare & GitHub Pages Ready**: Complete deployment workflow configured.

## DK CMS Setup Guide
1. Push this repository to your GitHub account.
2. Go to [Decap CMS](https://decapcms.org/).
3. Set up OAuth in your GitHub Developer Settings to allow Netlify or your own OAuth provider to authenticate users for CMS access.
4. Update `public/admin/config.yml` with your exact repository name (`your-username/your-repo`).
5. Access the CMS at `https://aimad.lizzdo.com/admin/`.

## GitHub Pages Deployment
A GitHub Actions workflow is included at `.github/workflows/deploy.yml`. 
1. Go to your repository settings on GitHub.
2. Under "Pages", set the source to "GitHub Actions".
3. Any push to the `main` branch will automatically deploy the site.

## Cloudflare Configuration
1. Point your domain (`aimad.lizzdo.com`) to GitHub Pages via CNAME.
2. In Cloudflare, enable:
   - Full (Strict) SSL
   - Auto Minify (HTML, CSS, JS)
   - Brotli compression
   - Cache Everything (with Page Rules for assets)

## Development
```bash
npm install
npm run dev
```

## Folder Structure
- `public/`: Static assets, Decap CMS config, 404 fallback, SEO files.
- `src/`: React source code (components, pages, layouts, styles).
- `src/content/`: Where Decap CMS will save markdown files.
- `.github/`: GitHub Actions workflows for CI/CD.
