/**
 * ============================================================================
 * Countdown Timer — Election countdown driven by config
 * ============================================================================
 */
'use client';

import React, { useState, useEffect } from 'react';
import { useLocale } from '@/context/LocaleContext';
import { election } from '@/config/site.config';

interface CountdownValues {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ compact = false }: { compact?: boolean }) {
  const { t } = useLocale();
  const [countdown, setCountdown] = useState<CountdownValues>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date(election.date).getTime();

    const updateCountdown = () => {
      const now = Date.now();
      const diff = targetDate - now;

      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const blocks = [
    { value: countdown.days, label: t('hero.countdown.days') },
    { value: countdown.hours, label: t('hero.countdown.hours') },
    { value: countdown.minutes, label: t('hero.countdown.minutes') },
    { value: countdown.seconds, label: t('hero.countdown.seconds') },
  ];

  if (compact) {
    return (
      <div className="flex items-center gap-2 text-sm font-display font-bold">
        <span className="text-primary">{countdown.days}</span>
        <span className="text-dark-muted/50">d</span>
        <span className="text-primary">{countdown.hours}</span>
        <span className="text-dark-muted/50">h</span>
        <span className="text-primary">{countdown.minutes}</span>
        <span className="text-dark-muted/50">m</span>
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-3 md:gap-4">
        {blocks.map((block, i) => (
          <React.Fragment key={block.label}>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-display font-bold text-white">
                  {String(block.value).padStart(2, '0')}
                </span>
              </div>
              <span className="text-xs md:text-sm text-white/70 mt-1.5 font-medium">
                {block.label}
              </span>
            </div>
            {i < blocks.length - 1 && (
              <span className="text-2xl text-white/30 font-bold self-start mt-4">:</span>
            )}
          </React.Fragment>
        ))}
      </div>
      <p className="text-white/60 text-sm mt-4 font-medium">{t('hero.countdown.label')}</p>
    </div>
  );
}
