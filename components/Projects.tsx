import React from 'react';
import SectionHeading from './SectionHeading';
import { PROJECT_HEADING, projectsData } from '@/constants/ProjectsConstant';
import GenericCard from './cards/GenericCard';
import ProjectCard from './cards/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-32">
      <GenericCard>
        <div className="flex flex-col gap-8">
        <SectionHeading heading={PROJECT_HEADING} />
          <div className="grid grid-cols-1 gap-2">
            {projectsData.map((project, index) => (
              <React.Fragment key={index}>
                <ProjectCard project={project} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </GenericCard>
    </section>
  );
};

export default Projects;
