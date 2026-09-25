/**
 * ============================================================================
 * HOME PAGE: Hon. Chinedu Eya Campaign Landing Page
 * ============================================================================
 * Redesigned with Labour Party theme (Red, Green, Gold, White)
 * Highly animated, colorful, fancy, and completely free of hyphens.
 */
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Heart, Users, ArrowRight, ChevronRight,
  Sparkles, Target, Trophy, Building2, Car,
  ShieldCheck, Globe2, Briefcase, CheckCircle2,
  GraduationCap, Stethoscope, Wheat, Compass,
  Lightbulb, Landmark, MessageSquare, Send
} from 'lucide-react';
import { candidate, agendaPriorities, election, constituency, socials, donation } from '@/config/site.config';
import { useLocale } from '@/context/LocaleContext';
import CountdownTimer from '@/components/ui/CountdownTimer';
import Section from '@/components/ui/Section';

// ─── Ticker Marquee ─────────────────────────────────────────────────────────

function CampaignTicker() {
  const items = [
    'LABOUR PARTY',
    'FORWARD EVER',
    'PAPA MAMA PIKIN',
    'HON. CHINEDU EYA',
    'MEMBER FEDERAL HOUSE OF ASSEMBLY',
    'IGBO EZE NORTH AND UDENU CONSTITUENCY',
    'CEO SUSKII GROUP OF COMPANIES',
    'CEO MY EYA HOMES',
    'A NEW VOICE, A BETTER FUTURE',
    'VOTE LABOUR PARTY 2027',
  ];

  return (
    <div className="bg-gradient-to-r from-red-600 via-amber-500 to-green-600 py-3 overflow-hidden shadow-inner text-white font-display font-extrabold text-xs md:text-sm tracking-widest uppercase">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {items.concat(items).map((text, i) => (
          <span key={i} className="inline-flex items-center mx-6">
            <Sparkles className="w-4 h-4 mr-2 text-amber-200 fill-amber-200" />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Hero Section ────────────────────────────────────────────────────────────

function HeroSection() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden pt-20 pb-16">
      {/* Animated floating ambient glow orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-red-600/30 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-600/30 rounded-full blur-3xl animate-float-reverse pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading and CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-left"
          >
            {/* Party Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20 shadow-lg">
              <div className="w-8 h-8 rounded-full bg-white overflow-hidden relative flex-shrink-0 p-0.5 shadow-sm">
                <Image
                  src={candidate.party.logo}
                  alt={candidate.party.name}
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white font-extrabold text-xs md:text-sm tracking-wide">
                  {candidate.party.name}
                </span>
                <span className="px-2 py-0.5 bg-red-600 text-white text-[10px] font-black rounded-full uppercase">
                  {candidate.party.abbreviation}
                </span>
                <span className="text-amber-300 text-xs font-semibold hidden sm:inline">
                  Forward Ever
                </span>
              </div>
            </div>

            {/* Candidate Title & Office */}
            <div className="mb-3">
              <span className="text-amber-400 font-display font-bold text-base md:text-xl uppercase tracking-wider block">
                Official Campaign 2027
              </span>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white leading-[1.08] tracking-tight mt-1 mb-4">
                Hon. Chinedu <span className="text-gradient">Eya</span>
              </h1>
            </div>

            {/* Slogan */}
            <p className="text-2xl sm:text-3xl font-display font-extrabold text-white/95 mb-4">
              A New Voice, <span className="text-green-400">A Better Future.</span>
            </p>

            <p className="text-base sm:text-lg text-slate-200 mb-6 max-w-2xl leading-relaxed">
              Contesting for <strong className="text-white font-bold">Member, Federal House of Assembly</strong> representing the dynamic people of <strong className="text-amber-300 font-bold">{candidate.constituency}</strong> in the National Assembly of Nigeria.
            </p>

            {/* Real Executive Credentials Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-xl">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 shadow-md">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center flex-shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-amber-300 font-bold uppercase tracking-wider">CEO, Suskii Group</p>
                  <p className="text-xs text-slate-200">Automobile Imports from USA & Europe</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 shadow-md">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 text-green-300 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-green-300 font-bold uppercase tracking-wider">CEO, MY Eya Homes</p>
                  <p className="text-xs text-slate-200">Renowned Nigerian Real Estate</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              <Link href="/donate" className="btn btn-party btn-lg shimmer-sweep shadow-xl">
                <Heart className="w-5 h-5 fill-white" />
                <span>{t('hero.cta.donate')}</span>
              </Link>
              <Link href="/get-involved" className="btn btn-secondary btn-lg shadow-xl">
                <Users className="w-5 h-5" />
                <span>{t('hero.cta.volunteer')}</span>
              </Link>
              <Link href="/agenda" className="btn btn-outline-white btn-lg">
                <span>View Agenda</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Countdown */}
            <div className="max-w-lg">
              <CountdownTimer />
            </div>
          </motion.div>

          {/* Right Column: Candidate Portrait (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
              
              {/* Vibrant spinning background ring */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-red-600 via-amber-400 to-green-600 rounded-3xl blur-xl opacity-75 animate-pulse-glow" />

              {/* Portrait Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white/30 shadow-2xl bg-slate-900">
                <Image
                  src={candidate.portrait}
                  alt={`${candidate.fullName}, Candidate for ${candidate.officeSought}`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                />

                {/* Bottom Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

                {/* Bottom Details Card */}
                <div className="absolute bottom-5 inset-x-5 text-left bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/20">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-white font-display font-extrabold text-lg sm:text-xl">
                      {candidate.fullName}
                    </p>
                    <span className="px-2 py-0.5 bg-red-600 text-white font-bold text-xs rounded-md">
                      Labour Party
                    </span>
                  </div>
                  <p className="text-amber-400 font-semibold text-xs">
                    {candidate.officeSought}
                  </p>
                  <p className="text-slate-300 text-xs">
                    {candidate.constituency}
                  </p>
                </div>
              </div>

              {/* Floating Badge 1 (Top Left) */}
              <div className="absolute -top-3 -left-3 bg-red-600 text-white p-3 rounded-2xl shadow-xl border-2 border-white flex items-center gap-2 animate-float hidden sm:flex">
                <Trophy className="w-5 h-5 text-amber-300" />
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-amber-200">Leadership</p>
                  <p className="text-xs font-black">Proven Job Creator</p>
                </div>
              </div>

              {/* Floating Badge 2 (Bottom Right) */}
              <div className="absolute -bottom-3 -right-3 bg-green-600 text-white p-3 rounded-2xl shadow-xl border-2 border-white flex items-center gap-2 animate-float-reverse hidden sm:flex">
                <CheckCircle2 className="w-5 h-5 text-white" />
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-green-200">Representation</p>
                  <p className="text-xs font-black">People First Always</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ─── Business & Executive Showcase ──────────────────────────────────────────

function LeadershipShowcase() {
  const credentials = [
    {
      icon: <Car className="w-8 h-8 text-amber-500" />,
      tag: 'International Automobile Trade',
      title: 'CEO, Suskii Group of Companies',
      description:
        'A premier automobile dealership operating at scale, importing quality vehicles from the United States and European countries. Created dozens of direct and indirect employment opportunities for youth in transport and logistics.',
      highlight: 'Importation from USA and Europe',
      colorBorder: 'border-t-4 border-amber-500',
      badgeBg: 'bg-amber-100 text-amber-800',
    },
    {
      icon: <Building2 className="w-8 h-8 text-green-600" />,
      tag: 'Real Estate & Infrastructure',
      title: 'CEO, MY Eya Homes',
      description:
        'A renowned real estate development firm in Nigeria delivering modern residential properties, commercial facilities, and architectural quality. Transforming housing accessibility with integrity and vision.',
      highlight: 'Nationwide Property Portfolio',
      colorBorder: 'border-t-4 border-green-600',
      badgeBg: 'bg-green-100 text-green-800',
    },
    {
      icon: <Users className="w-8 h-8 text-red-600" />,
      tag: 'Constituency Grassroots',
      title: 'Community Leader & Philanthropist',
      description:
        'Deep commitment to the people of Igbo Eze North and Udenu. Spearheading youth scholarships, community assistance initiatives, market development, and grassroots empowerment projects for years.',
      highlight: 'Grassroots Community Impact',
      colorBorder: 'border-t-4 border-red-600',
      badgeBg: 'bg-red-100 text-red-800',
    },
  ];

  return (
    <Section id="leadership" className="bg-slate-50 relative overflow-hidden py-16 md:py-24">
      <div className="text-center mb-14">
        <span className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-700 font-display font-extrabold text-xs uppercase tracking-wider mb-3">
          Proven Private Sector Track Record
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4">
          A Leader With Tangible Results
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Hon. Chinedu Eya is not a career politician making empty promises. He is an accomplished entrepreneur and employer of labor bringing practical business competence to the Federal House of Assembly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {credentials.map((item, idx) => (
          <div
            key={idx}
            className={`card p-8 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 ${item.colorBorder} flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center shadow-inner">
                  {item.icon}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.badgeBg}`}>
                  {item.highlight}
                </span>
              </div>

              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                {item.tag}
              </span>
              <h3 className="font-display font-black text-xl text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
              Verified Enterprise Leadership
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── 9 Agenda Priorities ─────────────────────────────────────────────────────

function AgendaSection() {
  const iconsMap: Record<string, React.ReactNode> = {
    'youth-empowerment': <Briefcase className="w-6 h-6 text-red-600" />,
    'education': <GraduationCap className="w-6 h-6 text-amber-500" />,
    'healthcare': <Stethoscope className="w-6 h-6 text-green-600" />,
    'agriculture': <Wheat className="w-6 h-6 text-amber-600" />,
    'infrastructure': <Compass className="w-6 h-6 text-blue-600" />,
    'electricity': <Lightbulb className="w-6 h-6 text-yellow-500" />,
    'women-empowerment': <Users className="w-6 h-6 text-pink-600" />,
    'security': <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    'transparency': <Landmark className="w-6 h-6 text-purple-600" />,
  };

  return (
    <Section id="agenda" className="bg-white py-16 md:py-24">
      <div className="text-center mb-14">
        <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-800 font-display font-extrabold text-xs uppercase tracking-wider mb-3">
          Our Vision For Federal Representation
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4">
          Legislative Agenda For Real Change
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
          Nine comprehensive pillars designed to bring federal presence, capital infrastructure, and social investments directly to Igbo Eze North and Udenu.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {agendaPriorities.map((item) => (
          <div
            key={item.id}
            className="card p-7 bg-slate-50/70 border border-slate-200/80 hover:border-red-500/40 hover:bg-white transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              {iconsMap[item.id] || <Sparkles className="w-6 h-6 text-red-600" />}
            </div>
            <h3 className="font-display font-extrabold text-lg text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
              {item.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              {item.summary}
            </p>
            <div className="text-xs font-semibold text-green-700 bg-green-50 rounded-lg p-2.5">
              {item.details}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/agenda" className="btn btn-party btn-lg">
          <span>Read Full Manifesto</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </Section>
  );
}

// ─── Constituency Snapshot ───────────────────────────────────────────────────

function ConstituencySection() {
  return (
    <Section id="constituency" className="bg-slate-900 text-white relative overflow-hidden py-16 md:py-24">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center mb-14 relative z-10">
        <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-amber-300 font-display font-extrabold text-xs uppercase tracking-wider mb-3">
          Our Communities
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
          Igbo Eze North / Udenu Federal Constituency
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
          Two proud Local Government Areas united by enterprise, agriculture, and culture. Hon. Chinedu Eya is committed to serving every town and ward equally.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {constituency.lgas.map((lga, i) => (
          <div
            key={lga.name}
            className={`rounded-2xl p-8 backdrop-blur-md border ${
              i === 0
                ? 'bg-gradient-to-br from-red-950/40 via-slate-900/90 to-slate-900 border-red-500/30'
                : 'bg-gradient-to-br from-green-950/40 via-slate-900/90 to-slate-900 border-green-500/30'
            } shadow-2xl`}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-amber-400">
                  Local Government Area
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                  {lga.name}
                </h3>
              </div>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-slate-200">
                HQ: {lga.headquarters}
              </span>
            </div>

            <p className="text-slate-300 text-sm mb-6">
              Major towns and commercial communities in {lga.name}:
            </p>

            <div className="flex flex-wrap gap-2.5 mb-6">
              {lga.towns.map((town) => (
                <span
                  key={town}
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 text-white border border-white/10 hover:border-amber-400 hover:text-amber-300 transition-colors"
                >
                  {town}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>Federal House of Assembly Representation</span>
              <span className="text-amber-300 font-bold">100% Inclusive</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 relative z-10">
        <Link href="/constituency" className="btn btn-outline-white btn-lg">
          <span>Explore All Communities and Wards</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </Section>
  );
}

// ─── Volunteer Banner ────────────────────────────────────────────────────────

function VolunteerBanner() {
  const { t } = useLocale();

  return (
    <section className="relative bg-gradient-to-r from-green-700 via-emerald-600 to-green-800 text-white py-16 md:py-20 overflow-hidden shadow-2xl">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-6">
          <Sparkles className="w-4 h-4 text-amber-300" />
          Grassroots Mobilization
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black mb-4">
          Join The Movement For Real Representation
        </h2>

        <p className="text-white/90 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Victory is built by ordinary citizens coming together. Whether as a ward coordinator, youth mobilizer, digital campaigner, or polling unit agent, your voice makes the difference.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/get-involved" className="btn btn-white btn-lg font-black text-slate-900 shadow-xl">
            <Users className="w-5 h-5 text-green-700" />
            <span>Sign Up As Volunteer</span>
          </Link>
          <Link href="/donate" className="btn btn-party btn-lg shadow-xl">
            <Heart className="w-5 h-5 fill-white" />
            <span>Donate To The Campaign</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Donation Band ───────────────────────────────────────────────────────────

function DonationBanner() {
  return (
    <section className="bg-gradient-to-r from-red-700 via-red-600 to-amber-600 text-white py-14 md:py-18 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <span className="inline-block px-4 py-1 rounded-full bg-black/20 text-white font-display font-extrabold text-xs uppercase tracking-wider mb-4">
          Direct Campaign Contribution
        </span>

        <h2 className="font-display text-3xl sm:text-4xl font-black mb-3">
          Power The Grassroots Campaign
        </h2>

        <p className="text-white/90 text-sm sm:text-base mb-8 max-w-xl mx-auto">
          Every naira directly funds ward mobilization, voter education toolkits, and civic outreach across Igbo Eze North and Udenu.
        </p>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl max-w-lg mx-auto border border-white/20 mb-8 text-left">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
            <span className="text-xs uppercase font-bold text-amber-200">Bank Name</span>
            <span className="font-bold text-sm text-white">{donation.bankName}</span>
          </div>
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
            <span className="text-xs uppercase font-bold text-amber-200">Account Name</span>
            <span className="font-bold text-sm text-white">{donation.accountName}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase font-bold text-amber-200">Account Number</span>
            <span className="font-mono font-black text-lg text-amber-300 tracking-wider">{donation.accountNumber}</span>
          </div>
        </div>

        <Link href="/donate" className="btn btn-white btn-lg text-red-600 font-extrabold shadow-xl">
          <Heart className="w-5 h-5 fill-red-600" />
          <span>Contribute Online & View Donation Tiers</span>
        </Link>
      </div>
    </section>
  );
}

// ─── Direct WhatsApp & Newsletter ────────────────────────────────────────────

function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 600);
  };

  return (
    <Section id="connect" className="bg-slate-100 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <span className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-700 font-display font-extrabold text-xs uppercase tracking-wider mb-3">
          Stay Connected
        </span>
        <h2 className="font-display text-3xl font-black text-slate-900 mb-3">
          Get Direct Campaign Updates
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mb-8">
          Join thousands of constituents receiving weekly updates on legislative plans, community town halls, and constituency empowerment schemes.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="form-input flex-1 shadow-sm"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="btn btn-primary px-8"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>

        {status === 'success' && (
          <p className="text-green-700 font-bold text-sm mb-4">
            Thank you for subscribing to Hon. Chinedu Eya campaign updates.
          </p>
        )}

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-slate-200">
          <span className="text-slate-500 text-sm font-medium">Or join our WhatsApp channel:</span>
          <a
            href={socials.whatsappChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Join Campaign WhatsApp</span>
          </a>
        </div>
      </div>
    </Section>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CampaignTicker />
      <LeadershipShowcase />
      <AgendaSection />
      <ConstituencySection />
      <VolunteerBanner />
      <DonationBanner />
      <NewsletterSection />
    </>
  );
}
