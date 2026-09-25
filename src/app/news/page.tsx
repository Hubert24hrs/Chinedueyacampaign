/**
 * ============================================================================
 * NEWS LIST PAGE — Article list with categories
 * ============================================================================
 */
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Newspaper, ArrowRight } from 'lucide-react';
import { newsArticles } from '@/content/news';
import Section from '@/components/ui/Section';

export default function NewsPage() {
  const categories = ['All', ...new Set(newsArticles.map((a) => a.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? newsArticles
    : newsArticles.filter((a) => a.category === activeCategory);

  return (
    <>
      <section className="relative gradient-hero pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Newspaper className="w-12 h-12 text-primary mx-auto mb-4" />
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">News & Updates</h1>
            <p className="text-white/80 text-lg">The latest from the campaign trail.</p>
          </motion.div>
        </div>
      </section>

      <Section>
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-white'
                  : 'bg-surface-muted text-dark-muted hover:bg-primary-light hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article) => (
            <Link key={article.id} href={`/news/${article.slug}`} className="card group">
              <div className="relative h-48 bg-surface-muted overflow-hidden">
                {article.image && (
                  <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                )}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">{article.category}</span>
                </div>
              </div>
              <div className="card-body">
                <p className="text-dark-muted text-xs mb-2">
                  {new Date(article.date).toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
                <h3 className="font-display font-bold text-base text-dark mb-2 group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
                <p className="text-dark-muted text-sm line-clamp-2">{article.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-3">
                  Read More <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
