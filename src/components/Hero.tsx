import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TechSkillsOrbitWheel } from './TechSkillsOrbitWheel';

interface HeroProps {
  onSelectProject: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      id="hero"
      style={{
        paddingTop: '110px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
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
              className="hero-stats-grid"
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

          {/* Right Column - Revolving Planets Galaxy Wheel (Flutter, Android, PlayStore, Firebase, Kotlin, Database) */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <TechSkillsOrbitWheel />
          </div>
        </div>
      </div>
    </section>
  );
};
