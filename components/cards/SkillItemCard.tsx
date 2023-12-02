import React from 'react';

interface TechSkills {
  name: string;
  icon: JSX.Element;
}
const SkillItemCard: React.FC<{ skill: TechSkills }> = ({ skill }) => {
  return (
    <div className="flex flex-row items-center gap-3 pr-3 max-w-[100%] text-sm font-medium hover:font-bold rounded-lg border border-gray-300 dark:border-gray-600 shadow-lg shadow-black/[0.03]">
      <div className="bg-[#F6F6F6] dark:bg-gray-900 py-2 border dark:border-y-0 dark:border-s-0 border-e-gray-300 dark:border-e-gray-600 rounded-r-none rounded-s-lg px-2">
        {skill.icon}
      </div>
      <p className="py-2 hover:scale-102 transition-all ease-out text-slate-700 dark:text-gray-300 font-base">
        {skill.name}
      </p>
    </div>
  );
};

export default SkillItemCard;
