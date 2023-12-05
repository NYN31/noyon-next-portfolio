'use client';

import { MY_EDUCATION, academicDegrees } from '@/constants/AcademicConstant';
import SectionHeading from './SectionHeading';
import GenericCard from './cards/GenericCard';
import EducationCard from './cards/EducationCard';
import { useSectionInView } from '@/hooks/useSectionInView';

const Education = () => {
  const { ref } = useSectionInView('Education');

  return (
    <section ref={ref} id="education" className="scroll-mt-32 ">
      <GenericCard>
        <div className="flex flex-col gap-8">
          <SectionHeading>{MY_EDUCATION}</SectionHeading>
          <div className="grid grid-cols-1 gap-2">
            {academicDegrees.map((education, index) => (
              <EducationCard key={index} education={education} />
            ))}
          </div>
        </div>
      </GenericCard>
    </section>
  );
};

export default Education;
