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
          background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
          padding: '60px',
        }}
      >
        {/* Logo/Brand */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center',
          marginBottom: 50,
        }}>
          <div style={{
            fontSize: 140,
            fontWeight: 'bold',
            letterSpacing: '-0.03em',
            background: 'white',
            color: '#2563eb',
            padding: '20px 60px',
            borderRadius: 30,
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          }}>
            iCleaning
          </div>
        </div>
        
        {/* Subtitle */}
        <div style={{ 
          fontSize: 52,
          fontWeight: '600',
          textAlign: 'center',
          marginBottom: 30,
          textShadow: '0 4px 12px rgba(0,0,0,0.3)',
        }}>
          Professional Cleaning Services in Dubai
        </div>
        
        {/* Services */}
        <div style={{ 
          fontSize: 38,
          display: 'flex',
          gap: 30,
          marginTop: 20,
          flexWrap: 'wrap',
          justifyContent: 'center',
          maxWidth: '1000px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(255,255,255,0.1)', padding: '15px 30px', borderRadius: 50 }}>
            <span style={{ fontSize: 48 }}>🏠</span>
            <span>Carpets</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(255,255,255,0.1)', padding: '15px 30px', borderRadius: 50 }}>
            <span style={{ fontSize: 48 }}>🛋️</span>
            <span>Sofas</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(255,255,255,0.1)', padding: '15px 30px', borderRadius: 50 }}>
            <span style={{ fontSize: 48 }}>🪟</span>
            <span>Curtains</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(255,255,255,0.1)', padding: '15px 30px', borderRadius: 50 }}>
            <span style={{ fontSize: 48 }}>❄️</span>
            <span>AC</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
