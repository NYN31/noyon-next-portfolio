import React from 'react';
import SectionHeading from './SectionHeading';
import { PROJECT_HEADING, projectsData } from '@/constants/ProjectsConstant';
import GenericCard from './cards/GenericCard';
import ProjectCard from './cards/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="scroll-h-28 mb-28 sm:mb-40 ">
      <GenericCard>
        <SectionHeading>{PROJECT_HEADING}</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <ProjectCard project={project} />
            </React.Fragment>
          ))}
        </div>
      </GenericCard>
    </section>
  );
};

export default Projects;
