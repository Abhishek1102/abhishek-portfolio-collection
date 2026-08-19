import React from 'react';
import { Smartphone, Layers, Cloud, Cpu, Database, Play, Sparkles, Globe } from 'lucide-react';

interface PlanetNode {
  name: string;
  icon: React.ReactNode;
  orbitRadius: number; // in px
  angleOffset: number; // in degrees
  duration: number; // orbital period in seconds
  color: string;
  glowColor: string;
}

export const TechSkillsOrbitWheel: React.FC = () => {
  const planets: PlanetNode[] = [
    // Inner Orbit (Radius 130px) - 2 Planets (180° apart)
    {
      name: 'Flutter',
      icon: <Smartphone size={24} />,
      orbitRadius: 130,
      angleOffset: 0,
      duration: 18,
      color: '#38bdf8',
      glowColor: 'rgba(56, 189, 248, 0.5)',
    },
    {
      name: 'Kotlin',
      icon: <Cpu size={24} />,
      orbitRadius: 130,
      angleOffset: 180,
      duration: 18,
      color: '#c084fc',
      glowColor: 'rgba(192, 132, 252, 0.5)',
    },

    // Middle Orbit (Radius 210px) - 3 Planets (120° apart)
    {
      name: 'Android',
      icon: <Layers size={24} />,
      orbitRadius: 210,
      angleOffset: 0,
      duration: 26,
      color: '#10b981',
      glowColor: 'rgba(16, 185, 129, 0.5)',
    },
    {
      name: 'Play Store',
      icon: <Play size={22} />,
      orbitRadius: 210,
      angleOffset: 120,
      duration: 26,
      color: '#34d399',
      glowColor: 'rgba(52, 211, 153, 0.5)',
    },
    {
      name: 'Firebase',
      icon: <Cloud size={24} />,
      orbitRadius: 210,
      angleOffset: 240,
      duration: 26,
      color: '#f59e0b',
      glowColor: 'rgba(245, 158, 11, 0.5)',
    },

    // Outer Orbit (Radius 285px) - 3 Planets (120° apart, 60° phase shift)
    {
      name: 'Database',
      icon: <Database size={22} />,
      orbitRadius: 285,
      angleOffset: 60,
      duration: 34,
      color: '#06b6d4',
      glowColor: 'rgba(6, 182, 212, 0.5)',
    },
    {
      name: 'Dart',
      icon: <Sparkles size={20} />,
      orbitRadius: 285,
      angleOffset: 180,
      duration: 34,
      color: '#60a5fa',
      glowColor: 'rgba(96, 165, 250, 0.5)',
    },
    {
      name: 'REST APIs',
      icon: <Globe size={20} />,
      orbitRadius: 285,
      angleOffset: 300,
      duration: 34,
      color: '#ec4899',
      glowColor: 'rgba(236, 72, 153, 0.5)',
    },
  ];

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '620px',
        height: '620px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Central Star Core Hub */}
      <div
        style={{
          width: '110px',
          height: '110px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #8b5cf6 0%, #3b0764 60%, #030712 100%)',
          border: '2px solid rgba(192, 132, 252, 0.8)',
          boxShadow: '0 0 60px rgba(139, 92, 246, 0.85), inset 0 0 25px rgba(56, 189, 248, 0.5)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          color: '#ffffff',
          textAlign: 'center',
        }}
      >
        <Smartphone size={32} color="#38bdf8" />
        <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#c084fc', marginTop: '3px', letterSpacing: '0.05em' }}>
          MOBILE CORE
        </span>
      </div>

      {/* Orbit Rings Tracks */}
      {[130, 210, 285].map((radius, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
            borderRadius: '50%',
            border: idx === 1 ? '1.5px dashed rgba(139, 92, 246, 0.35)' : '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: idx === 0 ? '0 0 25px rgba(139, 92, 246, 0.2)' : 'none',
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Revolving Planet Nodes */}
      {planets.map((planet, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            width: `${planet.orbitRadius * 2}px`,
            height: `${planet.orbitRadius * 2}px`,
            borderRadius: '50%',
            animation: `spinPlanetOrbit ${planet.duration}s linear infinite`,
            transform: `rotate(${planet.angleOffset}deg)`,
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'auto',
            }}
          >
            {/* Counter-Spin Planet Container so Labels Stay Upright */}
            <div
              style={{
                animation: `counterSpinPlanetOrbit ${planet.duration}s linear infinite`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              {/* Revolving Planet Badge */}
              <div
                className="glass-panel"
                style={{
                  width: '58px',
                  height: '58px',
                  borderRadius: '50%',
                  background: 'rgba(11, 15, 25, 0.92)',
                  border: `2px solid ${planet.color}`,
                  boxShadow: `0 0 25px ${planet.glowColor}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: planet.color,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                title={planet.name}
              >
                {planet.icon}
              </div>

              {/* Visible Planet Name Label */}
              <span
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  background: 'rgba(11, 15, 25, 0.85)',
                  padding: '2px 8px',
                  borderRadius: '10px',
                  border: `1px solid ${planet.color}55`,
                  boxShadow: `0 0 10px ${planet.glowColor}`,
                  whiteSpace: 'nowrap',
                }}
              >
                {planet.name}
              </span>
            </div>
          </div>
        </div>
      ))}

      {/* CSS Orbit Animations */}
      <style>{`
        @keyframes spinPlanetOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counterSpinPlanetOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `}</style>
    </div>
  );
};
