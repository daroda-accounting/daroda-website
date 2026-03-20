# Daroda Migration Execution Playbook

## Purpose

The Daroda Migration Execution Playbook defines the step-by-step operational approach for safely rebuilding and launching the new Daroda Accounting website while:

- minimizing downtime
- preserving SEO signals
- maintaining lead capture continuity
- ensuring rollback capability

This document acts as the technical runbook for migration.

---

## Phase 1 — Pre-Build Preparation

### 1. Create Project Repository

- Create GitHub repo owned by Rose (recommended)
- Add developer access
- Create structure:

/docs
/src
/public
/infra

- Add:
  - README
  - architecture overview
  - migration checklist

### 2. URL Mapping Spreadsheet

Create full mapping:

| Current Wix URL | New URL | Notes |
|----------------|--------|------|
| / | / | same |
| /book-online | /book | redirect |
| /services | /services | expanded |

Goal:

Prevent SEO signal loss.

### 3. Content Export & Backup

- Download ALL images
- Copy ALL text content
- Export planner funnel logic
- Screenshot important layouts

Create:

/docs/wix-backup

### 4. SEO Baseline Snapshot

Before migration:

- Export indexed pages list
- Record current ranking keywords
- Screenshot performance scores
- Run reputation scans

This creates before vs after proof.

---

## Phase 2 — Development Environment Setup

### 5. Hosting Platform Setup

Example:

- Netlify project created
- environment variables configured
- staging URL confirmed

### 6. Domain Strategy Decision

Choose:

- DNS cutover later
- or subdomain staging (recommended)

Example:

new.darodaaccounting.com

### 7. Analytics & Monitoring Prep

Prepare but do NOT fully activate yet:

- Google Analytics
- Search Console
- uptime monitoring

---

## Phase 3 — Site Build Execution

### 8. Build Core Pages First

Priority order:

1. Homepage
2. Services
3. Booking page
4. Contact / funnel pages

Goal:

preserve lead flow first.

### 9. Calendly Integration Strategy

Options:

- embed
- open in modal
- open in new tab

Test:

- mobile
- slow network
- ad blockers

### 10. Form Replacement Strategy

Replace Wix automation with:

- direct email notification
- optional database logging
- spam protection

---

## Phase 4 — Pre-Launch Validation

### 11. Functional Testing

Verify:

- all links
- booking works
- forms submit
- mobile usability
- load speed

### 12. SEO Migration Checks

- sitemap generated
- meta titles correct
- structured headings
- redirects ready

### 13. Security Validation

- HTTPS enforced
- security headers applied
- cookie behavior confirmed

---

## Phase 5 — Launch Execution

### 14. DNS Cutover Plan

Steps:

1. Lower TTL (24–48 hrs prior)
2. Change CNAME / A record
3. Monitor propagation

### 15. Immediate Post-Launch Monitoring

- uptime monitoring active
- analytics recording
- reputation scan
- test real booking

---

## Phase 6 — Rollback Strategy

If critical issue occurs:

- revert DNS
- restore Wix primary
- log issue
- fix in staging

---

## Migration Success Criteria

Migration is successful when:

- no lead flow interruption
- no security warnings
- stable performance
- search indexing maintained
- client confident using new system

