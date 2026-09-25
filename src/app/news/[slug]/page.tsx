/**
 * ============================================================================
 * NEWS DETAIL PAGE — Individual article with share buttons
 * ============================================================================
 */
'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Share2, MessageCircle, Calendar, User } from 'lucide-react';
import { Facebook, Twitter } from '@/components/ui/SocialIcons';
import { newsArticles } from '@/content/news';
import { candidate, seo } from '@/config/site.config';
import Section from '@/components/ui/Section';

export default function NewsDetailPage() {
  const params = useParams();
  const article = newsArticles.find((a) => a.slug === params.slug);

  if (!article) {
    return (
      <Section className="pt-32 text-center">
        <h1 className="font-display text-3xl font-bold text-dark mb-4">Article Not Found</h1>
        <Link href="/news" className="btn btn-primary">Back to News</Link>
      </Section>
    );
  }

  const shareUrl = `${seo.siteUrl}/news/${article.slug}`;
  const shareText = `${article.title} — ${candidate.fullName}`;
  const whatsappShare = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n${shareUrl}`)}`;
  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;

  return (
    <>
      <section className="gradient-hero pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/news" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to News
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">{article.category}</span>
            <span className="text-white/60 text-sm flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(article.date).toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">{article.title}</h1>
          <p className="text-white/60 text-sm flex items-center gap-1">
            <User className="w-3.5 h-3.5" /> {article.author}
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {article.image && (
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-8 -mt-16">
            <Image src={article.image} alt={article.title} fill className="object-cover" sizes="100vw" />
          </div>
        )}

        <div className="prose prose-lg max-w-none text-dark-muted leading-relaxed whitespace-pre-wrap mb-8">
          {article.content}
        </div>

        {/* Share buttons */}
        <div className="flex items-center gap-3 border-t border-border pt-6">
          <span className="text-dark-muted text-sm font-semibold flex items-center gap-1"><Share2 className="w-4 h-4" /> Share:</span>
          <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform" aria-label="Share on WhatsApp">
            <MessageCircle className="w-4 h-4" />
          </a>
          <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition-transform" aria-label="Share on Facebook">
            <Facebook className="w-4 h-4" />
          </a>
          <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform" aria-label="Share on X">
            <Twitter className="w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  );
}
