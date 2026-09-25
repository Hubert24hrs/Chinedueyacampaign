/**
 * ============================================================================
 * Header — Sticky campaign header with logo, navigation, language toggle,
 *          and persistent Donate button.
 * ============================================================================
 * Mobile-first with hamburger menu. Large tap targets for mid-range phones.
 */
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Heart } from 'lucide-react';
import { candidate, navigation } from '@/config/site.config';
import { useLocale } from '@/context/LocaleContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { locale, setLocale, t } = useLocale();

  // Detect scroll for header background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const toggleLocale = () => setLocale(locale === 'en' ? 'ig' : 'en');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-10" aria-label="Home">
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-primary-light flex-shrink-0">
              <Image
                src={candidate.campaignLogo}
                alt={`${candidate.fullName} Campaign Logo`}
                fill
                className="object-contain"
                onError={(e) => {
                  // Fallback: show initials
                  const target = e.currentTarget;
                  target.style.display = 'none';
                }}
              />
            </div>
            <div className="hidden sm:block">
              <p className={`font-display font-bold text-sm md:text-base leading-tight ${
                scrolled ? 'text-dark' : 'text-white'
              }`}>
                {candidate.fullName}
              </p>
              <p className={`text-xs ${scrolled ? 'text-dark-muted' : 'text-white/80'}`}>
                {candidate.party.abbreviation} • {candidate.constituency.split('/')[0].trim()}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              const label = locale === 'ig' ? item.labelIgbo : item.label;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-primary bg-primary-light/50'
                      : scrolled
                      ? 'text-dark-muted hover:text-primary hover:bg-primary-light/30'
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
          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <button
              onClick={toggleLocale}
              className={`flex items-center gap-1 px-2.5 py-2 rounded-lg text-xs font-semibold transition-colors ${
                scrolled
                  ? 'text-dark-muted hover:text-primary hover:bg-primary-light/30'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
              aria-label={`Switch to ${locale === 'en' ? 'Igbo' : 'English'}`}
              title={`Switch to ${locale === 'en' ? 'Igbo' : 'English'}`}
            >
              <Globe className="w-4 h-4" />
              <span>{locale === 'en' ? 'IG' : 'EN'}</span>
            </button>

            {/* Donate button — always visible */}
            <Link
              href="/donate"
              className="btn btn-primary btn-sm animate-pulse-glow"
              aria-label={t('hero.cta.donate')}
            >
              <Heart className="w-4 h-4" />
              <span className="hidden sm:inline">{t('nav.donate')}</span>
              <span className="sm:hidden">₦</span>
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-dark hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto"
          >
            <nav className="px-4 py-6 space-y-1" aria-label="Mobile navigation">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                const label = locale === 'ig' ? item.labelIgbo : item.label;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'text-primary bg-primary-light/50 font-bold'
                        : 'text-dark-muted hover:text-primary hover:bg-primary-light/20'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                );
              })}

              {/* Extra links in mobile */}
              <div className="border-t border-border pt-4 mt-4 space-y-1">
                <Link
                  href="/vote"
                  className="block px-4 py-3.5 rounded-xl text-base font-medium text-dark-muted hover:text-primary hover:bg-primary-light/20"
                >
                  {t('nav.vote')}
                </Link>
                <Link
                  href="/media"
                  className="block px-4 py-3.5 rounded-xl text-base font-medium text-dark-muted hover:text-primary hover:bg-primary-light/20"
                >
                  {t('nav.media')}
                </Link>
              </div>

              {/* Mobile donate CTA */}
              <div className="px-4 pt-6">
                <Link href="/donate" className="btn btn-primary btn-lg w-full">
                  <Heart className="w-5 h-5" />
                  {t('hero.cta.donate')}
                </Link>
                <Link
                  href="/get-involved"
                  className="btn btn-secondary btn-lg w-full mt-3"
                >
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
