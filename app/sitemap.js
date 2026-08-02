import { DAYS } from '../data/events';

const SITE_URL = 'https://fiestas-sastago.vercel.app';

export default function sitemap() {
  const dayEntries = DAYS.map((d) => ({
    url: `${SITE_URL}/dia/${d.day}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...dayEntries,
  ];
}
