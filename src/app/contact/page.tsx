/**
 * ============================================================================
 * CONTACT PAGE: Contact form, office details, WhatsApp, social links
 * ============================================================================
 */
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail, Phone, MapPin, MessageCircle, Send, CheckCircle
} from 'lucide-react';
import { Facebook, Twitter, Instagram, Youtube } from '@/components/ui/SocialIcons';
import { candidate, socials } from '@/config/site.config';
import { useLocale } from '@/context/LocaleContext';
import Section from '@/components/ui/Section';

export default function ContactPage() {
  const { t } = useLocale();

  return (
    <>
      {/* Hero */}
      <section className="relative gradient-hero pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">{t('contact.title')}</h1>
            <p className="text-white/80 text-lg">{t('contact.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="font-display font-bold text-lg text-dark mb-4">{t('contact.office')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-dark-muted text-sm">{candidate.officeAddress}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href={`tel:${candidate.phone}`} className="text-dark-muted text-sm hover:text-primary transition-colors">
                    {candidate.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href={`mailto:${candidate.email}`} className="text-dark-muted text-sm hover:text-primary transition-colors">
                    {candidate.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${candidate.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 flex items-center gap-4 bg-[#25D366]/5 border-[#25D366]/20 hover:bg-[#25D366]/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-dark group-hover:text-[#25D366] transition-colors">
                  {t('contact.whatsapp')}
                </h3>
                <p className="text-dark-muted text-sm">Get a quick response on WhatsApp</p>
              </div>
            </a>

            {/* Social Links */}
            <div className="card p-6">
              <h3 className="font-display font-bold text-lg text-dark mb-4">Follow Us</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Facebook', url: socials.facebook, icon: <Facebook className="w-4 h-4" />, color: 'bg-blue-600' },
                  { name: 'X (Twitter)', url: socials.twitter, icon: <Twitter className="w-4 h-4" />, color: 'bg-black' },
                  { name: 'Instagram', url: socials.instagram, icon: <Instagram className="w-4 h-4" />, color: 'bg-gradient-to-br from-purple-600 to-pink-500' },
                  { name: 'YouTube', url: socials.youtube, icon: <Youtube className="w-4 h-4" />, color: 'bg-red-600' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-surface-muted hover:bg-surface-elevated transition-colors text-sm"
                  >
                    <div className={`w-7 h-7 rounded-full ${social.color} text-white flex items-center justify-center`}>
                      {social.icon}
                    </div>
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function ContactForm() {
  const { t } = useLocale();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch('/api/contact', {
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
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="card p-8 text-center">
        <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
        <h3 className="font-display text-2xl font-bold text-dark mb-2">Message Sent!</h3>
        <p className="text-dark-muted">Thank you for reaching out. We&apos;ll respond as soon as possible.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 md:p-8">
      <h3 className="font-display font-bold text-xl text-dark mb-6">{t('contact.send')}</h3>

      <div className="form-group">
        <label htmlFor="contact-name" className="form-label">{t('contact.name')} *</label>
        <input id="contact-name" name="name" type="text" required className="form-input" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="form-group">
          <label htmlFor="contact-email" className="form-label">{t('contact.email')} *</label>
          <input id="contact-email" name="email" type="email" required className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="contact-phone" className="form-label">{t('contact.phone')}</label>
          <input id="contact-phone" name="phone" type="tel" className="form-input" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="contact-subject" className="form-label">{t('contact.subject')} *</label>
        <input id="contact-subject" name="subject" type="text" required className="form-input" />
      </div>

      <div className="form-group">
        <label htmlFor="contact-message" className="form-label">{t('contact.message')} *</label>
        <textarea id="contact-message" name="message" required className="form-input form-textarea" rows={5} />
      </div>

      <input type="text" name="_hp" className="hidden" tabIndex={-1} autoComplete="off" />

      {status === 'error' && <p className="text-primary text-sm mb-4">{t('common.error')}</p>}

      <button type="submit" className="btn btn-primary btn-lg w-full" disabled={status === 'loading'}>
        {status === 'loading' ? t('common.sending') : t('contact.send')}
      </button>
    </form>
  );
}
