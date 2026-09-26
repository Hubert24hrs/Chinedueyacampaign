/**
 * ============================================================================
 * Section Wrapper: Consistent section styling with Labour Party theme
 * ============================================================================
 */
'use client';

import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  noPadding?: boolean;
}

export default function Section({ children, className = '', id, dark = false, noPadding = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`
        ${noPadding ? '' : 'section-padding'}
        ${dark ? 'bg-dark text-white' : ''}
        transition-opacity duration-300 opacity-100
        ${className}
      `}
    >
      <div className="container-narrow">
        {children}
      </div>
    </section>
  );
}
