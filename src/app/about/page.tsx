/**
 * ============================================================================
 * ABOUT PAGE — Biography, values, career timeline, personal message
 * ============================================================================
 */
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Heart, GraduationCap, Briefcase, Users, Target,
  Star, ArrowRight, Quote, Calendar
} from 'lucide-react';
import { candidate } from '@/config/site.config';
import { useLocale } from '@/context/LocaleContext';
import Section from '@/components/ui/Section';

// ─── Career Timeline ─────────────────────────────────────────────────────────

const timeline = [
  {
    year: '{{TO_VERIFY_WITH_CLIENT}}',
    title: 'Early Education',
    description: 'Completed primary and secondary education in Enugu State. {{TO_VERIFY_WITH_CLIENT: Add specific schools.}}',
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    year: '{{TO_VERIFY_WITH_CLIENT}}',
    title: 'Higher Education',
    description: 'Obtained degree from {{TO_VERIFY_WITH_CLIENT: University name, course, and year.}}',
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    year: '{{TO_VERIFY_WITH_CLIENT}}',
    title: 'Career Beginnings',
    description: '{{TO_VERIFY_WITH_CLIENT: Early career details, first professional roles.}}',
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    year: '{{TO_VERIFY_WITH_CLIENT}}',
    title: 'Community Service',
    description: '{{TO_VERIFY_WITH_CLIENT: Community service and public engagement activities.}}',
    icon: <Users className="w-5 h-5" />,
  },
  {
    year: '{{TO_VERIFY_WITH_CLIENT}}',
    title: 'Political Engagement',
    description: '{{TO_VERIFY_WITH_CLIENT: Entry into politics, party roles, and key milestones.}}',
    icon: <Star className="w-5 h-5" />,
  },
  {
    year: 'Present',
    title: 'House of Representatives Campaign',
    description: 'Running to represent the Igbo Eze North / Udenu Federal Constituency in the Federal House of Representatives on the platform of the Labour Party.',
    icon: <Target className="w-5 h-5" />,
  },
];

// ─── Values ──────────────────────────────────────────────────────────────────

const values = [
  {
    title: 'Integrity',
    description: 'Transparency and honesty in all dealings — public funds, legislative activities, and constituency engagement.',
    icon: '🛡️',
  },
  {
    title: 'Service',
    description: 'Leadership rooted in service to the people, not personal gain. Every decision guided by community welfare.',
    icon: '🤝',
  },
  {
    title: 'Inclusivity',
    description: 'Ensuring every voice in the constituency is heard — youth, women, elders, and the most vulnerable.',
    icon: '🌍',
  },
  {
    title: 'Innovation',
    description: 'Embracing modern solutions to age-old problems — technology, data-driven governance, and fresh thinking.',
    icon: '💡',
  },
  {
    title: 'Accountability',
    description: 'Regular reporting, open-door policy, and quarterly town halls to keep constituents informed and empowered.',
    icon: '📊',
  },
  {
    title: 'Compassion',
    description: 'A deep love for our community and genuine commitment to improving the lives of the people we serve.',
    icon: '❤️',
  },
];

export default function AboutPage() {
  const { t } = useLocale();

  return (
    <>
      {/* Hero */}
      <section className="relative gradient-hero pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
                {t('about.title')}
              </h1>
              <p className="text-white/80 text-lg mb-4">
                {candidate.officeSought} • {candidate.constituency}
              </p>
              <p className="text-white/60 text-base max-w-lg">
                A leader rooted in community, driven by service, and committed to building a better future for the people of our constituency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                <Image
                  src={candidate.portrait}
                  alt={candidate.fullName}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <Section id="biography">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-dark mb-6">{t('about.bio')}</h2>
          <div className="prose prose-lg max-w-none text-dark-muted leading-relaxed space-y-4">
            <p>
              Hon. Chinedu Eya is a distinguished community leader, public servant, and passionate advocate for grassroots development from the Igbo Eze North / Udenu Federal Constituency of Enugu State, Nigeria.
            </p>
            <p>
              {'{{TO_VERIFY_WITH_CLIENT: Detailed biography including early life, family background, education journey, career progression, community service achievements, and key milestones. Do NOT fabricate any facts.}}'}
            </p>
            <p>
              Born and raised in the constituency, Hon. Eya has dedicated his life to the service of his community. His deep understanding of the challenges facing the people of Igbo Eze North and Udenu, combined with his track record of service, makes him uniquely positioned to represent the constituency in the Federal House of Representatives.
            </p>
            <p>
              He is running on the platform of the Labour Party (LP), driven by the belief that quality representation can transform communities and create lasting opportunities for all.
            </p>
          </div>
        </div>
      </Section>

      {/* Values & Vision */}
      <Section className="bg-surface-elevated">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-dark mb-4">{t('about.values')}</h2>
          <p className="text-dark-muted max-w-xl mx-auto">
            The principles that guide Hon. Chinedu Eya&apos;s leadership and his vision for representing our constituency.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value) => (
            <div key={value.title} className="card p-6 text-center hover:border-primary/30">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="font-display font-bold text-lg text-dark mb-2">{value.title}</h3>
              <p className="text-dark-muted text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Career & Public Service Timeline */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-dark mb-4">{t('about.career')}</h2>
          <p className="text-dark-muted max-w-xl mx-auto">
            A journey of dedication, growth, and service to the community.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {timeline.map((item, i) => (
            <div key={i} className="relative flex gap-4 pb-8 last:pb-0">
              {/* Timeline line */}
              {i < timeline.length - 1 && (
                <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-border" />
              )}
              
              {/* Icon */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${
                i === timeline.length - 1
                  ? 'bg-primary text-white'
                  : 'bg-surface-muted text-dark-muted'
              }`}>
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex-1 pb-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-primary font-display font-bold text-sm">{item.year}</span>
                </div>
                <h3 className="font-display font-bold text-base text-dark mb-1">{item.title}</h3>
                <p className="text-dark-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Personal Message */}
      <Section className="bg-dark">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="w-12 h-12 text-primary/50 mx-auto mb-6" />
          <h2 className="font-display text-3xl font-bold text-white mb-6">
            {t('about.personalMessage')}
          </h2>
          <blockquote className="text-white/80 text-lg md:text-xl leading-relaxed italic mb-6">
            &ldquo;To the good people of Igbo Eze North and Udenu — I come to you not just as a candidate, but as a son of this soil, a neighbour, and a fellow citizen who feels your pain and shares your dreams. I believe in the power of quality representation to transform lives. If you give me the honour of your vote, I will be your voice in the National Assembly — a voice that speaks for the farmer in Ibagwa, the trader in Obollo-Afor, the student in Enugu-Ezike, and every person in every ward of our constituency. Together, we will build a future we can all be proud of. Dalụ.&rdquo;
          </blockquote>
          <p className="text-white/60 font-display font-bold">
            — {candidate.fullName}
          </p>
          {/* {{TO_VERIFY_WITH_CLIENT: Replace with candidate's actual personal message}} */}
        </div>
      </Section>

      {/* CTA */}
      <section className="gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Support the Campaign?
          </h2>
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
    </>
  );
}
