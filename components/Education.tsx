import { MY_EDUCATION, academicDegrees } from '@/constants/AcademicConstant';
import SectionHeading from './SectionHeading';
import GenericCard from './cards/GenericCard';
import EducationCard from './cards/EducationCard';

const Education = () => {
  return (
    <section id="education" className="scroll-mt-32 ">
      <GenericCard>
        <SectionHeading>{MY_EDUCATION}</SectionHeading>
        <div className="grid grid-cols-1 space-y-3">
          {academicDegrees.map((education, index) => (
            <EducationCard key={index} education={education} />
          ))}
        </div>
      </GenericCard>
    </section>
  );
};

export default Education;
