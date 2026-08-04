import { motion } from 'framer-motion';

// AI Chat Hero & Bento Dashboard Components
import AiChatHero from '../components/AiChatHero';
import BentoDashboard from '../components/BentoDashboard';

// Detailed Page Components
import About from './About';
import Projects from './Projects';
import Certificates from './Certificates';
import Skills from './Skills';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* 1. Interactive AI-Chat Hero Section */}
      <section id="home" className="pt-6 sm:pt-10 min-h-[calc(100vh-5rem)] flex flex-col justify-center">
        <AiChatHero />
        <BentoDashboard />
      </section>

      {/* 2. Detailed Scroll Sections */}
      <section id="about" className="pt-8">
        <About />
      </section>

      <section id="projects" className="pt-8">
        <Projects />
      </section>

      <section id="certificates" className="pt-8">
        <Certificates />
      </section>

      <section id="skills" className="pt-8">
        <Skills />
      </section>

      <section id="contact" className="pt-8">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
