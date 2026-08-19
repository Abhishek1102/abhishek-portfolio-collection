import React from 'react';

export const TopBlackHoleArc: React.FC = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '380px',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {/* Top Inverted Black Hole Warp Curve & Event Horizon */}
      <svg
        viewBox="0 0 1440 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: '100%',
          height: '100%',
          filter: 'drop-shadow(0 15px 35px rgba(139, 92, 246, 0.65)) drop-shadow(0 0 60px rgba(56, 189, 248, 0.4))',
        }}
      >
        <defs>
          {/* Blackhole Accretion Gradient Swirl */}
          <linearGradient id="blackholeArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#030712" stopOpacity="0" />
            <stop offset="25%" stopColor="#8b5cf6" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="75%" stopColor="#c084fc" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#030712" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="eventHorizonCoreGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#a855f7" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#030712" stopOpacity="0" />
          </linearGradient>

          <filter id="glowBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="16" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Gravitational Distortion Aura */}
        <path
          d="M0 0 C 360 220, 1080 220, 1440 0 L 1440 0 L 0 0 Z"
          fill="url(#blackholeArcGrad)"
          opacity="0.3"
          filter="url(#glowBlur)"
        />

        {/* Accretion Disk Main Swirl Arc */}
        <path
          d="M 120 -20 C 480 250, 960 250, 1320 -20 C 980 200, 460 200, 120 -20 Z"
          fill="url(#blackholeArcGrad)"
          filter="url(#glowBlur)"
        />

        {/* Inverted Event Horizon Core Bright Ring */}
        <path
          d="M 280 -30 C 540 200, 900 200, 1160 -30 C 880 170, 560 170, 280 -30 Z"
          fill="url(#eventHorizonCoreGrad)"
        />

        {/* Singularity Void Inner Arc Line */}
        <path
          d="M 380 -40 Q 720 170 1060 -40"
          stroke="#ffffff"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.95"
          filter="url(#glowBlur)"
        />
      </svg>

      {/* Horizontal Lens Flare Line */}
      <div
        style={{
          position: 'absolute',
          top: '95px',
          left: '10%',
          right: '10%',
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.8) 30%, #ffffff 50%, rgba(56, 189, 248, 0.8) 70%, transparent 100%)',
          boxShadow: '0 0 25px 4px rgba(255, 255, 255, 0.9), 0 0 50px 8px rgba(139, 92, 246, 0.8)',
          borderRadius: '50%',
        }}
      />
    </div>
  );
};
