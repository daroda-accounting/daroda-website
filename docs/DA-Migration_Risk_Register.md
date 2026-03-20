# Daroda Migration Risk Register

## Purpose

This document identifies potential technical, operational, SEO, and business risks associated with the Daroda Accounting website migration project.

The goal is to proactively reduce likelihood, minimize impact, and define clear mitigation / rollback strategies.

---

## Risk Severity Legend

- 🔴 High — could interrupt lead flow or damage business credibility
- 🟡 Medium — may cause confusion, temporary performance issues, or extra work
- 🟢 Low — minimal business impact

---

## 1. DNS Cutover Propagation Delay

**Severity:** 🔴 High  
**Description:** Domain changes may take time to propagate globally, causing some users to see old site while others see new site.

**Mitigation:**
- Lower TTL 24–48 hours before launch
- Schedule launch during low traffic period
- Monitor propagation tools

**Rollback Plan:**
- Restore previous DNS record pointing to Wix

---

## 2. Form Submission Failure

**Severity:** 🔴 High  
**Description:** Contact or planner forms may fail post‑migration due to email configuration or backend issues.

**Mitigation:**
- Test forms in staging
- Test real production submissions immediately after launch
- Implement backup notification email

**Rollback Plan:**
- Temporarily redirect form pages back to Wix booking page

---

## 3. Calendly Integration Issues

**Severity:** 🟡 Medium  
**Description:** Embedded Calendly widget may load slowly or fail due to script blocking or layout issues.

**Mitigation:**
- Provide fallback “Open booking page” button
- Test mobile + slow network

**Rollback Plan:**
- Switch to simple external booking link

---

## 4. Temporary SEO Ranking Dip

**Severity:** 🟡 Medium  
**Description:** Search rankings may fluctuate after migration due to crawl re‑evaluation.

**Mitigation:**
- Maintain URL parity where possible
- Implement redirects
- Submit sitemap immediately

**Rollback Plan:**
- Monitor trends; rankings typically stabilize

---

## 5. Missing Content or Assets

**Severity:** 🟡 Medium  
**Description:** Some images or text may be overlooked during export from Wix.

**Mitigation:**
- Full content inventory checklist
- Screenshot important pages

**Rollback Plan:**
- Restore missing assets from Wix backup

---

## 6. Email DNS Misconfiguration

**Severity:** 🔴 High  
**Description:** Incorrect DNS updates could interrupt business email delivery.

**Mitigation:**
- Do NOT modify MX records unless intentional
- Validate DNS changes carefully

**Rollback Plan:**
- Restore previous DNS settings immediately

---

## 7. Client Workflow Disruption

**Severity:** 🟡 Medium  
**Description:** New admin experience may initially feel unfamiliar.

**Mitigation:**
- Provide walkthrough session
- Offer simple documentation

**Rollback Plan:**
- Maintain minimal admin requirements during MVP

---

## 8. Performance Regression

**Severity:** 🟢 Low  
**Description:** New site could load slower if misconfigured.

**Mitigation:**
- Benchmark vs Wix baseline
- Optimize assets and hosting settings

**Rollback Plan:**
- Adjust deployment configuration

---

## Risk Monitoring Plan

Risks will be reviewed:

- pre‑launch
- launch day
- 1 week post‑launch
- 1 month post‑launch

---

## Conclusion

Risk awareness ensures the migration is executed professionally, calmly, and with confidence.

By identifying potential issues in advance, the Daroda Accounting migration becomes a controlled technical transition rather than a disruptive event.

