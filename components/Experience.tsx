import React from 'react';
import SectionHeading from './SectionHeading';
import { MY_EXPERIENCE, experiencesData } from '@/constants/ExperienceConstant';
import GenericCard from './cards/GenericCard';
import ExperienceCard from './cards/ExperienceCard';
const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <GenericCard>
        <SectionHeading>{MY_EXPERIENCE}</SectionHeading>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {experiencesData.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </GenericCard>
    </section>
  );
};

export default Experience;
