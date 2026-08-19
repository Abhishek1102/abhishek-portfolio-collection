import React from 'react';
import { X, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react';
import type { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-panel"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '740px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '36px',
          position: 'relative',
          background: 'rgba(11, 15, 25, 0.95)',
          border: '1px solid rgba(139, 92, 246, 0.4)',
          boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.95), 0 0 30px rgba(139, 92, 246, 0.2)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#ffffff',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <X size={18} />
        </button>

        {/* Header Badge & Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              background: 'rgba(139, 92, 246, 0.15)',
              color: '#c084fc',
              padding: '4px 12px',
              borderRadius: '20px',
              border: '1px solid rgba(139, 92, 246, 0.3)',
            }}
          >
            {project.category}
          </span>
          {project.singleHanded && (
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#10b981',
                padding: '4px 12px',
                borderRadius: '20px',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <Sparkles size={12} /> Sole Developer (From Scratch)
            </span>
          )}
        </div>

        <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }}>
          {project.title}
        </h2>
        <div style={{ color: '#38bdf8', fontSize: '0.95rem', fontWeight: 600, marginBottom: '20px' }}>
          {project.subtitle}
        </div>

        {/* Role & Status info */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '14px',
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '18px',
            borderRadius: '14px',
            marginBottom: '24px',
            border: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Your Role:</div>
            <div style={{ fontSize: '0.92rem', color: '#ffffff', fontWeight: 700, marginTop: '2px' }}>{project.role}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Status &amp; Reach:</div>
            <div style={{ fontSize: '0.92rem', color: '#10b981', fontWeight: 700, marginTop: '2px' }}>
              {project.status} {project.downloads && `(${project.downloads})`}
            </div>
          </div>
        </div>

        {/* Long Description */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '8px' }}>
            Project Overview
          </h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
            {project.longDescription}
          </p>
        </div>

        {/* Key Highlights */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '12px' }}>
            Key Technical Achievements
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {project.highlights.map((h, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} color="#a855f7" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ color: '#e5e7eb', fontSize: '0.92rem', lineHeight: 1.5 }}>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '10px' }}>
            Technologies &amp; Tools Used
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          {project.playStoreUrl ? (
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-playstore"
            >
              <ExternalLink size={16} /> Open on Google Play Store
            </a>
          ) : (
            <div />
          )}

          <button onClick={onClose} className="btn-secondary" style={{ padding: '10px 22px' }}>
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
