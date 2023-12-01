import { CompetitiveProgramingCardProps } from '@/types/CommonTypes';
import Link from 'next/link';
import React from 'react';

const CompetitiveProgramingCard: React.FC<{
  cp: CompetitiveProgramingCardProps;
}> = ({ cp }) => {
  return (
    <div className="flex flex-col border border-gray-300 rounded-lg shadow-lg">
      <div className="flex flex-col justify-between gap-y-1 md:gap-y-2 hover:scale-[1.01] ease-out transition-transform p-5">
        <p className="text-lg font-bold">{cp.name}</p>
        <p className="text-slate-700">{cp.topRating}</p>
        <p className="text-slate-700">{cp.participationInContest}</p>
        <p className="text-slate-700">{cp.totalSolve}</p>
        <div className="underline underline-offset-4 text-red-500 italic">
          <Link href={cp.link}>You can visit</Link>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveProgramingCard;
