import React, { useState } from 'react';
import { 
  FolderGit2, Eye, Heart, ShoppingBag, Calendar, ArrowUpRight, CheckCircle2,
  Music, Bell, Cpu, ExternalLink, Sparkles
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    'All', 
    'Devotional & Audio',
    'Accessibility', 
    'Social & Dating', 
    'E-Commerce', 
    'Tools & Native',
    'Healthcare & Business', 
    'Single-Handed'
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (filterCategory === 'All') return true;
    if (filterCategory === 'Single-Handed') return p.singleHanded;
    return p.category === filterCategory;
  });

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Eye': return <Eye size={24} color="#fff" />;
      case 'Heart': return <Heart size={24} color="#fff" />;
      case 'ShoppingBag': return <ShoppingBag size={24} color="#fff" />;
      case 'Music': return <Music size={24} color="#fff" />;
      case 'Bell': return <Bell size={24} color="#fff" />;
      case 'Smartphone': return <Cpu size={24} color="#fff" />;
      case 'Calendar': return <Calendar size={24} color="#fff" />;
      default: return <Sparkles size={24} color="#fff" />;
    }
  };

  return (
    <section id="projects" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
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
            <FolderGit2 size={16} /> Play Store Apps &amp; Production Galaxy
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            Featured Mobile Applications
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '10px', maxWidth: '640px', marginInline: 'auto' }}>
            6+ published Google Play Store applications and enterprise clients built single-handedly and in engineering teams.
          </p>
        </div>

        {/* Filter Categories */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '48px',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              style={{
                background: filterCategory === cat 
                  ? 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)' 
                  : 'rgba(255, 255, 255, 0.04)',
                color: filterCategory === cat ? '#ffffff' : 'var(--text-muted)',
                border: filterCategory === cat 
                  ? '1px solid rgba(255, 255, 255, 0.2)' 
                  : '1px solid rgba(255, 255, 255, 0.08)',
                padding: '9px 20px',
                borderRadius: '24px',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: filterCategory === cat ? '0 0 15px rgba(124, 58, 237, 0.4)' : 'none',
              }}
            >
              {cat === 'Single-Handed' ? '★ Sole Developer' : cat}
            </button>
          ))}
        </div>

        {/* Projects Galaxy Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
            gap: '28px',
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover"
              style={{
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(139, 92, 246, 0.25)',
              }}
            >
              {/* Header Badge */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: project.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 0 25px ${project.color}88`,
                    }}
                  >
                    {getProjectIcon(project.iconName)}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                    <span
                      style={{
                        fontSize: '0.73rem',
                        fontWeight: 700,
                        background: 'rgba(139, 92, 246, 0.15)',
                        color: '#c084fc',
                        padding: '4px 12px',
                        borderRadius: '14px',
                        border: '1px solid rgba(139, 92, 246, 0.3)',
                      }}
                    >
                      {project.category}
                    </span>
                    {project.singleHanded && (
                      <span style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Sparkles size={12} /> Sole Developer
                      </span>
                    )}
                  </div>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
                  {project.title}
                </h3>
                <div style={{ color: '#38bdf8', fontSize: '0.88rem', fontWeight: 600, marginBottom: '14px' }}>
                  {project.subtitle}
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '22px' }}>
                  {project.description}
                </p>
              </div>

              {/* Tech Badges & Actions */}
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '22px' }}>
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="tech-badge" style={{ fontSize: '0.75rem', padding: '3px 10px' }}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', alignSelf: 'center' }}>
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  {project.playStoreUrl ? (
                    <a
                      href={project.playStoreUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        color: '#10b981',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        textDecoration: 'none',
                        background: 'rgba(16, 185, 129, 0.1)',
                        padding: '4px 10px',
                        borderRadius: '8px',
                        border: '1px solid rgba(16, 185, 129, 0.25)',
                      }}
                    >
                      <ExternalLink size={14} /> Play Store Link
                    </a>
                  ) : (
                    <span style={{ color: '#10b981', fontSize: '0.82rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <CheckCircle2 size={14} /> {project.status}
                    </span>
                  )}

                  <button
                    onClick={() => setSelectedProject(project)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#38bdf8',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    Details <ArrowUpRight size={16} />
                  </button>
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
