# Hon. Chinedu Eya Campaign Platform

**Candidate:** Hon. Chinedu Eya  
**Office Sought:** Member, Federal House of Representatives  
**Constituency:** Igbo Eze North / Udenu Federal Constituency, Enugu State, Nigeria  
**Party:** Labour Party (LP)  
**Slogan:** *A New Voice. A Better Future.* (Igbo: *Olu Ọhụrụ. Ọdịnihu Ka Mma.*)

A fast, mobile-first, bilingual (English & Igbo) campaign website built for high conversion, grassroots mobilization, voter education, and secure donations under Nigerian electoral laws.

---

## 🌟 Architecture & Features

- **⚡ Blazing-Fast Performance:** Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS.
- **📱 Mobile-First & Data-Saver Aware:** Optimized for 2G/3G/4G African mobile networks with lightweight bundles, instant image fallbacks, and offline-friendly architecture.
- **🇳🇬 Localized Experience (English + Igbo):** Seamless instant language switcher catering to constituents across Igbo Eze North and Udenu.
- **💳 Multi-Tier Donation Engine:**
  - Bank transfer card with 1-tap NUBAN copy and instant visual feedback.
  - Transparent suggested amount buttons with community impact statements.
  - Supporter pledge submission with optional proof-of-payment bank receipt upload.
  - Electoral Act compliance checks and anti-scam warnings.
  - Modular integration hooks for Paystack and Flutterwave behind a single configuration toggle.
- **🤝 Supporter Mobilization Hub (`/get-involved`):**
  - Volunteer onboarding form segmented by LGA, ward, and skills.
  - Ward coordinator and support group registration.
  - Downloadable printable share kit and campaign flyers.
  - Direct WhatsApp and Telegram broadcast community links.
- **🗳️ Complete Voter Center (`/vote`):**
  - Official INEC PVC registration and status check portals.
  - Polling unit finder directory for Igbo Eze North and Udenu wards.
  - Election day preparation checklist and automated reminder signup.
  - Dynamic election date countdown timer driven from a single config variable.
- **🗺️ Interactive Constituency Portal (`/constituency`):**
  - Interactive SVG map covering Igbo Eze North (Enugu-Ezike) and Udenu (Obollo-Afor).
  - Ward and community directory with local priorities.
- **📰 News, Press & Multimedia:**
  - Newsroom with category filters, social share cards, and RSS feed (`/feed.xml`).
  - Upcoming events calendar with `.ics` calendar invite downloads and RSVP forms.
  - Photo gallery with responsive masonry layout, category tabs, and modal lightbox.
  - Official media press kit and downloadable assets.
- **🛡️ Legal & Privacy Compliance:**
  - Aligned with Nigeria Data Protection Act (NDPA).
  - Terms of Use and Donation & Refund Policy complying with the Nigerian Electoral Act.
  - Anti-spam honeypot fields on all public forms.

---

## 🚀 Quick Start & Local Setup

### Prerequisites
- Node.js 18.18+ or 20+
- npm, yarn, or pnpm

### 1. Clone & Install
```bash
git clone <repository-url>
cd eya-campaign
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env.local
```
Edit `.env.local` with your local keys (all features work gracefully with mock fallbacks in development).

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🛠️ How to Update Campaign Content (Without Touching Code)

All candidate details, banking information, policy priorities, and election dates are controlled by one single file:

👉 [`src/config/site.config.ts`](file:///C:/Users/HP/.gemini/antigravity-ide/scratch/eya-campaign/src/config/site.config.ts)

### Common Updates:

1. **Change Bank Account Details:**
   Open `src/config/site.config.ts` and update the `donation` object:
   ```ts
   export const donation = {
     bankName: 'Zenith Bank',
     accountName: 'Chinedu Eya Campaign Organization',
     accountNumber: '1012345678',
     ...
   };
   ```

2. **Update Election Date:**
   Update the `election.date` ISO string in `src/config/site.config.ts`:
   ```ts
   export const election = {
     date: '2027-02-14T08:00:00+01:00',
     ...
   };
   ```

3. **Publish News Articles:**
   Add new entries to the array in [`src/content/news.ts`](file:///C:/Users/HP/.gemini/antigravity-ide/scratch/eya-campaign/src/content/news.ts).

4. **Add Upcoming Campaign Rallies:**
   Add events to the array in [`src/content/events.ts`](file:///C:/Users/HP/.gemini/antigravity-ide/scratch/eya-campaign/src/content/events.ts).

5. **Enable Online Card Donations (Paystack/Flutterwave):**
   In `src/config/site.config.ts`, set:
   ```ts
   features.onlinePayment = true;
   ```
   and add your API keys in `.env.local`.

---

## ☁️ Step-by-Step Vercel Deployment

1. **Push to GitHub / GitLab:**
   ```bash
   git add .
   git commit -m "Complete Hon. Chinedu Eya campaign platform"
   git push origin main
   ```

2. **Import into Vercel:**
   - Log in to [Vercel Dashboard](https://vercel.com).
   - Click **"Add New Project"** and select your repository.
   - Framework preset will automatically detect **Next.js**.

3. **Add Environment Variables:**
   Under **Environment Variables**, add the values from your `.env.local`:
   - `NEXT_PUBLIC_SITE_URL` = `https://chinedueya.ng`
   - `RESEND_API_KEY` (if using Resend for email delivery)
   - `NOTIFICATION_EMAIL` (your campaign inbox)
   - `NEXT_PUBLIC_TURNSTILE_SITE_KEY` (if using Cloudflare Turnstile)
   - `TURNSTILE_SECRET_KEY`

4. **Deploy:**
   Click **Deploy**. Your campaign site will be live within 90 seconds.

---

## 📋 Pre-Launch & Post-Launch Checklist

Refer to [`PLACEHOLDERS.md`](file:///C:/Users/HP/.gemini/antigravity-ide/scratch/eya-campaign/PLACEHOLDERS.md) for the complete list of client deliverables.

### Technical & Go-Live Checklist:
- [ ] **Custom Domain & DNS:** Point `chinedueya.ng` and `www.chinedueya.ng` to Vercel CNAME/A records.
- [ ] **SSL/TLS Certificate:** Verify HTTPS is active and forcing redirect from HTTP.
- [ ] **Bank Account Verification:** Perform a test NGN 100 transfer to ensure the account name and number displayed match the candidate's campaign account.
- [ ] **Form Submissions:** Submit test volunteer and pledge forms to confirm receipts and database/email routing.
- [ ] **Mobile Device Testing:** Test across:
  - Budget Android devices on Chrome (Opera Mini / Chrome Mobile).
  - Apple iPhone on Safari.
  - Slow 3G network simulation via Chrome DevTools.
- [ ] **Lighthouse Audit:** Verify 90+ scores across Performance, Accessibility, Best Practices, and SEO.
- [ ] **Social Sharing Preview:** Paste `https://chinedueya.ng` into WhatsApp and Facebook debuggers to verify the OpenGraph banner and tagline display properly.
- [ ] **Security Review:** Ensure honeypot fields are active and rate limits are respected.
