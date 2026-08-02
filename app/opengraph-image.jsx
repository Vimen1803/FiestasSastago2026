import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Fiestas de Sástago 2026 — San Roque y Virgen de Montler';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#111d47',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -80,
            left: -80,
            width: 340,
            height: 340,
            borderRadius: 999,
            backgroundColor: 'rgba(243,189,58,0.28)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: -60,
            right: -100,
            width: 300,
            height: 300,
            borderRadius: 999,
            backgroundColor: 'rgba(240,118,106,0.28)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -140,
            right: 60,
            width: 420,
            height: 420,
            borderRadius: 999,
            backgroundColor: 'rgba(50,74,149,0.55)',
            display: 'flex',
          }}
        />

        <div
          style={{
            display: 'flex',
            width: 96,
            height: 96,
            borderRadius: 999,
            backgroundColor: '#f3bd3a',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 40,
            fontWeight: 700,
            color: '#0b1330',
            marginBottom: 28,
          }}
        >
          SR
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 26,
            letterSpacing: 10,
            textTransform: 'uppercase',
            color: '#f3bd3a',
            marginBottom: 6,
          }}
        >
          San Roque · 2026
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 110,
            color: '#f7f4ec',
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          Sástago
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 30,
            color: '#f0766a',
            marginTop: 22,
            fontWeight: 600,
          }}
        >
          13 – 18 de agosto
        </div>
      </div>
    ),
    { ...size }
  );
}
