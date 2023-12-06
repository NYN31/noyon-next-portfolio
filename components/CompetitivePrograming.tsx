import React from 'react';
import SectionHeading from './SectionHeading';
import GenericCard from './cards/GenericCard';
import {
  COMPETITIVE_PROGRAMING_HEADING,
  competitiveProgramingDetails,
} from '@/constants/CpConstant';
import CompetitiveProgramingCard from './cards/CompetitiveProgramingCard';

const CompetitivePrograming = () => {
  return (
    <section id="cp" className="scroll-mt-32">
      <GenericCard>
        <div className="flex flex-col gap-8">
          <SectionHeading heading={COMPETITIVE_PROGRAMING_HEADING} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {competitiveProgramingDetails.map((cp, index) => (
              <CompetitiveProgramingCard key={index} cp={cp} />
            ))}
          </div>
        </div>
      </GenericCard>
    </section>
  );
};

export default CompetitivePrograming;
