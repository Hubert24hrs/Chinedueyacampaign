/**
 * ============================================================================
 * EVENTS PAGE: Rallies, Town Halls & Grassroots Gatherings
 * ============================================================================
 * Labour Party Theme, zero AI slop, zero hyphens.
 */
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, ChevronRight, MessageSquare } from 'lucide-react';
import { campaignEvents } from '@/content/events';
import { socials } from '@/config/site.config';
import Section from '@/components/ui/Section';

export default function EventsPage() {
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming');
  const upcoming = campaignEvents.filter((e) => !e.isPast);
  const past = campaignEvents.filter((e) => e.isPast);
  const events = tab === 'upcoming' ? upcoming : past;

  return (
    <>
      <section className="relative gradient-hero pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-red-600/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-600/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-amber-300 mb-4 border border-white/15">
              <Calendar className="w-4 h-4" />
              Community Calendar
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
              Campaign Events & Town Halls
            </h1>
            <p className="text-slate-200 text-base sm:text-lg max-w-xl mx-auto">
              Town hall meetings, ward tours, voter clinics, and grassroots rallies across Igbo Eze North and Udenu.
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-slate-50 py-16 md:py-24">
        {/* Tabs */}
        <div className="flex gap-3 justify-center mb-10">
          <button
            onClick={() => setTab('upcoming')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              tab === 'upcoming'
                ? 'bg-red-600 text-white shadow-lg'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Upcoming Events ({upcoming.length})
          </button>
          <button
            onClick={() => setTab('past')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              tab === 'past'
                ? 'bg-red-600 text-white shadow-lg'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Past Events ({past.length})
          </button>
        </div>

        {events.length === 0 ? (
          <div className="max-w-xl mx-auto text-center py-16 bg-white rounded-3xl p-10 border border-slate-200 shadow-lg">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8" />
            </div>
            <h3 className="font-display font-black text-2xl text-slate-900 mb-2">
              Schedules Being Finalized
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Our ward consultative tour and town hall dates are currently being scheduled with community stakeholders. Join the campaign WhatsApp for instant notifications.
            </p>
            <a
              href={socials.whatsappChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary inline-flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get Event Alerts on WhatsApp</span>
            </a>
          </div>
        ) : (
          <div className="space-y-4 max-w-4xl mx-auto">
            {events.map((event) => (
              <div key={event.id} className="card p-6 bg-white shadow-md flex flex-col md:flex-row gap-5 items-center">
                <div className="w-20 h-20 rounded-2xl bg-red-100 text-red-600 flex flex-col items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-display font-black">{new Date(event.date).getDate()}</span>
                  <span className="text-xs font-bold uppercase">{new Date(event.date).toLocaleDateString('en', { month: 'short' })}</span>
                </div>

                <div className="flex-1 text-left">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-1">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {event.time}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {event.venue}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-1">{event.title}</h3>
                  <p className="text-slate-600 text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
