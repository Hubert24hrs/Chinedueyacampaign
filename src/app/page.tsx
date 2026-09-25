/**
 * ============================================================================
 * HOME PAGE — Campaign landing page
 * ============================================================================
 * This is the most important page. It must immediately communicate who the
 * candidate is, what he stands for, and give clear paths to donate/volunteer.
 */
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Heart, Users, ArrowRight, ChevronRight, Quote,
  Newspaper, Calendar, MapPin, Share2, CheckCircle,
  Sparkles, Target, Trophy, Star
} from 'lucide-react';
import { candidate, agendaPriorities, election, constituency, socials } from '@/config/site.config';
import { useLocale } from '@/context/LocaleContext';
import CountdownTimer from '@/components/ui/CountdownTimer';
import Section from '@/components/ui/Section';
import { newsArticles } from '@/content/news';
import { campaignEvents } from '@/content/events';

// ─── Placeholder testimonials (client must supply real ones) ─────────────────

const testimonials = [
  {
    id: '1',
    name: 'Chief Okwuosa Nnamdi',
    role: 'Community Leader',
    location: 'Enugu-Ezike',
    quote: 'Hon. Chinedu Eya is a man of the people. He listens, he acts, and he delivers. Our constituency needs his kind of leadership.',
    image: undefined,
  },
  {
    id: '2',
    name: 'Mrs. Adaeze Ugwu',
    role: 'Market Women Leader',
    location: 'Obollo-Afor',
    quote: 'For the first time, we have a candidate who truly understands the struggles of women in our community. He has my full support.',
    image: undefined,
  },
  {
    id: '3',
    name: 'Engr. Chukwuma Eze',
    role: 'Youth Advocate',
    location: 'Ibagwa-Aka',
    quote: 'As a young person, I see in Hon. Chinedu Eya someone who genuinely cares about creating opportunities for the next generation.',
    image: undefined,
  },
];
// {{TO_VERIFY_WITH_CLIENT: Replace all testimonials with real quotes. Never fabricate endorsements.}}

// ─── Hero Section ────────────────────────────────────────────────────────────

function HeroSection() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Party badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <div className="w-6 h-6 rounded-full bg-primary-light overflow-hidden relative flex-shrink-0">
                <Image
                  src={candidate.party.logo}
                  alt={candidate.party.name}
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <span className="text-white/90 text-sm font-medium">
                {candidate.party.name} ({candidate.party.abbreviation})
              </span>
            </div>

            {/* Main heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-4">
              <span className="text-gradient">{candidate.slogan.split('.')[0]}.</span>
              <br />
              <span className="text-white">{candidate.slogan.split('.').slice(1).join('.').trim()}</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-4 max-w-xl">
              {candidate.fullName} for {candidate.officeSought}
            </p>
            <p className="text-base text-white/60 mb-8 max-w-xl">
              {candidate.constituency}, {candidate.state}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link href="/donate" className="btn btn-primary btn-lg">
                <Heart className="w-5 h-5" />
                {t('hero.cta.donate')}
              </Link>
              <Link href="/get-involved" className="btn btn-white btn-lg">
                <Users className="w-5 h-5" />
                {t('hero.cta.volunteer')}
              </Link>
            </div>

            {/* Countdown */}
            <CountdownTimer />
          </motion.div>

          {/* Right: Candidate Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
              
              {/* Portrait */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                <Image
                  src={candidate.portrait}
                  alt={`${candidate.fullName} — Candidate for ${candidate.officeSought}`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-display font-bold text-lg">{candidate.fullName}</p>
                  <p className="text-white/80 text-sm">{candidate.party.name}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce hidden md:block">
        <ChevronRight className="w-6 h-6 rotate-90" />
      </div>
    </section>
  );
}

// ─── Why Chinedu Section ─────────────────────────────────────────────────────

function WhySection() {
  const points = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Proven Track Record',
      description: 'A history of community service and grassroots development across the constituency. {{TO_VERIFY_WITH_CLIENT}}',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'People-First Approach',
      description: 'Committed to transparent, accountable governance that puts constituents at the centre of every decision.',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Bold Vision for Change',
      description: 'A comprehensive agenda addressing youth empowerment, healthcare, education, and infrastructure.',
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'Grassroots Champion',
      description: 'Deeply rooted in the community with strong relationships across both LGAs of the constituency.',
    },
  ];

  return (
    <Section id="why-chinedu" className="bg-surface-elevated">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">
          Why Hon. Chinedu Eya?
        </h2>
        <p className="text-dark-muted max-w-2xl mx-auto text-lg">
          A leader who understands our challenges, shares our dreams, and has the courage to fight for change.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {points.map((point, i) => (
          <div key={i} className="card p-6 flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center flex-shrink-0">
              {point.icon}
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-dark mb-1">{point.title}</h3>
              <p className="text-dark-muted text-sm leading-relaxed">{point.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── Constituency Snapshot ───────────────────────────────────────────────────

function ConstituencySnapshot() {
  return (
    <Section id="constituency-snapshot">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">
          Our Constituency
        </h2>
        <p className="text-dark-muted max-w-2xl mx-auto text-lg">
          Representing the vibrant communities of Igbo Eze North and Udenu in the heart of Enugu State.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {constituency.lgas.map((lga) => (
          <div key={lga.name} className="card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary-light text-secondary flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-dark">{lga.name} LGA</h3>
                <p className="text-dark-muted text-sm">HQ: {lga.headquarters}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {lga.towns.map((town) => (
                <span
                  key={town}
                  className="px-3 py-1 bg-surface-muted text-dark-muted text-sm rounded-full"
                >
                  {town}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link href="/constituency" className="btn btn-outline">
          Explore Our Constituency <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  );
}

// ─── Agenda Highlights ───────────────────────────────────────────────────────

function AgendaHighlights() {
  const topPriorities = agendaPriorities.slice(0, 6);

  return (
    <Section id="agenda" className="bg-surface-elevated">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">
          Our Agenda for Change
        </h2>
        <p className="text-dark-muted max-w-2xl mx-auto text-lg">
          A clear, actionable plan to transform our constituency and improve the lives of our people.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topPriorities.map((priority) => (
          <div key={priority.id} className="card p-6 text-center hover:border-primary/30">
            <div className="text-4xl mb-4">{priority.icon}</div>
            <h3 className="font-display font-bold text-lg text-dark mb-2">{priority.title}</h3>
            <p className="text-dark-muted text-sm leading-relaxed">{priority.summary}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link href="/agenda" className="btn btn-primary">
          Read Full Manifesto <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  );
}

// ─── Achievements Track Record ───────────────────────────────────────────────

function AchievementsSection() {
  const achievements = [
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Community Development',
      description: 'Led multiple community development initiatives across the constituency. {{TO_VERIFY_WITH_CLIENT}}',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Youth Empowerment',
      description: 'Supported youth skills programmes benefiting hundreds of young people. {{TO_VERIFY_WITH_CLIENT}}',
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Public Service',
      description: 'Decades of dedicated public service and community leadership. {{TO_VERIFY_WITH_CLIENT}}',
    },
  ];
  // {{TO_VERIFY_WITH_CLIENT: Replace all achievements with verified facts. Do NOT fabricate statistics.}}

  return (
    <Section id="achievements">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">
          A Track Record of Service
        </h2>
        <p className="text-dark-muted max-w-2xl mx-auto text-lg">
          Proven commitment to our community through years of dedicated service.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((item, i) => (
          <div key={i} className="text-center p-6">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 text-accent mx-auto mb-4 flex items-center justify-center">
              {item.icon}
            </div>
            <h3 className="font-display font-bold text-lg text-dark mb-2">{item.title}</h3>
            <p className="text-dark-muted text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── News Preview ────────────────────────────────────────────────────────────

function NewsPreview() {
  const latestNews = newsArticles.slice(0, 3);

  return (
    <Section id="news" className="bg-surface-elevated">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">
          Latest News & Updates
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {latestNews.map((article) => (
          <Link key={article.id} href={`/news/${article.slug}`} className="card group">
            <div className="relative h-48 bg-surface-muted overflow-hidden">
              {article.image && (
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              )}
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                  {article.category}
                </span>
              </div>
            </div>
            <div className="card-body">
              <p className="text-dark-muted text-xs mb-2">
                {new Date(article.date).toLocaleDateString('en-NG', {
                  day: 'numeric', month: 'long', year: 'numeric',
                })}
              </p>
              <h3 className="font-display font-bold text-base text-dark mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-dark-muted text-sm line-clamp-2">{article.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link href="/news" className="btn btn-outline">
          View All News <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  );
}

// ─── Events Preview ──────────────────────────────────────────────────────────

function EventsPreview() {
  const upcomingEvents = campaignEvents.filter(e => !e.isPast).slice(0, 3);

  return (
    <Section id="events">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">
          Upcoming Events
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {upcomingEvents.map((event) => (
          <Link key={event.id} href={`/events/${event.slug}`} className="card group">
            <div className="card-body">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-bold">
                  {new Date(event.date).toLocaleDateString('en-NG', {
                    day: 'numeric', month: 'short', year: 'numeric',
                  })} • {event.time}
                </span>
              </div>
              <h3 className="font-display font-bold text-base text-dark mb-2 group-hover:text-primary transition-colors">
                {event.title}
              </h3>
              <p className="text-dark-muted text-sm mb-3 line-clamp-2">{event.description}</p>
              <div className="flex items-center gap-2 text-dark-muted text-xs">
                <MapPin className="w-3.5 h-3.5" />
                <span>{event.venue}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link href="/events" className="btn btn-outline">
          View All Events <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  );
}

// ─── Volunteer CTA ───────────────────────────────────────────────────────────

function VolunteerCTA() {
  const { t } = useLocale();

  return (
    <section className="relative gradient-secondary overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-white rounded-full blur-2xl" />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-20 text-center relative z-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
          Join the Movement
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Our campaign is powered by ordinary people who believe in a better future. Whether you can give your time, your skills, or your voice — you matter.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/get-involved" className="btn btn-white btn-lg">
            <Users className="w-5 h-5" />
            {t('hero.cta.volunteer')}
          </Link>
          <Link href="/donate" className="btn btn-lg bg-white/20 text-white border-2 border-white/30 hover:bg-white/30">
            <Heart className="w-5 h-5" />
            {t('hero.cta.donate')}
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ────────────────────────────────────────────────────────────

function TestimonialsSection() {
  return (
    <Section id="testimonials" className="bg-surface-elevated">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">
          What Our Community Says
        </h2>
        <p className="text-dark-muted text-sm">
          {/* Clearly marked as placeholders */}
          <em>{'{{TO_VERIFY_WITH_CLIENT: These are placeholder testimonials. Replace with real, verified quotes from community members who have given consent.}}'}</em>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="card p-6">
            <Quote className="w-8 h-8 text-primary/20 mb-4" />
            <p className="text-dark-muted text-sm leading-relaxed mb-4 italic">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <div className="w-10 h-10 rounded-full bg-primary-light text-primary flex items-center justify-center font-display font-bold text-sm">
                {testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div>
                <p className="font-display font-bold text-sm text-dark">{testimonial.name}</p>
                <p className="text-dark-muted text-xs">{testimonial.role}, {testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── Donation Band ───────────────────────────────────────────────────────────

function DonationBand() {
  const { t } = useLocale();

  return (
    <section className="gradient-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
          Power the Change
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Every naira counts. Your donation helps us reach more communities, spread our message, and build a brighter future for our constituency.
        </p>
        <Link href="/donate" className="btn btn-white btn-lg">
          <Heart className="w-5 h-5 text-primary" />
          <span className="text-primary">{t('hero.cta.donate')}</span>
        </Link>
      </div>
    </section>
  );
}

// ─── Newsletter / WhatsApp Signup ────────────────────────────────────────────

function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { t } = useLocale();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <Section id="newsletter">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-display text-3xl font-bold text-dark mb-4">
          {t('newsletter.title')}
        </h2>
        <p className="text-dark-muted mb-8">
          {t('newsletter.subtitle')}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('newsletter.email')}
            required
            className="form-input flex-1"
            aria-label={t('newsletter.email')}
          />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? t('common.sending') : t('newsletter.subscribe')}
          </button>
        </form>

        {status === 'success' && (
          <p className="text-secondary font-medium text-sm">{t('common.success')} Check your email to confirm.</p>
        )}
        {status === 'error' && (
          <p className="text-primary font-medium text-sm">{t('common.error')}</p>
        )}

        <div className="flex items-center gap-3 justify-center mt-6">
          <span className="text-dark-muted text-sm">or</span>
          <a
            href={socials.whatsappChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            {t('newsletter.whatsapp')}
          </a>
        </div>
      </div>
    </Section>
  );
}

// ─── Main Page Component ─────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <ConstituencySnapshot />
      <AgendaHighlights />
      <AchievementsSection />
      <NewsPreview />
      <EventsPreview />
      <VolunteerCTA />
      <TestimonialsSection />
      <DonationBand />
      <NewsletterSection />
    </>
  );
}
