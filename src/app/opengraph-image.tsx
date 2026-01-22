import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Tecurity - Building the Future of Credit';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #070606 0%, #1a1a1a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
          }}
        >
          <span
            style={{
              fontSize: '80px',
              fontWeight: 'bold',
              color: '#50C878',
              letterSpacing: '-2px',
            }}
          >
            Tecurity
          </span>
        </div>
        <div
          style={{
            fontSize: '48px',
            fontWeight: '600',
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          Building the Future of Credit
        </div>
        <div
          style={{
            fontSize: '24px',
            color: '#888888',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          Innovative Fintech Solutions | Smart Loans | Digital Banking
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: '20px',
            color: '#50C878',
          }}
        >
          tecurity.tech
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
