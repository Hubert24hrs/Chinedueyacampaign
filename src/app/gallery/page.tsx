/**
 * ============================================================================
 * GALLERY PAGE — Masonry photo grid with lightbox + video section
 * ============================================================================
 */
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Section from '@/components/ui/Section';

// Sample gallery images — {{TO_VERIFY_WITH_CLIENT: Replace with actual campaign photos}}
const galleryImages = [
  { id: '1', src: '/images/gallery/rally-1.jpg', alt: 'Campaign rally in Enugu-Ezike', category: 'Rallies', caption: 'Thousands gather for the constituency rally. {{TO_VERIFY_WITH_CLIENT}}' },
  { id: '2', src: '/images/gallery/outreach-1.jpg', alt: 'Community outreach in Obollo-Afor', category: 'Community', caption: 'Meeting with community leaders in Obollo-Afor. {{TO_VERIFY_WITH_CLIENT}}' },
  { id: '3', src: '/images/gallery/youth-1.jpg', alt: 'Youth town hall meeting', category: 'Youth', caption: 'Engaging with young people at the town hall. {{TO_VERIFY_WITH_CLIENT}}' },
  { id: '4', src: '/images/gallery/women-1.jpg', alt: 'Women empowerment forum', category: 'Women', caption: 'Women empowerment forum in Ibagwa-Aka. {{TO_VERIFY_WITH_CLIENT}}' },
  { id: '5', src: '/images/gallery/candidate-1.jpg', alt: 'Hon. Chinedu Eya meets constituents', category: 'Campaign', caption: 'One-on-one with constituents. {{TO_VERIFY_WITH_CLIENT}}' },
  { id: '6', src: '/images/gallery/party-1.jpg', alt: 'Labour Party event', category: 'Party', caption: 'Labour Party event. {{TO_VERIFY_WITH_CLIENT}}' },
];

const galleryVideos = [
  { id: 'v1', title: 'Campaign Launch Highlight', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: '/images/gallery/video-thumb-1.jpg', category: 'Campaign' },
  { id: 'v2', title: 'Town Hall Recap', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: '/images/gallery/video-thumb-2.jpg', category: 'Community' },
];
// {{TO_VERIFY_WITH_CLIENT: Replace video URLs with actual campaign videos}}

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const categories = ['All', ...new Set(galleryImages.map((img) => img.category))];
  const filtered = filter === 'All' ? galleryImages : galleryImages.filter((img) => img.category === filter);

  return (
    <>
      <section className="gradient-hero pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Camera className="w-12 h-12 text-accent mx-auto mb-4" />
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">Gallery</h1>
            <p className="text-white/80 text-lg">Moments from the campaign trail and our community.</p>
          </motion.div>
        </div>
      </section>

      {/* Photos */}
      <Section>
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${filter === cat ? 'bg-primary text-white' : 'bg-surface-muted text-dark-muted hover:bg-primary-light'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <div key={img.id} className="break-inside-avoid cursor-pointer group" onClick={() => setLightbox(i)}>
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-surface-muted">
                <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-colors flex items-end">
                  <p className="text-white text-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity">{img.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Videos */}
      <Section className="bg-surface-elevated">
        <h2 className="font-display text-3xl font-bold text-dark mb-8 text-center">Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {galleryVideos.map((video) => (
            <div key={video.id} className="card overflow-hidden">
              <div className="relative w-full aspect-video bg-dark">
                <iframe
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="card-body">
                <h3 className="font-display font-bold text-base text-dark">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-white/70 hover:text-white p-2" aria-label="Close">
              <X className="w-8 h-8" />
            </button>
            {lightbox > 0 && (
              <button onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }} className="absolute left-4 text-white/70 hover:text-white p-2" aria-label="Previous">
                <ChevronLeft className="w-8 h-8" />
              </button>
            )}
            {lightbox < filtered.length - 1 && (
              <button onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }} className="absolute right-4 text-white/70 hover:text-white p-2" aria-label="Next">
                <ChevronRight className="w-8 h-8" />
              </button>
            )}
            <div className="relative max-w-4xl w-full aspect-[4/3]" onClick={(e) => e.stopPropagation()}>
              <Image src={filtered[lightbox].src} alt={filtered[lightbox].alt} fill className="object-contain" sizes="100vw" />
            </div>
            <p className="absolute bottom-8 text-white/80 text-sm text-center">{filtered[lightbox].caption}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
