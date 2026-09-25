/**
 * ============================================================================
 * CONSTITUENCY PAGE — Igbo Eze North & Udenu LGAs overview with SVG map
 * ============================================================================
 */
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Users, Heart, ArrowRight, AlertCircle } from 'lucide-react';
import { constituency, candidate } from '@/config/site.config';
import { useLocale } from '@/context/LocaleContext';
import Section from '@/components/ui/Section';

const localIssues = [
  { issue: 'Road Infrastructure', description: 'Many roads connecting communities are in poor condition, making travel difficult and limiting economic activity. {{TO_VERIFY_WITH_CLIENT}}', action: 'Advocate for federal road projects and constituency intervention fund allocation for road rehabilitation.' },
  { issue: 'Healthcare Access', description: 'Primary healthcare centres in several wards are understaffed and poorly equipped. {{TO_VERIFY_WITH_CLIENT}}', action: 'Push for funding and staffing of PHCs across both LGAs.' },
  { issue: 'Youth Unemployment', description: 'High youth unemployment rate with limited vocational training and job opportunities. {{TO_VERIFY_WITH_CLIENT}}', action: 'Sponsor skills acquisition programmes and advocate for youth empowerment interventions.' },
  { issue: 'Water Supply', description: 'Many communities lack access to clean, potable water. {{TO_VERIFY_WITH_CLIENT}}', action: 'Facilitate borehole and water projects through constituency projects.' },
  { issue: 'Electricity', description: 'Irregular power supply hampers businesses and daily life. {{TO_VERIFY_WITH_CLIENT}}', action: 'Engage with the electricity distribution company and advocate for grid improvements.' },
  { issue: 'Education Quality', description: 'Schools need better infrastructure, qualified teachers, and learning materials. {{TO_VERIFY_WITH_CLIENT}}', action: 'Attract federal education interventions and sponsor scholarship programmes.' },
];

export default function ConstituencyPage() {
  const { t } = useLocale();

  return (
    <>
      {/* Hero */}
      <section className="relative gradient-hero pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">Our Constituency</h1>
            <p className="text-white/80 text-lg">The vibrant communities of Igbo Eze North and Udenu — the people we serve.</p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-dark mb-4">Igbo Eze North / Udenu Federal Constituency</h2>
          <p className="text-dark-muted text-lg leading-relaxed">
            Located in the northern senatorial district of Enugu State, our constituency comprises two Local Government Areas — Igbo Eze North and Udenu. Rich in culture, agriculture, and community spirit, our people deserve quality representation that transforms their daily lives.
          </p>
        </div>

        {/* LGA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {constituency.lgas.map((lga) => (
            <div key={lga.name} className="card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary-light text-secondary flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-dark">{lga.name} LGA</h3>
                  <p className="text-dark-muted text-sm">Headquarters: {lga.headquarters}</p>
                </div>
              </div>
              <h4 className="font-display font-semibold text-sm text-dark mb-3 uppercase tracking-wider">Communities & Towns</h4>
              <div className="flex flex-wrap gap-2">
                {lga.towns.map((town) => (
                  <span key={town} className="px-3 py-1.5 bg-surface-muted text-dark-muted text-sm rounded-full hover:bg-secondary-light hover:text-secondary transition-colors cursor-default">
                    {town}
                  </span>
                ))}
              </div>
              <p className="text-xs text-dark-muted mt-4 italic">
                {`{{TO_VERIFY_WITH_CLIENT: Confirm complete list of towns and wards.}}`}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Stylised Map */}
      <Section className="bg-surface-elevated">
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl font-bold text-dark mb-4">Our Location</h2>
        </div>
        <div className="max-w-lg mx-auto">
          <ConstituencyMap />
        </div>
      </Section>

      {/* Local Issues */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-dark mb-4">Local Issues & Our Response</h2>
          <p className="text-dark-muted max-w-xl mx-auto">The challenges our communities face and how Hon. Chinedu Eya plans to address them.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {localIssues.map((item, i) => (
            <div key={i} className="card p-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="w-5 h-5 text-primary" />
                <h3 className="font-display font-bold text-base text-dark">{item.issue}</h3>
              </div>
              <p className="text-dark-muted text-sm mb-3">{item.description}</p>
              <div className="flex items-start gap-2 p-3 bg-secondary-light/50 rounded-lg">
                <ArrowRight className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <p className="text-secondary-dark text-xs font-medium">{item.action}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">Let&apos;s Build Our Constituency Together</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved" className="btn btn-white btn-lg"><Users className="w-5 h-5" /> Join the Movement</Link>
            <Link href="/donate" className="btn btn-lg bg-white/20 text-white border-2 border-white/30 hover:bg-white/30"><Heart className="w-5 h-5" /> Support the Campaign</Link>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── SVG Constituency Map ────────────────────────────────────────────────────

function ConstituencyMap() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-auto" role="img" aria-label="Stylised map of Igbo Eze North and Udenu LGAs">
      <title>Igbo Eze North / Udenu Federal Constituency</title>
      {/* Background */}
      <rect width="400" height="300" fill="#F1F5F9" rx="16" />
      
      {/* Enugu State outline (simplified) */}
      <path d="M 50 50 L 200 30 L 350 60 L 370 150 L 340 250 L 200 280 L 60 260 L 30 150 Z"
        fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1" />

      {/* Igbo Eze North LGA */}
      <path d="M 100 60 L 200 50 L 260 70 L 250 140 L 180 150 L 100 130 Z"
        fill="#DCFCE7" stroke="#16A34A" strokeWidth="2" className="hover:fill-secondary-light transition-colors cursor-pointer" />
      <text x="165" y="105" textAnchor="middle" className="fill-secondary-dark text-xs font-bold" fontFamily="var(--font-display)">
        Igbo Eze North
      </text>

      {/* Udenu LGA */}
      <path d="M 180 150 L 250 140 L 290 170 L 280 240 L 200 250 L 140 220 L 150 170 Z"
        fill="#FEE2E2" stroke="#DC2626" strokeWidth="2" className="hover:fill-primary-light transition-colors cursor-pointer" />
      <text x="210" y="200" textAnchor="middle" className="fill-primary-dark text-xs font-bold" fontFamily="var(--font-display)">
        Udenu
      </text>

      {/* Key towns */}
      <circle cx="150" cy="90" r="4" fill="#15803D" />
      <text x="150" y="82" textAnchor="middle" className="fill-dark text-[8px]" fontFamily="var(--font-body)">Enugu-Ezike</text>

      <circle cx="220" cy="190" r="4" fill="#B91C1C" />
      <text x="220" y="182" textAnchor="middle" className="fill-dark text-[8px]" fontFamily="var(--font-body)">Obollo-Afor</text>

      {/* Legend */}
      <rect x="20" y="265" width="10" height="10" fill="#DCFCE7" stroke="#16A34A" />
      <text x="35" y="274" className="fill-dark text-[9px]" fontFamily="var(--font-body)">Igbo Eze North</text>
      <rect x="130" y="265" width="10" height="10" fill="#FEE2E2" stroke="#DC2626" />
      <text x="145" y="274" className="fill-dark text-[9px]" fontFamily="var(--font-body)">Udenu</text>
    </svg>
  );
}
