import Experience from '@/components/Experience';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import TechSkills from '@/components/TechSkills';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center ">
      <div className="mx-[0rem] space-y-20 sm:space-y-14 pt-[6rem] p-[1rem] bg-white md:rounded-lg md:pt-[6rem] md:p-[2rem] md:w-full lg:w-[950px] md:border md: border-gray-400 md:shadow-xl">
        <Intro />
        <TechSkills />
        <Experience />
        <Projects />
      </div>
    </main>
  );
}
