import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Fiestas de Sástago 2026 — San Roque y Virgen de Montler';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  // Read crest.png using fetch and convert to base64
  const crestData = await fetch(
    new URL('../public/crest.png', import.meta.url)
  ).then((res) => res.arrayBuffer());
  const crestBase64 = `data:image/png;base64,${Buffer.from(crestData).toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#0e1836',
          backgroundImage: `
            radial-gradient(circle at 82% 15%, rgba(168,110,214,0.28) 0%, transparent 55%),
            radial-gradient(circle at 95% 60%, rgba(232,120,120,0.14) 0%, transparent 50%),
            linear-gradient(120deg, #0d1638 0%, #142150 55%, #1c2a5e 100%)
          `,
          padding: '0 100px',
          boxSizing: 'border-box',
          position: 'relative',
        }}
      >
        {/* Left side: Text */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 26,
              letterSpacing: 10,
              textTransform: 'uppercase',
              color: '#f3bd3a',
              marginBottom: 16,
              fontWeight: 500,
            }}
          >
            San Roque · 2026
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 125,
              color: '#f7f4ec',
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            Sástago
          </div>
        </div>

        {/* Right side: Crest */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={crestBase64}
            alt="Escudo de Sástago"
            style={{
              width: 220,
              height: 295,
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}

