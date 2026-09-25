/**
 * MEDIA & PRESS PAGE — Press kit, releases, media enquiry contact
 */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, Newspaper, Mail, Camera, FileText, Image as ImageIcon } from 'lucide-react';
import { candidate } from '@/config/site.config';
import Section from '@/components/ui/Section';

export default function MediaPage() {
  return (
    <>
      <section className="gradient-hero pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Newspaper className="w-12 h-12 text-accent mx-auto mb-4" />
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">Media & Press</h1>
            <p className="text-white/80 text-lg">Press kit, resources, and media contact information.</p>
          </motion.div>
        </div>
      </section>

      {/* Press Kit */}
      <Section>
        <h2 className="font-display text-3xl font-bold text-dark mb-8 text-center">Press Kit</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { title: 'Candidate Bio', desc: 'Official biography for media use', icon: <FileText className="w-6 h-6" />, type: 'PDF' },
            { title: 'High-Res Photos', desc: 'Campaign photos for editorial use', icon: <Camera className="w-6 h-6" />, type: 'ZIP' },
            { title: 'Campaign Logos', desc: 'Logo files in various formats', icon: <ImageIcon className="w-6 h-6" />, type: 'ZIP' },
          ].map((item, i) => (
            <div key={i} className="card p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-primary-light text-primary mx-auto mb-4 flex items-center justify-center">{item.icon}</div>
              <h3 className="font-display font-bold text-base text-dark mb-1">{item.title}</h3>
              <p className="text-dark-muted text-sm mb-4">{item.desc}</p>
              <button className="btn btn-outline btn-sm w-full" disabled><Download className="w-4 h-4" /> {item.type} — Coming Soon</button>
            </div>
          ))}
        </div>
      </Section>

      {/* Press Releases */}
      <Section className="bg-surface-elevated">
        <h2 className="font-display text-3xl font-bold text-dark mb-8 text-center">Press Releases</h2>
        <div className="max-w-2xl mx-auto text-center py-8">
          <Newspaper className="w-12 h-12 text-dark-muted/30 mx-auto mb-4" />
          <p className="text-dark-muted">Press releases will be published here as the campaign progresses.</p>
          <p className="text-dark-muted text-sm mt-2">{'{{TO_VERIFY_WITH_CLIENT: Add press releases as they are issued.}}'}</p>
        </div>
      </Section>

      {/* Media Enquiry */}
      <Section>
        <div className="max-w-xl mx-auto text-center">
          <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="font-display text-3xl font-bold text-dark mb-4">Media Enquiries</h2>
          <p className="text-dark-muted mb-6">For interview requests, press enquiries, and media partnerships:</p>
          <div className="card p-6 text-left">
            <p className="text-dark font-display font-bold mb-2">Campaign Press Office</p>
            <p className="text-dark-muted text-sm mb-1">Email: <a href={`mailto:press@chinedueya.ng`} className="text-primary">press@chinedueya.ng</a></p>
            <p className="text-dark-muted text-sm mb-1">Phone: <a href={`tel:${candidate.phone}`} className="text-primary">{candidate.phone}</a></p>
            <p className="text-xs text-dark-muted mt-3 italic">{'{{TO_VERIFY_WITH_CLIENT: Confirm press contact details.}}'}</p>
          </div>
        </div>
      </Section>
    </>
  );
}
