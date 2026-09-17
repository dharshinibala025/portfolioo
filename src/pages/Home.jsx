import HeroSection from '../components/HeroSection';

// Detailed Page Components
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="w-full space-y-16 lg:space-y-24">
      {/* 1. Full-Bleed Home / Hero Section */}
      <section id="home" className="w-full">
        <HeroSection />
      </section>

      {/* 2. Detailed Full-Bleed Screen Sections Container */}
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 space-y-20 lg:space-y-32">
        <section id="about" className="w-full min-h-[85vh] flex flex-col justify-center pt-8">
          <About />
        </section>

        <section id="projects" className="w-full min-h-[80vh] flex flex-col justify-center pt-8">
          <Projects />
        </section>

        <section id="skills" className="w-full min-h-[80vh] flex flex-col justify-center pt-8">
          <Skills />
        </section>

        <section id="contact" className="w-full min-h-[80vh] flex flex-col justify-center pt-8">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Home;
