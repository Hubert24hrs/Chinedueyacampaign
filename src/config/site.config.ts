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
  officeAddress: 'Campaign Office, Enugu Ezike, Igbo Eze North LGA, Enugu State',
} as const;

// ─── Election ────────────────────────────────────────────────────────────────

export const election = {
  /** Election date drives countdown timer across the site */
  date: '2027-02-14T08:00:00+01:00',
  name: '2027 Federal House of Assembly Election, Igbo Eze North / Udenu Constituency',
  inecPvcPortal: 'https://cvr.inecnigeria.org/',
  inecPollingUnitFinder: 'https://voters.inecnigeria.org/poling_units',
} as const;

// ─── Social Media ────────────────────────────────────────────────────────────

export const socials = {
  facebook: 'https://facebook.com/ChinedUEyaOfficial',
  twitter: 'https://x.com/ChinedUEya',
  instagram: 'https://instagram.com/chinedueya',
  tiktok: 'https://tiktok.com/@chinedueya',
  youtube: 'https://youtube.com/@ChinedUEya',
  whatsappChannel: 'https://whatsapp.com/channel/0029Va',
  telegramChannel: 'https://t.me/chinedueya',
} as const;

// ─── Donation ────────────────────────────────────────────────────────────────

export const donation = {
  bankName: 'United Bank for Africa (UBA)',
  accountName: 'Eya Chinedu',
  accountNumber: '2095991212',
  currency: 'NGN',
  suggestedAmounts: [25_000, 100_000, 500_000, 1_000_000] as number[],
  impactStatements: {
    25_000: 'Sponsors voter education and PVC mobilization seminars across a ward',
    100_000: 'Funds comprehensive ward mobilization, logistics, and digital volunteer toolkits',
    500_000: 'Powers a full constituency town hall, youth engagement forum, and grassroots outreach',
    1_000_000: 'Underwrites major constituency-wide campaign tour, regional media, and voter mobilization',
  } as Record<number, string>,
  complianceNotice:
    'All contributions are subject to applicable Nigerian electoral regulations. Donors confirm that contributions are made from personal funds in accordance with Nigerian law.',
  donorLimitNotice:
    'Individual campaign contributions are governed by provisions of the Electoral Act.',
  maxUploadSizeMB: 5,
  allowedUploadTypes: ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'],
} as const;

// ─── Feature Flags ───────────────────────────────────────────────────────────

export const features = {
  onlinePayment: false,
  donationProgress: false,
  donationGoal: 50_000_000,
  donationCurrent: 0,
  dataSaverMode: true,
  pwa: true,
  analytics: 'none' as 'plausible' | 'ga4' | 'none',
  plausibleDomain: '',
  ga4MeasurementId: '',
  captcha: false,
  captchaProvider: 'turnstile' as 'turnstile' | 'hcaptcha',
  turnstileSiteKey: '',
  doubleOptIn: true,
  supporterWall: true,
  photoFrameGenerator: true,
  issueReporting: true,
} as const;

// ─── Brand / Design Tokens ───────────────────────────────────────────────────

export const brand = {
  colors: {
    primary: '#DC2626',
    primaryDark: '#B91C1C',
    primaryLight: '#FEE2E2',
    secondary: '#16A34A',
    secondaryDark: '#15803D',
    secondaryLight: '#DCFCE7',
    dark: '#0B0F19',
    light: '#FAFAFA',
    white: '#FFFFFF',
    accent: '#F59E0B',
    accentDark: '#D97706',
  },
  fonts: {
    display: 'Outfit',
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
  { label: 'Get Involved', labelIgbo: 'Sonye', href: '/get-involved' },
  { label: 'Donate', labelIgbo: 'Nye Aka', href: '/donate' },
  { label: 'Contact', labelIgbo: 'Kpọtụrụ Anyị', href: '/contact' },
];

// ─── Constituency Data ───────────────────────────────────────────────────────

export const constituency = {
  lgas: [
    {
      name: 'Igbo Eze North',
      headquarters: 'Enugu Ezike',
      towns: [
        'Enugu Ezike',
        'Ibagwa Aka',
        'Ibagwa Ani',
        'Iyioku',
        'Itchi',
        'Unadu',
        'Alor Agu',
        'Umuitodo',
        'Umuopu',
      ],
    },
    {
      name: 'Udenu',
      headquarters: 'Obollo Afor',
      towns: [
        'Obollo Afor',
        'Obollo Eke',
        'Amalla',
        'Ezimo',
        'Orba',
        'Imilike',
        'Ogbodu Aba',
      ],
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
    title: 'Youth Empowerment and Jobs',
    titleIgbo: 'Inyere Ụmụ Okorobia Aka na Ọrụ',
    icon: '💼',
    summary:
      'Creating pathways to employment, vocational skills acquisition, and tech entrepreneurship for youth across Igbo Eze North and Udenu.',
    details:
      'Establishing modern technology hubs, trade incubation centers, and seed capital funds to equip young men and women with practical business, engineering, and digital skills.',
  },
  {
    id: 'education',
    title: 'Quality Education',
    titleIgbo: 'Agụmakwụkwọ Dị Mma',
    icon: '🎓',
    summary:
      'Advocating for well funded schools, modern learning materials, and merit scholarships for deserving students.',
    details:
      'Sponsoring federal education intervention bills, upgrading primary and secondary school facilities, and establishing annual higher education scholarship schemes for constituency youth.',
  },
  {
    id: 'healthcare',
    title: 'Healthcare Access',
    titleIgbo: 'Ịnweta Ahụike',
    icon: '🏥',
    summary:
      'Pushing for fully functional primary healthcare centers, medical equipment, and affordable health services in every ward.',
    details:
      'Attracting federal healthcare investments, organizing quarterly mobile medical outreach clinics, and ensuring maternal care clinics are supplied with essential medicines.',
  },
  {
    id: 'agriculture',
    title: 'Agriculture and Rural Economy',
    titleIgbo: 'Ọrụ Ubi na Akụnụba Obodo',
    icon: '🌾',
    summary:
      'Supporting farmers with high yield seeds, subsidized inputs, mechanized tools, and direct market access.',
    details:
      'Leveraging federal agricultural interventions to build agro processing facilities in Obollo Afor and Enugu Ezike, eliminating harvest waste and boosting household incomes.',
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure and Roads',
    titleIgbo: 'Ụzọ na Nkwurịta Okwu',
    icon: '🛣️',
    summary:
      'Championing federal road construction, erosion control works, and inter community access networks.',
    details:
      'Prioritizing federal road corridors linking Igbo Eze North, Udenu, and neighboring states to facilitate trade, mobility, and economic connectivity for our agricultural produce.',
  },
  {
    id: 'electricity',
    title: 'Electricity and Power',
    titleIgbo: 'Ọkụ Elektrik',
    icon: '⚡',
    summary:
      'Advocating for stable grid power, transformer installations, and rural solar mini grid solutions.',
    details:
      'Collaborating with federal rural electrification agencies to replace obsolete transformers and deploy clean solar streetlights across every market square and village center.',
  },
  {
    id: 'women-empowerment',
    title: "Women Empowerment",
    titleIgbo: 'Inyere Ụmụ Nwanyị Aka',
    icon: '👩‍💼',
    summary:
      'Providing soft micro credit, cooperative grants, and vocational training for women entrepreneurs and market traders.',
    details:
      'Establishing women cooperative revolving funds that provide low interest credit, retail trading mentorship, and specialized skills workshops to foster financial independence.',
  },
  {
    id: 'security',
    title: 'Security and Community Welfare',
    titleIgbo: 'Nchekwa na Ọdịmma Obodo',
    icon: '🛡️',
    summary:
      'Strengthening community vigilance networks, rapid response security, and social welfare support for seniors.',
    details:
      'Equipping neighborhood vigilante organizations with patrol logistics, supporting security agencies, and funding community peacebuilding committees.',
  },
  {
    id: 'transparency',
    title: 'Transparent Representation',
    titleIgbo: 'Nnọchite Anya Doro Anya',
    icon: '🏛️',
    summary:
      'Delivering quarterly town halls, accessible constituency liaison offices, and open accounting of projects.',
    details:
      'Hon. Chinedu Eya pledges to hold regular town hall assemblies across Igbo Eze North and Udenu, maintaining open doors so every constituent can track projects and air concerns directly.',
  },
];

// ─── SEO Defaults ────────────────────────────────────────────────────────────

export const seo = {
  siteName: 'Hon. Chinedu Eya for Federal House of Assembly',
  siteUrl: 'https://chinedueya.ng',
  defaultTitle: 'Hon. Chinedu Eya: A New Voice, A Better Future',
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
