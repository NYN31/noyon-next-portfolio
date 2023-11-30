import { skillsData } from '@/constants/SkillConstants';
import React from 'react';
import SectionHeading from './SectionHeading';
import GenericCard from './cards/GenericCard';
import SkillItemCard from './cards/SkillItemCard';

const TechSkills = () => {
  return (
    <section id="skills" className="mb-28 sm:mb-40 scroll-mt-28">
      <SectionHeading>My skills</SectionHeading>
      <GenericCard>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {skillsData.map((skill, index) => (
            <SkillItemCard key={index}>
              <p className="hover:scale-105 transition-all ease-out">{skill}</p>
            </SkillItemCard>
          ))}
        </ul>
      </GenericCard>
    </section>
  );
};

export default TechSkills;
