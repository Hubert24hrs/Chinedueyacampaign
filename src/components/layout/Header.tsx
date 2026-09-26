/**
 * ============================================================================
 * Header: Sticky campaign header with Labour Party theme and smooth animations
 * ============================================================================
 */
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Heart, Sparkles } from 'lucide-react';
import { candidate, navigation } from '@/config/site.config';
import { useLocale } from '@/context/LocaleContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { locale, setLocale, t } = useLocale();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const toggleLocale = () => setLocale(locale === 'en' ? 'ig' : 'en');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 border-b border-red-500/10'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent'
      }`}
      role="banner"
    >
      {/* Top Labour Party Tricolor accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-red-600 via-amber-400 to-green-600" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 z-10 group min-w-0" aria-label="Home">
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 md:w-13 md:h-13 rounded-full overflow-hidden bg-white p-0.5 shadow-md border-2 border-red-500/30 group-hover:border-green-500 transition-colors flex-shrink-0">
              <Image
                src={candidate.party.logo}
                alt={`${candidate.party.name} Logo`}
                fill
                className="object-contain p-0.5"
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className={`font-display font-extrabold text-sm sm:text-base md:text-lg leading-tight truncate transition-colors ${
                  scrolled ? 'text-slate-900 group-hover:text-red-600' : 'text-white group-hover:text-amber-300'
                }`}>
                  {candidate.fullName}
                </span>
                <span className="hidden xs:inline-block px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-bold tracking-wider rounded-full bg-red-600 text-white shadow-sm flex-shrink-0">
                  {candidate.party.abbreviation}
                </span>
              </div>
              <p className={`text-[11px] sm:text-xs font-medium truncate transition-colors ${scrolled ? 'text-slate-500' : 'text-slate-300'} hidden xs:block`}>
                Federal House of Assembly, Igbo Eze North / Udenu
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10" aria-label="Main navigation">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              const label = locale === 'ig' ? item.labelIgbo : item.label;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all relative ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-red-600 to-red-700 shadow-md shadow-red-600/30'
                      : scrolled
                      ? 'text-slate-700 hover:text-red-600 hover:bg-red-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
            {/* Language toggle */}
            <button
              onClick={toggleLocale}
              className={`flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition-all border ${
                scrolled
                  ? 'text-slate-700 border-slate-200 hover:border-red-500 hover:text-red-600 bg-white'
                  : 'text-white border-white/20 hover:border-white hover:bg-white/10'
              }`}
              aria-label={`Switch to ${locale === 'en' ? 'Igbo' : 'English'}`}
              title={`Switch to ${locale === 'en' ? 'Igbo' : 'English'}`}
            >
              <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-500" />
              <span>{locale === 'en' ? 'IGBO' : 'ENG'}</span>
            </button>

            {/* Donate button with glow and shimmer */}
            <Link
              href="/donate"
              className="btn btn-party text-xs sm:text-sm py-1.5 px-2.5 sm:px-4 shimmer-sweep font-bold shadow-lg shadow-red-600/30 flex items-center gap-1.5"
              aria-label={t('hero.cta.donate')}
            >
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white text-white animate-pulse" />
              <span className="font-extrabold">{t('nav.donate')}</span>
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center ${
                scrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6 text-red-600" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu: Viewport height with iOS safe area padding */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 md:top-20 bottom-0 z-50 bg-slate-950/98 backdrop-blur-2xl border-t border-slate-800 shadow-2xl overflow-y-auto pb-[calc(2.5rem+env(safe-area-inset-bottom,0px))] lg:hidden"
          >
            <nav className="px-5 py-6 space-y-2 max-w-lg mx-auto" aria-label="Mobile navigation">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                const label = locale === 'ig' ? item.labelIgbo : item.label;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3.5 rounded-xl text-base font-bold transition-all min-h-[46px] flex items-center ${
                      isActive
                        ? 'text-white bg-gradient-to-r from-red-600 to-green-600 shadow-lg shadow-red-600/30'
                        : 'text-slate-200 hover:text-white hover:bg-white/10 active:bg-white/20'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                );
              })}

              {/* Mobile CTA */}
              <div className="pt-6 space-y-3">
                <Link
                  href="/donate"
                  onClick={() => setIsOpen(false)}
                  className="btn btn-party btn-lg w-full flex items-center justify-center gap-2 shadow-xl shadow-red-600/30"
                >
                  <Heart className="w-5 h-5 fill-white" />
                  {t('hero.cta.donate')}
                </Link>
                <Link
                  href="/get-involved"
                  onClick={() => setIsOpen(false)}
                  className="btn btn-secondary btn-lg w-full flex items-center justify-center gap-2 shadow-xl shadow-green-600/30"
                >
                  <Sparkles className="w-5 h-5 text-amber-300" />
                  {t('hero.cta.volunteer')}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
