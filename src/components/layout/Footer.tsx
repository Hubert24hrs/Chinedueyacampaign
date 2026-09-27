/**
 * ============================================================================
 * Footer: Campaign footer with Labour Party theme, contacts, and zero hyphens
 * ============================================================================
 */
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, MapPin, MessageCircle, Heart, ArrowUp, Sparkles, Building2, Car, Globe2, GraduationCap
} from 'lucide-react';
import { candidate, seo } from '@/config/site.config';
import { useLocale } from '@/context/LocaleContext';

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear().toString();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden" role="contentinfo">
      {/* Top Party Tricolor accent line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-red-600 via-amber-400 to-green-600" />

      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white p-1 flex-shrink-0 shadow-lg border-2 border-red-500/40">
                <Image
                  src={candidate.party.logo}
                  alt={`${candidate.party.name} Logo`}
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-lg text-white">{candidate.fullName}</h3>
                <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider">{candidate.party.name} ({candidate.party.abbreviation})</p>
              </div>
            </div>
            
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Contesting for <strong className="text-white font-bold">{candidate.officeSought}</strong> to serve the proud people of <strong className="text-white">{candidate.constituency}</strong>, {candidate.state}.
            </p>

            <div className="space-y-1.5 text-xs text-slate-400 mb-6 border-l-2 border-green-500 pl-3 py-1">
              <p className="flex items-center gap-1.5 text-slate-300 font-medium">
                <Globe2 className="w-3.5 h-3.5 text-blue-400" /> CEO, Suskii Group (P2P & Errands)
              </p>
              <p className="flex items-center gap-1.5 text-slate-300 font-medium">
                <Building2 className="w-3.5 h-3.5 text-green-400" /> CEO, MY Eya Homes
              </p>
              <p className="flex items-center gap-1.5 text-slate-300 font-medium">
                <Car className="w-3.5 h-3.5 text-amber-400" /> CEO, EYA AUTOS
              </p>
              <p className="flex items-center gap-1.5 text-slate-300 font-medium">
                <GraduationCap className="w-3.5 h-3.5 text-red-400" /> Grassroots AI Training & Philanthropy
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Hon. Chinedu Eya', href: '/about' },
                { label: 'Legislative Agenda', href: '/agenda' },
                { label: 'Our Constituency', href: '/constituency' },
                { label: 'Get Involved', href: '/get-involved' },
                { label: 'Voter Information', href: '/vote' },
                { label: 'Contact Campaign', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-green-400 mb-4 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> Campaign Office
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                <span className="text-slate-300">{candidate.officeAddress}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={`tel:${candidate.phone}`} className="text-slate-300 hover:text-white transition-colors font-medium">
                  {candidate.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <a
                  href={`https://wa.me/${candidate.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-green-400 transition-colors font-semibold"
                >
                  Chat with Campaign on WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Donate & Mobilize */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-red-400 mb-4 flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5" /> Support The Mission
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed mb-5">
              Help us reach every village, ward, and community across Igbo Eze North and Udenu. Your support powers real representation.
            </p>

            <Link href="/donate" className="btn btn-party w-full py-3 text-sm font-bold shadow-lg shadow-red-600/30 mb-3 flex items-center justify-center gap-2">
              <Heart className="w-4 h-4 fill-white" />
              Donate To Campaign
            </Link>

            <Link href="/get-involved" className="btn btn-secondary w-full py-3 text-sm font-bold shadow-lg shadow-green-600/30 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" />
              Volunteer Today
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      {/* Bottom Bar with safe area padding */}
      <div className="border-t border-slate-800/80 bg-black/40 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-xs text-center md:text-left">
              Official Campaign Website for Hon. Chinedu Eya, Labour Party Candidate for Federal House of Assembly.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
              <p className="text-slate-400 text-xs">
                Copyright {year} Hon. Chinedu Eya Campaign Organization. All Rights Reserved.
              </p>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-red-600 hover:border-red-500 text-white transition-all shadow-md flex-shrink-0"
                aria-label="Back to Top"
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
