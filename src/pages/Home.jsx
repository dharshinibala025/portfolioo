import HeroSection from '../components/HeroSection';

// Detailed Page Components
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* 1. Full-Bleed Home / Hero Section */}
      <section id="home" className="w-full">
        <HeroSection />
      </section>

      {/* 2. Detailed Scroll Sections Container */}
      <div className="max-w-6xl mx-auto px-4 md:px-10 lg:px-12 space-y-16">
        <section id="about" className="pt-8">
          <About />
        </section>

        <section id="projects" className="pt-8">
          <Projects />
        </section>

        <section id="skills" className="pt-8">
          <Skills />
        </section>

        <section id="contact" className="pt-8">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Home;
