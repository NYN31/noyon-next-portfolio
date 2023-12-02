import { FaHtml5 } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io5';
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";


import { ICON_SIZE } from './CpConstant';

export const skillsData = [
  {
    name: 'HTML',
    icon: <FaHtml5 color="#e34c26" fontSize={ICON_SIZE} />,
  },
  { name: 'CSS', icon: <IoLogoCss3 color="#264de4" fontSize={ICON_SIZE} /> },
  { name: 'Tailwind', icon: <SiTailwindcss color="#3490dc" fontSize={ICON_SIZE} /> },
  { name: 'JavaScript', icon: <IoLogoJavascript color="#F0DB4F" fontSize={ICON_SIZE} /> },
  { name: 'TypeScript', icon: <TbBrandTypescript color="#007acc" fontSize={ICON_SIZE} /> },
  { name: 'React', icon: <FaReact color="#00ffff" fontSize={ICON_SIZE} /> },
];

// 'HTML',
// 'CSS',
// 'Tailwind',
// 'Chakra UI',
// 'JavaScript',
// 'TypeScript',
// 'React',
// 'Next.js',
// 'Git',
// 'Redux',
// 'RTK Query',
// 'Framer Motion',
