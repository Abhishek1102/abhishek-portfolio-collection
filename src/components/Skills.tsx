import React, { useState } from 'react';
import { Layers, Smartphone, Cloud, Cpu, Code2, Zap } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const currentCategory = SKILL_CATEGORIES[activeCategoryIndex];

  return (
    <section id="skills" style={{ padding: '90px 0', position: 'relative' }}>
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
            <Zap size={16} /> Constellation Matrix &amp; Tech Stack
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            Technical Proficiency
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '10px' }}>
            Hands-on engineering expertise built across 6+ production mobile applications.
          </p>
        </div>

        {/* Skill Category Selector Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '18px',
            marginBottom: '44px',
          }}
        >
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel"
              onClick={() => setActiveCategoryIndex(idx)}
              style={{
                padding: '22px',
                cursor: 'pointer',
                border: activeCategoryIndex === idx ? '1px solid rgba(139, 92, 246, 0.6)' : '1px solid rgba(255,255,255,0.08)',
                background: activeCategoryIndex === idx ? 'rgba(139, 92, 246, 0.15)' : 'rgba(11, 15, 25, 0.6)',
                boxShadow: activeCategoryIndex === idx ? '0 0 20px rgba(139, 92, 246, 0.3)' : 'none',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '12px',
                    background: activeCategoryIndex === idx ? 'linear-gradient(135deg, #7c3aed, #38bdf8)' : 'rgba(255,255,255,0.05)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                  }}
                >
                  {idx === 0 && <Smartphone size={20} />}
                  {idx === 1 && <Layers size={20} />}
                  {idx === 2 && <Cloud size={20} />}
                  {idx === 3 && <Cpu size={20} />}
                </div>
                <h4 style={{ color: '#ffffff', fontSize: '1.02rem', fontWeight: 700 }}>
                  {cat.title}
                </h4>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.4 }}>
                {cat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Selected Category Skill Progress Bars */}
        <div className="glass-panel" style={{ padding: '38px', border: '1px solid rgba(139, 92, 246, 0.25)' }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', marginBottom: '26px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Code2 size={22} color="#c084fc" /> {currentCategory.title} Matrix
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '24px' }}>
            {currentCategory.skills.map((skill, idx) => (
              <div key={idx} style={{ background: 'rgba(255,255,255,0.02)', padding: '18px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.98rem' }}>
                    {skill.name}
                  </span>
                  {skill.tag && (
                    <span
                      style={{
                        fontSize: '0.73rem',
                        background: 'rgba(139, 92, 246, 0.15)',
                        color: '#c084fc',
                        padding: '3px 10px',
                        borderRadius: '12px',
                        fontWeight: 600,
                        border: '1px solid rgba(139, 92, 246, 0.3)',
                      }}
                    >
                      {skill.tag}
                    </span>
                  )}
                </div>

                {/* Progress Bar Container */}
                <div style={{ height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div
                    style={{
                      height: '100%',
                      width: `${skill.level}%`,
                      background: 'linear-gradient(90deg, #7c3aed 0%, #38bdf8 100%)',
                      borderRadius: '4px',
                      transition: 'width 1s ease-in-out',
                      boxShadow: '0 0 12px rgba(139, 92, 246, 0.6)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
