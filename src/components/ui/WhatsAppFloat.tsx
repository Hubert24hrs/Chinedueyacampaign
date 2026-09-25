/**
 * ============================================================================
 * WhatsApp Floating Button — Always-visible click-to-chat
 * ============================================================================
 */
'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { candidate } from '@/config/site.config';

export default function WhatsAppFloat() {
  const whatsappUrl = `https://wa.me/${candidate.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `Hello! I'm reaching out about Hon. ${candidate.shortName}'s campaign for ${candidate.officeSought}.`
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
