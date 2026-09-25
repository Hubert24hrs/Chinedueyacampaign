/**
 * ============================================================================
 * EVENTS PAGE — Upcoming & past events with RSVP
 * ============================================================================
 */
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, ChevronRight } from 'lucide-react';
import { campaignEvents } from '@/content/events';
import Section from '@/components/ui/Section';

export default function EventsPage() {
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming');
  const upcoming = campaignEvents.filter((e) => !e.isPast);
  const past = campaignEvents.filter((e) => e.isPast);
  const events = tab === 'upcoming' ? upcoming : past;

  return (
    <>
      <section className="relative gradient-hero pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">Events</h1>
            <p className="text-white/80 text-lg">Rallies, town halls, and community outreach. Come be part of the movement.</p>
          </motion.div>
        </div>
      </section>

      <Section>
        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          <button onClick={() => setTab('upcoming')} className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${tab === 'upcoming' ? 'bg-primary text-white' : 'bg-surface-muted text-dark-muted hover:bg-primary-light'}`}>
            Upcoming ({upcoming.length})
          </button>
          <button onClick={() => setTab('past')} className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${tab === 'past' ? 'bg-primary text-white' : 'bg-surface-muted text-dark-muted hover:bg-primary-light'}`}>
            Past ({past.length})
          </button>
        </div>

        {events.length === 0 ? (
          <div className="text-center py-16">
            <Calendar className="w-12 h-12 text-dark-muted/30 mx-auto mb-4" />
            <p className="text-dark-muted">No {tab} events at this time. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="card p-6 flex flex-col md:flex-row gap-4">
                {/* Date badge */}
                <div className="w-20 h-20 rounded-xl bg-primary-light text-primary flex flex-col items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-display font-bold">{new Date(event.date).getDate()}</span>
                  <span className="text-xs font-semibold uppercase">{new Date(event.date).toLocaleDateString('en', { month: 'short' })}</span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                      event.type === 'rally' ? 'bg-primary-light text-primary' :
                      event.type === 'town-hall' ? 'bg-secondary-light text-secondary' :
                      'bg-accent/10 text-accent-dark'
                    }`}>
                      {event.type.replace('-', ' ')}
                    </span>
                    <span className="text-dark-muted text-xs">{event.lga}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-dark mb-1">{event.title}</h3>
                  <p className="text-dark-muted text-sm mb-2 line-clamp-2">{event.description}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-dark-muted">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{event.time}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{event.venue}</span>
                  </div>
                </div>

                {!event.isPast && (
                  <div className="flex items-center">
                    <button
                      onClick={() => {
                        // Generate .ics file
                        const ics = generateICS(event);
                        const blob = new Blob([ics], { type: 'text/calendar' });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = `${event.slug}.ics`;
                        a.click();
                        URL.revokeObjectURL(url);
                      }}
                      className="btn btn-outline btn-sm"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      Add to Calendar
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}

function generateICS(event: typeof campaignEvents[0]): string {
  const date = new Date(event.date);
  const dtStart = date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const endDate = new Date(date.getTime() + 3 * 60 * 60 * 1000);
  const dtEnd = endDate.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Chinedu Eya Campaign//Events//EN',
    'BEGIN:VEVENT',
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description}`,
    `LOCATION:${event.venue}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
}
