'use client';

import {
  options,
  allSkills,
  designSkills,
  languateSkills,
  frameworkSkills,
  otherSkills,
} from '@/constants/SkillConstants';
import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import GenericCard from './cards/GenericCard';
import SkillItemCard from './cards/SkillItemCard';

const TechSkills = () => {
  const [skills, setSkills] = useState(allSkills);
  const [current, setCurrent] = useState('All');

  const changeSkillshandler = (option: string) => {
    setCurrent(option);
    switch (option) {
      case 'All':
        setSkills(allSkills);
        break;
      case 'Design':
        setSkills(designSkills);
        break;
      case 'Language':
        setSkills(languateSkills);
        break;
      case 'Framework':
        setSkills(frameworkSkills);
        break;
      case 'Others':
        setSkills(otherSkills);
        break;
    }
  };
  return (
    <section id="skills" className="scroll-mt-32">
      <GenericCard>
        <div className="flex flex-col gap-8">
          <SectionHeading>My skills</SectionHeading>
          <div className="flex flex-row items-center justify-center my-5 rounded-es-full w-auto">
            {options.map((option, index) => (
              <div
                key={index}
                className={`px-1 sm:px-3 py-1 cursor-pointer ${
                  index === 0 && 'rounded-s-full'
                } ${
                  index === options.length - 1 && 'rounded-e-full'
                } border border-gray-400 dark:border-gray-700 ${
                  current === option ? 'bg-gray-200' : ''
                } ${
                  current === option ? 'dark:bg-gray-700' : 'dark:bg-gray-800'
                } text-sm`}
                onClick={() => changeSkillshandler(option)}
              >
                {option}
              </div>
            ))}
          </div>
          <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {skills.map((skill, index) => (
              <SkillItemCard key={index} skill={skill} />
            ))}
          </ul>
        </div>
      </GenericCard>
    </section>
  );
};

export default TechSkills;
