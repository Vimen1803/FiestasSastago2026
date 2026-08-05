import Header from '../components/Header';
import DayTicket from '../components/DayTicket';
import { DAYS } from '../data/events';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Festival',
  name: 'Fiestas de San Roque y la Virgen de Montler',
  startDate: '2026-08-13',
  endDate: '2026-08-18',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  location: {
    '@type': 'Place',
    name: 'Sástago',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sástago',
      addressRegion: 'Zaragoza',
      addressCountry: 'ES',
    },
  },
  description:
    'Programa de las Fiestas de San Roque y la Virgen de Montler en Sástago, del 13 al 18 de agosto de 2026.',
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Fiestas Sástago 2026',
  url: 'https://fiestas-sastago2026.vercel.app',
};

export default function HomePage() {
  return (
    <div className="relative min-h-[100dvh]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <div className="cover-bg" aria-hidden="true" />

      <div className="relative z-10">
        <Header />

        <main className="px-4 pt-8 pb-4">
          <h2 className="font-body text-[11px] uppercase tracking-[0.3em] text-gold-400 mb-3 px-1">
            Elige un día
          </h2>
          <div className="flex flex-col gap-3">
            {DAYS.map((d) => (
              <DayTicket
                key={d.day}
                day={d.day}
                weekday={d.weekday}
                tag={d.tag}
                eventCount={d.events.length}
              />
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <a
              href="/SanRoqueSastago2026.pdf"
              download="SanRoqueSastago2026.pdf"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#16234f] border border-white/5 text-sm font-body font-medium text-cream-50 hover:bg-[#1d2d69] hover:border-gold-400/30 transition-all active:scale-95 shadow-lg shadow-black/20"
            >
              <svg className="w-5 h-5 text-gold-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Descargar programa en PDF</span>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
