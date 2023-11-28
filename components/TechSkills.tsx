'use client';

import { skillsData } from '@/constants/SkillConstants';
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import GenericCard from './cards/GenericCard';

const TechSkills = () => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <section className="mb-28 max-w-full sm:mb-40">
      <SectionHeading>My skills</SectionHeading>
      <GenericCard>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {skillsData.map((skill, index) => (
            <motion.li
              className="bg-[#e5e7eb] border border-gray-400 rounded-xl px-4 py-2 text-[12px] sm:text-[14px] dark:bg-white/10 dark:text-white/80 cursor-pointer"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <p className="hover:scale-105 transition-all ease-out">{skill}</p>
            </motion.li>
          ))}
        </ul>
      </GenericCard>
    </section>
  );
};

export default TechSkills;
