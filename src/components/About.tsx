import React from 'react';
import { User, Award, GraduationCap, ShieldCheck, MapPin, Globe } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION } from '../data/portfolioData';
import { AnimatedCounter } from './AnimatedCounter';
import { AndroidLogo } from './AndroidLogo';
import { FlutterLogo } from './FlutterLogo';
import abhishekPhoto from '../assets/abhishek_panchmiya.jpg';

export const About: React.FC = () => {
  return (
    <section id="about" style={{ padding: '80px 0', position: 'relative' }}>
      {/* Ambient background glow orb */}
      <div
        className="ambient-glow-orb"
        style={{
          top: '20%',
          left: '40%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(0, 0, 0, 0) 70%)',
          animationDelay: '-3s',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
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

        <div className="about-grid">
          {/* Left Main About Card */}
          <div className="glass-panel glass-panel-hover" style={{ padding: 'clamp(20px, 4vw, 36px)' }}>
            {/* Profile Header with Photo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
              <div
                style={{
                  width: '84px',
                  height: '84px',
                  minWidth: '84px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '2px solid rgba(56, 189, 248, 0.4)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4), 0 0 20px rgba(56, 189, 248, 0.2)',
                  background: '#1a1d26',
                }}
              >
                <img
                  src={abhishekPhoto}
                  alt="Abhishek Panchmiya"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', display: 'block' }}
                />
              </div>
              <div>
                <h3 style={{ fontSize: 'clamp(1.15rem, 3vw, 1.4rem)', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                  Full-Lifecycle Mobile Application Developer
                </h3>
                <div style={{ color: '#38bdf8', fontSize: '0.9rem', fontWeight: 600 }}>
                  Abhishek Panchmiya • Rajkot, Gujarat
                </div>
              </div>
            </div>
            <p style={{ color: '#9ca3af', lineHeight: 1.7, marginBottom: '20px' }}>
              I am a <strong style={{ color: '#ffffff' }}>Senior Flutter Developer</strong> with over <span style={{ color: '#38bdf8', fontWeight: 700 }}><AnimatedCounter value="2+" /> years</span> of hands-on industry experience building, scaling, and maintaining mobile applications for clients across India and internationally.
            </p>
            <p style={{ color: '#9ca3af', lineHeight: 1.7, marginBottom: '24px' }}>
              My technical expertise spans both <span style={{ color: '#38bdf8', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}><FlutterLogo size={16} /> Flutter (Dart)</span> and native <span style={{ color: '#3DDC84', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}><AndroidLogo size={16} /> Native Android (Kotlin)</span>. Whether developing complex single-handed projects from concept to Play Store release (such as <em>Listening Eyes</em> &amp; <em>Maia Care</em>) or collaborating within 6–7 member engineering teams, I prioritize clean architecture, robust state management, and reliable API integration.
            </p>

            {/* Key Value Highlights Grid */}
            <div className="about-highlights-grid">
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
                  <ShieldCheck size={18} /> Play Store Recovery &amp; DevOps
                </div>
                <div style={{ color: '#9ca3af', fontSize: '0.88rem' }}>
                  Expert in lost JKS keystore recovery (PEPK tool), Play Console app releases &amp; ownership transfers.
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlight Cards Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Education Qualification Card */}
            <div className="glass-panel glass-panel-hover" style={{ padding: '28px' }}>
              <h4 style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <GraduationCap size={20} color="#f59e0b" /> Education Qualification
              </h4>
              <div style={{ color: '#38bdf8', fontWeight: 700, fontSize: '0.95rem', marginBottom: '10px' }}>
                {EDUCATION.institution} <span style={{ color: '#9ca3af', fontSize: '0.82rem', fontWeight: 500 }}>| {EDUCATION.period}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem' }}>
                {EDUCATION.degrees.map((deg, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'rgba(245, 158, 11, 0.08)',
                      border: '1px solid rgba(245, 158, 11, 0.2)',
                      padding: '8px 12px',
                      borderRadius: '8px',
                    }}
                  >
                    <span style={{ color: '#ffffff', fontWeight: 600 }}>{deg.title}</span>
                    <span style={{ color: '#f59e0b', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>{deg.score}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Details Card */}
            <div className="glass-panel glass-panel-hover" style={{ padding: '28px' }}>
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
                  <span style={{ color: '#38bdf8', fontWeight: 700 }}><AnimatedCounter value="2+" /> Years (Jan 2024 – Present)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '4px' }}>
                  <span style={{ color: '#9ca3af' }}>Current Role:</span>
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>Senior App Developer</span>
                </div>
              </div>
            </div>

            {/* Languages Spoken Card */}
            <div className="glass-panel glass-panel-hover" style={{ padding: '28px' }}>
              <h4 style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Globe size={18} color="#6366f1" /> Spoken Languages
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {PERSONAL_INFO.spokenLanguages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="tech-badge"
                    style={{
                      background: 'rgba(99, 102, 241, 0.1)',
                      borderColor: 'rgba(99, 102, 241, 0.25)',
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

