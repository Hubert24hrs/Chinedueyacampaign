/**
 * ============================================================================
 * Section Wrapper — Consistent section styling with scroll-in animation
 * ============================================================================
 */
'use client';

import React, { useRef, useEffect, useState } from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  noPadding?: boolean;
}

export default function Section({ children, className = '', id, dark = false, noPadding = false }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`
        ${noPadding ? '' : 'section-padding'}
        ${dark ? 'bg-dark text-white' : ''}
        ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}
        ${className}
      `}
    >
      <div className="container-narrow">
        {children}
      </div>
    </section>
  );
}
