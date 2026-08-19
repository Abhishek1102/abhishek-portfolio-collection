import React from 'react';
import { Smartphone, Layers, Cloud, Cpu, Database, Play, Globe, Shield, Sparkles } from 'lucide-react';

interface TechNode {
  name: string;
  icon: React.ReactNode;
  orbitRadius: number; // in px
  angleOffset: number; // in degrees
  duration: number; // orbital period in seconds
  color: string;
}

export const TechSkillsOrbitWheel: React.FC = () => {
  const nodes: TechNode[] = [
    { name: 'Flutter', icon: <Smartphone size={22} />, orbitRadius: 140, angleOffset: 0, duration: 18, color: '#38bdf8' },
    { name: 'Kotlin', icon: <Cpu size={22} />, orbitRadius: 140, angleOffset: 120, duration: 18, color: '#a855f7' },
    { name: 'Android SDK', icon: <Layers size={22} />, orbitRadius: 140, angleOffset: 240, duration: 18, color: '#10b981' },
    { name: 'Dart', icon: <Sparkles size={20} />, orbitRadius: 210, angleOffset: 45, duration: 26, color: '#38bdf8' },
    { name: 'Firebase', icon: <Cloud size={20} />, orbitRadius: 210, angleOffset: 135, duration: 26, color: '#f59e0b' },
    { name: 'REST APIs', icon: <Globe size={20} />, orbitRadius: 210, angleOffset: 225, duration: 26, color: '#ec4899' },
    { name: 'Play Console', icon: <Play size={20} />, orbitRadius: 210, angleOffset: 315, duration: 26, color: '#10b981' },
    { name: 'Clean Arch', icon: <Shield size={18} />, orbitRadius: 270, angleOffset: 90, duration: 34, color: '#c084fc' },
    { name: 'SQLite/Hive', icon: <Database size={18} />, orbitRadius: 270, angleOffset: 270, duration: 34, color: '#06b6d4' },
  ];

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '560px',
        height: '560px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Central Singularity Hub */}
      <div
        style={{
          width: '90px',
          height: '90px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #7c3aed 0%, #030712 70%)',
          border: '2px solid rgba(139, 92, 246, 0.6)',
          boxShadow: '0 0 40px rgba(139, 92, 246, 0.8), inset 0 0 20px rgba(56, 189, 248, 0.4)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          color: '#ffffff',
          textAlign: 'center',
        }}
      >
        <Smartphone size={28} color="#38bdf8" />
        <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#c084fc', marginTop: '2px' }}>
          ANDROID
        </span>
      </div>

      {/* Orbit Rings Track Lines */}
      {[140, 210, 270].map((radius, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
            borderRadius: '50%',
            border: '1px stroke rgba(255, 255, 255, 0.08)',
            boxShadow: idx === 0 ? '0 0 15px rgba(139, 92, 246, 0.15)' : 'none',
            borderStyle: idx === 1 ? 'dashed' : 'solid',
            borderColor: idx === 0 ? 'rgba(139, 92, 246, 0.25)' : 'rgba(255, 255, 255, 0.08)',
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Orbiting Tech Icon Nodes */}
      {nodes.map((node, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            width: `${node.orbitRadius * 2}px`,
            height: `${node.orbitRadius * 2}px`,
            borderRadius: '50%',
            animation: `spinOrbit ${node.duration}s linear infinite`,
            transform: `rotate(${node.angleOffset}deg)`,
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
            <div
              className="glass-panel"
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '16px',
                background: 'rgba(11, 15, 25, 0.9)',
                border: `1px solid ${node.color}66`,
                boxShadow: `0 0 18px ${node.color}44`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: node.color,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                animation: `counterSpinOrbit ${node.duration}s linear infinite`,
              }}
              title={node.name}
            >
              {node.icon}
            </div>
          </div>
        </div>
      ))}

      {/* CSS Orbit Animations */}
      <style>{`
        @keyframes spinOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counterSpinOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `}</style>
    </div>
  );
};
