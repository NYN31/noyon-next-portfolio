import { ICON_SIZE } from '@/constants/CpConstant';
import { CompetitiveProgramingCardProps } from '@/types/CommonTypes';
import Link from 'next/link';
import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import Button from '../common/Button';

const CompetitiveProgramingCard: React.FC<{
  cp: CompetitiveProgramingCardProps;
}> = ({ cp }) => {
  return (
    <div className="flex flex-col border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg">
      <div className="flex flex-col justify-between gap-y-2 hover:scale-[1.01] ease-out transition-transform p-5">
        <div className="flex flex-row gap-4 mb-5">
          <div className="w-auto">{cp.icon}</div>
          <p className="text-lg font-bold">{cp.name}</p>
        </div>

        <div className="flex flex-row gap-4 items-center">
          <div className="w-auto">
            <FaRegCheckCircle color="#0e7490" fontSize={ICON_SIZE} />
          </div>
          <p className="text-slate-700 dark:text-gray-400">{cp.topRating}</p>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <div className="w-auto">
            <FaRegCheckCircle color="#0e7490" fontSize={ICON_SIZE} />
          </div>
          <p className="text-slate-700 dark:text-gray-400">
            {cp.participationInContest}
          </p>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <div className="w-auto">
            <FaRegCheckCircle color="#0e7490" fontSize={ICON_SIZE} />
          </div>
          <p className="text-slate-700 dark:text-gray-400">{cp.totalSolve}</p>
        </div>

        <Link href={cp.link} target="_blank" className="mt-2">
          <Button content={'Click me!'} />
        </Link>
      </div>
    </div>
  );
};

export default CompetitiveProgramingCard;
