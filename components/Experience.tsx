'use client';

import React from 'react';
import SectionHeading from './SectionHeading';
import { MY_EXPERIENCE, experiencesData } from '@/constants/ExperienceConstant';
import GenericCard from './cards/GenericCard';
const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>{MY_EXPERIENCE}</SectionHeading>
      <GenericCard>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {experiencesData.map((experience, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active md:px-4"
            >
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

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded border border-slate-200 shadow-lg">
                <div className="flex flex-col mb-1">
                  <div className="font-bold text-slate-900">
                    {experience.title}
                  </div>
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
          ))}
        </div>
      </GenericCard>
    </section>
  );
};

export default Experience;
