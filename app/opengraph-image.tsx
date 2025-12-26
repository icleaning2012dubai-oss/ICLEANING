import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const alt = 'iCleaning Dubai - Professional Cleaning Services'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui',
        }}
      >
        <div style={{ 
          display: 'flex', 
          alignItems: 'center',
          marginBottom: 40,
        }}>
          <div style={{
            fontSize: 180,
            fontWeight: 'bold',
            letterSpacing: '-0.05em',
          }}>
            iCleaning
          </div>
        </div>
        <div style={{ 
          fontSize: 48,
          opacity: 0.9,
          textAlign: 'center',
        }}>
          Professional Cleaning Services in Dubai
        </div>
        <div style={{ 
          fontSize: 36,
          opacity: 0.8,
          marginTop: 20,
        }}>
          🏠 Carpets • 🛋️ Sofas • 🪟 Curtains • ❄️ AC Cleaning
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
