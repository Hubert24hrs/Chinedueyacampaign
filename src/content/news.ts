/**
 * ============================================================================
 * Sample News Articles — MDX-style typed content
 * ============================================================================
 * Non-developers can edit these JSON files to update news content.
 * Each article is a typed object with clearly marked placeholder copy.
 */

import { NewsArticle } from '@/types';

export const newsArticles: NewsArticle[] = [
  {
    id: 'campaign-launch-2027',
    slug: 'campaign-launch-igbo-eze-north-udenu',
    title: 'Hon. Chinedu Eya Officially Launches Campaign for House of Representatives',
    titleIgbo: 'Hon. Chinedu Eya Amalitela Ọgbakọ Ọchịchị',
    excerpt:
      'Thousands gathered in Enugu-Ezike as Hon. Chinedu Eya formally declared his intention to represent the people of Igbo Eze North / Udenu Federal Constituency.',
    content: `
Hon. Chinedu Eya officially launched his campaign for the Federal House of Representatives, pledging to bring transformative change to the Igbo Eze North / Udenu Federal Constituency.

Speaking to a crowd of supporters, community leaders, and youth groups at the campaign rally, Hon. Eya outlined his vision for the constituency, focusing on youth empowerment, healthcare access, infrastructure development, and transparent representation.

"Our people deserve a representative who listens, who shows up, and who delivers," he said. "I am that voice. Together, we will build a better future for our constituency."

{{TO_VERIFY_WITH_CLIENT: Replace with actual campaign launch details, date, venue, and quotes.}}
    `.trim(),
    category: 'Campaign',
    date: '2026-09-01',
    image: '/images/news/campaign-launch.jpg',
    author: 'Campaign Communications',
  },
  {
    id: 'community-outreach-udenu',
    slug: 'community-outreach-udenu-lga',
    title: 'Community Outreach in Udenu: Listening to the People',
    titleIgbo: 'Ịnụrụ Olu Ndị Mmadụ na Udenu',
    excerpt:
      'Hon. Chinedu Eya visits Obollo-Afor and surrounding communities to hear directly from residents about their needs and priorities.',
    content: `
As part of his grassroots engagement strategy, Hon. Chinedu Eya conducted a series of community outreach visits across Udenu LGA.

In Obollo-Afor, residents highlighted the need for improved road infrastructure, better healthcare facilities, and more support for local farmers. Hon. Eya listened attentively and shared his plans to address these challenges through targeted legislative advocacy.

"Representation starts with listening," Hon. Eya remarked. "I am here to learn from you, so I can fight for what matters most to this community."

{{TO_VERIFY_WITH_CLIENT: Replace with actual outreach details, communities visited, and specific issues discussed.}}
    `.trim(),
    category: 'Community',
    date: '2026-09-10',
    image: '/images/news/outreach-udenu.jpg',
    author: 'Campaign Communications',
  },
  {
    id: 'youth-town-hall',
    slug: 'youth-town-hall-enugu-ezike',
    title: 'Youth Town Hall: Empowering the Next Generation',
    titleIgbo: 'Ọgbakọ Ndị Okorobia: Inyere Ọgbọ Ọhụrụ Aka',
    excerpt:
      'Hon. Chinedu Eya hosts a dynamic town hall with young people from across the constituency, discussing jobs, education, and digital skills.',
    content: `
Over 500 young people from Igbo Eze North and Udenu attended a special Youth Town Hall organised by the Chinedu Eya Campaign.

The event featured discussions on youth unemployment, digital skills training, scholarship opportunities, and how young people can be more active in governance. Several young entrepreneurs shared their stories, and Hon. Eya announced plans for a constituency-wide skills acquisition programme.

"The future of this constituency is in the hands of our young people. My job is to make sure they have every opportunity to succeed," Hon. Eya said.

{{TO_VERIFY_WITH_CLIENT: Replace with actual town hall details, number of attendees, and specific outcomes.}}
    `.trim(),
    category: 'Youth',
    date: '2026-09-18',
    image: '/images/news/youth-town-hall.jpg',
    author: 'Campaign Communications',
  },
];
