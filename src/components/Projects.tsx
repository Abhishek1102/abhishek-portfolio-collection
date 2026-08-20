import React, { useState } from 'react';
import { 
  FolderGit2, Eye, Heart, ShoppingBag, Calendar, ArrowUpRight, CheckCircle2 
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Accessibility', 'Social & Dating', 'E-Commerce', 'Healthcare & Business', 'Single-Handed'];

  const filteredProjects = PROJECTS.filter((p) => {
    if (filterCategory === 'All') return true;
    if (filterCategory === 'Single-Handed') return p.singleHanded;
    return p.category === filterCategory;
  });

  return (
    <section id="projects" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
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
            <FolderGit2 size={16} /> Featured App Portfolio
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            Production Mobile Applications
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1rem', marginTop: '8px' }}>
            Applications built and maintained across Play Store releases, client deliveries, and team projects.
          </p>
        </div>

        {/* Filter Categories */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '40px',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              style={{
                background: filterCategory === cat ? 'linear-gradient(135deg, #0284c7 0%, #6366f1 100%)' : 'rgba(255, 255, 255, 0.05)',
                color: filterCategory === cat ? '#ffffff' : '#9ca3af',
                border: filterCategory === cat ? 'none' : '1px solid var(--border-color)',
                padding: '8px 18px',
                borderRadius: '20px',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat === 'Single-Handed' ? '★ Sole Developer' : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel project-card-glow"
              onClick={() => setSelectedProject(project)}
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                ['--card-accent-color' as any]: project.color,
                ['--card-glow-color' as any]: `${project.color}55`,
              }}
            >
              {/* Header Badge */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: project.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 0 20px ${project.color}66`,
                    }}
                  >
                    {project.id === 'listening-eyes' && <Eye size={24} color="#fff" />}
                    {project.id === 'hukup-dating' && <Heart size={24} color="#fff" />}
                    {project.id === 'miodeal-buyer' && <ShoppingBag size={24} color="#fff" />}
                    {project.id === 'maia-care' && <Calendar size={24} color="#fff" />}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        background: 'rgba(56, 189, 248, 0.1)',
                        color: '#38bdf8',
                        padding: '3px 10px',
                        borderRadius: '12px',
                        border: '1px solid rgba(56, 189, 248, 0.2)',
                      }}
                    >
                      {project.category}
                    </span>
                    {project.singleHanded && (
                      <span style={{ fontSize: '0.68rem', color: '#10b981', fontWeight: 600 }}>
                        ★ Sole Developer
                      </span>
                    )}
                  </div>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
                  {project.title}
                </h3>
                <div style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 600, marginBottom: '14px' }}>
                  {project.subtitle}
                </div>
                <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  {project.description}
                </p>
              </div>

              {/* Tech Badges & View CTA */}
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="tech-badge" style={{ fontSize: '0.75rem', padding: '2px 8px' }}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span style={{ fontSize: '0.75rem', color: '#64748b', alignSelf: 'center' }}>
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '14px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <span style={{ color: '#10b981', fontSize: '0.82rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <CheckCircle2 size={14} /> {project.downloads || project.status}
                  </span>

                  <span
                    style={{
                      color: '#38bdf8',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    View Details <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
