import React from 'react';
import SectionHeading from './SectionHeading';
import { MY_EXPERIENCE, experiencesData } from '@/constants/ExperienceConstant';
import GenericCard from './cards/GenericCard';
import ExperienceCard from './cards/ExperienceCard';

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-32">
      <GenericCard>
        <div className="flex flex-col gap-8">
          <SectionHeading heading={MY_EXPERIENCE} />
          <div className="space-y-2 relative before:absolute before:inset-0 before:ml-4 md:before:ml-5 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {experiencesData.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </div>
        </div>
      </GenericCard>
    </section>
  );
};

export default Experience;
