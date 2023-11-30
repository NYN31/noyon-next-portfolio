import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaStackOverflow } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
// import { CiSun } from "react-icons/ci";
// import { FaMoon } from "react-icons/fa";

export const NAME = 'Md Sajjad Hosen Noyon';

export const ABOUT_ME =
  '<p>Hello, I am passionate <em><b>software engineer and problem solver</b></em>. I am currently working at <em><b>@Exabyting</b></em> as Software Engineer with <em><b>2 years</b></em> of professional experience.</p>';

export const ICON_SIZE = 22;

export const SOCIAL_PROFILES = [
  {
    link: 'https://twitter.com/noyon310197',
    title: 'Twitter',
    icon: <FaTwitter size={ICON_SIZE} />,
    color: '#1DA1F2',
  },
  {
    link: 'https://github.com/NYN31',
    title: 'Github',
    icon: <FaGithub size={ICON_SIZE} />,
    color: '#2B3137',
  },
  {
    link: 'https://www.linkedin.com/in/noyon31/',
    title: 'LinkedIn',
    icon: <FaLinkedin size={ICON_SIZE} />,
    color: '#0077B5',
  },
  {
    link: 'https://stackoverflow.com/users/19215771/md-sajjad-hosen-noyon',
    title: 'Stackoverflow',
    icon: <FaStackOverflow size={ICON_SIZE} />,
    color: '#EF8236',
  },
  {
    link: 'mailto:noyoncse3101@gmail.com',
    title: 'Gmail',
    icon: <IoIosMail size={ICON_SIZE} />,
    color: '#D44638',
  },
];
