/**
 * ============================================================================
 * WhatsApp Floating Button: Always visible click to chat with safe area
 * ============================================================================
 */
'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { candidate } from '@/config/site.config';

export default function WhatsAppFloat() {
  const whatsappUrl = `https://wa.me/${candidate.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `Hello! I would like to learn more about Hon. ${candidate.shortName} campaign for ${candidate.officeSought}.`
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] left-4 sm:left-6 z-40 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:shadow-green-500/50 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/80"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
    </a>
  );
}
