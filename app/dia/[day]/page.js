import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import EventCard from '../../../components/EventCard';
import { DAYS, getDay } from '../../../data/events';

export function generateStaticParams() {
  return DAYS.map((d) => ({ day: String(d.day) }));
}

export function generateMetadata({ params }) {
  const dayData = getDay(params.day);
  if (!dayData) return {};
  const fullTitle = `${dayData.weekday} ${dayData.day} - Sástago 2026`;
  const description = `Actos del ${dayData.weekday} ${dayData.dateLabel} en las Fiestas de Sástago: ${dayData.events
    .map((e) => e.title)
    .join(', ')}.`;
  return {
    title: `${dayData.weekday} ${dayData.day}`,
    description,
    openGraph: { title: fullTitle, description },
    twitter: { title: fullTitle, description },
  };
}

export default function DayPage({ params }) {
  const dayData = getDay(params.day);
  if (!dayData) notFound();

  const idx = DAYS.findIndex((d) => d.day === dayData.day);
  const prev = DAYS[idx - 1];
  const next = DAYS[idx + 1];

  return (
    <div className="relative min-h-[100dvh]">
      <div className="cover-repeat-bg" aria-hidden="true" />
      
      <div className="relative z-10">
        <Header backHref="/" />
        <main className="px-5 pt-5 pb-4">
          <div className="mb-5">
            <p className="font-body text-[11px] uppercase tracking-[0.3em] text-gold-400">
              {dayData.dateLabel}
              {dayData.tag ? ` · ${dayData.tag}` : ''}
            </p>
            <h1 className="font-display text-2xl text-cream-50 mt-1">{dayData.weekday}</h1>
          </div>

          <div className="flex flex-col gap-3">
            {dayData.events.map((ev, i) => (
              <EventCard key={i} {...ev} />
            ))}
          </div>

          <nav className="flex justify-between items-center mt-4 pt-4 border-t border-white/5">
            {prev ? (
              <a href={`/dia/${prev.day}`} className="font-body text-sm text-mist-400 hover:text-cream-50">
                ← {prev.weekday} {prev.day}
              </a>
            ) : (
              <span />
            )}
            {next ? (
              <a href={`/dia/${next.day}`} className="font-body text-sm text-mist-400 hover:text-cream-50">
                {next.weekday} {next.day} →
              </a>
            ) : (
              <span />
            )}
          </nav>
        </main>
      </div>
    </div>
  );
}
