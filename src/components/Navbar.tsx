import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import abhishekPhoto from '../assets/abhishek_panchmiya.jpg';

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
    { id: 'projects', label: 'Projects' },
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
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(7, 9, 14, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        padding: '16px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '2px solid rgba(56, 189, 248, 0.5)',
              boxShadow: '0 0 15px rgba(56, 189, 248, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#1e293b',
            }}
          >
            <img
              src={abhishekPhoto}
              alt="Abhishek Panchmiya"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', display: 'block' }}
            />
          </div>
          <div>
            <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
              Abhishek<span style={{ color: '#38bdf8' }}>.dev</span>
            </div>
            <div style={{ color: '#9ca3af', fontSize: '0.72rem', fontWeight: 500 }}>
              Flutter &amp; Android Engineer
            </div>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                background: 'none',
                border: 'none',
                color: activeSection === item.id ? '#38bdf8' : '#9ca3af',
                fontSize: '0.92rem',
                fontWeight: activeSection === item.id ? 600 : 500,
                cursor: 'pointer',
                transition: 'color 0.2s ease',
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
                    background: 'linear-gradient(90deg, #38bdf8, #6366f1)',
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => scrollTo('contact')}
            className="btn-primary desktop-contact-btn"
            style={{ padding: '8px 18px', fontSize: '0.88rem' }}
          >
            Contact Me <ArrowRight size={16} />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(15, 21, 35, 0.98)',
            borderBottom: '1px solid var(--border-color)',
            padding: '16px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                background: 'none',
                border: 'none',
                color: activeSection === item.id ? '#38bdf8' : '#e5e7eb',
                fontSize: '1rem',
                fontWeight: 600,
                textAlign: 'left',
                padding: '8px 0',
                cursor: 'pointer',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
