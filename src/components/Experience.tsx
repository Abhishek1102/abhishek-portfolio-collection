import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" style={{ padding: '90px 0', position: 'relative' }}>
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
            <Briefcase size={16} /> Mission Logs &amp; Career History
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            Professional Experience Timeline
          </h2>
        </div>

        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          {WORK_EXPERIENCE.map((exp) => (
            <div
              key={exp.id}
              className="glass-panel"
              style={{
                padding: '38px',
                position: 'relative',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                boxShadow: '0 15px 40px -10px rgba(0,0,0,0.6)',
              }}
            >
              {/* Promotion Header Banner */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(56, 189, 248, 0.2) 100%)',
                  border: '1px solid rgba(139, 92, 246, 0.35)',
                  color: '#c084fc',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  padding: '5px 14px',
                  borderRadius: '20px',
                  marginBottom: '20px',
                }}
              >
                <Award size={15} /> Promoted to Senior App Developer
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff' }}>
                    {exp.role}
                  </h3>
                  <div style={{ color: '#38bdf8', fontSize: '1.15rem', fontWeight: 700, marginTop: '2px' }}>
                    {exp.company}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.94rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={15} color="#a855f7" /> {exp.period}
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'flex-end', marginTop: '4px' }}>
                    <MapPin size={13} /> {exp.location}
                  </div>
                </div>
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '26px', fontStyle: 'italic' }}>
                "{exp.companyDescription}"
              </p>

              {/* Responsibilities list */}
              <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={16} color="#38bdf8" /> Key Responsibilities &amp; Engineering Achievements
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '30px' }}>
                {exp.responsibilities.map((resp, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={18} color="#a855f7" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ color: '#e5e7eb', fontSize: '0.94rem', lineHeight: 1.6 }}>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Used */}
              <div style={{ paddingTop: '22px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '12px', letterSpacing: '0.05em' }}>
                  CORE STACK &amp; DEVOPS TOOLING:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
