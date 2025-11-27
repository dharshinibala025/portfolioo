import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { projects } from '../data/content';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <section>
      <PageHeader
        eyebrow="Recent Work"
        title="Innovation Hub"
        description="A space where creative ideas, smart automation, and AI driven solutions come to life"
      />

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
