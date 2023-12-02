import { EducationProps } from '@/types/CommonTypes';
import { FaRegCheckCircle } from 'react-icons/fa';
import React from 'react';
import { ICON_SIZE } from '@/constants/AcademicConstant';
import { useTheme } from '@/context/theme-context';
import { IconContext } from 'react-icons';

const EducationCard: React.FC<{ education: EducationProps }> = ({
  education,
}) => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg">
      <div className="flex flex-col justify-between hover:scale-[1.01] ease-out transition-transform p-5 gap-y-2">
        <div className="flex flex-row gap-4 items-center mb-5">
          <IconContext.Provider value={{ color: theme === 'dark' ? '#db2777' : '' }}>
            <div>
              {education.icon}
            </div>
          </IconContext.Provider>
          <p className="text-lg font-bold">{education.title}</p>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <div>
            <FaRegCheckCircle
              color={theme === 'dark' ? 'cyan' : ''}
              fontSize={ICON_SIZE}
            />
          </div>
          <p className="text-slate-700 dark:text-gray-400">
            {education.institute}
          </p>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <div>
            <FaRegCheckCircle
              color={theme === 'dark' ? 'cyan' : ''}
              fontSize={ICON_SIZE}
            />
          </div>
          <p className="text-slate-700 dark:text-gray-400">
            {education.passingYear}
          </p>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <div>
            <FaRegCheckCircle
              color={theme === 'dark' ? 'cyan' : ''}
              fontSize={ICON_SIZE}
            />
          </div>
          <p className="text-slate-700 dark:text-gray-400">{education.gpa}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
