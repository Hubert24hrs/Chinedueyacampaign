const fs = require('fs');
const path = require('path');

const dirs = [
  'public/images/candidate',
  'public/images/brand',
  'public/images/og',
  'public/images/news',
  'public/images/gallery',
  'public/downloads',
  'public/docs'
];

dirs.forEach(d => {
  const full = path.join(__dirname, '..', d);
  if (!fs.existsSync(full)) {
    fs.mkdirSync(full, { recursive: true });
  }
});

function createSvgPlaceholder(width, height, title, subtitle, bg1 = '#1A1A2E', bg2 = '#DC2626') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bg1}" />
      <stop offset="100%" stop-color="${bg2}" />
    </linearGradient>
    <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 40 M 0 0 L 40 40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad)" />
  <rect width="100%" height="100%" fill="url(#pattern)" />
  <circle cx="${width/2}" cy="${height/2 - 30}" r="${Math.min(width, height) * 0.18}" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" stroke-width="3" />
  <text x="50%" y="${height/2 - 20}" dominant-baseline="middle" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="900" font-size="${Math.min(width, height) * 0.1}" fill="#FFFFFF">LP</text>
  <text x="50%" y="${height/2 + 70}" dominant-baseline="middle" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="bold" font-size="${Math.max(16, width * 0.035)}" fill="#FFFFFF">${title}</text>
  <text x="50%" y="${height/2 + 105}" dominant-baseline="middle" text-anchor="middle" font-family="system-ui, sans-serif" font-size="${Math.max(12, width * 0.022)}" fill="rgba(255,255,255,0.8)">${subtitle}</text>
</svg>`;
}

const assets = [
  { path: 'public/images/candidate/portrait.jpg', w: 800, h: 1000, t: 'Hon. Chinedu Eya', s: 'Candidate Portrait Placeholder' },
  { path: 'public/images/candidate/hero.jpg', w: 1600, h: 900, t: 'Hon. Chinedu Eya for Reps', s: 'Igbo Eze North / Udenu Federal Constituency' },
  { path: 'public/images/brand/campaign-logo.png', w: 500, h: 500, t: 'Chinedu Eya', s: 'Official Campaign Logo' },
  { path: 'public/images/brand/lp-logo.png', w: 500, h: 500, t: 'Labour Party', s: 'Forward Ever, Backward Never', bg1: '#DC2626', bg2: '#16A34A' },
  { path: 'public/images/og/og-default.jpg', w: 1200, h: 630, t: 'Hon. Chinedu Eya for Reps', s: 'A New Voice. A Better Future. | Labour Party' },
  { path: 'public/images/news/campaign-launch.jpg', w: 1200, h: 800, t: 'Campaign Launch', s: 'Enugu-Ezike Declaration' },
  { path: 'public/images/news/outreach-udenu.jpg', w: 1200, h: 800, t: 'Community Outreach', s: 'Listening to the People in Udenu' },
  { path: 'public/images/news/youth-town-hall.jpg', w: 1200, h: 800, t: 'Youth Town Hall', s: 'Empowering the Next Generation' },
  { path: 'public/images/gallery/rally-1.jpg', w: 1200, h: 800, t: 'Constituency Rally', s: 'Enugu-Ezike Gathering' },
  { path: 'public/images/gallery/outreach-1.jpg', w: 1200, h: 800, t: 'Community Engagement', s: 'Obollo-Afor Outreach' },
  { path: 'public/images/gallery/youth-1.jpg', w: 1200, h: 800, t: 'Youth Forum', s: 'Empowerment & Digital Skills' },
  { path: 'public/images/gallery/women-1.jpg', w: 1200, h: 800, t: 'Women in Leadership', s: 'Community Women Conference' },
  { path: 'public/images/gallery/candidate-1.jpg', w: 1200, h: 800, t: 'Grassroots Consultation', s: 'Meeting Local Leaders' },
  { path: 'public/images/gallery/party-1.jpg', w: 1200, h: 800, t: 'Labour Party Stakeholders', s: 'Enugu State LP Caucus' }
];

assets.forEach(a => {
  const filePath = path.join(__dirname, '..', a.path);
  // Write SVG content (browsers and Next.js image fallbacks render SVG cleanly)
  const svg = createSvgPlaceholder(a.w, a.h, a.t, a.s, a.bg1 || '#1A1A2E', a.bg2 || '#DC2626');
  fs.writeFileSync(filePath, svg);
});

console.log('Successfully generated all placeholder assets!');
