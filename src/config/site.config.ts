/**
 * ============================================================================
 * SITE CONFIGURATION — Hon. Chinedu Eya Campaign Website
 * ============================================================================
 *
 * This is the SINGLE SOURCE OF TRUTH for all campaign details.
 * The client can update candidate info, bank details, colours, election date,
 * social links, and feature flags here without touching any component code.
 *
 * Every value marked {{TO_VERIFY_WITH_CLIENT}} must be confirmed before launch.
 * ============================================================================
 */

// ─── Candidate ───────────────────────────────────────────────────────────────

export const candidate = {
  fullName: 'Hon. Chinedu Eya',
  shortName: 'Chinedu Eya',
  firstName: 'Chinedu',
  title: 'Hon.',
  officeSought: 'Member, Federal House of Assembly',
  constituency: 'Igbo Eze North / Udenu Constituency',
  state: 'Enugu State',
  country: 'Nigeria',
  party: {
    name: 'Labour Party',
    abbreviation: 'LP',
    logo: '/images/brand/lp-logo.png',
  },
  campaignLogo: '/images/brand/campaign-logo.png',
  portrait: '/images/candidate/portrait.jpg',
  /** 
   * Slogan options (choose one):
   * 1. "A New Voice. A Better Future." — strong, aspirational
   * 2. "Our People. Our Progress." — community-centred
   * 3. "Representing You, Building Tomorrow." — clear purpose
   * Using option 1 as default — the strongest for campaign identity.
   */
  slogan: 'A New Voice. A Better Future.',
  sloganIgbo: 'Olu Ọhụrụ. Ọdịnihu Ka Mma.',
  bio: `Hon. Chinedu Eya is a successful entrepreneur, community leader, and proud son of Igbo Eze North / Udenu Constituency, Enugu State. He is the CEO of Suskii Group of Companies, a leading automobile dealership that imports quality vehicles from the United States and Europe. He is also the CEO of MY Eya Homes, a renowned real estate company operating across Nigeria. Drawing from his experience building businesses and creating jobs, he is now bringing that same drive and dedication to public service as he contests for the Federal House of Assembly on the platform of the Labour Party.`,
  email: 'info@chinedueya.ng', // {{TO_VERIFY_WITH_CLIENT}}
  phone: '+234 800 000 0000', // {{TO_VERIFY_WITH_CLIENT}}
  whatsapp: '+2348000000000', // {{TO_VERIFY_WITH_CLIENT}}
  officeAddress: 'Campaign Office, Enugu-Ezike, Igbo Eze North LGA, Enugu State', // {{TO_VERIFY_WITH_CLIENT}}
} as const;

// ─── Election ────────────────────────────────────────────────────────────────

export const election = {
  /** Election date — drives countdown timer across the site */
  date: '2027-02-14T08:00:00+01:00', // {{TO_VERIFY_WITH_CLIENT: Confirm exact date}}
  name: '2027 Federal House of Assembly Election, Igbo Eze North / Udenu Constituency',
  inecPvcPortal: 'https://cvr.inecnigeria.org/',
  inecPollingUnitFinder: 'https://voters.inecnigeria.org/poling_units',
} as const;

// ─── Social Media ────────────────────────────────────────────────────────────

export const socials = {
  facebook: 'https://facebook.com/ChinedUEyaOfficial', // {{TO_VERIFY_WITH_CLIENT}}
  twitter: 'https://x.com/ChinedUEya', // {{TO_VERIFY_WITH_CLIENT}}
  instagram: 'https://instagram.com/chinedueya', // {{TO_VERIFY_WITH_CLIENT}}
  tiktok: 'https://tiktok.com/@chinedueya', // {{TO_VERIFY_WITH_CLIENT}}
  youtube: 'https://youtube.com/@ChinedUEya', // {{TO_VERIFY_WITH_CLIENT}}
  whatsappChannel: 'https://whatsapp.com/channel/0029Va...', // {{TO_VERIFY_WITH_CLIENT}}
  telegramChannel: 'https://t.me/chinedueya', // {{TO_VERIFY_WITH_CLIENT}}
} as const;

// ─── Donation ────────────────────────────────────────────────────────────────

export const donation = {
  bankName: '{{PLACEHOLDER: Bank Name}}', // {{TO_VERIFY_WITH_CLIENT}}
  accountName: '{{PLACEHOLDER: Account Name}}', // {{TO_VERIFY_WITH_CLIENT}}
  accountNumber: '{{PLACEHOLDER: Account Number}}', // {{TO_VERIFY_WITH_CLIENT}}
  currency: 'NGN',
  /** Suggested amounts in Naira — editable here */
  suggestedAmounts: [5_000, 10_000, 25_000, 50_000, 100_000] as number[],
  /** Impact statements per tier (placeholders until approved by client) */
  impactStatements: {
    5_000: 'Supports campaign materials for one ward {{TO_VERIFY_WITH_CLIENT}}',
    10_000: 'Funds a community town hall meeting {{TO_VERIFY_WITH_CLIENT}}',
    25_000: 'Sponsors voter education outreach in one LGA {{TO_VERIFY_WITH_CLIENT}}',
    50_000: 'Funds a constituency-wide rally {{TO_VERIFY_WITH_CLIENT}}',
    100_000: 'Powers a full week of grassroots mobilisation {{TO_VERIFY_WITH_CLIENT}}',
  } as Record<number, string>,
  /** Compliance notice — must be verified against the current Electoral Act */
  complianceNotice:
    'All donations are subject to applicable Nigerian electoral law and INEC campaign finance rules. Donors must confirm that contributions are from a Nigerian source and comply with applicable limits. {{TO_VERIFY_WITH_CLIENT: Confirm exact limits per the Electoral Act and INEC guidelines.}}',
  /** Per-donor limit notice (do NOT hard-code figures as fact) */
  donorLimitNotice:
    'Individual donations are subject to legal limits as prescribed by the Electoral Act. {{TO_VERIFY_WITH_CLIENT: Insert verified limit.}}',
  /** Max file upload size for proof-of-payment (5 MB) */
  maxUploadSizeMB: 5,
  allowedUploadTypes: ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'],
} as const;

// ─── Feature Flags ───────────────────────────────────────────────────────────

export const features = {
  /** Online payment via Paystack/Flutterwave — OFF by default, enable when ready */
  onlinePayment: false,
  /** Show donation progress meter — manually updated */
  donationProgress: false,
  donationGoal: 50_000_000, // Target in NGN
  donationCurrent: 0, // Current total in NGN — update manually
  /** Data-saver mode toggle for low-connectivity users */
  dataSaverMode: true,
  /** PWA support */
  pwa: true,
  /** Analytics — set to 'plausible' or 'ga4' or 'none' */
  analytics: 'none' as 'plausible' | 'ga4' | 'none',
  plausibleDomain: '', // {{TO_VERIFY_WITH_CLIENT}}
  ga4MeasurementId: '', // {{TO_VERIFY_WITH_CLIENT}}
  /** CAPTCHA on forms */
  captcha: true,
  captchaProvider: 'turnstile' as 'turnstile' | 'hcaptcha',
  turnstileSiteKey: '', // Set via NEXT_PUBLIC_TURNSTILE_SITE_KEY env var
  /** Newsletter double opt-in */
  doubleOptIn: true,
  /** Supporter wall / "I'm with Chinedu" feature */
  supporterWall: true,
  /** Photo frame generator */
  photoFrameGenerator: true,
  /** Community issue reporting */
  issueReporting: true,
} as const;

// ─── Brand / Design Tokens ───────────────────────────────────────────────────

export const brand = {
  /** Labour Party colours — verified against official branding */
  colors: {
    /** Primary: LP Red */
    primary: '#DC2626',
    primaryDark: '#B91C1C',
    primaryLight: '#FEE2E2',
    /** Secondary: LP Green */
    secondary: '#16A34A',
    secondaryDark: '#15803D',
    secondaryLight: '#DCFCE7',
    /** Neutral dark for text */
    dark: '#1A1A2E',
    /** Light backgrounds */
    light: '#FAFAFA',
    white: '#FFFFFF',
    /** Accent — warm gold */
    accent: '#F59E0B',
    accentDark: '#D97706',
  },
  fonts: {
    /** Display font for headings */
    display: 'Outfit',
    /** Body font — highly legible */
    body: 'Inter',
  },
} as const;

// ─── Navigation ──────────────────────────────────────────────────────────────

export type NavItem = {
  label: string;
  labelIgbo: string;
  href: string;
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  { label: 'Home', labelIgbo: 'Ụlọ', href: '/' },
  { label: 'About', labelIgbo: 'Maka', href: '/about' },
  { label: 'Agenda', labelIgbo: 'Atụmatụ', href: '/agenda' },
  { label: 'Constituency', labelIgbo: 'Ọgbakọ', href: '/constituency' },
  { label: 'News', labelIgbo: 'Akụkọ', href: '/news' },
  { label: 'Events', labelIgbo: 'Mmemme', href: '/events' },
  { label: 'Gallery', labelIgbo: 'Foto', href: '/gallery' },
  { label: 'Get Involved', labelIgbo: 'Sonye', href: '/get-involved' },
  { label: 'Contact', labelIgbo: 'Kpọtụrụ Anyị', href: '/contact' },
];

// ─── Constituency Data ───────────────────────────────────────────────────────

export const constituency = {
  lgas: [
    {
      name: 'Igbo Eze North',
      headquarters: 'Enugu-Ezike',
      towns: [
        'Enugu-Ezike',
        'Ibagwa-Aka',
        'Ibagwa-Ani',
        'Iyioku',
        'Itchi',
        'Unadu',
        'Alor-Agu',
        'Umuitodo',
        'Umuopu',
      ], // {{TO_VERIFY_WITH_CLIENT: Confirm complete list}}
    },
    {
      name: 'Udenu',
      headquarters: 'Obollo-Afor',
      towns: [
        'Obollo-Afor',
        'Obollo-Eke',
        'Amalla',
        'Ezimo',
        'Orba',
        'Imilike',
        'Ogbodu-Aba',
      ], // {{TO_VERIFY_WITH_CLIENT: Confirm complete list}}
    },
  ],
} as const;

// ─── Agenda / Manifesto Priorities ───────────────────────────────────────────

export type AgendaPriority = {
  id: string;
  title: string;
  titleIgbo: string;
  icon: string;
  summary: string;
  details: string;
};

export const agendaPriorities: AgendaPriority[] = [
  {
    id: 'youth-empowerment',
    title: 'Youth Empowerment & Jobs',
    titleIgbo: 'Inyere Ụmụ Okorobia Aka & Ọrụ',
    icon: '💼',
    summary:
      'Creating pathways to employment, skills acquisition, and entrepreneurship for the youth of our constituency.',
    details:
      '{{TO_VERIFY_WITH_CLIENT: Detailed policy proposals for youth empowerment, specific programmes, and targets.}}',
  },
  {
    id: 'education',
    title: 'Quality Education',
    titleIgbo: 'Agụmakwụkwọ Dị Mma',
    icon: '🎓',
    summary:
      'Advocating for better-funded schools, qualified teachers, and scholarship programmes for our children.',
    details:
      '{{TO_VERIFY_WITH_CLIENT: Specific education proposals, infrastructure plans, scholarship details.}}',
  },
  {
    id: 'healthcare',
    title: 'Healthcare Access',
    titleIgbo: 'Ịnweta Ahụike',
    icon: '🏥',
    summary:
      'Pushing for functional primary healthcare centres and affordable medical services in every ward.',
    details:
      '{{TO_VERIFY_WITH_CLIENT: Specific healthcare initiatives, PHC renovation plans, medical outreach proposals.}}',
  },
  {
    id: 'agriculture',
    title: 'Agriculture & Rural Economy',
    titleIgbo: 'Ọrụ Ubi & Akụnụba Obodo',
    icon: '🌾',
    summary:
      'Supporting farmers with modern techniques, market access, and agricultural loans to boost our rural economy.',
    details:
      '{{TO_VERIFY_WITH_CLIENT: Agricultural programmes, farmer support initiatives, market development plans.}}',
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure & Roads',
    titleIgbo: 'Ụzọ na Nkwurịta Okwu',
    icon: '🛣️',
    summary:
      'Championing federal road projects, bridges, and critical infrastructure that connect our communities.',
    details:
      '{{TO_VERIFY_WITH_CLIENT: Specific road projects, infrastructure timelines, and federal intervention plans.}}',
  },
  {
    id: 'electricity',
    title: 'Electricity & Power',
    titleIgbo: 'Ọkụ Elektrik',
    icon: '⚡',
    summary:
      'Advocating for reliable power supply and renewable energy solutions for homes and businesses.',
    details:
      '{{TO_VERIFY_WITH_CLIENT: Specific power projects, solar initiatives, rural electrification plans.}}',
  },
  {
    id: 'women-empowerment',
    title: "Women's Empowerment",
    titleIgbo: 'Inyere Ụmụ Nwanyị Aka',
    icon: '👩‍💼',
    summary:
      'Ensuring women have equal access to economic opportunities, education, and political participation.',
    details:
      '{{TO_VERIFY_WITH_CLIENT: Specific programmes for women, microfinance, skills training, and political mentoring.}}',
  },
  {
    id: 'security',
    title: 'Security & Community Welfare',
    titleIgbo: 'Nchekwa na Ọdịmma Obodo',
    icon: '🛡️',
    summary:
      'Working to strengthen community policing, conflict resolution, and welfare programmes for the vulnerable.',
    details:
      '{{TO_VERIFY_WITH_CLIENT: Security initiatives, community policing support, welfare programme details.}}',
  },
  {
    id: 'transparency',
    title: 'Transparent Representation',
    titleIgbo: 'Nnọchite Anya Doro Anya',
    icon: '🏛️',
    summary:
      'Committing to regular town halls, constituency offices, and quarterly reports to keep you informed.',
    details:
      'Hon. Chinedu Eya pledges to hold quarterly town hall meetings across both LGAs, maintain an open constituency office, publish regular reports on legislative activities, and ensure every kobo of constituency funds is accounted for transparently.',
  },
];

// ─── SEO Defaults ────────────────────────────────────────────────────────────

export const seo = {
  siteName: 'Hon. Chinedu Eya for Federal House of Assembly',
  siteUrl: 'https://chinedueya.ng', // {{TO_VERIFY_WITH_CLIENT: Final domain}}
  defaultTitle: 'Hon. Chinedu Eya — A New Voice. A Better Future.',
  defaultDescription:
    'Official campaign website of Hon. Chinedu Eya, Labour Party candidate for the Federal House of Assembly, Igbo Eze North / Udenu Constituency, Enugu State.',
  keywords: [
    'Chinedu Eya',
    'Labour Party',
    'Igbo Eze North',
    'Udenu',
    'Enugu State',
    'House of Assembly',
    'Federal Constituency',
    'Nigeria election',
    '2027 election',
  ],
  ogImage: '/images/og/og-default.jpg',
} as const;
