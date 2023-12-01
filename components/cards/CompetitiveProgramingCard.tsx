import { CompetitiveProgramingCardProps } from '@/types/CommonTypes';
import Link from 'next/link';
import React from 'react';

const CompetitiveProgramingCard: React.FC<{
  cp: CompetitiveProgramingCardProps;
}> = ({ cp }) => {
  return (
    <div className="flex flex-col border border-gray-300 rounded-lg shadow-lg">
      <div className="flex flex-col justify-between gap-y-3 hover:scale-[1.01] ease-out transition-transform p-5">
        <p className="text-lg font-bold">{cp.name}</p>
        <p>{cp.topRating}</p>
        <p>{cp.participationInContest}</p>
        <p>{cp.totalSolve}</p>
        <div className="underline underline-offset-4 text-red-500 italic">
          <Link href={cp.link}>You can visit</Link>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveProgramingCard;
