import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const handleSelectProject = () => {
    const projectsElem = document.getElementById('projects');
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#030712', color: '#f3f4f6', position: 'relative' }}>
      {/* Ambient Cosmic Background Glows */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 0,
          background: 'radial-gradient(circle at 50% 0%, rgba(124, 58, 237, 0.15), rgba(3, 7, 18, 0.95) 70%)',
        }}
      />

      {/* Main Content Overlay */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        <main>
          <Hero onSelectProject={handleSelectProject} />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
