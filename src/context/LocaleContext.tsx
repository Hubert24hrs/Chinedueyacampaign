/**
 * ============================================================================
 * Locale Context — Language switching provider
 * ============================================================================
 */
'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { Locale, t, TranslationKey } from '@/config/translations';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey, vars?: Record<string, string>) => string;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: 'en',
  setLocale: () => {},
  t: (key) => key,
});

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  // Load saved locale from localStorage safely
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = window.localStorage.getItem('campaign-locale') as Locale;
        if (saved && (saved === 'en' || saved === 'ig')) {
          setLocaleState(saved);
        }
      }
    } catch {
      // Ignore storage restrictions in private browsing / webview
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem('campaign-locale', newLocale);
      }
    } catch {
      // Ignore storage restrictions
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLocale === 'ig' ? 'ig' : 'en';
    }
  }, []);

  const translate = useCallback(
    (key: TranslationKey, vars?: Record<string, string>) => t(key, locale, vars),
    [locale]
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: translate }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}
