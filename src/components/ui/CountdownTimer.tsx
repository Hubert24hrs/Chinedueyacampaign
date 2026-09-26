/**
 * ============================================================================
 * Countdown Timer: Responsive countdown for iPhone, Android, iPad & Desktop
 * ============================================================================
 */
'use client';

import React, { useState, useEffect } from 'react';
import { useLocale } from '@/context/LocaleContext';
import { election } from '@/config/site.config';
import { Clock } from 'lucide-react';

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
    { value: countdown.days, label: 'DAYS' },
    { value: countdown.hours, label: 'HOURS' },
    { value: countdown.minutes, label: 'MINUTES' },
    { value: countdown.seconds, label: 'SECONDS' },
  ];

  if (compact) {
    return (
      <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-display font-bold">
        <span className="text-red-500">{countdown.days}d</span>
        <span className="text-amber-400">{countdown.hours}h</span>
        <span className="text-green-500">{countdown.minutes}m</span>
      </div>
    );
  }

  return (
    <div className="p-3 sm:p-5 md:p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl relative overflow-hidden w-full max-w-full">
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-2.5 sm:mb-3">
        <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 animate-spin-slow" />
        <span className="text-[10px] sm:text-xs uppercase tracking-widest font-extrabold text-amber-300 text-center">
          COUNTDOWN TO ELECTION DAY 2027
        </span>
      </div>

      <div className="flex items-center justify-center gap-1.5 sm:gap-3 md:gap-4 max-w-full">
        {blocks.map((block, i) => (
          <React.Fragment key={block.label}>
            <div className="flex flex-col items-center flex-1 max-w-[76px] sm:max-w-[84px] md:max-w-[96px]">
              <div className="w-full aspect-square rounded-xl bg-gradient-to-b from-white/20 to-white/5 border border-white/30 flex items-center justify-center shadow-lg relative group">
                <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-display font-black text-white group-hover:scale-105 transition-transform">
                  {String(block.value).padStart(2, '0')}
                </span>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-red-500 via-amber-400 to-green-500 rounded-b-xl" />
              </div>
              <span className="text-[9px] sm:text-xs text-white/80 mt-1 font-bold tracking-wider text-center">
                {block.label}
              </span>
            </div>
            {i < blocks.length - 1 && (
              <span className="text-base sm:text-2xl text-amber-400/80 font-black self-start mt-2 sm:mt-3 md:mt-4">:</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
