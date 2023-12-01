import { childrenProps } from '@/types/CommonTypes';
import React from 'react';

const GenericCard = ({ children }: childrenProps) => {
  return (
    <div className="max-w-[100%] bg-[#FFFFFF] py-5 px-3 rounded-lg border border-gray-300 shadow-xl  shadow-black/[0.05]">
      <div>{children}</div>
    </div>
  );
};

export default GenericCard;
