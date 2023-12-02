import { ProjectProps } from '@/types/CommonTypes';
import { GrProjects } from 'react-icons/gr';
import React from 'react';
import { ICON_SIZE } from '@/constants/CpConstant';

const ProjectCard: React.FC<{ project: ProjectProps }> = ({ project }) => {
  return (
    <div className="overflow-hidden border border-gray-300 dark:border-gray-700 shadow-lg rounded-lg">
      <div className="flex flex-col justify-between gap-y-10  hover:scale-[1.01] ease-out transition-transform px-5 py-5">
        <div className="flex flex-col gap-y-6">
          <div className="flex items-center space-x-5">
            <div>
              <GrProjects fontSize={ICON_SIZE} />
            </div>
            <p className="text-lg font-bold">{project.title}</p>
          </div>
          <p
            className="text-slate-700 dark:text-gray-400 text-justify	"
            dangerouslySetInnerHTML={{ __html: project.description }}
          ></p>
        </div>

        <div className="flex flex-wrap gap-3 items-center">
          {project.tags.map(tag => (
            <div
              key={tag}
              className="border border-gray-300 dark:border-gray-700 py-1 px-3 rounded-full bg-slate-700 dark:bg-gray-800 font-bold text-sm text-white dark:text-opacity-70 shadow-lg hover:scale-105"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
