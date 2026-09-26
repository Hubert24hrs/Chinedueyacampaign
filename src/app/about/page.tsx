/**
 * ============================================================================
 * ABOUT PAGE: Biography, Business Ventures, Values, and Public Service
 * ============================================================================
 * Labour Party Theme, highly animated, zero hyphens.
 */
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Heart, GraduationCap, Briefcase, Users, Target,
  Star, ArrowRight, Quote, Calendar, Car, Building2,
  CheckCircle2, Sparkles, Shield, Compass, Landmark
} from 'lucide-react';
import { candidate } from '@/config/site.config';
import { useLocale } from '@/context/LocaleContext';
import Section from '@/components/ui/Section';

// ─── Career Milestones ───────────────────────────────────────────────────────

const timeline = [
  {
    year: 'Automobile Enterprise',
    title: 'Founder & CEO, Suskii Group of Companies',
    description: 'Established Suskii Group of Companies, an international automobile dealership importing top grade motor vehicles from the United States and European nations directly to Nigeria, creating substantial youth employment in logistics and automotive commerce.',
    icon: <Car className="w-5 h-5 text-amber-500" />,
  },
  {
    year: 'Real Estate Growth',
    title: 'CEO, MY Eya Homes',
    description: 'Founded and expanded MY Eya Homes into a renowned real estate development company in Nigeria, developing residential communities, commercial properties, and creating hundreds of construction and architectural jobs.',
    icon: <Building2 className="w-5 h-5 text-green-600" />,
  },
  {
    year: 'Commercial Expansion',
    title: 'Diversified Business Leadership',
    description: 'Expanded commercial footprint across transport, vehicle spare parts importation, and property acquisition, building reputable business relationships across North America, Europe, and Nigeria.',
    icon: <Target className="w-5 h-5 text-red-600" />,
  },
  {
    year: 'Community Impact',
    title: 'Grassroots Philanthropy & Youth Support',
    description: 'Invested personal resources into community development, providing tuition scholarships for indigent students, medical assistance for families, and vocational training across Igbo Eze North and Udenu.',
    icon: <Users className="w-5 h-5 text-amber-600" />,
  },
  {
    year: 'Public Service',
    title: 'Federal House of Assembly Candidate',
    description: 'Answering the call of the people to contest for the Federal House of Assembly representing Igbo Eze North / Udenu Constituency on the platform of the Labour Party, dedicated to bringing federal projects and economic vitality home.',
    icon: <Landmark className="w-5 h-5 text-green-600" />,
  },
];

// ─── Values ──────────────────────────────────────────────────────────────────

const values = [
  {
    title: 'Integrity',
    description: 'Honesty and open transparency in handling public matters, legislative responsibilities, and constituency welfare funds.',
    icon: '🛡️',
  },
  {
    title: 'People First',
    description: 'Leadership dedicated solely to the progress of the people rather than selfish personal enrichment.',
    icon: '🤝',
  },
  {
    title: 'Total Inclusivity',
    description: 'Ensuring every community member, including women, youth, artisans, and elders, has a direct voice in governance.',
    icon: '🌍',
  },
  {
    title: 'Economic Innovation',
    description: 'Bringing real private sector experience to sponsor bills that promote small businesses, agriculture, and youth tech jobs.',
    icon: '💡',
  },
  {
    title: 'Accountability',
    description: 'Hosting regular open town hall meetings across all wards and publishing transparent legislative progress reports.',
    icon: '📊',
  },
  {
    title: 'Compassion',
    description: 'A genuine devotion to lifting the vulnerable and ensuring affordable healthcare, clean water, and good roads for all.',
    icon: '❤️',
  },
];

export default function AboutPage() {
  const { t } = useLocale();

  return (
    <>
      {/* Hero */}
      <section className="relative gradient-hero pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        {/* Glow orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-red-600/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-600/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-amber-300 mb-4 border border-white/15">
                <Sparkles className="w-4 h-4" />
                Meet The Candidate
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
                Hon. Chinedu <span className="text-gradient">Eya</span>
              </h1>

              <p className="text-xl sm:text-2xl font-bold text-amber-400 mb-4">
                Member, Federal House of Assembly Candidate
              </p>

              <p className="text-slate-200 text-base sm:text-lg max-w-xl leading-relaxed mb-6">
                A visionary entrepreneur, employer of labor, and community advocate running on the platform of the Labour Party to represent Igbo Eze North / Udenu Constituency.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold border border-white/20">
                  CEO, Suskii Group
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold border border-white/20">
                  CEO, MY Eya Homes
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-red-600 text-white text-xs font-bold">
                  Labour Party (LP)
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl bg-slate-900">
                <Image
                  src={candidate.portrait}
                  alt={candidate.fullName}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-display font-extrabold text-lg">{candidate.fullName}</p>
                  <p className="text-amber-400 text-xs font-bold">Igbo Eze North / Udenu Constituency</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Biography Section */}
      <Section id="biography" className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-extrabold tracking-wider text-red-600 block mb-2">
              Life and Leadership Journey
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900">
              Biography of Hon. Chinedu Eya
            </h2>
          </div>

          <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
            <p className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <strong className="text-slate-900 font-bold">Hon. Chinedu Eya</strong> is an accomplished business leader, job creator, and dedicated son of Igbo Eze North and Udenu. Raised with the cultural values of hard work, respect, and community solidarity, he has continually demonstrated that true greatness is measured by service to others.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200">
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center mb-4 shadow-md">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                  CEO, Suskii Group of Companies
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  As head of Suskii Group, Hon. Eya established a prominent international automobile dealership importing top quality motor vehicles from the United States and European nations into Nigeria. His business acumen created jobs for drivers, mechanics, clearing agents, and retail sales staff.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
                <div className="w-12 h-12 rounded-xl bg-green-600 text-white flex items-center justify-center mb-4 shadow-md">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                  CEO, MY Eya Homes
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Through MY Eya Homes, he has built a respected real estate enterprise providing high quality housing and infrastructure across Nigeria. He understands land planning, architectural execution, and how to create wealth through sound property development.
                </p>
              </div>
            </div>

            <p>
              Recognizing that the people of Igbo Eze North and Udenu have long suffered from inadequate federal infrastructure, bad roads, and limited youth opportunities, Hon. Chinedu Eya stepped forward into public service. He is contesting for the <strong className="text-slate-900 font-bold">Federal House of Assembly</strong> on the Labour Party platform to ensure our federal constituency gets its rightful share of national budgets, health clinics, and educational resources.
            </p>
          </div>
        </div>
      </Section>

      {/* Values & Principles */}
      <Section className="bg-slate-50 py-16 md:py-24">
        <div className="text-center mb-14">
          <span className="text-xs uppercase font-extrabold tracking-wider text-green-700 block mb-2">
            Guiding Philosophy
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 mb-4">
            Core Values That Drive Our Campaign
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            The firm principles guiding Hon. Chinedu Eya in business, community life, and legislative representation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value) => (
            <div key={value.title} className="card p-7 bg-white hover:border-red-500/30 shadow-md hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">{value.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Career & Service Timeline */}
      <Section className="bg-white py-16 md:py-24">
        <div className="text-center mb-14">
          <span className="text-xs uppercase font-extrabold tracking-wider text-amber-600 block mb-2">
            Proven Journey
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 mb-4">
            Milestones of Enterprise and Community
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            From humble beginnings to commercial success and community dedication.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {timeline.map((item, i) => (
            <div key={i} className="relative flex gap-3.5 sm:gap-5 pb-8 sm:pb-10 last:pb-0">
              {i < timeline.length - 1 && (
                <div className="absolute left-5 sm:left-6 top-12 sm:top-14 bottom-0 w-0.5 bg-slate-200" />
              )}
              
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-50 border-2 border-slate-200 flex items-center justify-center flex-shrink-0 z-10 shadow-sm">
                {item.icon}
              </div>

              <div className="flex-1 pt-0.5 sm:pt-1">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-black bg-red-100 text-red-700 mb-2">
                  {item.year}
                </span>
                <h3 className="font-display font-black text-lg sm:text-xl text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Personal Message */}
      <Section className="bg-slate-950 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Quote className="w-14 h-14 text-amber-400/80 mx-auto mb-6" />
          
          <h2 className="font-display text-3xl sm:text-4xl font-black mb-6">
            A Personal Message To Every Constituent
          </h2>

          <blockquote className="text-slate-200 text-lg sm:text-xl leading-relaxed italic mb-8">
            &ldquo;To the good people of Igbo Eze North and Udenu: I come before you not as a typical politician, but as a son of this soil, an employer of labor, and a fellow citizen who understands your everyday struggles. I know what it means to build something from scratch. If you give me the privilege of your mandate, I will be an energetic voice in the Federal House of Assembly, speaking up for the youth in Enugu Ezike, the trader in Obollo Afor, the farmer in Ibagwa, and every family across our communities. Together we will bring real progress home.&rdquo;
          </blockquote>

          <p className="text-amber-400 font-display font-black text-lg">
            Hon. Chinedu Eya
          </p>
          <p className="text-slate-400 text-xs uppercase tracking-widest mt-1">
            Labour Party Candidate, Federal House of Assembly
          </p>
        </div>
      </Section>

      {/* Bottom CTA Banner */}
      <section className="bg-gradient-to-r from-red-600 via-amber-500 to-green-600 py-14 text-center text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl md:text-4xl font-black mb-4">
            Support The Campaign For Real Progress
          </h2>
          <p className="text-white/95 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Stand with Hon. Chinedu Eya as we bring dedicated representation to the Federal House of Assembly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
            <Link href="/get-involved" className="btn btn-white btn-lg text-slate-900 font-black shadow-xl w-full sm:w-auto text-center justify-center">
              <Users className="w-5 h-5 text-green-700" />
              <span>Volunteer For The Campaign</span>
            </Link>
            <Link href="/donate" className="btn btn-party btn-lg shadow-xl w-full sm:w-auto text-center justify-center">
              <Heart className="w-5 h-5 fill-white" />
              <span>Make A Campaign Donation</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
