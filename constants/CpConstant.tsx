import Image from 'next/image';
import Codechef from '@/public/onlineJudge/Codechef.png';
import Codeforces from '@/public/onlineJudge/Codeforces.svg';
import atCoder from '@/public/onlineJudge/atCoder.svg';
import lightOj from '@/public/onlineJudge/lightOj.png';
import leetcode from '@/public/onlineJudge/leetcode.svg';

export const ICON_SIZE = 24;
export const COMPETITIVE_PROGRAMING_HEADING = 'Competitive Programing';

export const competitiveProgramingDetails = [
  {
    name: 'LeetCode',
    topRating: 'Top rating 0',
    participationInContest: 'Participated in 0 contest',
    totalSolve: 'Total 200+ prblem solved',
    link: 'https://leetcode.com/NOYON31/',
    icon: <Image src={leetcode} alt="leetcode" />,
  },
  {
    name: 'Codechef',
    topRating: 'Top rating 1678',
    participationInContest: 'Participated in 15+ contests',
    totalSolve: 'Total 80+ prblem solved',
    link: 'https://www.codechef.com/users/noyon01',
    icon: (
      <Image
        src={Codechef}
        alt="codechef"
        width={ICON_SIZE}
        height={ICON_SIZE}
      />
    ),
  },
  {
    name: 'Codeforces',
    topRating: 'Top rating 1459',
    participationInContest: 'Participated in 100+ contests',
    totalSolve: 'Total 900+ prblem solved',
    link: 'https://codeforces.com/profile/NYN31',
    icon: (
      <Image
        src={Codeforces}
        alt="codeforces"
        width={ICON_SIZE}
        height={ICON_SIZE}
      />
    ),
  },
  {
    name: 'At Coder',
    topRating: 'Top rating 172',
    participationInContest: 'Participated in 10+ contest',
    totalSolve: 'Total 50+ prblem solved',
    link: 'https://atcoder.jp/users/NOYON31',
    icon: (
      <Image src={atCoder} alt="atcoder" width={ICON_SIZE} height={ICON_SIZE} />
    ),
  },
  {
    name: 'Light Oj',
    topRating: 'Top rating 0',
    participationInContest: 'Participated in 0 contest',
    totalSolve: 'Total 70+ prblem solved',
    link: 'https://lightoj.com/user/noyoncse3101',
    icon: (
      <Image src={lightOj} alt="lightoj" width={ICON_SIZE} height={ICON_SIZE} />
    ),
  },
];
