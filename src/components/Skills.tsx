import React, { useState } from 'react';
import { Layers, Smartphone, Cloud, Cpu, Code2, Zap } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const currentCategory = SKILL_CATEGORIES[activeCategoryIndex];

  return (
    <section id="skills" style={{ padding: '80px 0', position: 'relative' }}>
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
            <Zap size={16} /> Expertise &amp; Tools
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            Technical Proficiency
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1rem', marginTop: '8px' }}>
            Hands-on technical mastery built over 2+ years of engineering production applications.
          </p>
        </div>

        {/* Skill Category Selector Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel"
              onClick={() => setActiveCategoryIndex(idx)}
              style={{
                padding: '20px',
                cursor: 'pointer',
                border: activeCategoryIndex === idx ? '1px solid #38bdf8' : '1px solid rgba(255,255,255,0.08)',
                background: activeCategoryIndex === idx ? 'rgba(56, 189, 248, 0.1)' : 'rgba(15, 21, 35, 0.6)',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: activeCategoryIndex === idx ? '#38bdf8' : 'rgba(255,255,255,0.05)',
                    color: activeCategoryIndex === idx ? '#000' : '#38bdf8',
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
                <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700 }}>
                  {cat.title}
                </h4>
              </div>
              <p style={{ color: '#9ca3af', fontSize: '0.8rem', lineHeight: 1.4 }}>
                {cat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Selected Category Skill Progress Bars */}
        <div className="glass-panel" style={{ padding: '36px' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Code2 size={20} color="#38bdf8" /> {currentCategory.title} Matrix
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {currentCategory.skills.map((skill, idx) => (
              <div key={idx} style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.95rem' }}>
                    {skill.name}
                  </span>
                  {skill.tag && (
                    <span
                      style={{
                        fontSize: '0.72rem',
                        background: 'rgba(56, 189, 248, 0.15)',
                        color: '#38bdf8',
                        padding: '2px 8px',
                        borderRadius: '10px',
                        fontWeight: 600,
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
                      background: 'linear-gradient(90deg, #38bdf8, #6366f1)',
                      borderRadius: '4px',
                      transition: 'width 1s ease-in-out',
                      boxShadow: '0 0 10px rgba(56, 189, 248, 0.5)',
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
