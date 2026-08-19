import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';
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
          maxWidth: '720px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '32px',
          position: 'relative',
          background: '#0d1322',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9)',
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
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <X size={18} />
        </button>

        {/* Header Badge & Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              background: 'rgba(56, 189, 248, 0.12)',
              color: '#38bdf8',
              padding: '4px 10px',
              borderRadius: '20px',
              border: '1px solid rgba(56, 189, 248, 0.25)',
            }}
          >
            {project.category}
          </span>
          {project.singleHanded && (
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                background: 'rgba(16, 185, 129, 0.12)',
                color: '#10b981',
                padding: '4px 10px',
                borderRadius: '20px',
                border: '1px solid rgba(16, 185, 129, 0.25)',
              }}
            >
              ★ Sole Developer (From Scratch)
            </span>
          )}
        </div>

        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }}>
          {project.title}
        </h2>
        <div style={{ color: '#38bdf8', fontSize: '0.95rem', fontWeight: 600, marginBottom: '16px' }}>
          {project.subtitle}
        </div>

        {/* Role & Status info */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px',
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '16px',
            borderRadius: '12px',
            marginBottom: '24px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <div>
            <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>Your Role:</div>
            <div style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 700 }}>{project.role}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>Status &amp; Reach:</div>
            <div style={{ fontSize: '0.9rem', color: '#10b981', fontWeight: 700 }}>
              {project.status} {project.downloads && `(${project.downloads})`}
            </div>
          </div>
        </div>

        {/* Long Description */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '8px' }}>
            Project Overview
          </h4>
          <p style={{ color: '#9ca3af', lineHeight: 1.65, fontSize: '0.95rem' }}>
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
                <CheckCircle2 size={18} color="#38bdf8" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ color: '#e5e7eb', fontSize: '0.9rem', lineHeight: 1.5 }}>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div style={{ marginBottom: '24px' }}>
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

        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <button onClick={onClose} className="btn-secondary" style={{ padding: '8px 20px' }}>
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
