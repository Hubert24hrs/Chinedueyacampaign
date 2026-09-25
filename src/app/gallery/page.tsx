/**
 * ============================================================================
 * GALLERY PAGE: Campaign Photo and Media Gallery
 * ============================================================================
 * Labour Party Theme, zero AI slop, zero hyphens.
 */
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import Section from '@/components/ui/Section';
import { candidate } from '@/config/site.config';

const galleryImages = [
  {
    id: '1',
    src: candidate.portrait,
    alt: 'Hon. Chinedu Eya official candidate portrait',
    category: 'Portrait',
    caption: 'Hon. Chinedu Eya, Labour Party Candidate for Federal House of Assembly.',
  },
  {
    id: '2',
    src: candidate.party.logo,
    alt: 'Labour Party official emblem',
    category: 'Party',
    caption: 'Official emblem of the Labour Party, Papa Mama Pikin, Forward Ever.',
  },
  {
    id: '3',
    src: candidate.portrait,
    alt: 'Hon. Chinedu Eya grassroots campaign leadership',
    category: 'Campaign',
    caption: 'Connecting with community stakeholders across Igbo Eze North and Udenu.',
  },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const categories = ['All', 'Portrait', 'Party', 'Campaign'];
  const filtered = filter === 'All' ? galleryImages : galleryImages.filter((img) => img.category === filter);

  return (
    <>
      <section className="relative gradient-hero pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-red-600/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-600/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-amber-300 mb-4 border border-white/15">
              <Camera className="w-4 h-4" />
              Official Media Archive
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
              Campaign Gallery
            </h1>
            <p className="text-slate-200 text-base sm:text-lg max-w-xl mx-auto">
              Visual records, portraits, and moments from the grassroots movement across our constituency.
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-slate-50 py-16 md:py-24">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full font-display font-bold text-xs uppercase tracking-wider transition-all ${
                filter === cat
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filtered.map((img, i) => (
            <div
              key={img.id}
              onClick={() => setLightbox(i)}
              className="card overflow-hidden cursor-pointer group bg-white shadow-md hover:shadow-xl transition-all"
            >
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-xs font-semibold">{img.caption}</p>
                </div>
              </div>
              <div className="p-4">
                <span className="text-[10px] font-black uppercase tracking-wider text-green-700 block mb-1">
                  {img.category}
                </span>
                <p className="font-display font-bold text-slate-900 text-sm">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div
              className="relative max-w-3xl max-h-[85vh] w-full aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
