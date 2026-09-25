/**
 * ============================================================================
 * Footer — Campaign footer with contacts, social links, legal, disclaimer
 * ============================================================================
 */
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, Mail, MapPin, MessageCircle, Send, Heart, ArrowUp
} from 'lucide-react';
import { Facebook, Twitter, Instagram, Youtube } from '@/components/ui/SocialIcons';
import { candidate, socials, seo } from '@/config/site.config';
import { useLocale } from '@/context/LocaleContext';

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear().toString();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/10 flex-shrink-0">
                <Image
                  src={candidate.campaignLogo}
                  alt="Campaign Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">{candidate.fullName}</h3>
                <p className="text-white/60 text-sm">{candidate.party.name}</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {candidate.officeSought}<br />
              {candidate.constituency}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socials.facebook && (
                <a href={socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                   className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {socials.twitter && (
                <a href={socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"
                   className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {socials.instagram && (
                <a href={socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                   className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {socials.youtube && (
                <a href={socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                   className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Youtube className="w-4 h-4" />
                </a>
              )}
              {socials.whatsappChannel && (
                <a href={socials.whatsappChannel} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                   className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </a>
              )}
              {socials.telegramChannel && (
                <a href={socials.telegramChannel} target="_blank" rel="noopener noreferrer" aria-label="Telegram"
                   className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <Send className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white/50 mb-4">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About', href: '/about' },
                { label: 'Agenda', href: '/agenda' },
                { label: 'Constituency', href: '/constituency' },
                { label: 'News & Updates', href: '/news' },
                { label: 'Events', href: '/events' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Get Involved', href: '/get-involved' },
                { label: 'Voter Info', href: '/vote' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white/50 mb-4">
              {t('contact.office')}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">{candidate.officeAddress}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href={`tel:${candidate.phone}`} className="text-white/70 hover:text-white text-sm transition-colors">
                  {candidate.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href={`mailto:${candidate.email}`} className="text-white/70 hover:text-white text-sm transition-colors">
                  {candidate.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                <a
                  href={`https://wa.me/${candidate.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  {t('contact.whatsapp')}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Donate */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white/50 mb-4">
              {t('footer.legal')}
            </h4>
            <ul className="space-y-2.5 mb-6">
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-white text-sm transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/70 hover:text-white text-sm transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link href="/donation-policy" className="text-white/70 hover:text-white text-sm transition-colors">
                  {t('footer.donationPolicy')}
                </Link>
              </li>
            </ul>

            <Link href="/donate" className="btn btn-primary w-full">
              <Heart className="w-4 h-4" />
              {t('hero.cta.donate')}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-xs text-center md:text-left">
              {t('footer.disclaimer')}
            </p>
            <div className="flex items-center gap-4">
              <p className="text-white/40 text-xs">
                {t('footer.copyright', { year })}
              </p>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label={t('common.backToTop')}
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
