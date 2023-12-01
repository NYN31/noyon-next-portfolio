import { EducationProps } from '@/types/CommonTypes';
import React from 'react';

const EducationCard: React.FC<{ education: EducationProps }> = ({
  education,
}) => {
  return (
    <div className="flex flex-col border border-gray-300 rounded-lg shadow-lg">
      <div className="flex flex-col justify-between gap-y-1 md:gap-y-2 hover:scale-[1.01] ease-out transition-transform p-5">
        <p className="text-lg font-bold">{education.title}</p>
        <p className="text-slate-700">{education.institute}</p>
        <p className="text-slate-700">{education.passingYear}</p>
        <p className="text-slate-700">{education.gpa}</p>
      </div>
    </div>
  );
};

export default EducationCard;
