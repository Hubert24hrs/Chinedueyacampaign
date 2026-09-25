/**
 * ============================================================================
 * AGENDA / MANIFESTO PAGE — Priority pillars with expandable detail
 * ============================================================================
 */
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart, Download, ChevronDown, ChevronUp, Users,
  FileText, CheckCircle, ArrowRight, Calendar, MapPin
} from 'lucide-react';
import { agendaPriorities, candidate } from '@/config/site.config';
import { useLocale } from '@/context/LocaleContext';
import Section from '@/components/ui/Section';

export default function AgendaPage() {
  const { t, locale } = useLocale();

  return (
    <>
      {/* Hero */}
      <section className="relative gradient-hero pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
              Our Agenda for Change
            </h1>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              A clear, actionable plan to transform the Igbo Eze North / Udenu Federal Constituency through quality representation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Priority Pillars */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-dark mb-4">
            Priority Pillars
          </h2>
          <p className="text-dark-muted max-w-xl mx-auto">
            These are the key areas where Hon. Chinedu Eya will focus his legislative efforts to bring real change to our constituency.
          </p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {agendaPriorities.map((priority) => (
            <AgendaCard key={priority.id} priority={priority} locale={locale} />
          ))}
        </div>
      </Section>

      {/* Downloadable Manifesto */}
      <Section className="bg-surface-elevated">
        <div className="max-w-xl mx-auto text-center">
          <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="font-display text-3xl font-bold text-dark mb-4">
            Download the Full Manifesto
          </h2>
          <p className="text-dark-muted mb-8">
            Read our detailed manifesto covering all policy positions and commitments to the constituency.
          </p>
          <button className="btn btn-primary btn-lg" disabled>
            <Download className="w-5 h-5" />
            Download Manifesto (PDF)
          </button>
          <p className="text-dark-muted text-xs mt-3">
            {/* {{TO_VERIFY_WITH_CLIENT: Upload final manifesto PDF}} */}
            Coming soon — manifesto document being finalised.
          </p>
        </div>
      </Section>

      {/* How I Will Represent You */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-dark mb-4">
            How I Will Represent You
          </h2>
          <p className="text-dark-muted max-w-xl mx-auto">
            Concrete commitments to transparent, accountable, and accessible representation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="card p-6 text-center border-t-4 border-t-primary">
            <Calendar className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display font-bold text-lg text-dark mb-2">Quarterly Town Halls</h3>
            <p className="text-dark-muted text-sm">
              Regular town hall meetings in both LGAs to hear from constituents, share legislative updates, and take your feedback directly.
            </p>
          </div>

          <div className="card p-6 text-center border-t-4 border-t-secondary">
            <MapPin className="w-8 h-8 text-secondary mx-auto mb-4" />
            <h3 className="font-display font-bold text-lg text-dark mb-2">Constituency Office</h3>
            <p className="text-dark-muted text-sm">
              A fully functional constituency office accessible to all residents — open for consultations, complaints, and community support.
            </p>
          </div>

          <div className="card p-6 text-center border-t-4 border-t-accent">
            <FileText className="w-8 h-8 text-accent mx-auto mb-4" />
            <h3 className="font-display font-bold text-lg text-dark mb-2">Quarterly Reports</h3>
            <p className="text-dark-muted text-sm">
              Published reports detailing legislative activities, bills sponsored, motions moved, and how constituency funds are utilised.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            Support This Agenda
          </h2>
          <p className="text-white/90 mb-6">
            Help us bring this vision to life for the people of Igbo Eze North and Udenu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved" className="btn btn-white btn-lg">
              <Users className="w-5 h-5" />
              {t('hero.cta.volunteer')}
            </Link>
            <Link href="/donate" className="btn btn-lg bg-white/20 text-white border-2 border-white/30 hover:bg-white/30">
              <Heart className="w-5 h-5" />
              {t('hero.cta.donate')}
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
    <div className="card overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-4 p-5 text-left hover:bg-surface-elevated transition-colors"
        aria-expanded={isOpen}
      >
        <div className="text-3xl flex-shrink-0">{priority.icon}</div>
        <div className="flex-1">
          <h3 className="font-display font-bold text-lg text-dark">{title}</h3>
          <p className="text-dark-muted text-sm mt-1">{priority.summary}</p>
        </div>
        <div className="text-dark-muted flex-shrink-0">
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
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
            <div className="px-5 pb-5 pt-2 border-t border-border">
              <p className="text-dark-muted text-sm leading-relaxed whitespace-pre-wrap">
                {priority.details}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
