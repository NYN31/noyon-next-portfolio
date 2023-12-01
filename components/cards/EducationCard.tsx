import { EducationProps } from '@/types/CommonTypes';
import React from 'react';

const EducationCard: React.FC<{ education: EducationProps }> = ({
  education,
}) => {
  return (
    <div className="flex flex-col border border-gray-300 rounded-lg shadow-lg">
      <div className="flex flex-col justify-between gap-y-3 hover:scale-[1.01] ease-out transition-transform p-5">
        <p className="text-lg font-bold">{education.title}</p>
        <p>{education.institute}</p>
        <p>{education.passingYear}</p>
        <p>{education.gpa}</p>
      </div>
    </div>
  );
};

export default EducationCard;
