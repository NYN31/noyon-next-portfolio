import React from 'react';

const SkillItemCard: React.FC<{ skill: string }> = ({ skill }) => {
  return (
    <div className="max-w-[100%] bg-slate-700 py-2 px-4 text-sm font-medium hover:font-bold rounded-lg border border-gray-300 shadow-lg shadow-black/[0.03]">
      <p className="hover:scale-102 transition-all ease-out text-white font-base">{skill}</p>
    </div>
  );
};

export default SkillItemCard;
