# Client Assets & Information Required (PLACEHOLDERS.md)

**Campaign:** Hon. Chinedu Eya for Federal House of Representatives  
**Constituency:** Igbo Eze North / Udenu Federal Constituency, Enugu State  
**Platform:** Labour Party (LP)  
**Single Source of Configuration:** [`src/config/site.config.ts`](file:///C:/Users/HP/.gemini/antigravity-ide/scratch/eya-campaign/src/config/site.config.ts)

This document provides a comprehensive inventory of all placeholder information, assets, credentials, and legal verifications that the campaign team must supply prior to public deployment.

---

## Priority 1: Financial & Donation Details (CRITICAL)

Supporters cannot transfer funds until these verified campaign details are configured in `src/config/site.config.ts`:

| Item | Current Placeholder | Configuration Key | Required Information / Action |
|------|---------------------|-------------------|--------------------------------|
| **Bank Name** | `{{PLACEHOLDER: Bank Name}}` | `donation.bankName` | Official campaign bank name (e.g. Zenith Bank, Access Bank, First Bank, etc.) |
| **Account Name** | `{{PLACEHOLDER: Account Name}}` | `donation.accountName` | Official registered campaign account name (e.g. *Chinedu Eya Campaign Organization*) |
| **Account Number** | `{{PLACEHOLDER: Account Number}}` | `donation.accountNumber` | 10-digit NUBAN account number |
| **Electoral Act Donation Limits** | `{{TO_VERIFY_WITH_CLIENT}}` | `donation.complianceNotice` & `donorLimitNotice` | Confirm individual donor contribution limits with campaign legal counsel pursuant to Section 88 of the Nigerian Electoral Act 2022. |
| **Payment Gateway (Optional)** | Disabled (`false`) | `features.onlinePayment` | If enabling Paystack or Flutterwave: supply `NEXT_PUBLIC_PAYSTACK_KEY` or `NEXT_PUBLIC_FLUTTERWAVE_KEY`. |

---

## Priority 2: Visual Assets & Branding

Place these image assets into the project `public/` directory with the exact filenames listed below:

| Asset Name | Target Filepath | Dimensions / Format | Description & Purpose |
|------------|-----------------|---------------------|-----------------------|
| **Candidate Portrait** | `/public/images/candidate/portrait.jpg` | 1200×1600px (JPG/WebP, vertical) | Clean studio portrait with candidate smiling or confident gaze, preferably wearing LP attire or clean traditional Igbo attire (e.g., Isiagu or white senator suit). |
| **Candidate Alternate / Hero** | `/public/images/candidate/hero.jpg` | 1920×1080px (JPG/WebP) | Wide landscape banner or town hall engagement photo for hero background. |
| **Campaign Logo** | `/public/images/brand/campaign-logo.png` | 512×512px (Transparent PNG) | Official *Chinedu Eya for Reps* logo badge or insignia. |
| **Labour Party Logo** | `/public/images/brand/lp-logo.png` | 512×512px (Transparent PNG) | Official Labour Party wheel/family emblem in high resolution. |
| **OpenGraph Share Banner** | `/public/images/og/og-default.jpg` | 1200×630px (JPG) | Social preview banner displayed when website link is shared on WhatsApp, Facebook, X, and iMessage. |
| **Candidate Manifesto PDF** | `/public/docs/chinedu-eya-manifesto.pdf` | PDF Document (< 10 MB) | Full downloadable legislative agenda and constituency manifesto. |
| **Share Kit Flyers** | `/public/downloads/campaign-flyer-igbo-eze-north.pdf`<br>`/public/downloads/campaign-flyer-udenu.pdf` | PDF / High-res JPG | Printable A4/A5 flyers for supporters and ward coordinators to print and distribute. |
| **Press Kit ZIP** | `/public/downloads/chinedu-eya-press-kit.zip` | ZIP Archive (< 25 MB) | Includes high-res portrait, bio in DOCX/PDF, official statements, and brand vector logos. |
| **Gallery Photos** | `/public/images/gallery/*` | 1200×800px (JPG) | 6 to 12 authentic photos of community rallies, market visits, elders' blessings, youth meetings, and town halls. |

---

## Priority 3: Candidate Profile & Verification

Update in `src/config/site.config.ts`:

- [ ] **Full Biography:** Complete biographical narrative covering early life in Igbo Eze North / Udenu, primary/secondary education, university degrees, professional career milestones, and community leadership achievements.
- [ ] **Campaign Slogan Confirmation:** Currently configured as `"A New Voice. A Better Future."` (Igbo: *"Olu Ọhụrụ. Ọdịnihu Ka Mma."*). Alternative options available in config comments:
  - Option 2: *"Our People. Our Progress."*
  - Option 3: *"Representing You, Building Tomorrow."*
- [ ] **Election Date:** Confirm statutory polling date (configured as `2027-02-14T08:00:00+01:00`).

---

## Priority 4: Constituency Offices & Contact Channels

Update in `src/config/site.config.ts`:

| Channel | Current Value | Required Live Value |
|---------|---------------|---------------------|
| **Headquarters Address** | `Campaign Office, Enugu-Ezike, Igbo Eze North LGA` | Exact physical street address of campaign secretariat in Enugu-Ezike or Obollo-Afor |
| **Liaison Office 2 (Udenu)** | *Optional* | Physical address for Udenu LGA coordination office in Obollo-Afor |
| **Official Phone Number** | `+234 800 000 0000` | Working campaign direct line for press and voters |
| **Official Email** | `info@chinedueya.ng` | Working campaign email address (configured with domain MX records) |
| **WhatsApp Support Line** | `+2348000000000` | WhatsApp Business number for instant voter interaction & proof-of-payment receipts |
| **WhatsApp Broadcast Channel** | `https://whatsapp.com/channel/...` | Public WhatsApp channel link for campaign volunteers & news |
| **Telegram Broadcast Channel** | `https://t.me/chinedueya` | Public Telegram channel / discussion group link |
| **Facebook Page** | `https://facebook.com/ChinedUEyaOfficial` | Verified Facebook campaign page URL |
| **X / Twitter Handle** | `https://x.com/ChinedUEya` | Official campaign X handle |
| **Instagram Profile** | `https://instagram.com/chinedueya` | Official campaign Instagram profile |
| **YouTube Channel** | `https://youtube.com/@ChinedUEya` | Campaign video channel for rallies, speeches, and interviews |

---

## Priority 5: Constituency Details & Wards

Verify the ward lists and towns in `constituency.lgas` in `src/config/site.config.ts`:

- **Igbo Eze North LGA:**
  - Headquarters: Enugu-Ezike
  - Key Communities/Towns: Enugu-Ezike, Ibagwa-Aka, Ibagwa-Ani, Iyioku, Itchi, Unadu, Alor-Agu, Umuitodo, Umuopu
  - *Verify:* Confirm full list of the 20 electoral wards with INEC constituency registry.
- **Udenu LGA:**
  - Headquarters: Obollo-Afor
  - Key Communities/Towns: Obollo-Afor, Obollo-Eke, Amalla, Ezimo, Orba, Imilike, Ogbodu-Aba
  - *Verify:* Confirm full list of the 10 electoral wards with INEC constituency registry.

---

## Priority 6: API Keys & Environment Variables

Copy `.env.example` to `.env.local` and set these production credentials before launch:

```bash
# General
NEXT_PUBLIC_SITE_URL=https://chinedueya.ng

# Turnstile Bot Protection (Cloudflare - Free tier recommended)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key_here
TURNSTILE_SECRET_KEY=your_turnstile_secret_key_here

# Email Notifications (Resend.com - 3,000 free emails/month)
RESEND_API_KEY=your_resend_api_key_here
NOTIFICATION_EMAIL=alerts@chinedueya.ng

# Database / Storage (Optional Supabase integration for volunteer database & payment slips)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# Analytics (Privacy-friendly Plausible or GA4)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=chinedueya.ng
NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX

# Payment Gateway (Optional - if features.onlinePayment is enabled)
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=your_paystack_public_key_here
PAYSTACK_SECRET_KEY=your_paystack_secret_key_here
```

---

## Priority 7: Content & Real Testimonials

- [ ] **News Articles:** Replace 3 sample articles in `src/content/news.ts` with authentic campaign announcements and press statements.
- [ ] **Campaign Events:** Replace sample rallies and town halls in `src/content/events.ts` with upcoming itinerary.
- [ ] **Community Testimonials:** Replace placeholder community endorsements on the homepage with real named quotes from community elders, market women leaders, youth presidents, and respected constituents (ensure signed consent is obtained).
