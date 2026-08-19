import React, { useState, useEffect } from 'react';
import { Smartphone, Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Play Store Apps' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        transition: 'all 0.35s ease',
        background: scrolled ? 'rgba(3, 7, 18, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(139, 92, 246, 0.25)' : '1px solid transparent',
        padding: '14px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Cosmic Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #7c3aed 0%, #38bdf8 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
              position: 'relative',
              flexShrink: 0,
            }}
          >
            <Smartphone size={20} color="#ffffff" />
            <span
              style={{
                position: 'absolute',
                top: '-2px',
                right: '-2px',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#10b981',
                border: '2px solid #030712',
              }}
            />
          </div>
          <div>
            <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.08rem', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '4px' }}>
              Abhishek<span style={{ color: '#a855f7' }}>.dev</span>
              <Sparkles size={14} color="#38bdf8" />
            </div>
            <div style={{ color: '#9ca3af', fontSize: '0.7rem', fontWeight: 500 }}>
              Senior Flutter &amp; Android Developer
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                background: 'none',
                border: 'none',
                color: activeSection === item.id ? '#c084fc' : '#9ca3af',
                fontSize: '0.92rem',
                fontWeight: activeSection === item.id ? 700 : 500,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                position: 'relative',
                padding: '6px 0',
              }}
            >
              {item.label}
              {activeSection === item.id && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    borderRadius: '2px',
                    background: 'linear-gradient(90deg, #a855f7, #38bdf8)',
                    boxShadow: '0 0 10px #a855f7',
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Action CTA Button & Mobile Hamburger Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={() => scrollTo('contact')}
            className="btn-primary desktop-cta"
            style={{ padding: '9px 18px', fontSize: '0.85rem' }}
          >
            Transmit Message <ArrowRight size={15} />
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="mobile-toggle"
            style={{
              background: 'rgba(139, 92, 246, 0.15)',
              border: '1px solid rgba(139, 92, 246, 0.35)',
              color: '#ffffff',
              padding: '8px 10px',
              borderRadius: '10px',
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {mobileMenuOpen ? <X size={22} color="#c084fc" /> : <Menu size={22} color="#ffffff" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(11, 15, 25, 0.98)',
            borderBottom: '1px solid rgba(139, 92, 246, 0.35)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.9)',
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                background: 'none',
                border: 'none',
                color: activeSection === item.id ? '#c084fc' : '#e5e7eb',
                fontSize: '1.05rem',
                fontWeight: 600,
                textAlign: 'left',
                padding: '8px 0',
                cursor: 'pointer',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="btn-primary"
            style={{ marginTop: '8px', width: '100%', justifyContent: 'center' }}
          >
            Transmit Message <ArrowRight size={16} />
          </button>
        </div>
      )}
    </nav>
  );
};
