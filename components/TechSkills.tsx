import { skillsData } from '@/constants/SkillConstants';
import React from 'react';
import SectionHeading from './SectionHeading';
import GenericCard from './cards/GenericCard';
import SkillItemCard from './cards/SkillItemCard';

const TechSkills = () => {
  return (
    <section id="skills" className="scroll-mt-32">
      <GenericCard>
        <SectionHeading>My skills</SectionHeading>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {skillsData.map((skill, index) => (
            <SkillItemCard key={index} skill={skill} />
          ))}
        </ul>
      </GenericCard>
    </section>
  );
};

export default TechSkills;
