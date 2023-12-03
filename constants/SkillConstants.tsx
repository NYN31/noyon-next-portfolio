import { FaHtml5 } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io5';
import { SiTailwindcss } from 'react-icons/si';
import { SiChakraui } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { TbBrandTypescript } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaGithub } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { FaC } from 'react-icons/fa6';
import { SiCplusplus } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { ICON_SIZE } from './CpConstant';

export const options = ['All', 'Design', 'Language', 'Framework', 'Others'];

export const allSkills = [
  {
    name: 'HTML',
    icon: <FaHtml5 color="#e34c26" fontSize={ICON_SIZE} />,
  },
  { name: 'CSS', icon: <IoLogoCss3 color="#264de4" fontSize={ICON_SIZE} /> },
  {
    name: 'Tailwind',
    icon: <SiTailwindcss color="#3490dc" fontSize={ICON_SIZE} />,
  },
  {
    name: 'Chakra UI',
    icon: <SiChakraui color="#06b6d4" fontSize={ICON_SIZE} />,
  },
  {
    name: 'JavaScript',
    icon: <IoLogoJavascript color="#F0DB4F" fontSize={ICON_SIZE} />,
  },
  {
    name: 'TypeScript',
    icon: <TbBrandTypescript color="#007acc" fontSize={ICON_SIZE} />,
  },
  { name: 'React', icon: <FaReact color="#00ffff" fontSize={ICON_SIZE} /> },
  {
    name: 'Next JS',
    icon: <TbBrandNextjs color="#78716c" fontSize={ICON_SIZE} />,
  },
  { name: 'Git', icon: <FaGithub color="gray" fontSize={ICON_SIZE} /> },
  { name: 'Redux', icon: <SiRedux color="#8b5cf6" fontSize={ICON_SIZE} /> },
  { name: 'RTK Query', icon: <SiRedux color="#8b5cf6" fontSize={ICON_SIZE} /> },
  { name: 'C', icon: <FaC color="#38bdf8" fontSize={ICON_SIZE} /> },
  { name: 'C++', icon: <SiCplusplus color="#155e75" fontSize={ICON_SIZE} /> },
  { name: 'Java', icon: <FaJava color="#e11d48" fontSize={ICON_SIZE} /> },
];

export const designSkills = [
  {
    name: 'HTML',
    icon: <FaHtml5 color="#e34c26" fontSize={ICON_SIZE} />,
  },
  { name: 'CSS', icon: <IoLogoCss3 color="#264de4" fontSize={ICON_SIZE} /> },
  {
    name: 'Tailwind',
    icon: <SiTailwindcss color="#3490dc" fontSize={ICON_SIZE} />,
  },
  {
    name: 'Chakra UI',
    icon: <SiChakraui color="#06b6d4" fontSize={ICON_SIZE} />,
  },
];

export const languateSkills = [
  {
    name: 'JavaScript',
    icon: <IoLogoJavascript color="#F0DB4F" fontSize={ICON_SIZE} />,
  },
  {
    name: 'TypeScript',
    icon: <TbBrandTypescript color="#007acc" fontSize={ICON_SIZE} />,
  },
  { name: 'C', icon: <FaC color="#38bdf8" fontSize={ICON_SIZE} /> },
  { name: 'C++', icon: <SiCplusplus color="#155e75" fontSize={ICON_SIZE} /> },
  { name: 'Java', icon: <FaJava color="#e11d48" fontSize={ICON_SIZE} /> },
];

export const frameworkSkills = [
  { name: 'React', icon: <FaReact color="#00ffff" fontSize={ICON_SIZE} /> },
  {
    name: 'Next JS',
    icon: <TbBrandNextjs color="#78716c" fontSize={ICON_SIZE} />,
  },
  { name: 'Redux', icon: <SiRedux color="#8b5cf6" fontSize={ICON_SIZE} /> },
  { name: 'RTK Query', icon: <SiRedux color="#8b5cf6" fontSize={ICON_SIZE} /> },
];

export const otherSkills = [
  { name: 'Git', icon: <FaGithub color="gray" fontSize={ICON_SIZE} /> },
];
