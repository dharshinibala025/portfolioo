import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { projects } from '../data/content';
import AccordionGallery from '../components/AccordionGallery';
import GsapReveal from '../components/GsapReveal';

const Projects = () => {
  return (
    <section id="projects" className="py-12">
      <GsapReveal>
        <PageHeader
          eyebrow="Recent Work"
          title="Innovation Hub"
          description="A space where creative ideas, smart automation, and AI driven solutions come to life"
        />
      </GsapReveal>

      <div className="mt-8">
        <AccordionGallery projects={projects} />
      </div>
    </section>
  );
};

export default Projects;
