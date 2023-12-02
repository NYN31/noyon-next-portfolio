import { ProjectProps } from '@/types/CommonTypes';
import { GrProjects } from 'react-icons/gr';
import React from 'react';
import { ICON_SIZE } from '@/constants/CpConstant';
import { useTheme } from '@/context/theme-context';
import Button from '../common/Button';

const ProjectCard: React.FC<{ project: ProjectProps }> = ({ project }) => {
  const { theme } = useTheme();

  return (
    <div className="overflow-hidden border border-gray-300 dark:border-gray-700 shadow-lg rounded-lg">
      <div className="flex flex-col justify-between gap-y-10 ease-out px-5 py-5">
        <div className="flex flex-col gap-y-6">
          <div className="flex items-center space-x-5">
            <div>
              <GrProjects
                color={theme === 'dark' ? '#db2777' : ''}
                fontSize={ICON_SIZE - 4}
              />
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
            <Button key={tag} content={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
