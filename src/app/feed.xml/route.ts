import { NextResponse } from 'next/server';
import { newsArticles } from '@/content/news';
import { candidate, seo } from '@/config/site.config';

export async function GET() {
  const siteUrl = seo.siteUrl || 'https://chinedueya.ng';

  const itemsXml = newsArticles
    .map((article) => {
      const articleUrl = `${siteUrl}/news/${article.slug}`;
      const pubDate = new Date(article.date).toUTCString();
      return `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${articleUrl}</link>
      <guid isPermaLink="true">${articleUrl}</guid>
      <description><![CDATA[${article.excerpt}]]></description>
      <category>${article.category}</category>
      <pubDate>${pubDate}</pubDate>
      <author>${article.author || candidate.fullName}</author>
    </item>`;
    })
    .join('');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${candidate.fullName} Campaign News &amp; Updates</title>
    <link>${siteUrl}</link>
    <description>${seo.defaultDescription}</description>
    <language>en-NG</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
    ${itemsXml}
  </channel>
</rss>`;

  return new NextResponse(rssFeed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
