import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { projects } from '../data/content';
import AccordionGallery from '../components/AccordionGallery';
import GsapReveal from '../components/GsapReveal';

const Projects = () => {
  return (
    <section id="projects" className="py-4">
      <GsapReveal>
        <PageHeader
          eyebrow="Recent Work"
          title="Innovation Hub"
          description="A space where creative ideas, smart automation, and AI driven solutions come to life"
        />
      </GsapReveal>

      <div className="mt-8">
        <AccordionGallery
          items={projects}
          defaultIndex={0}
          expandRatio={0.52}
          trigger="hover"
          accentColor="#B8893D"
          overlayColor="#12100E"
          textColor="#FAF8F3"
          grayscale={true}
          showLabels={true}
          duration={0.6}
          ease="power3.out"
          parallax={0.5}
          tilt={8}
          stagger={0.06}
          height={480}
          gap={14}
          radius={24}
          orientation="horizontal"
        />
      </div>
    </section>
  );
};

export default Projects;
