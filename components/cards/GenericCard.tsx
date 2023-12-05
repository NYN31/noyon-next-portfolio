import { childrenProps } from '@/types/CommonTypes';
import React from 'react';

const GenericCard = ({ children }: childrenProps) => {
  return (
    <div className="max-w-[100%] bg-[#FFFFFF] py-5 px-3 rounded-lg border border-gray-300 dark:border-gray-700 shadow-xl shadow-black/[0.05] dark:bg-gray-900 dark:shadow-2xl">
      {children}
    </div>
  );
};

export default GenericCard;
