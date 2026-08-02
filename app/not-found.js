import Link from 'next/link';
import Header from '../components/Header';

export default function NotFound() {
  return (
    <>
      <Header backHref="/" />
      <main className="px-6 pt-16 pb-8 text-center">
        <p className="font-display text-5xl text-gold-400">🎈</p>
        <h1 className="font-display text-xl text-cream-50 mt-4">Ese día no está en el programa</h1>
        <p className="font-body text-sm text-mist-400 mt-2">
          Las fiestas van del 13 al 18 de agosto. Vuelve al calendario para ver los actos.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 bg-gold-400 text-navy-950 font-body font-medium text-sm px-5 py-2.5 rounded-full"
        >
          Ir al calendario
        </Link>
      </main>
    </>
  );
}
