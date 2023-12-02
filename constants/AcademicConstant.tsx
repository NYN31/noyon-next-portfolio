export const MY_EDUCATION = 'Education';
import Image from 'next/image';
import { LiaUniversitySolid } from 'react-icons/lia';
import { IoSchoolOutline } from 'react-icons/io5';
import { LuSchool } from 'react-icons/lu';

export const ICON_SIZE = 24;
export const academicDegrees = [
  {
    title: 'BSc in Computer Science and Engineering',
    institute: 'International Isalmic University Chittagong',
    passingYear: 'Pasing year 2021',
    gpa: 'GPA 3.60/4.00',
    icon: <LiaUniversitySolid fontSize={ICON_SIZE} />,
  },
  {
    title: 'Higher Secondary School certificate',
    institute: 'Bijoy Smarony College',
    passingYear: 'Passing year 2016',
    gpa: 'GPA 4.33/5.00',
    icon: <IoSchoolOutline fontSize={ICON_SIZE} />,
  },
  {
    title: 'Secondary School certificate',
    institute: 'Madambibir Hat Shah Jahan High School',
    passingYear: 'Passing year 2014',
    gpa: 'GPA 5.00/5.00',
    icon: <LuSchool fontSize={ICON_SIZE} />,
  },
];
