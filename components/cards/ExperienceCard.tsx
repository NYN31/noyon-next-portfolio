import { ExperienceProps } from '@/types/CommonTypes';
import React from 'react';

const ExperienceCard: React.FC<{ experience: ExperienceProps }> = ({
  experience,
}) => {
  return (
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active md:px-4">
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-1 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="10"
        >
          <path
            fill-rule="nonzero"
            d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
          />
        </svg>
      </div>

      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-lg border border-slate-200 shadow-lg">
        <div className="flex flex-col mb-1">
          <div className="font-bold text-slate-900">{experience.title}</div>
          <time className="font-caveat font-extrabold text-xs text-gray-500">
            {experience.location}
          </time>
          <time className="font-caveat font-medium text-gray-900">
            {experience.date}
          </time>
        </div>
        <div
          className="text-slate-500"
          dangerouslySetInnerHTML={{ __html: experience.description }}
        ></div>
      </div>
    </div>
  );
};

export default ExperienceCard;
