import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, GraduationCap } from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/portfolioData';
import { AndroidLogo } from './AndroidLogo';

export const Experience: React.FC = () => {
  return (
    <section id="experience" style={{ padding: '80px 0', position: 'relative' }}>
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
            <Briefcase size={16} /> Work History
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            Professional Experience Timeline
          </h2>
        </div>

        <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {WORK_EXPERIENCE.map((exp) => (
            <div key={exp.id} className="glass-panel glass-panel-hover" style={{ padding: '36px', position: 'relative' }}>
              {/* Badge Banner based on role */}
              {exp.id === 'technocomet-senior' && (
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.2) 0%, rgba(99, 102, 241, 0.2) 100%)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    color: '#38bdf8',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    padding: '4px 12px',
                    borderRadius: '20px',
                    marginBottom: '16px',
                  }}
                >
                  <Award size={14} /> Promoted to Senior Developer Role
                </div>
              )}
              {exp.id === 'technocomet-trainee' && (
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(245, 158, 11, 0.12)',
                    border: '1px solid rgba(245, 158, 11, 0.3)',
                    color: '#f59e0b',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    padding: '4px 12px',
                    borderRadius: '20px',
                    marginBottom: '16px',
                  }}
                >
                  <GraduationCap size={14} /> 6-Month Cross-Platform Training
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
                <div>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff' }}>
                    {exp.role}
                  </h3>
                  <div style={{ color: '#38bdf8', fontSize: '1.05rem', fontWeight: 700, marginTop: '2px' }}>
                    {exp.company}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={14} color="#38bdf8" /> {exp.period}
                  </div>
                  <div style={{ color: '#9ca3af', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'flex-end', marginTop: '2px' }}>
                    <MapPin size={12} /> {exp.location}
                  </div>
                </div>
              </div>

              <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px', fontStyle: 'italic' }}>
                "{exp.companyDescription}"
              </p>

              {/* Responsibilities list */}
              <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 700, marginBottom: '12px' }}>
                Key Highlights &amp; Deliverables
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                {exp.responsibilities.map((resp, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={16} color="#38bdf8" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: 1.5 }}>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Used */}
              <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '0.78rem', color: '#9ca3af', fontWeight: 600, marginBottom: '8px' }}>
                  TECHNOLOGIES &amp; TOOLS:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge" style={{ fontSize: '0.78rem' }}>
                      {tech.includes('Android') ? (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#3DDC84' }}>
                          <AndroidLogo size={14} /> {tech}
                        </span>
                      ) : (
                        tech
                      )}
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
