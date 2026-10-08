# Web Engineering Lab — Lab 02: Semantic HTML & Accessibility Foundations

Student: **Safoora**  
Course: **Web Engineering**

---

## Overview

This project implements a semantic, accessible, and high-performance profile and consultation portal designed to meet WCAG 2.1 AA/AAA accessibility standards and achieve a **100% Lighthouse Accessibility score**.

## Project Structure

```
web-engineering-lab/
├── .gitignore
├── .prettierrc
├── .prettierignore
├── eslint.config.mjs
├── package.json
├── package-lock.json
├── README.md
├── public/
│   ├── index.html       # Accessible HTML with semantic landmarks
│   └── styles.css       # Design tokens, high-contrast states, skip-link styles
├── screenshots/
│   ├── 01_webpage_overview.png
│   ├── 02_skip_link_focused.png
│   ├── 03_form_focus_visible.png
│   └── lighthouse_accessibility_report.png
├── scripts/
│   └── verify-accessibility-and-capture.js
└── tests/
    └── accessibility.test.js  # Automated axe-core accessibility audit
```

## Accessibility & Semantic Features

1. **Accessible Skip Link**: Keyboard users can jump straight to `<main id="main-content">` with Tab + Enter.
2. **Semantic Landmarks**: Uses native `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` without redundant ARIA roles.
3. **Dynamic Navigation (`aria-current="location"`)**: Tracks which section is currently active/in view.
4. **Accessible Table**: Includes `<caption>`, structured `<thead>`/`<tbody>`, column headers `<th scope="col">`, row headers `<th scope="row">`, and standardized `<time datetime="...">` elements.
5. **Inline SVGs**:
   - Decorative dividers marked with `aria-hidden="true"`.
   - Informative Office Hours icon inside `<figure>`/`<figcaption>` with `role="img"` and `<title>`.
6. **Accessible Form**:
   - Explicitly paired `<label for="...">` and `<input id="...">` / `<textarea id="...">`.
   - `<fieldset>` and `<legend>` for inquiry category radio buttons.
   - Hint connected via `aria-describedby="email-hint"`.
   - Mandatory fields identified with `required`.
7. **Visible Focus Styles**: Prominent amber focus indicators via `:focus-visible`.
8. **Automated Audit**: 0 axe DevTools violations and 100/100 Lighthouse Accessibility score.

## Available Scripts

In the project root, you can run:

- **`npm start`**: Runs the static web server (`serve public`) at `http://localhost:3000`.
- **`npm test`**: Runs the automated axe-core accessibility test suite (`tests/accessibility.test.js`).
- **`npm run lint`**: Checks JavaScript quality and best practices with ESLint.
- **`npm run format`**: Validates code formatting with Prettier.

## Pushing to GitHub

To push this repository to GitHub for submission:

```bash
git init
git add .
git commit -m "Complete Lab 02: Semantic HTML and Accessibility Foundations"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

_(Note: `node_modules` is excluded via `.gitignore`)_
