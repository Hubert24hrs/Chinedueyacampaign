/**
 * ============================================================================
 * GET INVOLVED PAGE — Volunteer signup + support group + share kit
 * ============================================================================
 */
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Users, Heart, Download, Share2, MessageCircle,
  Send, CheckCircle, ArrowRight, UserPlus, Megaphone
} from 'lucide-react';
import { candidate, constituency, socials } from '@/config/site.config';
import { useLocale } from '@/context/LocaleContext';
import Section from '@/components/ui/Section';

export default function GetInvolvedPage() {
  const { t } = useLocale();

  return (
    <>
      {/* Hero */}
      <section className="relative gradient-secondary pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Users className="w-12 h-12 text-white mx-auto mb-4" />
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
              {t('volunteer.title')}
            </h1>
            <p className="text-white/90 text-lg max-w-xl mx-auto">
              {t('volunteer.subtitle')}. Your time, skills, and voice can make the difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Volunteer Form */}
      <Section id="volunteer-form">
        <div className="max-w-2xl mx-auto">
          <VolunteerForm />
        </div>
      </Section>

      {/* Start a Support Group */}
      <Section className="bg-surface-elevated">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-dark mb-4">
            Start a Support Group
          </h2>
          <p className="text-dark-muted max-w-xl mx-auto">
            Become a ward coordinator or start a support group in your community. Lead the movement from the ground up.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <SupportGroupForm />
        </div>
      </Section>

      {/* Share Kit */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-dark mb-4">
            Campaign Share Kit
          </h2>
          <p className="text-dark-muted max-w-xl mx-auto">
            Download flyers, social media cards, and campaign materials to share with your community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Campaign Flyer (A4)', type: 'PDF', icon: '📄' },
            { name: 'WhatsApp Status Graphics', type: 'ZIP', icon: '📱' },
            { name: 'Social Media Cards', type: 'ZIP', icon: '🖼️' },
            { name: 'Campaign Banner', type: 'PDF', icon: '🏳️' },
            { name: 'Volunteer ID Card Template', type: 'PDF', icon: '🪪' },
            { name: 'Manifesto Summary', type: 'PDF', icon: '📋' },
          ].map((item, i) => (
            <div key={i} className="card p-6 text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-display font-bold text-base text-dark mb-1">{item.name}</h3>
              <p className="text-dark-muted text-xs mb-4">{item.type}</p>
              <button className="btn btn-outline btn-sm w-full" disabled>
                <Download className="w-4 h-4" />
                Coming Soon
              </button>
              {/* {{TO_VERIFY_WITH_CLIENT: Upload actual campaign materials}} */}
            </div>
          ))}
        </div>
      </Section>

      {/* Join Channels */}
      <Section className="bg-surface-elevated">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-dark mb-4">
            Join Our Channels
          </h2>
          <p className="text-dark-muted mb-8">
            Stay connected with the campaign. Get real-time updates and be part of the conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={socials.whatsappChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg bg-[#25D366] text-white hover:bg-[#128C7E]"
            >
              <MessageCircle className="w-5 h-5" />
              Join WhatsApp
            </a>
            <a
              href={socials.telegramChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg bg-[#0088cc] text-white hover:bg-[#006699]"
            >
              <Send className="w-5 h-5" />
              Join Telegram
            </a>
          </div>
        </div>
      </Section>

      {/* Donate CTA */}
      <section className="gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            Can&apos;t Volunteer? You Can Still Help!
          </h2>
          <p className="text-white/90 mb-6">
            Your financial support powers the campaign. Every naira counts.
          </p>
          <Link href="/donate" className="btn btn-white btn-lg">
            <Heart className="w-5 h-5 text-primary" />
            <span className="text-primary">{t('hero.cta.donate')}</span>
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
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch('/api/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card p-8 text-center"
      >
        <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
        <h3 className="font-display text-2xl font-bold text-dark mb-2">
          Welcome to the Movement!
        </h3>
        <p className="text-dark-muted">
          Thank you for volunteering. Our team will reach out to you soon with next steps.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <UserPlus className="w-6 h-6 text-secondary" />
        <h3 className="font-display font-bold text-xl text-dark">
          Volunteer Signup
        </h3>
      </div>

      <div className="form-group">
        <label htmlFor="vol-name" className="form-label">{t('volunteer.name')} *</label>
        <input id="vol-name" name="fullName" type="text" required className="form-input" placeholder="Enter your full name" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="form-group">
          <label htmlFor="vol-phone" className="form-label">{t('volunteer.phone')} *</label>
          <input id="vol-phone" name="phone" type="tel" required className="form-input" placeholder="+234..." />
        </div>
        <div className="form-group">
          <label htmlFor="vol-whatsapp" className="form-label">{t('volunteer.whatsapp')}</label>
          <input id="vol-whatsapp" name="whatsapp" type="tel" className="form-input" placeholder="+234..." />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="vol-email" className="form-label">Email (Optional)</label>
        <input id="vol-email" name="email" type="email" className="form-input" placeholder="you@example.com" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="form-group">
          <label htmlFor="vol-lga" className="form-label">{t('volunteer.lga')} *</label>
          <select id="vol-lga" name="lga" required className="form-input">
            <option value="">Select LGA</option>
            {constituency.lgas.map((lga) => (
              <option key={lga.name} value={lga.name}>{lga.name}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="vol-ward" className="form-label">{t('volunteer.ward')}</label>
          <input id="vol-ward" name="ward" type="text" className="form-input" placeholder="Your ward" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="vol-skills" className="form-label">{t('volunteer.skills')}</label>
        <textarea
          id="vol-skills"
          name="skills"
          className="form-input form-textarea"
          rows={3}
          placeholder="e.g., Social media, event planning, driving, public speaking..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="vol-availability" className="form-label">{t('volunteer.availability')}</label>
        <select id="vol-availability" name="availability" className="form-input">
          <option value="">Select availability</option>
          <option value="weekdays">Weekdays</option>
          <option value="weekends">Weekends</option>
          <option value="both">Both</option>
          <option value="flexible">Flexible</option>
        </select>
      </div>

      {/* Honeypot */}
      <input type="text" name="_hp" className="hidden" tabIndex={-1} autoComplete="off" />

      {status === 'error' && (
        <p className="text-primary text-sm mb-4">{t('common.error')}</p>
      )}

      <button type="submit" className="btn btn-secondary btn-lg w-full" disabled={status === 'loading'}>
        {status === 'loading' ? t('common.sending') : t('volunteer.submit')}
      </button>
    </form>
  );
}

// ─── Support Group / Ward Coordinator Form ───────────────────────────────────

function SupportGroupForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch('/api/support-group', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card p-8 text-center"
      >
        <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
        <h3 className="font-display text-2xl font-bold text-dark mb-2">Thank You!</h3>
        <p className="text-dark-muted">We&apos;ll be in touch with resources and support for your group.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <Megaphone className="w-6 h-6 text-primary" />
        <h3 className="font-display font-bold text-xl text-dark">Ward Coordinator Signup</h3>
      </div>

      <div className="form-group">
        <label htmlFor="sg-name" className="form-label">Full Name *</label>
        <input id="sg-name" name="fullName" type="text" required className="form-input" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="form-group">
          <label htmlFor="sg-phone" className="form-label">Phone *</label>
          <input id="sg-phone" name="phone" type="tel" required className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="sg-email" className="form-label">Email</label>
          <input id="sg-email" name="email" type="email" className="form-input" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="form-group">
          <label htmlFor="sg-lga" className="form-label">LGA *</label>
          <select id="sg-lga" name="lga" required className="form-input">
            <option value="">Select LGA</option>
            {constituency.lgas.map((lga) => (
              <option key={lga.name} value={lga.name}>{lga.name}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="sg-ward" className="form-label">Ward *</label>
          <input id="sg-ward" name="ward" type="text" required className="form-input" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="sg-experience" className="form-label">Leadership Experience</label>
        <textarea id="sg-experience" name="experience" className="form-input form-textarea" rows={3} placeholder="Tell us about your community leadership experience..." />
      </div>

      <input type="text" name="_hp" className="hidden" tabIndex={-1} autoComplete="off" />

      {status === 'error' && <p className="text-primary text-sm mb-4">Something went wrong. Please try again.</p>}

      <button type="submit" className="btn btn-primary btn-lg w-full" disabled={status === 'loading'}>
        {status === 'loading' ? 'Submitting...' : 'Apply as Ward Coordinator'}
      </button>
    </form>
  );
}
