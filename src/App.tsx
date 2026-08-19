import { useState } from 'react';
import { CosmicCanvas } from './components/CosmicCanvas';
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
      {/* Cosmic Starfield Particle Canvas */}
      <CosmicCanvas />

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
