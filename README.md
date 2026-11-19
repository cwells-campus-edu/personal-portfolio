# Personal Portfolio - Accessible & Designed

## Accessibility Fixes (WAVE & WCAG AA)
* **Color Contrast Refinement:** Darkened the accent borders from `#d97706` to `#92400e` and card borders to `#64748b` so all text, links, buttons, and borders pass WCAG AA contrast standards verified with the WebAIM Contrast Checker.
* **Semantic Landmarks & Navigation:** Added `<header>`, `<nav>`, `<main>`, and `<section>` landmarks across all three pages (`index.html`, `projects.html`, and `about.html`) to eliminate WAVE structural warnings.
* **Image Alt Text:** Verified that every `<img>` element across all pages includes descriptive `alt` attributes so screen readers announce visual content clearly.
* **Accessible Contact Form:** Built the contact form on `about.html` with explicit `<label for="...">` associations, `<fieldset>` and `<legend>` groupings, and live `aria-invalid` / `aria-describedby` error messages.

## Intentional Visual Design & Gestalt Principles
* **Gestalt Principle 1 — Proximity:** Grouped related headings, images, and descriptions inside unified `.project-card` containers with generous internal padding (`24px`) and external spacing (`30px`) so each section reads as one clear visual unit.
* **Gestalt Principle 2 — Similarity:** Applied a consistent color palette (`#11f06a` background, `#0f172a` midnight blue headings/buttons, `#92400e` deep amber accents, and `#ffffff` cards) along with matching rounded corners (`6px`) across all three pages.
