# Daroda Website Trust Audit Checklist (Project-Specific)

**Project:** Daroda Accounting Website Migration  
**Auditor:** Nick Hanson  
**Date:** March 2026  
**Domain:** darodaaccounting.com  

---

## ✅ 1. Google Safe Browsing Status
- Result: **No unsafe content found**
- Last updated: March 9, 2026
- Risk Level: **Low**
- Notes: Domain is not flagged for malware, phishing, or deceptive content.

---

## ✅ 2. Malware / Reputation Scan (Multi‑Vendor)
- Tool Used: VirusTotal
- Result: **0 security vendors flagged this URL as malicious**
- Last Analysis: ~4 years ago
- Risk Level: **Low (but stale scan)**
- Notes: Recommend triggering re‑analysis post‑migration to refresh reputation signals.

---

## ✅ 3. Domain Age & WHOIS Trust Signals
- Registrar: Namecheap
- Created: April 6, 2021
- Expires: April 6, 2026
- Nameservers: Wix infrastructure
- Privacy Protection: Enabled
- Risk Level: **Low**
- Notes:
  - Domain is established (not newly registered)
  - Privacy protection is normal for small businesses

---

## ⚠️ 4. Security Headers Evaluation
- Tool Used: SecurityHeaders.com
- Grade: **D**

### Present Headers
- ✅ Strict‑Transport‑Security
- ✅ X‑Content‑Type‑Options

### Missing Headers
- ❌ Content‑Security‑Policy
- ❌ X‑Frame‑Options
- ❌ Referrer‑Policy
- ❌ Permissions‑Policy

- Risk Level: **Medium (technical hardening opportunity)**
- Notes:
  - Common limitation on Wix‑hosted sites
  - Does NOT indicate compromise
  - Improvement opportunity after migration

---

## ✅ 5. Scam / Consumer Trust Heuristic Score
- Tool Used: ScamAdviser
- Result: **Very Likely Safe — Trust Score 100**

### Positive Signals
- Valid SSL certificate
- Established domain age
- Clean DNS reputation

### Negative Heuristic Flags
- Registrar has higher % of spam sites (Namecheap)
- Low popularity / traffic ranking

- Risk Level: **Low**
- Notes:
  - These are statistical heuristics, not real threat indicators

---

## ✅ 6. SSL / HTTPS Status
- HTTPS Enabled
- Certificate Valid
- Risk Level: **Low**

---

## ⚠️ 7. Popularity / SEO Authority Signals
- Site has relatively low global ranking / traffic signals
- Risk Level: **Business / Growth Opportunity (Not Security)**
- Notes:
  - Migration + SEO improvements expected to improve this metric

---

## 🧠 Overall Trust Assessment

**Technical Safety:** GOOD  
**Consumer Trust Signals:** GOOD  
**Security Hardening Level:** MODERATE  
**Immediate Risk:** LOW  

### Key Takeaway
There is **no evidence that darodaaccounting.com is unsafe or compromised.**  

The primary opportunities identified are:
- Security header hardening
- Reputation signal refresh after migration
- SEO authority growth

---

## 🚀 Recommended Pre‑Migration Actions

- Document current trust baseline (this checklist)
- Ensure domain renewal timeline awareness
- Plan post‑migration security header implementation
- Plan Google Search Console / indexing validation
- Trigger fresh reputation scans after go‑live

---

## 🚀 Recommended Post‑Migration Validation

- Re‑run Google Safe Browsing check
- Re‑run VirusTotal scan
- Re‑run SecurityHeaders test
- Confirm HTTPS + redirects working
- Monitor Search Console warnings
- Monitor client feedback regarding browser warnings

