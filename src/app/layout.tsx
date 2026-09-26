/**
 * ============================================================================
 * Root Layout — App shell with fonts, providers, header, footer
 * ============================================================================
 */

import type { Metadata, Viewport } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import { LocaleProvider } from '@/context/LocaleContext';
import { seo, candidate } from '@/config/site.config';

// ─── Self-hosted Google Fonts via next/font ─────────────────────────────────

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    default: seo.defaultTitle,
    template: `%s | ${seo.siteName}`,
  },
  description: seo.defaultDescription,
  keywords: [...seo.keywords],
  metadataBase: new URL(seo.siteUrl),
  openGraph: {
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    url: seo.siteUrl,
    siteName: seo.siteName,
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${candidate.fullName}: ${candidate.slogan}`,
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    images: [seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  other: {
    'theme-color': '#DC2626',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#DC2626',
  viewportFit: 'cover',
};

// ─── JSON-LD Structured Data ─────────────────────────────────────────────────

function JsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: candidate.fullName,
    jobTitle: candidate.officeSought,
    affiliation: {
      '@type': 'Organization',
      name: candidate.party.name,
    },
    url: seo.siteUrl,
    image: `${seo.siteUrl}${candidate.portrait}`,
    description: seo.defaultDescription,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Enugu-Ezike',
      addressRegion: 'Enugu State',
      addressCountry: 'NG',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}

// ─── Layout ──────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="font-body antialiased">
        <LocaleProvider>
          <Header />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppFloat />
        </LocaleProvider>
      </body>
    </html>
  );
}
