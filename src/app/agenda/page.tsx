/**
 * ============================================================================
 * AGENDA PAGE: Manifesto Pillars & Legislative Action Plan
 * ============================================================================
 * Labour Party Theme, animated accordion cards, and zero hyphens.
 */
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart, Download, ChevronDown, ChevronUp, Users,
  FileText, CheckCircle, ArrowRight, Calendar, MapPin,
  Sparkles, ShieldCheck, Briefcase, GraduationCap,
  Stethoscope, Wheat, Compass, Lightbulb, Landmark
} from 'lucide-react';
import { agendaPriorities, candidate } from '@/config/site.config';
import { useLocale } from '@/context/LocaleContext';
import Section from '@/components/ui/Section';

export default function AgendaPage() {
  const { t, locale } = useLocale();

  return (
    <>
      {/* Hero */}
      <section className="relative gradient-hero pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-red-600/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-600/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-amber-300 mb-4 border border-white/15">
              <Sparkles className="w-4 h-4" />
              Federal Legislative Blueprint
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
              Our Agenda For Real Change
            </h1>

            <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              A comprehensive policy manifesto to revitalize <strong className="text-white">Igbo Eze North / Udenu Federal Constituency</strong> through quality representation, job creation, and federal infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Priority Pillars */}
      <Section className="bg-slate-50 py-16 md:py-24">
        <div className="text-center mb-14">
          <span className="text-xs uppercase font-extrabold tracking-wider text-green-700 block mb-2">
            Nine Pillars of Growth
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 mb-4">
            Legislative Priority Commitments
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Click any priority below to inspect our detailed policy action plan and tangible delivery targets.
          </p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {agendaPriorities.map((priority) => (
            <AgendaCard key={priority.id} priority={priority} locale={locale} />
          ))}
        </div>
      </Section>

      {/* Accountable Representation */}
      <Section className="bg-white py-16 md:py-24">
        <div className="text-center mb-14">
          <span className="text-xs uppercase font-extrabold tracking-wider text-red-600 block mb-2">
            Our Social Contract
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 mb-4">
            How Hon. Chinedu Eya Will Represent You
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Concrete guarantees of accessible, accountable, and transparent representation in the Federal House of Assembly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="card p-7 text-center border-t-4 border-red-600 bg-slate-50/70 hover:bg-white transition-all shadow-md">
            <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-5 shadow-sm">
              <Calendar className="w-7 h-7" />
            </div>
            <h3 className="font-display font-black text-xl text-slate-900 mb-2">Quarterly Town Halls</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Mandatory quarterly assemblies hosted rotationally across Igbo Eze North and Udenu to report back to constituents and take direct input on pending bills.
            </p>
          </div>

          <div className="card p-7 text-center border-t-4 border-green-600 bg-slate-50/70 hover:bg-white transition-all shadow-md">
            <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center mx-auto mb-5 shadow-sm">
              <MapPin className="w-7 h-7" />
            </div>
            <h3 className="font-display font-black text-xl text-slate-900 mb-2">Open Liaison Offices</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Fully staffed constituency liaison offices in Enugu Ezike and Obollo Afor, operating weekly to attend to citizen petitions and scholarship processing.
            </p>
          </div>

          <div className="card p-7 text-center border-t-4 border-amber-500 bg-slate-50/70 hover:bg-white transition-all shadow-md">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-5 shadow-sm">
              <FileText className="w-7 h-7" />
            </div>
            <h3 className="font-display font-black text-xl text-slate-900 mb-2">Published Reports</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Open digital and print distribution of legislative scorecards, detailing bills sponsored, motions moved, and projects attracted to our wards.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Band */}
      <section className="bg-gradient-to-r from-red-600 via-amber-500 to-green-600 py-14 text-center text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl md:text-4xl font-black mb-4">
            Support This Legislative Vision
          </h2>
          <p className="text-white/95 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Help us elect Hon. Chinedu Eya to deliver these practical solutions for Igbo Eze North and Udenu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved" className="btn btn-white btn-lg text-slate-900 font-black shadow-xl">
              <Users className="w-5 h-5 text-green-700" />
              <span>Volunteer For The Campaign</span>
            </Link>
            <Link href="/donate" className="btn btn-party btn-lg shadow-xl">
              <Heart className="w-5 h-5 fill-white" />
              <span>Support With A Donation</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Expandable Agenda Card ──────────────────────────────────────────────────

function AgendaCard({ priority, locale }: { priority: typeof agendaPriorities[0]; locale: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const title = locale === 'ig' ? priority.titleIgbo : priority.title;

  return (
    <div className="card overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-4 p-5 sm:p-6 text-left hover:bg-slate-50 transition-colors"
        aria-expanded={isOpen}
      >
        <div className="text-3xl flex-shrink-0 p-2 rounded-xl bg-slate-100">{priority.icon}</div>
        <div className="flex-1">
          <h3 className="font-display font-extrabold text-lg text-slate-900">{title}</h3>
          <p className="text-slate-600 text-sm mt-1">{priority.summary}</p>
        </div>
        <div className="text-slate-400 flex-shrink-0 p-2 rounded-full hover:bg-slate-200 transition-colors">
          {isOpen ? <ChevronUp className="w-5 h-5 text-red-600" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-3 border-t border-slate-100 bg-slate-50/80">
              <p className="text-xs uppercase font-extrabold tracking-wider text-green-700 mb-2">
                Action Plan & Implementation
              </p>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {priority.details}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
