# Daroda Technical Architecture Proposal

## Purpose

This document outlines the proposed technical architecture and technology stack for the Daroda Accounting website migration project.

The goal is to select tools and infrastructure that support:

- Low ongoing maintenance burden
- Strong performance and reliability
- SEO scalability
- Future feature expansion (such as gated content or course capability)
- Easy transition to a future maintainer if needed

This proposal is intended as a planning reference and may evolve slightly as implementation discoveries are made.

---

## Proposed Stack

### Frontend Application

- **React** (component‑based UI architecture)
- **Modern build tooling (e.g., Vite or equivalent)** for fast development and optimized production builds
- **Client‑side routing structured for future SEO scalability**

This approach allows flexible layout development, performance optimization, and future feature additions without needing to replatform again.

---

## Architecture Principles

The system will be designed around several core principles:

### Simplicity First

- Avoid unnecessary backend complexity during MVP
- Favor proven hosting workflows
- Reduce risk of fragile integrations

### Scalability Without Over‑Engineering

- Structure routing and content layout for future multi‑page SEO growth
- Allow later addition of authentication, gated content, or admin functionality

### Maintainability & Handoff Readiness

- Clear project structure
- Minimal custom infrastructure where possible
- Documentation of deployment and configuration

---

## Hosting & Deployment

### Primary Hosting Proposal

- **Netlify (or equivalent modern static hosting platform)**

Benefits include:

- Global CDN delivery
- Simple deployment from source repository
- Minimal operational overhead
- Low or zero recurring cost at current expected traffic levels

### Domain & DNS

- Domain registrar and email hosting may remain with Wix initially
- DNS records will be updated to point website traffic to the new hosting environment

This allows infrastructure modernization without forcing immediate changes to existing business email workflows.

---

## Lead Capture & Booking Flow

### Scheduling

- Continue use of **Calendly** for appointment booking
- Maintain existing embedded scheduling experience

### Inquiry / Contact Handling

Possible implementation options include:

- Netlify Forms or equivalent platform tooling
- Lightweight serverless email notification workflow
- Third‑party SaaS fallback if future automation needs increase

Initial implementation will prioritize reliability and simplicity.

---

## Analytics & SEO Foundations

- Google Analytics (or equivalent) for traffic visibility
- Google Search Console for indexing and search diagnostics
- XML sitemap generation
- Structured metadata implementation

These foundations enable future traffic growth initiatives.

---

## Future Growth Readiness

The architecture will be prepared to support:

- Administrative content update capability
- Gated educational content or course delivery
- Newsletter marketing integrations
- Enhanced lead qualification workflows
- Expanded SEO content strategy

These features are not part of MVP implementation but will be technically feasible without requiring full rebuild.

---

## Cost & Maintainability Considerations

Design decisions will prioritize:

- Low recurring infrastructure cost
- Reduced dependency on proprietary platforms
- Predictable deployment workflow
- Ease of future vendor or maintainer transition

This helps protect long‑term business continuity.

---

## Open Decisions / Pending Confirmation

- Final hosting platform confirmation
- Preferred form handling approach
- Timeline for admin capability exploration
- Whether newsletter tooling should be introduced post‑launch
- Long‑term domain/email hosting strategy

These items can be finalized collaboratively as the project progresses.


### Technology Stability & Industry Adoption

The proposed frontend technologies (React and modern build tooling) are widely adopted industry standards used by companies of all sizes — from small businesses to major global platforms.

This widespread adoption provides several long-term advantages:

- A large pool of developers familiar with the technology, making future maintenance or team expansion easier
- Ongoing community and corporate support that helps ensure continued security updates and ecosystem stability
- Availability of proven libraries and tools that reduce development risk and accelerate feature implementation

While web technologies naturally evolve over time, platforms of this scale and adoption typically remain supportable for many years, helping protect the Client’s investment in the website rebuild.

---

### Why Not Remain Fully on Wix?

Wix is a strong platform for quickly launching simple websites and can be a good fit for businesses with very limited customization or growth needs.

However, as business requirements evolve, some limitations can become more noticeable:

- Reduced flexibility for implementing advanced functionality or custom workflows
- Dependence on platform‑specific tools and pricing structures
- Performance and SEO optimization constraints compared to fully custom solutions
- Less control over long‑term technical direction

Migrating to a modern custom‑built website helps create a more flexible foundation that can scale with future marketing, automation, and feature needs — while still allowing for simple day‑to‑day content updates.

The goal of this project is not to add unnecessary complexity, but to position the business for sustainable growth while keeping maintenance practical and predictable.

