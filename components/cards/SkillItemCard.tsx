import { childrenProps } from '@/types/CommonTypes';
import React from 'react';

const SkillItemCard = ({ children }: childrenProps) => {
  return (
    <div className="max-w-[100%] bg-[#FFFFFF] py-2 px-4 text-sm rounded-lg border border-gray-200 shadow-lg shadow-black/[0.03]">
      <div>{children}</div>
    </div>
  );
};

export default SkillItemCard;
