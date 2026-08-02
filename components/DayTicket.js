import Link from 'next/link';

function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="3" stroke="#f3bd3a" strokeWidth="1.8" />
      <path d="M3 10h18" stroke="#f3bd3a" strokeWidth="1.8" />
      <path d="M8 3v4M16 3v4" stroke="#f3bd3a" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 text-gold-400"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export default function DayTicket({ day, weekday, tag, eventCount }) {
  return (
    <Link
      href={`/dia/${day}`}
      className="day-card group flex items-stretch rounded-2xl overflow-hidden relative"
    >
      <div className="day-card-gold w-[76px] shrink-0 flex flex-col items-center justify-center py-4">
        <span className="font-display text-3xl leading-none text-navy-950">{day}</span>
        <span className="font-body text-[10px] font-medium uppercase tracking-widest text-navy-950/80 mt-1">
          agosto
        </span>
      </div>

      <div className="absolute left-[76px] top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0b1330] border-[2.5px] border-[#16234f] flex items-center justify-center z-10">
        <CalendarIcon />
      </div>

      <div className="flex-1 flex items-center justify-between pl-8 pr-3 py-3.5 min-w-0">
        <div className="min-w-0 flex-1">
          <p className="font-display text-lg text-cream-50 leading-none">{weekday}</p>
          <p className="font-body text-xs text-mist-400 mt-1">
            {eventCount} {eventCount === 1 ? 'acto' : 'actos'}
            {tag ? ` · ${tag}` : ''}
          </p>
        </div>

        <div className="shrink-0 w-9 h-9 rounded-full bg-[#0b1330] border border-white/5 flex items-center justify-center text-gold-400 group-hover:translate-x-0.5 transition-transform">
          <ChevronRightIcon />
        </div>
      </div>
    </Link>
  );
}

