import { EducationProps } from '@/types/CommonTypes';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import React from 'react';
import { ICON_SIZE } from '@/constants/AcademicConstant';

const EducationCard: React.FC<{ education: EducationProps }> = ({
  education,
}) => {
  return (
    <div className="flex flex-col border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg">
      <div className="flex flex-col justify-between hover:scale-[1.01] ease-out transition-transform p-5 gap-y-2">
        <div className="flex flex-row gap-4 items-center mb-5">
          <div>{education.icon}</div>
          <p className="text-lg font-bold">{education.title}</p>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <div>
            <IoIosCheckmarkCircle fontSize={ICON_SIZE} />
          </div>
          <p className="text-slate-700 dark:text-gray-400">
            {education.institute}
          </p>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <div>
            <IoIosCheckmarkCircle fontSize={ICON_SIZE} />
          </div>
          <p className="text-slate-700 dark:text-gray-400">
            {education.passingYear}
          </p>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <div>
            <IoIosCheckmarkCircle fontSize={ICON_SIZE} />
          </div>
          <p className="text-slate-700 dark:text-gray-400">{education.gpa}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
