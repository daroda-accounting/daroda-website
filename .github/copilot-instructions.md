# Copilot Instructions

## Project Context

This repository is for the Daroda Accounting website migration project.

The goal is to recreate the current Wix site as closely as possible in a new React + Vite codebase, while preserving the existing visual design, layout structure, CTA flow, and overall user experience.

This is a **high-fidelity UI clone first**, not a redesign.

## Source of Truth

When generating or modifying code, prefer these files in `/docs/agent-brief/`:

- `project-overview.md`
- `routes-and-pages.md`
- `content-outline.md`
- `design-direction.md`
- `technical-constraints.md`
- `ui-clone-instructions.md`

Also use the screenshots in:

- `/docs/agent-brief/visual-reference/`

And any page-specific source inventory files in:

- `/docs/agent-brief/page-source/`

## Primary Priorities

1. Preserve the current Wix site’s UI/UX structure as closely as possible
2. Produce visible browser progress quickly
3. Keep code clean, component-based, and maintainable
4. Avoid introducing unnecessary complexity
5. Preserve flexibility for future CMS/CRM integrations

## What to Optimize For

- visual fidelity
- reusable components
- clean routing
- responsive layout
- maintainable file structure
- simple, readable code

## What NOT to Do

- Do not redesign the site
- Do not invent new sections or flows
- Do not simplify the structure unless explicitly instructed
- Do not add backend, CRM, admin, or auth functionality yet
- Do not add unnecessary libraries unless clearly justified
- Do not over-engineer abstractions early

## Current Technical Direction

- React
- Vite
- Component-based page structure
- Public marketing site first
- Calendly remains external for now
- CRM/admin features are future work, not current scaffold work

## Implementation Guidance

- Start with layout, routing, and reusable page sections
- Build the homepage first
- Match screenshot section order and hierarchy closely
- Use placeholder content only when exact content is unclear
- Prefer reusable components for repeated patterns such as:
  - section headers
  - CTA sections
  - image/text split sections
  - testimonial sections
  - service cards
  - planner CTA sections

## If Uncertain

If a visual or content detail is unclear:
- prefer matching the screenshot structure
- use simple placeholders
- avoid inventing business logic
- preserve future editability