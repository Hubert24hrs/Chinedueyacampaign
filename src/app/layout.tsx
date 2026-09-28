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
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'],
  adjustFontFallback: true,
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'],
  adjustFontFallback: true,
});

// ─── Metadata ────────────────────────────────────────────────────────────────

const siteUrl = seo.siteUrl;
const thumbnailUrl = `${siteUrl}/thumbnail.jpg`;
const ogDefaultUrl = `${siteUrl}/images/og/og-default.jpg`;

export const metadata: Metadata = {
  title: {
    default: seo.defaultTitle,
    template: `%s | ${seo.siteName}`,
  },
  description: seo.defaultDescription,
  keywords: [...seo.keywords],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    url: siteUrl,
    siteName: seo.siteName,
    images: [
      {
        url: thumbnailUrl,
        secureUrl: thumbnailUrl,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: `${candidate.fullName}: ${candidate.slogan}`,
      },
      {
        url: ogDefaultUrl,
        secureUrl: ogDefaultUrl,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
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
    images: [thumbnailUrl],
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
    'theme-color': '#059669',
    'thumbnail': thumbnailUrl,
    'image': thumbnailUrl,
    'og:image:secure_url': thumbnailUrl,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#059669',
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
    url: siteUrl,
    image: thumbnailUrl,
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
        <link rel="image_src" href={thumbnailUrl} />
        <meta property="og:image" content={thumbnailUrl} />
        <meta property="og:image:secure_url" content={thumbnailUrl} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${candidate.fullName}: ${candidate.slogan}`} />
        <meta name="twitter:image" content={thumbnailUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="thumbnail" content={thumbnailUrl} />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Chinedu Eya 2027" />
        <meta name="format-detection" content="telephone=no, date=no, address=no, email=no" />
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
