import CompetitivePrograming from '@/components/CompetitivePrograming';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import TechSkills from '@/components/TechSkills';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center ">
      <div className="mx-[0rem] space-y-20 sm:space-y-14 pt-[8rem] p-[1rem] bg-[#FFFFFF] md:rounded-lg md:pt-[6rem] md:p-[2rem] md:w-full lg:w-[950px] md:border md: border-gray-400 dark:border-gray-600 md:shadow-xl dark:bg-gray-900">
        <Intro />
        <TechSkills />
        <Experience />
        <Projects />
        <Education />
        <CompetitivePrograming />
      </div>
    </main>
  );
}
