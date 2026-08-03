import '@fontsource/fredoka/500.css';
import '@fontsource/fredoka/600.css';
import '@fontsource/fredoka/700.css';
import '@fontsource/work-sans/400.css';
import '@fontsource/work-sans/500.css';
import '@fontsource/work-sans/600.css';
import Footer from '../components/Footer';
import './globals.css';

const SITE_URL = 'https://fiestas-sastago2026.vercel.app';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Fiestas Sástago 2026',
    template: '%s - Sástago 2026',
  },
  description:
    'Programa completo de las Fiestas de San Roque y la Virgen de Montler en Sástago, del 13 al 18 de agosto de 2026. Consulta todos los actos, horarios y ubicaciones.',
  keywords: [
    'Sástago',
    'fiestas Sástago',
    'San Roque',
    'Virgen de Montler',
    'fiestas 2026',
    'programa de fiestas Sástago',
    'Zaragoza fiestas patronales',
  ],
  authors: [{ name: 'Víctor Menjón' }],
  creator: 'Víctor Menjón',
  applicationName: 'Fiestas Sástago 2026',
  openGraph: {
    title: 'Fiestas Sástago 2026',
    description:
      'Del 13 al 18 de agosto: todo el programa de actos de las fiestas de Sástago, con horarios y ubicaciones.',
    url: SITE_URL,
    siteName: 'Fiestas Sástago 2026',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/shareimg.jpg?v=3`,
        width: 1200,
        height: 630,
        alt: 'Fiestas Sástago 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fiestas Sástago 2026',
    description: 'Programa completo de las Fiestas de San Roque y la Virgen de Montler. 13–18 de agosto.',
    images: [`${SITE_URL}/shareimg.jpg?v=3`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: '#111d47',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="font-body">
        <div className="app-shell flex flex-col">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
