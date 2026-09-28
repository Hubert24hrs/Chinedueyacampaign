'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console for diagnostic purposes
    console.error('App Error Caught:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-slate-950 text-white">
      <div className="max-w-md w-full bg-slate-900/90 border border-slate-800 rounded-3xl p-8 text-center shadow-2xl backdrop-blur-xl">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500">
          <AlertCircle className="w-8 h-8" />
        </div>

        <h1 className="font-display text-2xl font-black mb-2 text-white">
          Something went wrong
        </h1>

        <p className="text-slate-300 text-sm mb-6 leading-relaxed">
          We encountered an unexpected issue while loading this page. Please try refreshing or return to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="btn btn-party btn-md flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 font-bold"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>

          <Link
            href="/"
            className="btn btn-ghost btn-md flex items-center justify-center gap-2 border border-slate-700 hover:bg-slate-800 font-bold text-slate-200"
          >
            <Home className="w-4 h-4" />
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
