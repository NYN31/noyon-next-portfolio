import { ExperienceProps } from '@/types/CommonTypes';
import { IoLocationOutline } from 'react-icons/io5';
import React from 'react';
import { useTheme } from '@/context/theme-context';

const ExperienceCard: React.FC<{ experience: ExperienceProps }> = ({
  experience,
}) => {
  const { theme } = useTheme();
  return (
    <div className="relative flex items-center justify-between group is-active">
      <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border border-white dark:border-gray-700 bg-slate-300 group-[.is-active]:bg-emerald-500 dark:group-[.is-active]:bg-[#65a30d] group-[.is-active]:text-emerald-50 shadow shrink-1">
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

      <div className="w-[calc(100%-2.3rem)] sm:w-[calc(100%-3rem)] md:w-[calc(100%-4rem)] bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-300 dark:border-gray-700 shadow-lg space-y-5">
        <div className="flex flex-col space-y-1">
          <div className="font-bold text-slate-900 dark:text-slate-50">
            {experience.title}
          </div>
          <div className="flex flex-row gap-3 items-center">
            <div className="bg-gray-300 p-1 rounded-full">
              <IoLocationOutline color={theme === 'dark' ? '#be123c' : ''} />
            </div>
            <time className="font-caveat font-extrabold text-xs text-gray-500 dark:text-gray-400">
              {experience.location}
            </time>
          </div>
          <time className="font-caveat font-medium text-gray-900 dark:text-gray-100">
            {experience.date}
          </time>
        </div>
        <div
          className="text-slate-700 dark:text-gray-400 text-justify	"
          dangerouslySetInnerHTML={{ __html: experience.description }}
        ></div>
      </div>
    </div>
  );
};

export default ExperienceCard;
