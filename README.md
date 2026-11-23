# Cairno Labs — Official Website (`cairnolabs.com`)

Static marketing, trust, and legal portal for **Cairno Labs**, built with **Next.js (Static Export)**, **React**, and **Chakra UI v3**, deployed automatically to **GitHub Pages**.

## Highlights
- **Custom Theme ("Nordic Limestone & Volcanic Basalt"):** Non-generic Chakra UI v3 design system driven by native CSS custom properties.
- **Light Mode Default + Functional Cookie Dark Mode:** Appearance preference is stored exclusively in a single functional cookie (`cairno_theme=light|dark`), with zero third-party analytics or tracking.
- **Atlassian Marketplace Ready:** Static `/privacy/`, `/terms/`, and `/security/` routes included for automated compliance verification.

## Local Development
```bash
npm install
npm run dev
```

## Static Production Build (GitHub Pages)
```bash
npm run typecheck
npm run lint
npm run build
```
The static bundle is emitted to `out/` and deployed via `.github/workflows/deploy.yml`.
