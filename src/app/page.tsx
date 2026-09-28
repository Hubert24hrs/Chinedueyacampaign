/**
 * ============================================================================
 * HOME PAGE: Hon. Chinedu Eya Campaign Landing Page
 * ============================================================================
 * World-Class USA & European Political Campaign Style
 * Labour Party Theme (Red, Green, Gold, White)
 * Authoritative typography, high-impact ActBlue-style donation card,
 * executive candidate editorial profile, and vibrant green constituency headings.
 * ============================================================================
 */
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Heart, Users, ArrowRight, ChevronRight,
  Sparkles, Target, Trophy, Building2, Car,
  ShieldCheck, Globe2, Briefcase, CheckCircle2,
  GraduationCap, Stethoscope, Wheat, Compass,
  Lightbulb, Landmark, MessageSquare, Send, Copy,
  Quote, MapPin, Calendar, Phone, Award, Shield,
  CheckCircle, ArrowUpRight
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
    'CEO SUSKII GROUP OF COMPANIES (P2P MARKETPLACE & ERRANDS)',
    'CEO MY EYA HOMES',
    'CEO EYA AUTOS (USA & EUROPE AUTO IMPORTS)',
    'GRASSROOTS AI TRAINING & YOUTH EMPOWERMENT',
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
    <section className="relative min-h-[92vh] flex items-center gradient-hero overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-red-600/30 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-600/30 rounded-full blur-3xl animate-float-reverse pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Authoritative Campaign Header & Message (7 cols) */}
          <div className="lg:col-span-7 text-left animate-fade-in-up">
            {/* Top Official Election Badge */}
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 mb-5 border border-white/20 shadow-lg">
              <div className="w-7 h-7 rounded-full bg-white overflow-hidden relative flex-shrink-0 p-0.5 shadow-sm">
                <Image
                  src={candidate.party.logo}
                  alt={candidate.party.name}
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <span className="text-white font-extrabold tracking-wide">
                  {candidate.party.name}
                </span>
                <span className="px-2 py-0.5 bg-red-600 text-white text-[10px] font-black rounded-full uppercase">
                  {candidate.party.abbreviation}
                </span>
                <span className="text-amber-300 font-bold hidden sm:inline">
                  • 2027 Election
                </span>
              </div>
            </div>

            {/* Candidate Identity */}
            <div className="mb-4">
              <span className="text-amber-400 font-display font-black text-xs sm:text-sm uppercase tracking-widest block mb-1">
                For Member, Federal House of Assembly
              </span>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white leading-[1.05] tracking-tight">
                HON. CHINEDU <span className="text-gradient">EYA</span>
              </h1>
              <p className="text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider mt-2">
                Igbo Eze North / Udenu Federal Constituency • Enugu State
              </p>
            </div>

            {/* Official Campaign Slogan */}
            <div className="inline-block bg-white/10 backdrop-blur-sm border-l-4 border-green-500 px-4 py-2 rounded-r-xl mb-5">
              <p className="text-lg sm:text-2xl font-display font-black text-white">
                A New Voice. <span className="text-green-400">A Better Future.</span>
              </p>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-slate-200 mb-6 max-w-2xl leading-relaxed">
              Accomplished entrepreneur, employer of labor, and proven grassroots leader. Hon. Chinedu Eya is standing for the Federal House of Assembly to deliver accountable representation, youth technology jobs, agricultural wealth, and quality infrastructure to all 32 wards.
            </p>

            {/* Mobile Candidate Portrait Card: Displayed right in the flow on mobile */}
            <div className="block lg:hidden my-6">
              <div className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-2xl overflow-hidden border-4 border-white/30 shadow-2xl bg-slate-900">
                <Image
                  src={candidate.portrait}
                  alt={`${candidate.fullName}, Candidate for ${candidate.officeSought}`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
                <div className="absolute bottom-4 inset-x-4 text-left bg-black/70 backdrop-blur-md p-3.5 rounded-xl border border-white/20">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-white font-display font-extrabold text-base">
                      {candidate.fullName}
                    </p>
                    <span className="px-2 py-0.5 bg-red-600 text-white font-bold text-[10px] rounded-md">
                      Labour Party (LP)
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
            </div>

            {/* 4 Proven Leadership Pillars Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 sm:mb-8 max-w-2xl">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 shadow-md">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center flex-shrink-0">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-blue-300 font-bold uppercase tracking-wider">CEO, Suskii Group</p>
                  <p className="text-xs text-slate-200">P2P Marketplace & Errands Hub</p>
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

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 shadow-md">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center flex-shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-amber-300 font-bold uppercase tracking-wider">CEO, EYA AUTOS</p>
                  <p className="text-xs text-slate-200">USA & Europe Auto Imports</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 shadow-md">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 text-red-300 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-red-300 font-bold uppercase tracking-wider">Grassroots Impact</p>
                  <p className="text-xs text-slate-200">AI Skills, Charity & Keke Grants</p>
                </div>
              </div>
            </div>

            {/* CTAs: Full width on phone, inline on tablet and desktop */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto">
              <Link href="/donate" className="btn btn-party btn-lg shimmer-sweep shadow-xl w-full sm:w-auto text-center justify-center font-black">
                <Heart className="w-5 h-5 fill-white" />
                <span>Chip In To The Campaign</span>
              </Link>
              <Link href="/get-involved" className="btn btn-secondary btn-lg shadow-xl w-full sm:w-auto text-center justify-center font-bold">
                <Users className="w-5 h-5" />
                <span>Join The Movement</span>
              </Link>
              <Link href="/agenda" className="btn btn-outline-white btn-lg w-full sm:w-auto text-center justify-center font-bold">
                <span>The Legislative Blueprint</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Countdown Timer */}
            <div className="max-w-lg w-full">
              <CountdownTimer />
            </div>
          </div>

          {/* Right Column: Presidential Portrait on Desktop (5 cols) */}
          <div className="hidden lg:block lg:col-span-5 relative animate-fade-in">
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
                <div className="absolute bottom-5 inset-x-5 text-left bg-black/70 backdrop-blur-md p-4 rounded-xl border border-white/20">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-white font-display font-extrabold text-lg sm:text-xl">
                      {candidate.fullName}
                    </p>
                    <span className="px-2 py-0.5 bg-red-600 text-white font-bold text-xs rounded-md">
                      Labour Party (LP)
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
                  <p className="text-[10px] uppercase font-bold tracking-wider text-amber-200">Proven Leadership</p>
                  <p className="text-xs font-black">Job Creator & CEO</p>
                </div>
              </div>

              {/* Floating Badge 2 (Bottom Right) */}
              <div className="absolute -bottom-3 -right-3 bg-green-600 text-white p-3 rounded-2xl shadow-xl border-2 border-white flex items-center gap-2 animate-float-reverse hidden sm:flex">
                <CheckCircle2 className="w-5 h-5 text-white" />
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-green-200">Representation</p>
                  <p className="text-xs font-black">100% Ward Inclusivity</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── ActBlue-Style Contribution Ribbon (Instant Grassroots Support) ─────────

function ActBlueContributionRibbon() {
  const [copied, setCopied] = useState(false);
  const [selectedTier, setSelectedTier] = useState<number | null>(100_000);

  const copyAccountNumber = async () => {
    try {
      await navigator.clipboard.writeText(donation.accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = donation.accountNumber;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="bg-slate-950 text-white py-12 border-y border-slate-800 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-red-950/40 rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Call to action */}
            <div className="lg:col-span-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-extrabold uppercase tracking-wider mb-3">
                <Heart className="w-3.5 h-3.5 fill-red-400" />
                Grassroots Campaign Finance
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3">
                Power The Movement Across 32 Wards
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Hon. Chinedu Eya is running a people powered campaign. Every contribution directly funds door to door voter education, grassroots town halls, and election day logistics.
              </p>

              {/* Quick Select Amounts */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
                {donation.suggestedAmounts.map((amt) => (
                  <Link
                    key={amt}
                    href={`/donate?amount=${amt}`}
                    className={`py-2.5 px-3 rounded-xl text-center font-display font-black text-sm transition-all border ${
                      selectedTier === amt
                        ? 'bg-red-600 text-white border-red-500 shadow-lg shadow-red-600/30 scale-105'
                        : 'bg-slate-800 text-slate-200 border-slate-700 hover:border-slate-500 hover:bg-slate-700'
                    }`}
                  >
                    ₦{amt.toLocaleString()}
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>100% Transparent • In full compliance with the Nigerian Electoral Act</span>
              </div>
            </div>

            {/* Right Column: Direct Bank Transfer Card (UBA) */}
            <div className="lg:col-span-6">
              <div className="bg-slate-950/80 rounded-2xl p-6 border-2 border-amber-500/40 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-600" />
                    <span className="font-display font-bold text-xs uppercase tracking-wider text-slate-300">
                      Official Campaign Bank Details
                    </span>
                  </div>
                  <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                    Direct Bank Transfer
                  </span>
                </div>

                <div className="space-y-3 mb-5">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Bank:</span>
                    <span className="font-bold text-white text-base">{donation.bankName}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Account Name:</span>
                    <span className="font-bold text-white text-base">{donation.accountName}</span>
                  </div>
                  <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider font-extrabold text-amber-300 block">
                        Account Number
                      </span>
                      <span className="font-mono font-black text-2xl text-white tracking-widest select-all">
                        {donation.accountNumber}
                      </span>
                    </div>

                    <button
                      onClick={copyAccountNumber}
                      className="btn btn-party btn-sm text-xs font-bold flex items-center justify-center gap-1.5 w-full sm:w-auto"
                      aria-label="Copy Account Number"
                    >
                      {copied ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-white" />
                          <span>Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-white" />
                          <span>Copy Account Number</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs">
                  <Link href="/donate" className="text-amber-400 hover:text-white transition-colors font-bold inline-flex items-center gap-1">
                    <span>View All Donation Tiers & Pledges</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <span className="text-slate-400">Verified by Campaign Org</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Editorial Feature: Meet Chinedu Eya ──────────────────────────────────────

function CandidateStory() {
  return (
    <Section id="about-preview" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Candidate Image Card with Editorial Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50 bg-slate-900">
              <Image
                src={candidate.portrait}
                alt={candidate.fullName}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 rounded-full bg-red-600 text-white font-extrabold text-xs uppercase tracking-wider inline-block mb-2">
                  The Candidate
                </span>
                <h3 className="font-display font-black text-2xl">{candidate.fullName}</h3>
                <p className="text-amber-300 text-sm font-semibold">{candidate.officeSought}</p>
              </div>
            </div>

            {/* Editorial Floating Quote Card */}
            <div className="absolute -bottom-6 -right-6 hidden sm:block bg-gradient-to-br from-slate-900 to-slate-950 text-white p-5 rounded-2xl shadow-2xl border border-slate-800 max-w-xs">
              <Quote className="w-8 h-8 text-amber-400 mb-2 opacity-80" />
              <p className="text-xs text-slate-200 italic leading-relaxed">
                Leadership is about tangible results that put food on tables and hope in hearts.
              </p>
              <p className="text-right text-[11px] font-black text-amber-300 mt-2">— Hon. Chinedu Eya</p>
            </div>
          </div>

          {/* Editorial Text Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-extrabold uppercase tracking-wider mb-4">
              <Award className="w-4 h-4 text-red-600" />
              Leadership With Integrity
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              From Private Sector Enterprise To Federal Public Service
            </h2>

            {/* Large Lead Quote */}
            <blockquote className="border-l-4 border-red-600 pl-4 py-1 mb-6 text-slate-800 text-lg sm:text-xl font-display font-bold leading-snug">
              &ldquo;Our people do not need empty political promises. They need real enterprise, digital skills, reliable infrastructure, and a representative who listens and delivers for every single community.&rdquo;
            </blockquote>

            <div className="space-y-4 text-slate-600 text-base leading-relaxed mb-8">
              <p>
                Hon. Chinedu Eya is not a career politician disconnected from the everyday struggles of our citizens. Born and raised with deep roots in our communities, he is a seasoned entrepreneur, job creator, and community advocate who has built thriving enterprises across Nigeria and abroad.
              </p>
              <p>
                Through his track record heading the <strong>Suskii Group of Companies</strong>, <strong>MY Eya Homes</strong>, and <strong>EYA AUTOS</strong>, he has proven that vision and execution create real economic wealth. Now, he brings that exact private sector dynamism to the National Assembly to fight for federal budgets, youth technological empowerment, and road corridors for Igbo Eze North and Udenu.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href="/about" className="btn btn-party btn-lg font-black shadow-xl">
                <span>Read Full Biography & Vision</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/constituency" className="btn btn-outline btn-lg font-bold">
                <span>Explore Constituency Map</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}

// ─── Business & Executive Showcase (The 4 Proven Pillars) ────────────────────

function LeadershipShowcase() {
  const credentials = [
    {
      icon: <Globe2 className="w-8 h-8 text-blue-600" />,
      tag: 'Digital Commerce & Services',
      title: 'CEO, Suskii Group of Companies',
      description:
        'Suskii Group comprises Suskii P2P Online Marketplace, an innovative platform where you can buy and sell anything seamlessly and securely, alongside Suskii Errands, a versatile service hub where all possible and available services can be professionally rendered.',
      highlight: 'P2P Market & Errands',
      colorBorder: 'border-t-4 border-blue-600',
      badgeBg: 'bg-blue-100 text-blue-800',
    },
    {
      icon: <Building2 className="w-8 h-8 text-green-600" />,
      tag: 'Real Estate & Infrastructure',
      title: 'CEO, MY Eya Homes',
      description:
        'A renowned real estate development firm in Nigeria delivering modern residential properties, commercial facilities, and architectural excellence across the nation while driving job creation, housing development, and urban planning.',
      highlight: 'Real Estate Development',
      colorBorder: 'border-t-4 border-green-600',
      badgeBg: 'bg-green-100 text-green-800',
    },
    {
      icon: <Car className="w-8 h-8 text-amber-500" />,
      tag: 'International Automobile Trade',
      title: 'CEO, EYA AUTOS',
      description:
        'A premier automobile enterprise specializing in the direct importation of top grade autos and cars from the United States and Europe into Nigeria. Renowned for integrity, verified vehicle documentation, and creating automotive jobs.',
      highlight: 'USA & Europe Auto Imports',
      colorBorder: 'border-t-4 border-amber-500',
      badgeBg: 'bg-amber-100 text-amber-800',
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-red-600" />,
      tag: 'Grassroots Community Impact',
      title: 'Philanthropy & Youth Empowerment',
      description:
        'Organizes cutting edge Artificial Intelligence (AI) and technology training for the people of Igbo Eze North and Udenu. Consistently provides charity to the needy and has donated numerous commercial tricycles (Keke) and motorcycles to empower indigenous youth with sustainable livelihoods.',
      highlight: 'AI Training & Youth Keke Grants',
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
          Four Pillars of Proven Leadership
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Hon. Chinedu Eya brings tangible business experience, digital innovation, and community philanthropy to federal legislative representation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

// ─── Grassroots Movement By The Numbers ──────────────────────────────────────

function CampaignStats() {
  const stats = [
    { number: '32', label: 'Electoral Wards', sub: 'Active Ward Coordinators Across LGAs' },
    { number: '100%', label: 'Inclusive Governance', sub: 'Equality for All Towns & Communities' },
    { number: '2', label: 'Local Governments', sub: 'Igbo Eze North & Udenu United' },
    { number: '1', label: 'United Mission', sub: 'Delivering Federal Presence To Our People' },
  ];

  return (
    <section className="bg-slate-950 text-white py-14 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          {stats.map((s, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <p className="font-display text-4xl sm:text-5xl font-black text-gradient mb-2">
                {s.number}
              </p>
              <p className="font-display font-bold text-base sm:text-lg text-white mb-1">
                {s.label}
              </p>
              <p className="text-xs text-slate-400">
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── The Legislative Blueprint / Agenda ──────────────────────────────────────

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
        <Link href="/agenda" className="btn btn-party btn-lg font-black shadow-xl">
          <span>Read Full Legislative Manifesto</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </Section>
  );
}

// ─── Constituency Snapshot (Preserving Green Headings) ─────────────────────────

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
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-green-400 mb-4" style={{ color: '#4ade80' }}>
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
                <h3 className="font-display font-black text-2xl sm:text-3xl text-green-400" style={{ color: '#4ade80' }}>
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
        <Link href="/constituency" className="btn btn-outline-white btn-lg font-bold">
          <span>Explore All Communities and Wards</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </Section>
  );
}

// ─── Grassroots Voices & Endorsements ────────────────────────────────────────

function GrassrootsVoices() {
  const testimonials = [
    {
      quote:
        'The free AI and computer technology training organized by Hon. Chinedu Eya changed the course of my career. He is investing in our future long before taking public office.',
      author: 'Chidubem O.',
      role: 'Software Developer & AI Trainee, Enugu Ezike',
    },
    {
      quote:
        'His donation of commercial tricycles (Keke) and motorcycles provided sustainable livelihoods to dozens of young men in our community who now feed their families with dignity.',
      author: 'Emeka U.',
      role: 'Youth Leader & Transport Beneficiary, Obollo Afor',
    },
    {
      quote:
        'Hon. Chinedu Eya understands real enterprise. A leader who has successfully created private sector jobs in Suskii and real estate knows how to attract federal jobs to our constituency.',
      author: 'Mrs. Ngozi E.',
      role: 'Market Traders Association Leader, Udenu',
    },
  ];

  return (
    <Section id="endorsements" className="bg-slate-50 py-16 md:py-24">
      <div className="text-center mb-14">
        <span className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-700 font-display font-extrabold text-xs uppercase tracking-wider mb-3">
          Community Testimonials
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4">
          Voices Across Our Constituency
        </h2>
        <p className="text-slate-600 max-w-xl mx-auto">
          Hear from students, transport workers, and community leaders whose lives have been touched by Hon. Chinedu Eya&apos;s grassroots leadership.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="card p-7 bg-white shadow-lg border border-slate-200/80 flex flex-col justify-between">
            <div>
              <Quote className="w-8 h-8 text-amber-500 mb-4 opacity-80" />
              <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <p className="font-display font-extrabold text-slate-900 text-base">{t.author}</p>
              <p className="text-xs text-red-600 font-semibold">{t.role}</p>
            </div>
          </div>
        ))}
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
          <Link href="/donate" className="btn btn-party btn-lg shadow-xl font-black">
            <Heart className="w-5 h-5 fill-white" />
            <span>Donate To The Campaign</span>
          </Link>
        </div>
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
            className="btn btn-primary px-8 font-bold"
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
          <span className="text-slate-500 text-sm font-medium">Or connect directly via WhatsApp:</span>
          <a
            href={socials.whatsappChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm font-bold"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp: {candidate.phone}</span>
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
      <ActBlueContributionRibbon />
      <CampaignTicker />
      <CandidateStory />
      <LeadershipShowcase />
      <CampaignStats />
      <AgendaSection />
      <ConstituencySection />
      <GrassrootsVoices />
      <VolunteerBanner />
      <NewsletterSection />
    </>
  );
}
