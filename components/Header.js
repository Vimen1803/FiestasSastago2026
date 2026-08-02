import Link from 'next/link';
import Image from 'next/image';
import crest from '../public/crest.png';

export default function Header({ backHref = null }) {
  return (
    <div className="px-4 pt-4">
      <header className="header-card relative flex items-center gap-4 rounded-[28px] px-5 py-5 overflow-hidden">
        {backHref && (
          <Link
            href={backHref}
            aria-label="Volver al calendario"
            className="shrink-0 text-mist-400 hover:text-cream-50 transition-colors text-2xl leading-none"
          >
            ←
          </Link>
        )}

        <div className="min-w-0 flex-1">
          <p className="font-body tracking-[0.35em] text-[11px] text-gold-400 uppercase">
            San Roque · 2026
          </p>
          <h1 className="font-display text-3xl text-cream-50 leading-tight truncate">Sástago</h1>
        </div>

        <div className="shrink-0 relative w-16 h-[86px]">
          <Image
            src={crest}
            alt="Escudo de Sástago"
            fill
            sizes="64px"
            className="object-contain object-top drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
            priority
          />
        </div>
      </header>
    </div>
  );
}
