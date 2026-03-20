# Daroda Website Release Cadence Plan

## Purpose

Define a simple, professional, low‑stress release cadence and versioning approach for the Daroda Accounting website/platform during:

- Internship / Build Phase (≈220 hours)
- Migration Launch
- Early Post‑Launch Stabilization
- Ongoing Maintenance

This plan ensures:

- Clear progress signals
- Trust for the site owner
- Clean developer discipline
- No over‑engineering of SemVer

---

## Core Philosophy

This is a **single‑developer milestone‑driven release strategy**, not a feature‑factory SaaS cadence.

Version bumps represent:

- meaningful stability checkpoints
- architectural milestones
- migration readiness
- production confidence

NOT:

- every tiny commit
- every CSS tweak
- every content update

---

## SemVer Simplified for Daroda

Format:

MAJOR.MINOR.PATCH

### MAJOR (Breaking / Platform Shift)

Used when:

- Hosting platform change
- Architecture rewrite
- Major routing / content model change
- Migration from Wix → Custom Platform

These are **rare and intentional.**

---

### MINOR (Milestone Progress)

Used when:

- New major page groups completed
- SEO system implemented
- Forms / lead flow implemented
- Security hardening phase completed
- Migration rehearsal completed

This is the **primary bump type during internship.**

---

### PATCH (Stability / Polish)

Used when:

- Fixes
- small UX improvements
- performance tuning
- copy refinements
- technical corrections

These communicate:

"System is being actively cared for."

---

## Recommended Cadence During 220hr Internship

### Phase A — Foundation (Hours 0–60)

Goal:

System exists locally / staging and is navigable.

Suggested releases:

0.1.0 — Initial architecture scaffold
0.2.0 — Core layout + routing stable
0.2.1 — Fixes / polish

---

### Phase B — Content & SEO Build (Hours 60–130)

Goal:

Marketing‑ready informational site.

Suggested releases:

0.3.0 — Service pages complete
0.4.0 — SEO metadata + sitemap
0.4.1 — technical corrections
0.4.2 — performance tuning

---

### Phase C — Migration Readiness (Hours 130–190)

Goal:

Production confidence.

Suggested releases:

0.5.0 — Form system + analytics
0.6.0 — security headers + monitoring
0.7.0 — full migration rehearsal

---

### Phase D — Launch Window (Hours 190–220)

Goal:

Safe cutover.

Suggested releases:

0.9.0 — migration candidate
0.9.1 — launch fixes
1.0.0 — **Official Production Release (Post‑Migration Success)**

---

## Post‑Launch Cadence (First 3 Months)

Goal:

Build trust and stability signals.

Suggested:

1.0.1 — quick bug fixes
1.1.0 — trust improvements (security headers / performance gains)
1.1.1 — polish
1.2.0 — growth improvements (SEO content expansion)

Frequency guideline:

- Patch every 1–3 weeks if needed
- Minor every 4–8 weeks

---

## Long‑Term Maintenance Cadence

After stabilization:

- Minor releases quarterly
- Patch releases as needed
- Major only if platform evolution demands it

---

## Reputation Signal Strategy

Healthy signals:

- steady but not frantic releases
- visible care over time
- milestone‑driven improvements

Avoid:

- huge silent gaps
- chaotic major version jumps
- meaningless version spam

---

## Conclusion

This cadence allows the Daroda platform to feel:

- intentional
- professional
- stable
- actively maintained

while keeping developer cognitive load extremely low.

Versioning becomes a **confidence narrative**, not an administrative burden.

