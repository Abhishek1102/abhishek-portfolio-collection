import React, { useState } from 'react';
import { 
  Heart, ShoppingBag, Calendar, 
  Play, Pause, ArrowRight, Sparkles, Volume2, ExternalLink,
  Music, Bell, Cpu, Star
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { TopBlackHoleArc } from './TopBlackHoleArc';
import { TechSkillsOrbitWheel } from './TechSkillsOrbitWheel';

interface HeroProps {
  onSelectProject: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectProject }) => {
  const [activeAppIndex, setActiveAppIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [swipeCount, setSwipeCount] = useState(1);
  const [cartCount, setCartCount] = useState(0);
  const [bookingDone, setBookingDone] = useState(false);
  const [selectedMantra, setSelectedMantra] = useState('Gayatri Mantra');
  const [bellRinging, setBellRinging] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState('Samsung');

  const currentApp = PROJECTS[activeAppIndex];

  const brandsUSSD: Record<string, string> = {
    Samsung: '*#0*# (Hardware Diagnostic)',
    Xiaomi: '*#*#6484#*#* (Engineering Test)',
    Realme: '*#899# (Manual Test Mode)',
    OnePlus: '*#808# (Factory Test)',
  };

  return (
    <section
      id="hero"
      style={{
        paddingTop: '130px',
        paddingBottom: '90px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top Inverted Black Hole Accretion Arc Visual */}
      <TopBlackHoleArc />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 0.95fr',
            gap: '40px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column - Intro & Headline */}
          <div>
            {/* Portfolio Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '30px',
                background: 'rgba(139, 92, 246, 0.12)',
                border: '1px solid rgba(139, 92, 246, 0.35)',
                color: '#c084fc',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '24px',
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.25)',
              }}
            >
              <Sparkles size={16} className="text-purple-400 animate-pulse" />
              <span>Senior Android &amp; Flutter Developer Portfolio</span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5.2vw, 3.9rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: '20px',
                letterSpacing: '-0.02em',
              }}
            >
              Providing <span className="gradient-text">the best</span> mobile app experience.
            </h1>

            {/* Subheading */}
            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-muted)',
                marginBottom: '32px',
                maxWidth: '560px',
                lineHeight: 1.7,
              }}
            >
              I'm a Senior Android &amp; Flutter Software Engineer with 2+ years of experience building high-performance mobile apps across Play Store releases, client projects, and accessibility platforms. Check out my apps and skills below.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                marginBottom: '36px',
              }}
            >
              <a href="#about" className="btn-primary" style={{ padding: '14px 30px' }}>
                <span>Learn More</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="#projects"
                className="btn-secondary"
                style={{ padding: '14px 26px' }}
              >
                <span>View Play Store Apps 🚀</span>
              </a>
            </div>

            {/* Stats Counter Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '12px',
                padding: '20px',
                background: 'rgba(11, 15, 25, 0.8)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(139, 92, 246, 0.25)',
                borderRadius: '18px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
              }}
            >
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: idx === 1 ? '#10b981' : idx === 2 ? '#38bdf8' : '#c084fc',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-dim)',
                      fontWeight: 500,
                      marginTop: '2px',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Orbiting Android Tech Galaxy & Holo App Simulator */}
          <div style={{ position: 'relative' }}>
            <TechSkillsOrbitWheel />

            {/* Holo Simulator Drawer */}
            <div
              className="glass-panel phone-glow"
              style={{
                marginTop: '-60px',
                padding: '20px',
                position: 'relative',
                border: '1px solid rgba(139, 92, 246, 0.35)',
                borderRadius: '24px',
                background: 'rgba(11, 15, 25, 0.88)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.9)',
                zIndex: 15,
              }}
            >
              {/* App Switcher Tabs Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  overflowX: 'auto',
                  paddingBottom: '12px',
                  marginBottom: '16px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {PROJECTS.map((app, index) => (
                  <button
                    key={app.id}
                    onClick={() => setActiveAppIndex(index)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '12px',
                      border: 'none',
                      background:
                        activeAppIndex === index
                          ? 'rgba(139, 92, 246, 0.25)'
                          : 'rgba(255, 255, 255, 0.04)',
                      color: activeAppIndex === index ? '#fff' : 'var(--text-muted)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.2s ease',
                      boxShadow:
                        activeAppIndex === index
                          ? '0 0 12px rgba(139, 92, 246, 0.4)'
                          : 'none',
                    }}
                  >
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: app.color,
                      }}
                    />
                    {app.title.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Phone Frame Housing */}
              <div
                style={{
                  width: '100%',
                  maxWidth: '340px',
                  margin: '0 auto',
                  height: '380px',
                  background: '#070a14',
                  borderRadius: '24px',
                  border: '3px solid rgba(139, 92, 246, 0.4)',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), inset 0 0 20px rgba(56, 189, 248, 0.1)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Phone Notch Bar */}
                <div
                  style={{
                    height: '24px',
                    background: '#030712',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '8px',
                      background: '#111827',
                      borderRadius: '10px',
                    }}
                  />
                </div>

                {/* App Content Screen View */}
                <div
                  style={{
                    flex: 1,
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: 'radial-gradient(circle at top, rgba(17, 24, 39, 0.9), #070a14)',
                  }}
                >
                  {/* App Header Badge */}
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '10px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.72rem',
                          padding: '3px 8px',
                          borderRadius: '8px',
                          background: 'rgba(139, 92, 246, 0.15)',
                          color: '#c084fc',
                          fontWeight: 600,
                        }}
                      >
                        {currentApp.category}
                      </span>
                      {currentApp.downloads && (
                        <span
                          style={{
                            fontSize: '0.7rem',
                            color: '#10b981',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                          }}
                        >
                          <Star size={12} /> {currentApp.downloads}
                        </span>
                      )}
                    </div>

                    <h3
                      style={{
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: '#fff',
                        marginBottom: '4px',
                      }}
                    >
                      {currentApp.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.4,
                      }}
                    >
                      {currentApp.subtitle}
                    </p>
                  </div>

                  {/* Interactive App Mockup Component */}
                  <div
                    style={{
                      flex: 1,
                      margin: '10px 0',
                      background: 'rgba(15, 23, 42, 0.6)',
                      borderRadius: '16px',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      padding: '12px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    {/* 1. Listening Eyes TTS Simulator */}
                    {currentApp.mockupType === 'accessibility_tts' && (
                      <div>
                        <Volume2
                          size={30}
                          color={currentApp.color}
                          style={{ marginBottom: '6px' }}
                        />
                        <div
                          style={{
                            fontSize: '0.78rem',
                            color: 'var(--text-main)',
                            fontWeight: 600,
                            marginBottom: '6px',
                          }}
                        >
                          {isPlayingAudio ? '🔊 Spoken Audio Feedback Active' : '🔇 Tap to Test Voice Navigation'}
                        </div>
                        <button
                          onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                          style={{
                            padding: '6px 14px',
                            borderRadius: '20px',
                            background: isPlayingAudio ? '#a855f7' : 'rgba(255, 255, 255, 0.1)',
                            border: 'none',
                            color: '#fff',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                          }}
                        >
                          {isPlayingAudio ? <Pause size={14} /> : <Play size={14} />}
                          {isPlayingAudio ? 'Pause Speech' : 'Play TTS Feedback'}
                        </button>
                      </div>
                    )}

                    {/* 2. Hukup Dating Swipe Simulator */}
                    {currentApp.mockupType === 'dating_swipe' && (
                      <div>
                        <Heart
                          size={30}
                          color={currentApp.color}
                          style={{ marginBottom: '6px' }}
                        />
                        <div
                          style={{
                            fontSize: '0.78rem',
                            color: 'var(--text-main)',
                            fontWeight: 600,
                            marginBottom: '6px',
                          }}
                        >
                          Profile Card #{swipeCount} Matched!
                        </div>
                        <button
                          onClick={() => setSwipeCount(swipeCount + 1)}
                          style={{
                            padding: '6px 14px',
                            borderRadius: '20px',
                            background: '#ec4899',
                            border: 'none',
                            color: '#fff',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                          }}
                        >
                          Swipe Next Card 👉
                        </button>
                      </div>
                    )}

                    {/* 3. Daily Mantra Jaap Player Simulator */}
                    {currentApp.mockupType === 'mantra_player' && (
                      <div>
                        <Music
                          size={28}
                          color="#f59e0b"
                          style={{ marginBottom: '4px' }}
                        />
                        <div
                          style={{
                            fontSize: '0.78rem',
                            color: '#fff',
                            fontWeight: 600,
                            marginBottom: '4px',
                          }}
                        >
                          🕉️ {selectedMantra}
                        </div>
                        <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                          {['Ganesh', 'Gayatri', 'Om'].map((m) => (
                            <button
                              key={m}
                              onClick={() => setSelectedMantra(`${m} Mantra`)}
                              style={{
                                padding: '4px 8px',
                                borderRadius: '6px',
                                background:
                                  selectedMantra.includes(m)
                                    ? '#f59e0b'
                                    : 'rgba(255, 255, 255, 0.1)',
                                border: 'none',
                                color: '#fff',
                                fontSize: '0.65rem',
                                cursor: 'pointer',
                              }}
                            >
                              {m}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 4. Miodeal E-Commerce Simulator */}
                    {currentApp.mockupType === 'ecommerce_shop' && (
                      <div>
                        <ShoppingBag
                          size={30}
                          color={currentApp.color}
                          style={{ marginBottom: '6px' }}
                        />
                        <div
                          style={{
                            fontSize: '0.78rem',
                            color: 'var(--text-main)',
                            fontWeight: 600,
                            marginBottom: '6px',
                          }}
                        >
                          Cart Items: {cartCount}
                        </div>
                        <button
                          onClick={() => setCartCount(cartCount + 1)}
                          style={{
                            padding: '6px 14px',
                            borderRadius: '20px',
                            background: '#3b82f6',
                            border: 'none',
                            color: '#fff',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                          }}
                        >
                          + Add Item 🛒
                        </button>
                      </div>
                    )}

                    {/* 5. Aarti Pooja Bell Simulator */}
                    {currentApp.mockupType === 'pooja_bell' && (
                      <div>
                        <Bell
                          size={30}
                          color="#eab308"
                          style={{
                            marginBottom: '6px',
                            transform: bellRinging ? 'rotate(20deg)' : 'rotate(0deg)',
                            transition: 'transform 0.15s ease-in-out',
                          }}
                        />
                        <div
                          style={{
                            fontSize: '0.78rem',
                            color: '#fff',
                            fontWeight: 600,
                            marginBottom: '6px',
                          }}
                        >
                          {bellRinging ? '🔔 Ringing Bell...' : 'Tap Bell to Ring'}
                        </div>
                        <button
                          onClick={() => {
                            setBellRinging(true);
                            setTimeout(() => setBellRinging(false), 1200);
                          }}
                          style={{
                            padding: '6px 14px',
                            borderRadius: '20px',
                            background: '#eab308',
                            border: 'none',
                            color: '#000',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                          }}
                        >
                          Ring Bell 🔔
                        </button>
                      </div>
                    )}

                    {/* 6. Mobile Codes USSD Simulator */}
                    {currentApp.mockupType === 'mobile_codes' && (
                      <div>
                        <Cpu
                          size={26}
                          color="#06b6d4"
                          style={{ marginBottom: '4px' }}
                        />
                        <div
                          style={{
                            fontSize: '0.75rem',
                            color: '#fff',
                            fontWeight: 600,
                            marginBottom: '4px',
                          }}
                        >
                          {selectedBrand}: {brandsUSSD[selectedBrand]}
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            gap: '4px',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                          }}
                        >
                          {Object.keys(brandsUSSD).map((b) => (
                            <button
                              key={b}
                              onClick={() => setSelectedBrand(b)}
                              style={{
                                padding: '3px 6px',
                                borderRadius: '6px',
                                background:
                                  selectedBrand === b
                                    ? '#06b6d4'
                                    : 'rgba(255, 255, 255, 0.1)',
                                border: 'none',
                                color: '#fff',
                                fontSize: '0.62rem',
                                cursor: 'pointer',
                              }}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 7. Maia Care Booking Simulator */}
                    {currentApp.mockupType === 'medical_booking' && (
                      <div>
                        <Calendar
                          size={30}
                          color={currentApp.color}
                          style={{ marginBottom: '6px' }}
                        />
                        <div
                          style={{
                            fontSize: '0.78rem',
                            color: 'var(--text-main)',
                            fontWeight: 600,
                            marginBottom: '6px',
                          }}
                        >
                          {bookingDone ? '✅ Visit Scheduled!' : 'Select Doctor Slot'}
                        </div>
                        <button
                          onClick={() => setBookingDone(!bookingDone)}
                          style={{
                            padding: '6px 14px',
                            borderRadius: '20px',
                            background: '#10b981',
                            border: 'none',
                            color: '#fff',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                          }}
                        >
                          {bookingDone ? 'Reset' : 'Confirm Slot 📅'}
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Play Store Link Button Footer */}
                  <div>
                    {currentApp.playStoreUrl ? (
                      <a
                        href={currentApp.playStoreUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-playstore"
                        style={{
                          width: '100%',
                          justifyContent: 'center',
                          fontSize: '0.78rem',
                          padding: '7px 12px',
                        }}
                      >
                        <ExternalLink size={14} />
                        <span>View on Google Play Store</span>
                      </a>
                    ) : (
                      <button
                        onClick={() => onSelectProject(currentApp.id)}
                        className="btn-secondary"
                        style={{
                          width: '100%',
                          justifyContent: 'center',
                          fontSize: '0.78rem',
                          padding: '7px 12px',
                        }}
                      >
                        <span>View Case Study</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
