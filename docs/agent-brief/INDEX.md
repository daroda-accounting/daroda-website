# Agent Brief Index

## Purpose

This folder contains the source-of-truth guidance for scaffolding and cloning the Daroda Accounting website from the current Wix implementation into the new React + Vite codebase.

This project is a **high-fidelity visual clone first**, not a redesign.

The goal of the current phase is to:
- recreate the current public marketing pages as closely as practical
- prioritize visible browser progress
- preserve layout structure, CTA flow, and overall aesthetics
- keep the implementation component-based and maintainable
- avoid backend, CRM, admin, or advanced automation work for now

---

## Read Order

Please read and use these files in this order:

1. `project-overview.md`
   - high-level project purpose and business context

2. `routes-and-pages.md`
   - current and future route structure

3. `design-direction.md`
   - visual and UX goals for the clone

4. `technical-constraints.md`
   - implementation boundaries and current technical decisions

5. `ui-clone-instructions.md`
   - clone-specific behavior and expectations

6. `content-outline.md`
   - high-level page/section structure

7. `page-source/`
   - page-specific source files that define section order, assets, CTAs, and clone instructions

8. `visual-reference/desktop/`
   - desktop screenshots to use as the primary visual clone reference

9. `visual-reference/mobile-second-pass/`
   - mobile screenshots for later responsive refinement only, not first-pass desktop cloning

---

## Current Build Priority

Current priority is:

1. shared layout
2. homepage
3. remaining public pages

Do not:
- redesign
- simplify the structure unless necessary
- add CRM/admin/backend logic
- invent missing business functionality

If something is unclear:
- prefer the page-source docs first
- then the desktop screenshots
- then use simple placeholders rather than inventing behavior