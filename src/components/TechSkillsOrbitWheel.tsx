import React from 'react';
import { Smartphone, Layers, Cloud, Cpu, Database, Play, Globe } from 'lucide-react';

interface PlanetNode {
  name: string;
  icon: React.ReactNode;
  orbitRadius: number; // in px
  angleOffset: number; // starting angle in degrees
  duration: number; // orbital period in seconds
  color: string;
  glowColor: string;
}

export const TechSkillsOrbitWheel: React.FC = () => {
  // 7 Orbiting Tech Planets
  const planets: PlanetNode[] = [
    // Inner Orbit (Radius 130px, Period 20s) - 2 Planets (180° apart)
    {
      name: 'Flutter',
      icon: <Smartphone size={24} />,
      orbitRadius: 130,
      angleOffset: 0,
      duration: 20,
      color: '#38bdf8',
      glowColor: 'rgba(56, 189, 248, 0.6)',
    },
    {
      name: 'Kotlin',
      icon: <Cpu size={24} />,
      orbitRadius: 130,
      angleOffset: 180,
      duration: 20,
      color: '#c084fc',
      glowColor: 'rgba(192, 132, 252, 0.6)',
    },

    // Middle Orbit (Radius 210px, Period 28s) - 3 Planets (120° apart)
    {
      name: 'Android',
      icon: <Layers size={24} />,
      orbitRadius: 210,
      angleOffset: 0,
      duration: 28,
      color: '#10b981',
      glowColor: 'rgba(16, 185, 129, 0.6)',
    },
    {
      name: 'Play Store',
      icon: <Play size={22} />,
      orbitRadius: 210,
      angleOffset: 120,
      duration: 28,
      color: '#34d399',
      glowColor: 'rgba(52, 211, 153, 0.6)',
    },
    {
      name: 'Firebase',
      icon: <Cloud size={24} />,
      orbitRadius: 210,
      angleOffset: 240,
      duration: 28,
      color: '#f59e0b',
      glowColor: 'rgba(245, 158, 11, 0.6)',
    },

    // Outer Orbit (Radius 285px, Period 36s) - 2 Planets (180° apart, 60° phase shift)
    {
      name: 'Database',
      icon: <Database size={22} />,
      orbitRadius: 285,
      angleOffset: 60,
      duration: 36,
      color: '#06b6d4',
      glowColor: 'rgba(6, 182, 212, 0.6)',
    },
    {
      name: 'REST APIs',
      icon: <Globe size={20} />,
      orbitRadius: 285,
      angleOffset: 240,
      duration: 36,
      color: '#ec4899',
      glowColor: 'rgba(236, 72, 153, 0.6)',
    },
  ];

  return (
    <div className="orbit-wheel-responsive" style={{ perspective: '1000px' }}>
      {/* 3D Tilted Solar System Disk Container */}
      <div
        className="orbit-solar-system"
        style={{
          position: 'relative',
          width: '600px',
          height: '600px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'rotateX(38deg) rotateY(-6deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Central Star Core Hub (Counter-tilted facing viewer) */}
        <div
          style={{
            width: '110px',
            height: '110px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #8b5cf6 0%, #3b0764 60%, #030712 100%)',
            border: '2.5px solid rgba(192, 132, 252, 0.9)',
            boxShadow: '0 0 60px rgba(139, 92, 246, 0.95), inset 0 0 25px rgba(56, 189, 248, 0.6)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            color: '#ffffff',
            textAlign: 'center',
            transform: 'rotateX(-38deg) rotateY(6deg)',
          }}
        >
          <Smartphone size={32} color="#38bdf8" />
          <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#c084fc', marginTop: '3px', letterSpacing: '0.05em' }}>
            MOBILE CORE
          </span>
        </div>

        {/* Clear Glowing Visible Orbit Ring Tracks */}
        {[
          { radius: 130, color: 'rgba(56, 189, 248, 0.55)', shadow: '0 0 20px rgba(56, 189, 248, 0.35)', style: 'solid' },
          { radius: 210, color: 'rgba(139, 92, 246, 0.65)', shadow: '0 0 25px rgba(139, 92, 246, 0.4)', style: 'dashed' },
          { radius: 285, color: 'rgba(6, 182, 212, 0.55)', shadow: '0 0 30px rgba(6, 182, 212, 0.3)', style: 'solid' },
        ].map((track, idx) => (
          <div
            key={idx}
            style={{
              position: 'absolute',
              width: `${track.radius * 2}px`,
              height: `${track.radius * 2}px`,
              borderRadius: '50%',
              border: `2px ${track.style} ${track.color}`,
              boxShadow: track.shadow,
              pointerEvents: 'none',
            }}
          />
        ))}

        {/* Revolving Planet Nodes with Counter-Tilt facing user */}
        {planets.map((planet, index) => {
          const delayInSeconds = -((planet.angleOffset / 360) * planet.duration);

          return (
            <div
              key={index}
              className="planet-orbit-ring"
              style={{
                position: 'absolute',
                width: `${planet.orbitRadius * 2}px`,
                height: `${planet.orbitRadius * 2}px`,
                borderRadius: '50%',
                animationName: 'spinPlanetOrbit',
                animationDuration: `${planet.duration}s`,
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
                animationDelay: `${delayInSeconds}s`,
                pointerEvents: 'none',
                transformStyle: 'preserve-3d',
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
                {/* Counter-Spin & Counter-Tilt Planet Container so Badges Face Viewer Upright */}
                <div
                  className="planet-counter-spin"
                  style={{
                    animationName: 'counterSpinPlanetOrbit',
                    animationDuration: `${planet.duration}s`,
                    animationTimingFunction: 'linear',
                    animationIterationCount: 'infinite',
                    animationDelay: `${delayInSeconds}s`,
                    transform: 'rotateX(-38deg) rotateY(6deg)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  {/* Revolving Planet Badge */}
                  <div
                    className="glass-panel planet-badge-card"
                    style={{
                      width: '58px',
                      height: '58px',
                      borderRadius: '50%',
                      background: 'rgba(11, 15, 25, 0.95)',
                      border: `2px solid ${planet.color}`,
                      boxShadow: `0 0 25px ${planet.glowColor}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: planet.color,
                      cursor: 'pointer',
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
                      background: 'rgba(11, 15, 25, 0.9)',
                      padding: '3px 10px',
                      borderRadius: '12px',
                      border: `1.5px solid ${planet.color}88`,
                      boxShadow: `0 0 14px ${planet.glowColor}`,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {planet.name}
                  </span>
                </div>
              </div>
            </div>
          );
        })}

        {/* CSS Orbit Animations & Hover Pause Rules */}
        <style>{`
          @keyframes spinPlanetOrbit {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes counterSpinPlanetOrbit {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          /* Pause all orbiting animations when mouse hovers over the solar system or any planet */
          .orbit-solar-system:hover .planet-orbit-ring,
          .orbit-solar-system:hover .planet-counter-spin {
            animation-play-state: paused !important;
          }
          .planet-badge-card {
            transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          }
          .planet-badge-card:hover {
            transform: scale(1.22);
            box-shadow: 0 0 35px currentColor !important;
            z-index: 100;
          }
        `}</style>
      </div>
    </div>
  );
};
