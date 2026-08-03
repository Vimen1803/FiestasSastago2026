'use client';

import { useState } from 'react';

export default function EventCard({ time, title, description, place, embedSrc, linkHref }) {
  const [open, setOpen] = useState(false);
  const hasMap = Boolean(embedSrc && linkHref);

  const toggle = () => setOpen((v) => !v);
  const onHeaderKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  };

  const renderTime = () => {
    const parts = time.split(/[-–]/);
    if (parts.length === 2) {
      return (
        <>
          {parts[0].trim()}
          <br />
          –
          <br />
          {parts[1].trim()}
        </>
      );
    }
    return time;
  };

  return (
    <article className="bg-navy-800 rounded-2xl border border-white/5 overflow-hidden">
      {/* Cabecera de altura fija: hora · título+ubicación · mapa. Clicable para desplegar. */}
      <div
        role="button"
        tabIndex={0}
        onClick={toggle}
        onKeyDown={onHeaderKeyDown}
        aria-expanded={open}
        className="flex h-[104px] w-full text-left cursor-pointer select-none"
      >
        {/* Hora */}
        <div className="w-16 shrink-0 h-full flex flex-col items-center justify-center bg-navy-700/50 px-1 border-r border-white/5">
          <span className="font-display text-[14px] text-gold-400 leading-tight text-center">
            {renderTime()}
          </span>
        </div>

        {/* Título + ubicación */}
        <div className="flex-1 h-full flex flex-col justify-center gap-1.5 px-3.5 min-w-0">
          <h3 className="font-display text-[15px] text-cream-50 leading-snug line-clamp-2">
            {title}
          </h3>
          <div className="flex items-center gap-1.5 min-w-0">
            {hasMap && (
              <span className="text-coral-400 text-[11px] shrink-0" aria-hidden="true">
                📍
              </span>
            )}
            <span className="font-body text-[12px] text-mist-400 truncate">{place}</span>
          </div>
        </div>

        {/* Mapa: enlace real a Google Maps, misma altura fija */}
        {hasMap && (
          <a
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label={`Abrir ubicación de "${title}" (${place}) en Google Maps`}
            className="w-[76px] shrink-0 h-full relative block overflow-hidden border-l border-white/5"
          >
            <iframe
              src={embedSrc}
              className="w-full h-full pointer-events-none grayscale-[0.25] opacity-85"
              loading="lazy"
              title={`Mapa: ${place}`}
              aria-hidden="true"
              tabIndex={-1}
            />
            <span className="absolute inset-0 bg-navy-950/5" />
          </a>
        )}
      </div>

      {/* Descripción desplegable */}
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="font-body text-sm text-mist-400 leading-relaxed px-3.5 pb-4 pt-1 border-t border-white/5 mt-0.5">
            {description}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={toggle}
        className="w-full flex items-center justify-center gap-1 py-1.5 text-[10px] uppercase tracking-widest text-mist-400/70 hover:text-gold-400 border-t border-white/5"
      >
        {open ? 'Ver menos' : 'Ver más'}
        <span className={`inline-block transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
          ▾
        </span>
      </button>
    </article>
  );
}
