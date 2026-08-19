import React, { useState, useEffect } from 'react';
import { Smartphone, Layers, Cloud, Cpu, Database, Play, Globe } from 'lucide-react';

interface PlanetNode {
  name: string;
  icon: React.ReactNode;
  rx: number; // horizontal orbital radius (px)
  ry: number; // vertical orbital radius (px)
  angleOffset: number; // starting angle in degrees
  duration: number; // orbital period in seconds
  color: string;
  glowColor: string;
}

export const TechSkillsOrbitWheel: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  // 7 Core Tech Planets with Compact Radii to Prevent Side Edge Clipping
  const planets: PlanetNode[] = [
    // Inner Orbit (rx: 115px, ry: 85px, Period 20s) - 2 Planets
    {
      name: 'Flutter',
      icon: <Smartphone size={22} />,
      rx: 115,
      ry: 85,
      angleOffset: 0,
      duration: 20,
      color: '#38bdf8',
      glowColor: 'rgba(56, 189, 248, 0.6)',
    },
    {
      name: 'Kotlin',
      icon: <Cpu size={22} />,
      rx: 115,
      ry: 85,
      angleOffset: 180,
      duration: 20,
      color: '#c084fc',
      glowColor: 'rgba(192, 132, 252, 0.6)',
    },

    // Middle Orbit (rx: 180px, ry: 130px, Period 28s) - 3 Planets
    {
      name: 'Android',
      icon: <Layers size={22} />,
      rx: 180,
      ry: 130,
      angleOffset: 0,
      duration: 28,
      color: '#10b981',
      glowColor: 'rgba(16, 185, 129, 0.6)',
    },
    {
      name: 'Play Store',
      icon: <Play size={20} />,
      rx: 180,
      ry: 130,
      angleOffset: 120,
      duration: 28,
      color: '#34d399',
      glowColor: 'rgba(52, 211, 153, 0.6)',
    },
    {
      name: 'Firebase',
      icon: <Cloud size={22} />,
      rx: 180,
      ry: 130,
      angleOffset: 240,
      duration: 28,
      color: '#f59e0b',
      glowColor: 'rgba(245, 158, 11, 0.6)',
    },

    // Outer Orbit (rx: 245px, ry: 180px, Period 36s) - 2 Planets
    {
      name: 'Database',
      icon: <Database size={20} />,
      rx: 245,
      ry: 180,
      angleOffset: 60,
      duration: 36,
      color: '#06b6d4',
      glowColor: 'rgba(6, 182, 212, 0.6)',
    },
    {
      name: 'REST APIs',
      icon: <Globe size={18} />,
      rx: 245,
      ry: 180,
      angleOffset: 240,
      duration: 36,
      color: '#ec4899',
      glowColor: 'rgba(236, 72, 153, 0.6)',
    },
  ];

  // Animation Loop Timer
  useEffect(() => {
    let animFrame: number;
    let lastTime = performance.now();

    const updateOrbit = (now: number) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      if (!isHovered) {
        setElapsedTime((prev) => prev + delta);
      }
      animFrame = requestAnimationFrame(updateOrbit);
    };

    animFrame = requestAnimationFrame(updateOrbit);
    return () => cancelAnimationFrame(animFrame);
  }, [isHovered]);

  return (
    <div className="orbit-wheel-responsive">
      {/* Container with ample padding to prevent edge clipping */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: 'relative',
          width: '640px',
          maxWidth: '100%',
          height: '460px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 30px',
        }}
      >
        {/* Central Star Core Hub */}
        <div
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #8b5cf6 0%, #3b0764 60%, #030712 100%)',
            border: '2.5px solid rgba(192, 132, 252, 0.9)',
            boxShadow: '0 0 50px rgba(139, 92, 246, 0.95), inset 0 0 20px rgba(56, 189, 248, 0.6)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            color: '#ffffff',
            textAlign: 'center',
            position: 'absolute',
          }}
        >
          <Smartphone size={28} color="#38bdf8" />
          <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#c084fc', marginTop: '2px', letterSpacing: '0.05em' }}>
            MOBILE CORE
          </span>
        </div>

        {/* Clear Glowing Open Upright Orbit Ring Tracks */}
        {[
          { rx: 115, ry: 85, color: 'rgba(56, 189, 248, 0.55)', shadow: '0 0 20px rgba(56, 189, 248, 0.35)', style: 'solid' },
          { rx: 180, ry: 130, color: 'rgba(139, 92, 246, 0.65)', shadow: '0 0 25px rgba(139, 92, 246, 0.4)', style: 'dashed' },
          { rx: 245, ry: 180, color: 'rgba(6, 182, 212, 0.55)', shadow: '0 0 30px rgba(6, 182, 212, 0.3)', style: 'solid' },
        ].map((track, idx) => (
          <div
            key={idx}
            style={{
              position: 'absolute',
              width: `${track.rx * 2}px`,
              height: `${track.ry * 2}px`,
              borderRadius: '50%',
              border: `2px ${track.style} ${track.color}`,
              boxShadow: track.shadow,
              pointerEvents: 'none',
            }}
          />
        ))}

        {/* Revolving Planets - 100% Upright, Straight, Flat 2D Badges & Labels */}
        {planets.map((planet, index) => {
          const currentAngleRad =
            ((planet.angleOffset + (elapsedTime / planet.duration) * 360) * Math.PI) / 180;

          const x = planet.rx * Math.cos(currentAngleRad);
          const y = planet.ry * Math.sin(currentAngleRad);

          const isForeground = Math.sin(currentAngleRad) > 0;
          const zIndex = isForeground ? 20 : 5;
          const scale = isForeground ? 1.04 : 0.94;

          return (
            <div
              key={index}
              style={{
                position: 'absolute',
                transform: `translate(${x}px, ${y}px) scale(${scale})`,
                zIndex,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '5px',
                pointerEvents: 'auto',
                transition: 'transform 0.05s linear',
              }}
            >
              {/* Revolving Planet Badge */}
              <div
                className="glass-panel planet-badge-card"
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: 'rgba(11, 15, 25, 0.95)',
                  border: `2px solid ${planet.color}`,
                  boxShadow: `0 0 22px ${planet.glowColor}`,
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
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  background: 'rgba(11, 15, 25, 0.9)',
                  padding: '3px 9px',
                  borderRadius: '10px',
                  border: `1.5px solid ${planet.color}88`,
                  boxShadow: `0 0 12px ${planet.glowColor}`,
                  whiteSpace: 'nowrap',
                }}
              >
                {planet.name}
              </span>
            </div>
          );
        })}

        {/* CSS Planet Hover Zoom */}
        <style>{`
          .planet-badge-card {
            transition: transform 0.25s ease, box-shadow 0.25s ease;
          }
          .planet-badge-card:hover {
            transform: scale(1.2);
            box-shadow: 0 0 32px currentColor !important;
          }
        `}</style>
      </div>
    </div>
  );
};
