import { ImageResponse } from 'next/og';

// Image metadata
export const alt = '3 Patti Loot - New Earning App in Pakistan 2026';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #0A0A0A 0%, #1a1a2e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(135deg, #00FF88 0%, #9333EA 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontWeight: 'bold',
            marginBottom: 20,
          }}
        >
          3 Patti Loot
        </div>
        <div
          style={{
            fontSize: 40,
            color: '#00FF88',
          }}
        >
          New Earning App in Pakistan 2026
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#9CA3AF',
            marginTop: 20,
          }}
        >
          25+ Games • Instant Withdrawals • 100% Bonus
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

