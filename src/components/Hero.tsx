import React, { useState } from 'react';
import { 
  Smartphone, Eye, Heart, ShoppingBag, Calendar, 
  Play, Pause, ArrowRight, Sparkles, Volume2
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { AnimatedCounter } from './AnimatedCounter';
import { AndroidLogo } from './AndroidLogo';
import { FlutterLogo } from './FlutterLogo';
import { DownloadResumeModal } from './DownloadResumeModal';

interface HeroProps {
  onSelectProject: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const [activeAppIndex, setActiveAppIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [swipeCount, setSwipeCount] = useState(1);
  const [cartCount, setCartCount] = useState(0);
  const [bookingDone, setBookingDone] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  const currentApp = PROJECTS[activeAppIndex];

  return (
    <section
      id="hero"
      style={{
        paddingTop: '130px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Drifting Ambient Glow Orbs */}
      <div
        className="ambient-glow-orb"
        style={{
          top: '5%',
          left: '-5%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(0, 0, 0, 0) 70%)',
        }}
      />
      <div
        className="ambient-glow-orb"
        style={{
          top: '35%',
          right: '-5%',
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.18) 0%, rgba(0, 0, 0, 0) 70%)',
          animationDelay: '-5s',
        }}
      />

      <div className="container">
        <div className="hero-grid">
          {/* Left Column - Intro Text */}
          <div>
            {/* Availability Badge with Pulse Beacon */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '6px 16px',
                borderRadius: '30px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: '#10b981',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '20px',
                boxShadow: '0 0 20px rgba(16, 185, 129, 0.15)',
              }}
            >
              <span className="pulse-beacon" />
              Senior Flutter &amp; Native Android Developer
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '20px',
                color: '#ffffff',
              }}
            >
              Crafting Scalable, <br />
              <span className="gradient-text">Interactive Mobile Apps</span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '1.08rem',
                color: '#9ca3af',
                lineHeight: 1.65,
                marginBottom: '28px',
                maxWidth: '540px',
              }}
            >
              Hi, I'm <strong style={{ color: '#ffffff' }}>{PERSONAL_INFO.name}</strong> based in Rajkot, India.
              With 2+ years of production experience, I build robust, accessible, and high-performance mobile apps using <span style={{ color: '#38bdf8', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}><FlutterLogo size={16} /> Flutter &amp; Dart</span> alongside native <span style={{ color: '#3DDC84', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}><AndroidLogo size={16} /> Native Android (Kotlin)</span> modules.
            </p>

            {/* Key Skill Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
              <span className="tech-badge" style={{ color: '#38bdf8', borderColor: 'rgba(56, 189, 248, 0.3)', background: 'rgba(56, 189, 248, 0.08)' }}>
                <FlutterLogo size={16} /> Flutter &amp; Dart
              </span>
              <span className="tech-badge" style={{ color: '#3DDC84', borderColor: 'rgba(61, 220, 132, 0.3)', background: 'rgba(61, 220, 132, 0.08)' }}>
                <AndroidLogo size={16} /> Native Android (Kotlin)
              </span>
              <span className="tech-badge">🏗️ Clean Architecture</span>
              <span className="tech-badge">🔑 JKS Keystore Recovery</span>
              <span className="tech-badge">🚀 Play Store Console</span>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
              <a href="#projects" className="btn-primary">
                Explore My Apps <ArrowRight size={18} />
              </a>
              <button
                onClick={() => setIsDownloadOpen(true)}
                className="btn-secondary"
                style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                📥 Download Resume
              </button>
            </div>

            <DownloadResumeModal isOpen={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} />

            {/* Stats Row with Animated Counter */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                paddingTop: '24px',
                borderTop: '1px solid var(--border-color)',
              }}
            >
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="stat-box-glow">
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#38bdf8', letterSpacing: '-0.02em' }}>
                    <AnimatedCounter value={stat.value} duration={2200} />
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#9ca3af', fontWeight: 500, lineHeight: 1.3, marginTop: '2px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Interactive Smartphone Simulator */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Interactive Notice */}
            <div
              style={{
                marginBottom: '12px',
                fontSize: '0.82rem',
                color: '#38bdf8',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(56, 189, 248, 0.08)',
                padding: '4px 12px',
                borderRadius: '20px',
                border: '1px solid rgba(56, 189, 248, 0.2)',
              }}
            >
              <Sparkles size={14} /> Interactive Live App Simulator — Tap screens below!
            </div>

            {/* Outer Phone Shell */}
            <div
              className="phone-float phone-glow"
              style={{
                width: '320px',
                height: '620px',
                background: '#0d111a',
                borderRadius: '44px',
                border: '8px solid #1e293b',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
                padding: '12px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Phone Speaker Notch */}
              <div
                style={{
                  width: '120px',
                  height: '18px',
                  background: '#1e293b',
                  borderRadius: '0 0 12px 12px',
                  position: 'absolute',
                  top: '0',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 20,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div style={{ width: '40px', height: '4px', background: '#334155', borderRadius: '2px' }} />
              </div>

              {/* Virtual Phone Screen Canvas */}
              <div
                style={{
                  flex: 1,
                  background: '#080c14',
                  borderRadius: '32px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  position: 'relative',
                  marginTop: '6px',
                }}
              >
                {/* Phone Top Status Bar */}
                <div
                  style={{
                    padding: '8px 16px 4px 16px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.7rem',
                    color: '#9ca3af',
                    fontWeight: 600,
                  }}
                >
                  <span>9:41</span>
                  <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                    <span>5G</span>
                    <Smartphone size={10} />
                  </div>
                </div>

                {/* Simulated App Header */}
                <div
                  style={{
                    padding: '10px 14px',
                    background: 'rgba(15, 23, 42, 0.9)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '8px',
                        background: currentApp.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: '#fff',
                      }}
                    >
                      {currentApp.title[0]}
                    </div>
                    <div>
                      <div style={{ color: '#fff', fontSize: '0.82rem', fontWeight: 700, lineHeight: 1.1 }}>
                        {currentApp.title}
                      </div>
                      <div style={{ color: '#9ca3af', fontSize: '0.65rem' }}>{currentApp.category}</div>
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: '0.65rem',
                      background: 'rgba(255,255,255,0.1)',
                      color: '#38bdf8',
                      padding: '2px 6px',
                      borderRadius: '4px',
                    }}
                  >
                    Flutter
                  </span>
                </div>

                {/* Simulated App Body Content based on App Type */}
                <div style={{ flex: 1, padding: '14px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  
                  {/* APP TYPE: SMARTBILL AI RECEIPT SCANNER */}
                  {currentApp.id === 'smartbill-ai' && (
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ background: '#0c2136', padding: '12px', borderRadius: '12px', border: '1px solid rgba(56, 189, 248, 0.4)' }}>
                        <div style={{ color: '#38bdf8', fontSize: '0.75rem', fontWeight: 700, marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Sparkles size={14} /> Gemini 3 Flash AI Vision
                        </div>
                        <div style={{ color: '#e2e8f0', fontSize: '0.72rem', lineHeight: 1.4 }}>
                          Merchant: <strong>Starbucks Coffee</strong><br />
                          Total: <strong style={{ color: '#38bdf8' }}>$14.50</strong> | Cat: Meals &amp; Dining
                        </div>
                      </div>

                      <button
                        onClick={() => setCartCount(prev => prev + 1)}
                        style={{
                          background: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)',
                          border: 'none',
                          color: '#000',
                          padding: '10px',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <Sparkles size={16} /> Tap to Scan Receipt Photo
                      </button>

                      <div style={{ marginTop: 'auto', background: 'rgba(255,255,255,0.03)', padding: '8px', borderRadius: '8px', fontSize: '0.68rem', color: '#94a3b8' }}>
                        ⚡ <strong>Instant AI Extraction:</strong> merchant, date, tax &amp; totals.
                      </div>
                    </div>
                  )}

                  {/* APP TYPE: LISTENING EYES */}
                  {currentApp.id === 'listening-eyes' && (
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ background: '#131b2e', padding: '12px', borderRadius: '12px', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                        <div style={{ color: '#a78bfa', fontSize: '0.75rem', fontWeight: 700, marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Volume2 size={14} /> Text-To-Speech Reader
                        </div>
                        <div style={{ color: '#e2e8f0', fontSize: '0.72rem', lineHeight: 1.4 }}>
                          "Chapter 3: Physics for Visually Impaired. Spoken audio feedback active..."
                        </div>
                      </div>

                      {/* Interactive TTS Audio Visualizer Button */}
                      <button
                        onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                        style={{
                          background: isPlayingAudio ? '#8b5cf6' : 'rgba(139, 92, 246, 0.15)',
                          border: '1px solid #8b5cf6',
                          color: '#fff',
                          padding: '10px',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {isPlayingAudio ? <Pause size={16} /> : <Play size={16} />}
                        {isPlayingAudio ? 'Pause Speech Engine' : 'Tap to Play Speech Demo'}
                      </button>

                      {/* Visual Waveform indicator */}
                      <div style={{ display: 'flex', gap: '4px', justifyContent: 'center', alignItems: 'center', height: '24px' }}>
                        {[40, 70, 30, 90, 60, 80, 40, 90, 50, 70].map((h, i) => (
                          <div
                            key={i}
                            style={{
                              width: '4px',
                              height: isPlayingAudio ? `${h}%` : '20%',
                              background: '#8b5cf6',
                              borderRadius: '2px',
                              transition: 'all 0.2s ease',
                            }}
                          />
                        ))}
                      </div>

                      <div style={{ marginTop: 'auto', background: 'rgba(255,255,255,0.03)', padding: '8px', borderRadius: '8px', fontSize: '0.68rem', color: '#94a3b8' }}>
                        🎯 <strong>500+ Active Impaired Students</strong> using spoken study modules.
                      </div>
                    </div>
                  )}

                  {/* APP TYPE 2: HUKUP DATING APP */}
                  {currentApp.id === 'hukup-dating' && (
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div
                        style={{
                          flex: 1,
                          background: 'linear-gradient(180deg, #1e1b4b 0%, #0f172a 100%)',
                          borderRadius: '16px',
                          padding: '12px',
                          border: '1px solid rgba(236, 72, 153, 0.3)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'flex-end',
                          position: 'relative',
                        }}
                      >
                        <div style={{ position: 'absolute', top: '10px', right: '10px', background: '#ec4899', color: '#fff', padding: '2px 8px', borderRadius: '10px', fontSize: '0.65rem', fontWeight: 700 }}>
                          Card #{swipeCount}
                        </div>
                        <div style={{ color: '#fff', fontWeight: 800, fontSize: '0.95rem' }}>
                          Alex, 24 <span style={{ fontSize: '0.7rem', color: '#ec4899' }}>● Online</span>
                        </div>
                        <div style={{ color: '#cbd5e1', fontSize: '0.7rem', marginBottom: '8px' }}>
                          Flutter Developer &amp; Tech Enthusiast
                        </div>
                        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                          <span style={{ fontSize: '0.6rem', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', color: '#fff' }}>Coding</span>
                          <span style={{ fontSize: '0.6rem', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', color: '#fff' }}>Music</span>
                        </div>
                      </div>

                      {/* Swipe Interactive Button */}
                      <button
                        onClick={() => setSwipeCount(prev => prev + 1)}
                        style={{
                          background: '#ec4899',
                          color: '#fff',
                          border: 'none',
                          padding: '10px',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          fontWeight: 700,
                          fontSize: '0.8rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                        }}
                      >
                        <Heart size={16} fill="#fff" /> Tap to Swipe Next Card ({swipeCount})
                      </button>
                    </div>
                  )}

                  {/* APP TYPE 3: MIODEAL BUYER */}
                  {currentApp.id === 'miodeal-buyer' && (
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ background: '#1e1b18', padding: '10px', borderRadius: '12px', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                        <div style={{ color: '#fbbf24', fontSize: '0.7rem', fontWeight: 700, marginBottom: '4px' }}>
                          SPECIAL DEALS
                        </div>
                        <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 700 }}>
                          Wireless Noise-Canceling Headphones
                        </div>
                        <div style={{ color: '#f59e0b', fontSize: '0.9rem', fontWeight: 800, marginTop: '4px' }}>
                          $149.00 <span style={{ fontSize: '0.7rem', color: '#94a3b8', textDecoration: 'line-through' }}>$199.00</span>
                        </div>
                      </div>

                      <button
                        onClick={() => setCartCount(prev => prev + 1)}
                        style={{
                          background: '#f59e0b',
                          color: '#000',
                          border: 'none',
                          padding: '10px',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          fontWeight: 700,
                          fontSize: '0.8rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                        }}
                      >
                        <ShoppingBag size={16} /> Add to Cart (Items: {cartCount})
                      </button>

                      <div style={{ fontSize: '0.7rem', color: '#94a3b8', background: 'rgba(255,255,255,0.03)', padding: '8px', borderRadius: '8px' }}>
                        💳 Built with Dio API Caching &amp; Hive Local Cart State
                      </div>
                    </div>
                  )}

                  {/* APP TYPE 4: MAIA CARE */}
                  {currentApp.id === 'maia-care' && (
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ background: '#064e3b', padding: '10px', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.4)' }}>
                        <div style={{ color: '#6ee7b7', fontSize: '0.7rem', fontWeight: 700 }}>
                          DOCTOR SCHEDULER
                        </div>
                        <div style={{ color: '#fff', fontSize: '0.82rem', fontWeight: 700, marginTop: '2px' }}>
                          Dr. Sharma (Cardiologist)
                        </div>
                        <div style={{ color: '#a7f3d0', fontSize: '0.7rem', marginTop: '2px' }}>
                          Slot: Today at 4:30 PM
                        </div>
                      </div>

                      <button
                        onClick={() => setBookingDone(true)}
                        style={{
                          background: bookingDone ? '#10b981' : 'rgba(16, 185, 129, 0.2)',
                          border: '1px solid #10b981',
                          color: '#fff',
                          padding: '10px',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          fontWeight: 700,
                          fontSize: '0.8rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                        }}
                      >
                        <Calendar size={16} /> {bookingDone ? '✓ Appointment Confirmed!' : 'Tap to Book Slot'}
                      </button>

                      <div style={{ fontSize: '0.7rem', color: '#94a3b8', background: 'rgba(255,255,255,0.03)', padding: '8px', borderRadius: '8px' }}>
                        🏥 Built single-handedly with Clean Architecture &amp; Provider
                      </div>
                    </div>
                  )}

                </div>

                {/* Simulated Phone App Switcher Tabs */}
                <div
                  style={{
                    padding: '8px',
                    background: '#0d1322',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'grid',
                    gridTemplateColumns: `repeat(${PROJECTS.length}, 1fr)`,
                    gap: '4px',
                  }}
                >
                  {PROJECTS.map((app, idx) => (
                    <button
                      key={app.id}
                      onClick={() => setActiveAppIndex(idx)}
                      style={{
                        background: activeAppIndex === idx ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
                        border: activeAppIndex === idx ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid transparent',
                        borderRadius: '8px',
                        padding: '6px 2px',
                        color: activeAppIndex === idx ? '#38bdf8' : '#64748b',
                        fontSize: '0.62rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2px',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {app.id === 'smartbill-ai' && <Sparkles size={12} />}
                      {app.id === 'listening-eyes' && <Eye size={12} />}
                      {app.id === 'hukup-dating' && <Heart size={12} />}
                      {app.id === 'miodeal-buyer' && <ShoppingBag size={12} />}
                      {app.id === 'maia-care' && <Calendar size={12} />}
                      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '55px' }}>
                        {app.title.split(' ')[0]}
                      </span>
                    </button>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
