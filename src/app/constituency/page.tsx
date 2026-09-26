/**
 * ============================================================================
 * CONSTITUENCY PAGE: Igbo Eze North & Udenu LGAs Overview
 * ============================================================================
 * Labour Party Theme, interactive community guide, and zero hyphens.
 */
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Users, Heart, ArrowRight, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { constituency, candidate } from '@/config/site.config';
import { useLocale } from '@/context/LocaleContext';
import Section from '@/components/ui/Section';

const localPriorities = [
  {
    issue: 'Interstate and Rural Roads',
    description: 'Federal road corridors connecting Enugu Ezike and Obollo Afor with agricultural markets need urgent rehabilitation to cut transit costs.',
    action: 'Sponsor federal road rehabilitation motions and lobby federal works ministries for asphalt resurfacing and bridge reconstruction.',
  },
  {
    issue: 'Primary Healthcare Revitalization',
    description: 'Ward healthcare dispensaries require diagnostic equipment, standby power, and regular supply of essential maternal medications.',
    action: 'Attract federal primary healthcare intervention funding and organize quarterly mobile medical missions to rural settlements.',
  },
  {
    issue: 'Youth Jobs & Digital Enterprise',
    description: 'Young graduates and school leavers need practical technical skills and seed finance to build sustainable enterprises.',
    action: 'Establish technology innovation centers, auto engineering workshops, and micro loan revolving grants for youth entrepreneurs.',
  },
  {
    issue: 'Clean Water Infrastructure',
    description: 'Several hilltop and rural communities experience severe water shortages during the dry season.',
    action: 'Deploy industrial solar powered boreholes and community water reticulation schemes across every council ward.',
  },
  {
    issue: 'Power Supply & Transformer Upgrades',
    description: 'Commercial hubs like Obollo Afor and Enugu Ezike need stable electricity to support cold storage and agro processing.',
    action: 'Facilitate the installation of high capacity transformers and promote community solar mini grids through federal agencies.',
  },
  {
    issue: 'Modern Agro Processing Facilities',
    description: 'High yields of cassava, palm oil, yam, and grains suffer post harvest losses without processing equipment.',
    action: 'Establish federal agro processing clusters to package and preserve local agricultural harvests for national markets.',
  },
];

export default function ConstituencyPage() {
  const { t } = useLocale();

  return (
    <>
      {/* Hero */}
      <section className="relative gradient-hero pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-red-600/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-600/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-amber-300 mb-4 border border-white/15">
              <MapPin className="w-4 h-4 text-green-400" />
              Constituency Profile
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
              Our Constituency
            </h1>
            <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              The vibrant communities of Igbo Eze North and Udenu, uniting proud cultural heritage, agricultural fertility, and energetic enterprise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview & LGA Cards */}
      <Section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs uppercase font-extrabold tracking-wider text-red-600 block mb-2">
            Federal Representation
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 mb-4">
            Igbo Eze North / Udenu Federal Constituency
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Situated in northern Enugu State, our federal constituency represents hundreds of thousands of resilient citizens across two dynamic Local Government Areas. Hon. Chinedu Eya is committed to ensuring every ward receives its rightful share of federal development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {constituency.lgas.map((lga, idx) => (
            <div
              key={lga.name}
              className={`card p-8 shadow-xl ${
                idx === 0 ? 'border-t-4 border-red-600 bg-red-50/20' : 'border-t-4 border-green-600 bg-green-50/20'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400">Local Government Area</span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900">{lga.name}</h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-slate-100 text-xs font-bold text-slate-700">
                  HQ: {lga.headquarters}
                </div>
              </div>

              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-500 mb-3">
                Key Communities & Commercial Towns
              </h4>

              <div className="flex flex-wrap gap-2 mb-6">
                {lga.towns.map((town) => (
                  <span
                    key={town}
                    className="px-3.5 py-1.5 bg-white text-slate-800 text-xs font-bold rounded-full border border-slate-200 shadow-sm"
                  >
                    {town}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-slate-600">
                <span>Inclusive Representation</span>
                <span className="text-green-700 font-bold">100% Ward Coverage</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Stylized Map Section */}
      <Section className="bg-slate-50 py-16 md:py-24">
        <div className="text-center mb-10">
          <span className="text-xs uppercase font-extrabold tracking-wider text-green-700 block mb-2">
            Constituency Geography
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 mb-4">
            Geographic Footprint
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Strategic gateway linking Enugu State to central Nigeria, commercial trade routes, and regional agricultural networks.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-white p-6 rounded-3xl shadow-xl border border-slate-200">
          <ConstituencyMap />
        </div>
      </Section>

      {/* Local Priorities Section */}
      <Section className="bg-white py-16 md:py-24">
        <div className="text-center mb-14">
          <span className="text-xs uppercase font-extrabold tracking-wider text-red-600 block mb-2">
            Key Local Priorities
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 mb-4">
            Community Needs & Our Solutions
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Direct issues raised by community leaders and youth groups, matched with actionable federal solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {localPriorities.map((item, i) => (
            <div key={i} className="card p-7 bg-slate-50 border border-slate-200 hover:border-red-500/40 transition-all shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                <h3 className="font-display font-extrabold text-lg text-slate-900">{item.issue}</h3>
              </div>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">{item.description}</p>
              <div className="p-3 bg-green-50 border border-green-200 rounded-xl">
                <p className="text-xs uppercase font-extrabold tracking-wider text-green-800 mb-1">Proposed Legislative Action</p>
                <p className="text-green-950 text-xs sm:text-sm font-medium">{item.action}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-red-600 via-amber-500 to-green-600 py-14 text-center text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl md:text-4xl font-black mb-4">
            Stand With Hon. Chinedu Eya
          </h2>
          <p className="text-white/95 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Together we will build a stronger, prosperous Igbo Eze North and Udenu Constituency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
            <Link href="/get-involved" className="btn btn-white btn-lg text-slate-900 font-black shadow-xl w-full sm:w-auto text-center justify-center">
              <Users className="w-5 h-5 text-green-700" />
              <span>Join Volunteer Movement</span>
            </Link>
            <Link href="/donate" className="btn btn-party btn-lg shadow-xl w-full sm:w-auto text-center justify-center">
              <Heart className="w-5 h-5 fill-white" />
              <span>Donate To The Campaign</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── SVG Constituency Map ────────────────────────────────────────────────────

function ConstituencyMap() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-auto" role="img" aria-label="Stylized map of Igbo Eze North and Udenu LGAs">
      <title>Igbo Eze North / Udenu Federal Constituency Map</title>
      <rect width="400" height="300" fill="#F8FAFC" rx="16" />

      {/* Background outline */}
      <path
        d="M 50 50 L 200 30 L 350 60 L 370 150 L 340 250 L 200 280 L 60 260 L 30 150 Z"
        fill="#E2E8F0"
        stroke="#CBD5E1"
        strokeWidth="1.5"
      />

      {/* Igbo Eze North LGA */}
      <path
        d="M 100 60 L 200 50 L 260 70 L 250 140 L 180 150 L 100 130 Z"
        fill="#DCFCE7"
        stroke="#16A34A"
        strokeWidth="2.5"
        className="hover:fill-green-200 transition-colors"
      />
      <text x="165" y="105" textAnchor="middle" className="fill-green-900 text-xs font-black" fontFamily="var(--font-display)">
        Igbo Eze North
      </text>

      {/* Udenu LGA */}
      <path
        d="M 180 150 L 250 140 L 290 170 L 280 240 L 200 250 L 140 220 L 150 170 Z"
        fill="#FEE2E2"
        stroke="#DC2626"
        strokeWidth="2.5"
        className="hover:fill-red-200 transition-colors"
      />
      <text x="210" y="200" textAnchor="middle" className="fill-red-900 text-xs font-black" fontFamily="var(--font-display)">
        Udenu
      </text>
    </svg>
  );
}
