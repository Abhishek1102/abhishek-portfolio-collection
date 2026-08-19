import React from 'react';
import { User, Award, Key, Globe, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#38bdf8',
              fontSize: '0.85rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '8px',
            }}
          >
            <User size={16} /> About Me
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            Delivering Production Mobile Excellence
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '32px',
            alignItems: 'stretch',
          }}
          className="about-grid"
        >
          {/* Left Main About Card */}
          <div className="glass-panel" style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>
              Full-Lifecycle Mobile Application Developer
            </h3>
            <p style={{ color: '#9ca3af', lineHeight: 1.7, marginBottom: '20px' }}>
              I am a <strong style={{ color: '#ffffff' }}>Senior Flutter Developer</strong> with over 2 years of hands-on industry experience building, scaling, and maintaining mobile applications for clients across India and internationally.
            </p>
            <p style={{ color: '#9ca3af', lineHeight: 1.7, marginBottom: '24px' }}>
              My technical expertise spans both <span style={{ color: '#38bdf8' }}>Flutter (Dart)</span> and native <span style={{ color: '#c084fc' }}>Android (Kotlin)</span>. Whether developing complex single-handed projects from concept to Play Store release (such as <em>Listening Eyes</em> &amp; <em>Maia Care</em>) or collaborating within 6–7 member engineering teams, I prioritize clean architecture, robust state management, and reliable API integration.
            </p>

            {/* Key Value Highlights Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '24px' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ color: '#38bdf8', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <Award size={18} /> Rapid Career Growth
                </div>
                <div style={{ color: '#9ca3af', fontSize: '0.88rem' }}>
                  Promoted to Senior App Developer at TechnoComet Solutions for high feature ownership and client feedback.
                </div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ color: '#10b981', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <Key size={18} /> Play Store Recovery Expert
                </div>
                <div style={{ color: '#9ca3af', fontSize: '0.88rem' }}>
                  Resolved lost JKS/signing-key issues, generated replacement signing keys, and handled app ownership transfers seamlessly.
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlight Cards Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Quick Details Card */}
            <div className="glass-panel" style={{ padding: '28px' }}>
              <h4 style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={18} color="#38bdf8" /> Quick Profile
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.92rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
                  <span style={{ color: '#9ca3af' }}>Location:</span>
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>Rajkot, Gujarat, India</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
                  <span style={{ color: '#9ca3af' }}>Experience:</span>
                  <span style={{ color: '#38bdf8', fontWeight: 700 }}>2+ Years (Jan 2024 – Present)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
                  <span style={{ color: '#9ca3af' }}>Current Role:</span>
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>Senior App Developer</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '4px' }}>
                  <span style={{ color: '#9ca3af' }}>Mentored Devs:</span>
                  <span style={{ color: '#10b981', fontWeight: 700 }}>2–3 Junior Developers</span>
                </div>
              </div>
            </div>

            {/* Languages Spoken Card */}
            <div className="glass-panel" style={{ padding: '28px' }}>
              <h4 style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Globe size={18} color="#6366f1" /> Spoken Languages
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {PERSONAL_INFO.spokenLanguages.map((lang, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: 'rgba(99, 102, 241, 0.1)',
                      border: '1px solid rgba(99, 102, 241, 0.25)',
                      color: '#a5b4fc',
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                    }}
                  >
                    💬 {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
