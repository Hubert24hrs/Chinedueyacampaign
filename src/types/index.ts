/**
 * ============================================================================
 * TypeScript Types — Shared across the campaign site
 * ============================================================================
 */

// ─── News ────────────────────────────────────────────────────────────────────

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  titleIgbo?: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image?: string;
  author: string;
}

// ─── Events ──────────────────────────────────────────────────────────────────

export interface CampaignEvent {
  id: string;
  slug: string;
  title: string;
  titleIgbo?: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  lga: string;
  ward: string;
  type: 'rally' | 'town-hall' | 'outreach' | 'fundraiser' | 'other';
  image?: string;
  isPast: boolean;
}

// ─── Forms ───────────────────────────────────────────────────────────────────

export interface VolunteerFormData {
  fullName: string;
  phone: string;
  whatsapp?: string;
  email?: string;
  lga: string;
  ward: string;
  skills: string;
  availability: string;
}

export interface DonationPledgeData {
  fullName: string;
  phone: string;
  email?: string;
  amount: number;
  note?: string;
  anonymous: boolean;
  transferMade: boolean;
  complianceConfirmed: boolean;
  proofOfPayment?: File;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface NewsletterSignupData {
  email: string;
}

export interface RSVPFormData {
  name: string;
  phone: string;
  email?: string;
  eventId: string;
  numberOfAttendees: number;
}

export interface QuestionFormData {
  name: string;
  phone?: string;
  email?: string;
  ward?: string;
  question: string;
}

export interface IssueReportData {
  name: string;
  phone: string;
  ward: string;
  lga: string;
  issue: string;
  photo?: File;
}

// ─── Testimonials ────────────────────────────────────────────────────────────

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  image?: string;
}

// ─── Gallery ─────────────────────────────────────────────────────────────────

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  caption?: string;
}

export interface GalleryVideo {
  id: string;
  title: string;
  url: string;
  thumbnail?: string;
  category: string;
}

// ─── Achievement ─────────────────────────────────────────────────────────────

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  year?: string;
}

// ─── API Response ────────────────────────────────────────────────────────────

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
}
