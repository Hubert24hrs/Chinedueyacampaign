/**
 * ============================================================================
 * Sample Events — Typed content for campaign events
 * ============================================================================
 */

import { CampaignEvent } from '@/types';

export const campaignEvents: CampaignEvent[] = [
  {
    id: 'constituency-rally-igbo-eze',
    slug: 'constituency-rally-igbo-eze-north',
    title: 'Constituency Rally — Igbo Eze North',
    titleIgbo: 'Ọgbakọ Nzukọ — Igbo Eze North',
    description:
      'Join Hon. Chinedu Eya for a major constituency rally in Enugu-Ezike. Come hear his vision for our community and show your support.',
    date: '2026-10-15',
    time: '10:00 AM',
    venue: 'Enugu-Ezike Town Hall, Igbo Eze North LGA',
    lga: 'Igbo Eze North',
    ward: 'All Wards',
    type: 'rally',
    image: '/images/events/rally-igbo-eze.jpg',
    isPast: false,
  },
  {
    id: 'town-hall-obollo',
    slug: 'town-hall-obollo-afor',
    title: 'Town Hall Meeting — Obollo-Afor',
    titleIgbo: 'Nzukọ Obodo — Obollo-Afor',
    description:
      'An interactive town hall meeting where residents of Obollo-Afor and surrounding communities can ask questions and share their concerns directly with Hon. Chinedu Eya.',
    date: '2026-10-22',
    time: '2:00 PM',
    venue: 'Obollo-Afor Community Centre, Udenu LGA',
    lga: 'Udenu',
    ward: 'Obollo-Afor',
    type: 'town-hall',
    image: '/images/events/town-hall-obollo.jpg',
    isPast: false,
  },
  {
    id: 'women-empowerment-forum',
    slug: 'women-empowerment-forum',
    title: "Women's Empowerment Forum",
    titleIgbo: 'Ọgbakọ Inyere Ụmụ Nwanyị Aka',
    description:
      "A special forum focused on women's economic empowerment, education, and political participation in the constituency.",
    date: '2026-11-05',
    time: '11:00 AM',
    venue: 'Ibagwa-Aka Civic Centre, Igbo Eze North LGA',
    lga: 'Igbo Eze North',
    ward: 'Ibagwa',
    type: 'outreach',
    image: '/images/events/women-forum.jpg',
    isPast: false,
  },
  {
    id: 'youth-skills-workshop',
    slug: 'youth-skills-acquisition-workshop',
    title: 'Youth Skills Acquisition Workshop',
    titleIgbo: 'Ọzụzụ Nkà Ndị Okorobia',
    description:
      'A free two-day workshop for young people covering digital skills, agriculture, and entrepreneurship. Registration required.',
    date: '2026-11-15',
    time: '9:00 AM',
    venue: 'Orba Community Hall, Udenu LGA',
    lga: 'Udenu',
    ward: 'Orba',
    type: 'outreach',
    image: '/images/events/youth-workshop.jpg',
    isPast: false,
  },
];

// Note: All event details are placeholders — {{TO_VERIFY_WITH_CLIENT: Confirm all event details before publishing}}
