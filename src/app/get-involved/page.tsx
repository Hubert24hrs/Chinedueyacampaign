/**
 * ============================================================================
 * GET INVOLVED PAGE: Volunteer, Mobilize, and Grassroots Coordination
 * ============================================================================
 * Labour Party Theme, animated cards, zero hyphens.
 */
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Users, Heart, Download, Share2, MessageCircle,
  Send, CheckCircle, ArrowRight, UserPlus, Megaphone,
  Sparkles, CheckCircle2
} from 'lucide-react';
import { candidate, constituency, socials } from '@/config/site.config';
import { useLocale } from '@/context/LocaleContext';
import Section from '@/components/ui/Section';

export default function GetInvolvedPage() {
  const { t } = useLocale();

  return (
    <>
      {/* Hero */}
      <section className="relative gradient-hero pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-green-600/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-600/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-green-300 mb-4 border border-white/15">
              <Users className="w-4 h-4" />
              People Powered Movement
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
              Join The Grassroots Campaign
            </h1>

            <p className="text-slate-200 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Real progress in Igbo Eze North and Udenu begins with you. Give your time, skills, and energy to elect Hon. Chinedu Eya to the Federal House of Assembly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Volunteer Form Section */}
      <Section id="volunteer-form" className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase font-extrabold tracking-wider text-green-700 block mb-2">
              Step Forward
            </span>
            <h2 className="font-display text-3xl font-black text-slate-900">
              Sign Up As A Campaign Volunteer
            </h2>
          </div>
          <VolunteerForm />
        </div>
      </Section>

      {/* Ward Coordinator Section */}
      <Section className="bg-white py-16 md:py-24">
        <div className="text-center mb-12">
          <span className="text-xs uppercase font-extrabold tracking-wider text-red-600 block mb-2">
            Local Leadership
          </span>
          <h2 className="font-display text-3xl font-black text-slate-900 mb-3">
            Lead Your Community or Ward
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Become an official ward coordinator or polling unit mobilization captain for Hon. Chinedu Eya.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <SupportGroupForm />
        </div>
      </Section>

      {/* Direct Social Channels */}
      <Section className="bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-xl mx-auto text-center relative z-10">
          <span className="text-xs uppercase font-extrabold tracking-wider text-amber-400 block mb-2">
            Real Time Mobilization
          </span>
          <h2 className="font-display text-3xl font-black text-white mb-4">
            Join Our Campaign Channels
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-8">
            Get instant updates on ward tours, youth rallies, and election day logistics.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={socials.whatsappChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg shadow-xl flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Join Official WhatsApp</span>
            </a>
            <a
              href={socials.telegramChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-party btn-lg shadow-xl flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              <span>Join Official Telegram</span>
            </a>
          </div>
        </div>
      </Section>

      {/* Donate CTA */}
      <section className="bg-gradient-to-r from-red-600 via-amber-500 to-green-600 py-14 text-center text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl md:text-4xl font-black mb-4">
            Support Our Outreach Financially
          </h2>
          <p className="text-white/95 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Your generous contribution funds flyers, community transport, and volunteer toolkits across all wards.
          </p>
          <Link href="/donate" className="btn btn-white btn-lg text-slate-900 font-black shadow-xl">
            <Heart className="w-5 h-5 text-red-600 fill-red-600" />
            <span>Make A Campaign Donation</span>
          </Link>
        </div>
      </section>
    </>
  );
}

// ─── Volunteer Form Component ────────────────────────────────────────────────

function VolunteerForm() {
  const { t } = useLocale();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  if (status === 'success') {
    return (
      <div className="card p-8 text-center bg-white shadow-xl border-2 border-green-500">
        <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="font-display text-2xl font-black text-slate-900 mb-2">
          Welcome To The Campaign
        </h3>
        <p className="text-slate-600 text-sm">
          Thank you for signing up to volunteer for Hon. Chinedu Eya. Our ward mobilization director will contact you via WhatsApp shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-8 bg-white shadow-xl border border-slate-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
          <UserPlus className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-display font-black text-xl text-slate-900">Volunteer Application</h3>
          <p className="text-xs text-slate-500">Igbo Eze North / Udenu Federal Constituency</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
            Full Name *
          </label>
          <input name="fullName" type="text" required className="form-input" placeholder="e.g. Emeka Ugwu" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              Phone Number *
            </label>
            <input name="phone" type="tel" required className="form-input" placeholder="0803 000 0000" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              WhatsApp Number
            </label>
            <input name="whatsapp" type="tel" className="form-input" placeholder="0803 000 0000" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              Local Government Area *
            </label>
            <select name="lga" required className="form-input">
              <option value="">Select Local Government</option>
              {constituency.lgas.map((lga) => (
                <option key={lga.name} value={lga.name}>{lga.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              Ward / Community *
            </label>
            <input name="ward" type="text" required className="form-input" placeholder="e.g. Enugu Ezike or Obollo Afor" />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
            How Would You Like To Help?
          </label>
          <textarea
            name="skills"
            className="form-input min-h-[90px]"
            placeholder="e.g. Social media mobilization, community voter sensitization, flyer distribution, polling unit agent"
          />
        </div>

        <button type="submit" className="btn btn-secondary btn-lg w-full font-black shadow-lg" disabled={status === 'loading'}>
          {status === 'loading' ? 'Submitting Application...' : 'Submit Volunteer Details'}
        </button>
      </div>
    </form>
  );
}

// ─── Ward Coordinator Form ───────────────────────────────────────────────────

function SupportGroupForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  if (status === 'success') {
    return (
      <div className="card p-8 text-center bg-white shadow-xl border-2 border-red-500">
        <CheckCircle2 className="w-16 h-16 text-red-600 mx-auto mb-4" />
        <h3 className="font-display text-2xl font-black text-slate-900 mb-2">Application Received</h3>
        <p className="text-slate-600 text-sm">
          Thank you for applying to coordinate your community. The campaign director will contact you for an alignment session.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-8 bg-slate-50 border border-slate-200 shadow-md">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center">
          <Megaphone className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-display font-black text-xl text-slate-900">Ward Coordinator Registration</h3>
          <p className="text-xs text-slate-500">Grassroots Mobilization Leadership</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
            Full Name *
          </label>
          <input name="fullName" type="text" required className="form-input" placeholder="Your name" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              Phone Number *
            </label>
            <input name="phone" type="tel" required className="form-input" placeholder="Phone number" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              LGA *
            </label>
            <select name="lga" required className="form-input">
              <option value="">Select LGA</option>
              {constituency.lgas.map((lga) => (
                <option key={lga.name} value={lga.name}>{lga.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
            Ward & Polling Unit Name *
          </label>
          <input name="ward" type="text" required className="form-input" placeholder="Specify your ward and polling unit" />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
            Leadership or Community Background
          </label>
          <textarea
            name="experience"
            className="form-input min-h-[90px]"
            placeholder="Tell us briefly about your community leadership, youth leadership, or mobilization experience"
          />
        </div>

        <button type="submit" className="btn btn-party btn-lg w-full font-black shadow-lg" disabled={status === 'loading'}>
          {status === 'loading' ? 'Processing...' : 'Apply As Ward Mobilization Lead'}
        </button>
      </div>
    </form>
  );
}
