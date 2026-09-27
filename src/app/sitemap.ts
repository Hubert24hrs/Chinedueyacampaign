import type { MetadataRoute } from 'next';
import { seo } from '@/config/site.config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seo.siteUrl;
  const routes = [
    '',
    '/about',
    '/agenda',
    '/constituency',
    '/vote',
    '/get-involved',
    '/donate',
    '/donation-policy',
    '/news',
    '/events',
    '/gallery',
    '/media',
    '/contact',
    '/privacy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' || route === '/news' || route === '/events'
      ? 'daily'
      : 'weekly') as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority: route === '' ? 1.0 : route === '/vote' || route === '/donate' || route === '/agenda' ? 0.9 : 0.8,
  }));
}
