import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft, Heart, Users, Compass } from 'lucide-react';
import { candidate } from '@/config/site.config';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-16 px-4">
      <div className="max-w-xl mx-auto text-center">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-primary/10 text-primary flex items-center justify-center font-display font-black text-3xl mb-6">
          404
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-dark mb-4">
          Page Not Found
        </h1>
        <p className="text-dark/70 text-base md:text-lg mb-8 leading-relaxed">
          The page you are looking for does not exist or may have been moved. Return to the homepage or explore key sections of the {candidate.fullName} campaign.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <Link href="/" className="btn btn-primary inline-flex items-center gap-2">
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link href="/agenda" className="btn btn-outline inline-flex items-center gap-2">
            <Compass className="w-4 h-4" />
            Our Agenda
          </Link>
          <Link href="/donate" className="btn btn-secondary inline-flex items-center gap-2">
            <Heart className="w-4 h-4" />
            Donate
          </Link>
          <Link href="/get-involved" className="btn btn-outline inline-flex items-center gap-2">
            <Users className="w-4 h-4" />
            Volunteer
          </Link>
        </div>

        <div className="p-4 rounded-2xl bg-dark/5 text-xs text-dark/60">
          Igbo Eze North / Udenu Federal Constituency &bull; Labour Party (LP)
        </div>
      </div>
    </div>
  );
}
