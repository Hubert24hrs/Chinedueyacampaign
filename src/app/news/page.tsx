/**
 * ============================================================================
 * NEWS LIST PAGE: Campaign News & Public Statements
 * ============================================================================
 * Labour Party Theme, zero AI slop, zero hyphens.
 */
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Newspaper, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { newsArticles } from '@/content/news';
import { socials } from '@/config/site.config';
import Section from '@/components/ui/Section';

export default function NewsPage() {
  const categories = ['All', ...new Set(newsArticles.map((a) => a.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? newsArticles
    : newsArticles.filter((a) => a.category === activeCategory);

  return (
    <>
      <section className="relative gradient-hero pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-red-600/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-600/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-amber-300 mb-4 border border-white/15">
              <Newspaper className="w-4 h-4" />
              Press & Dispatch
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
              News and Campaign Dispatches
            </h1>
            <p className="text-slate-200 text-base sm:text-lg max-w-xl mx-auto">
              Official press statements, community announcements, and media releases.
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-slate-50 py-16 md:py-24">
        {filtered.length === 0 ? (
          <div className="max-w-xl mx-auto text-center py-16 bg-white rounded-3xl p-10 border border-slate-200 shadow-lg">
            <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-4">
              <Newspaper className="w-8 h-8" />
            </div>
            <h3 className="font-display font-black text-2xl text-slate-900 mb-2">
              Official Press Statements Coming Soon
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Campaign dispatches and ward updates will be released here. For breaking announcements, connect directly with our campaign channels.
            </p>
            <a
              href={socials.whatsappChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary inline-flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Follow Official WhatsApp Channel</span>
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filtered.map((article) => (
              <Link key={article.id} href={`/news/${article.slug}`} className="card group bg-white shadow-md">
                <div className="relative h-48 bg-slate-100 overflow-hidden">
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
                    <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <p className="text-slate-400 text-xs mb-2">
                    {new Date(article.date).toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-2">{article.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-red-600 text-sm font-semibold mt-3">
                    Read Full Story <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
