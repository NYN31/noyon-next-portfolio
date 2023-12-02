import { EducationProps } from '@/types/CommonTypes';
import React from 'react';

const EducationCard: React.FC<{ education: EducationProps }> = ({
  education,
}) => {
  return (
    <div className="flex flex-col border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg">
      <div className="flex flex-col justify-between hover:scale-[1.01] ease-out transition-transform p-5">
        <p className="text-lg font-bold">{education.title}</p>
        <p className="text-slate-700 dark:text-gray-400 pt-5">{education.institute}</p>
        <p className="text-slate-700 dark:text-gray-400">{education.passingYear}</p>
        <p className="text-slate-700 dark:text-gray-400">{education.gpa}</p>
      </div>
    </div>
  );
};

export default EducationCard;
