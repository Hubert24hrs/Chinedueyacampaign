/**
 * ============================================================================
 * VOTER INFORMATION PAGE: PVC, polling unit, election day checklist
 * ============================================================================
 */
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Vote, ExternalLink, CheckSquare, MapPin, Bell, Calendar,
  CreditCard, Smartphone, Clock, AlertTriangle
} from 'lucide-react';
import { election, candidate } from '@/config/site.config';
import { useLocale } from '@/context/LocaleContext';
import CountdownTimer from '@/components/ui/CountdownTimer';
import Section from '@/components/ui/Section';

const electionDayChecklist = [
  { icon: <CreditCard className="w-5 h-5" />, text: 'Bring your Permanent Voter\'s Card (PVC)' },
  { icon: <Smartphone className="w-5 h-5" />, text: 'Know your polling unit location beforehand' },
  { icon: <Clock className="w-5 h-5" />, text: 'Arrive early, voting starts at 8:30 AM' },
  { icon: <CheckSquare className="w-5 h-5" />, text: 'Verify your name on the voter register at your polling unit' },
  { icon: <AlertTriangle className="w-5 h-5" />, text: 'Do NOT carry weapons, cameras for ballot, or prohibited items' },
  { icon: <Vote className="w-5 h-5" />, text: 'Vote for the Labour Party candidate: Hon. Chinedu Eya' },
  { icon: <MapPin className="w-5 h-5" />, text: 'Stay at the polling unit until results are announced' },
  { icon: <Bell className="w-5 h-5" />, text: 'Report any irregularities to election observers' },
];

export default function VoterInfoPage() {
  const { t } = useLocale();

  return (
    <>
      <section className="gradient-hero pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Vote className="w-12 h-12 text-accent mx-auto mb-4" />
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">{t('voter.title')}</h1>
            <p className="text-white/80 text-lg mb-8">Everything you need to know to vote on Election Day.</p>
            <CountdownTimer />
          </motion.div>
        </div>
      </section>

      {/* PVC and Polling Unit */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <a href={election.inecPvcPortal} target="_blank" rel="noopener noreferrer" className="card p-6 md:p-8 group hover:border-primary/30">
            <CreditCard className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-display font-bold text-xl text-dark mb-2 group-hover:text-primary transition-colors">{t('voter.pvc')}</h3>
            <p className="text-dark-muted text-sm mb-4">Check your PVC status or register for your Permanent Voter&apos;s Card on the official INEC portal.</p>
            <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold">
              Visit INEC Portal <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </a>

          <a href={election.inecPollingUnitFinder} target="_blank" rel="noopener noreferrer" className="card p-6 md:p-8 group hover:border-secondary/30">
            <MapPin className="w-10 h-10 text-secondary mb-4" />
            <h3 className="font-display font-bold text-xl text-dark mb-2 group-hover:text-secondary transition-colors">{t('voter.pollingUnit')}</h3>
            <p className="text-dark-muted text-sm mb-4">Find your assigned polling unit using INEC&apos;s official polling unit finder.</p>
            <span className="inline-flex items-center gap-1 text-secondary text-sm font-semibold">
              Find Polling Unit <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>
      </Section>

      {/* Election Day Checklist */}
      <Section className="bg-surface-elevated">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-dark mb-8 text-center">{t('voter.checklist')}</h2>
          <div className="space-y-3">
            {electionDayChecklist.map((item, i) => (
              <div key={i} className="card p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-light text-primary flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <p className="text-dark text-sm font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Reminder Signup */}
      <Section>
        <div className="max-w-xl mx-auto text-center">
          <Bell className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="font-display text-3xl font-bold text-dark mb-4">{t('voter.reminder')}</h2>
          <p className="text-dark-muted mb-8">Get a reminder before Election Day so you don&apos;t miss your vote.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); alert('Reminder feature coming soon!'); }}>
            <input type="tel" placeholder="Your phone number" className="form-input flex-1" />
            <button type="submit" className="btn btn-primary">Set Reminder</button>
          </form>
        </div>
      </Section>
    </>
  );
}
