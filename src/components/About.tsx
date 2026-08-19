import React from 'react';
import { User, Award, Key, Globe, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#c084fc',
              fontSize: '0.85rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '10px',
              padding: '6px 14px',
              borderRadius: '20px',
              background: 'rgba(139, 92, 246, 0.1)',
              border: '1px solid rgba(139, 92, 246, 0.25)',
            }}
          >
            <User size={16} /> Cosmic Explorer Profile
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
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
          <div className="glass-panel" style={{ padding: '38px', border: '1px solid rgba(139, 92, 246, 0.25)' }}>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#ffffff', marginBottom: '18px' }}>
              Full-Lifecycle Mobile Application Developer
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '20px' }}>
              I am a <strong style={{ color: '#ffffff' }}>Senior Flutter &amp; Native Android Developer</strong> with over 2 years of hands-on industry experience building, scaling, and publishing mobile applications for clients across India and internationally.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '26px' }}>
              My technical expertise spans both <span style={{ color: '#38bdf8' }}>Flutter (Dart)</span> and native <span style={{ color: '#c084fc' }}>Android (Kotlin)</span>. I have published <strong style={{ color: '#10b981' }}>6+ Google Play Store applications</strong> spanning accessibility tools, devotional players, e-commerce engines, social discovery apps, and native diagnostic utilities.
            </p>

            {/* Key Value Highlights Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '26px' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '18px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ color: '#38bdf8', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Award size={18} /> Rapid Career Growth
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                  Promoted to Senior App Developer at TechnoComet Solutions for high feature ownership and client satisfaction.
                </div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '18px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ color: '#10b981', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Key size={18} /> Play Store DevOps Expert
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                  Resolved lost JKS signing keys, generated replacement keys, managed app transfers, and maintained Play Console updates.
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlight Cards Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            {/* Quick Details Card */}
            <div className="glass-panel" style={{ padding: '30px', border: '1px solid rgba(139, 92, 246, 0.25)' }}>
              <h4 style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.15rem', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={18} color="#38bdf8" /> Quick Profile Matrix
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.94rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '10px' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Location:</span>
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>Rajkot, Gujarat, India</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '10px' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Experience:</span>
                  <span style={{ color: '#38bdf8', fontWeight: 700 }}>2+ Years (Jan 2024 – Present)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '10px' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Current Role:</span>
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>Senior App Developer</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '4px' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Mentored Devs:</span>
                  <span style={{ color: '#10b981', fontWeight: 700 }}>3 Junior App Engineers</span>
                </div>
              </div>
            </div>

            {/* Languages Spoken Card */}
            <div className="glass-panel" style={{ padding: '30px', border: '1px solid rgba(139, 92, 246, 0.25)' }}>
              <h4 style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.15rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Globe size={18} color="#c084fc" /> Spoken Languages
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {PERSONAL_INFO.spokenLanguages.map((lang, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: 'rgba(139, 92, 246, 0.12)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      color: '#c084fc',
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
