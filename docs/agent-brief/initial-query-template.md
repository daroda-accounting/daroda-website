Please use `/docs/agent-brief/INDEX.md` as the entry point and follow the files it references in order.

Task:
Build the first real implementation of `HomePage.tsx` for the Daroda Accounting site.

Important:
- This is a high-fidelity clone of the current Wix homepage, not a redesign.
- Use the desktop screenshots in `/docs/agent-brief/visual-reference/desktop/` as the primary visual reference.
- Use the page-specific instructions in `/docs/agent-brief/page-source/homepage-source.md` as the structural source of truth.
- Use the existing assets in `/public/images`.

Requirements:
- Implement the homepage sections in the exact order defined in `homepage-source.md`
- Keep the page component-based and maintainable
- Reuse shared layout components already in place
- Match the current Wix homepage layout and styling as closely as practical
- Prioritize visible browser progress and desktop fidelity
- Use placeholders/static behavior where explicitly instructed
- Do not implement CRM, admin, backend, mailing list logic, or advanced form behavior
- Use the temporary testimonial JSON approach described in `homepage-source.md`
- Use a placeholder/fallback approach for Calendly if embedding is inconvenient on first pass

Technical expectations:
- React + Vite
- Chakra UI
- clean reusable section components where practical
- no unnecessary libraries

Desktop-first instruction:
- Build the desktop version first
- Do not use the mobile screenshots as a first-pass design target
- Mobile responsiveness can be refined in a second pass after desktop layout fidelity is achieved

Deliverables:
- completed `HomePage.tsx`
- any new homepage section components needed
- temporary testimonial data file if needed
- clean imports and working browser render