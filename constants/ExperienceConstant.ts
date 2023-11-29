import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FcAssistant } from "react-icons/fc";
import { SiTrainerroad } from "react-icons/si";

export const MY_EXPERIENCE = 'My experience';

export const experiencesData = [
  {
    title: 'Software Engineer @ Exabyting',
    location: 'Mohakhali DOHS, Dhaka',
    description:
      '<ul style="list-style-type:disc;"><li>Develop rest api.</li><li>Designing and making functional front-end application.</li><li>Working in Agile/Scrum development process.</li><li>Working with bKash Limited as Partner Team.</li><li>Working with internal team also.</li><li>Project estimation for delivery.</li><li>Learning clean coding, communication.</li><li>Demo presentation on demand.</li><li>Took decision by myself if required.</li></ul>',
    icon: React.createElement(CgWorkAlt),
    date: 'July 2021 - Present',
  },
  {
    title: 'Teacher Asistant @ IIUC',
    location: 'Kumira, Sitakunda, Chittagong',
    description:
      'I worked as a teacher assistant for 6 months in my university when I had been persuing my undergraduate degree on CSE.',
    icon: React.createElement(FcAssistant),
    date: 'July 2020 - Dec 2020',
  },
  {
    title: 'CP Trainer @ IIUC',
    location: 'Kumira, Sitakunda, Chittagong',
    description:
      "I worked as a Competitive programming trainer for 3 months in my university when I had been persuing my undergraduate degree on CSE.",
    icon: React.createElement(SiTrainerroad),
    date: 'Nov 2020 - Feb 2021',
  },
] as const;