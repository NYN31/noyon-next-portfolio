'use client';

import Image from 'next/image';
import React from 'react';
import { IconContext } from 'react-icons';
import profile_image from '@/public/profile_pic.jpg';
import { motion } from 'framer-motion';
import { ABOUT_ME, NAME, SOCIAL_PROFILES } from '@/constants/IntroConstants';
import SectionHeading from './SectionHeading';
import GenericCard from './cards/GenericCard';

const Intro = () => {
  const getAboutMeJsx = (style: string) => {
    return (
      <motion.p
        className={style}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: ABOUT_ME }} />
      </motion.p>
    );
  };

  return (
    <section id="intro" className="scroll-mt-28">
      <SectionHeading>Intro</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="col-span-4 md:col-span-3 space-y-3 flex flex-col items-center md:items-start order-2 md:order-1">
          <div className="flex justify-between text-lg md:text-2xl font-medium">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {NAME}
            </motion.h1>
          </div>

          <motion.div
            className="flex space-x-6 items-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            {SOCIAL_PROFILES.map(link => {
              return (
                <IconContext.Provider
                  key={link.title}
                  value={{ color: link.color }}
                >
                  <a
                    href={link.link}
                    target="_blank"
                    className="hover:scale-110 transition-all ease-out size-100"
                  >
                    {link.icon}
                  </a>
                </IconContext.Provider>
              );
            })}
          </motion.div>

          {getAboutMeJsx('text-lg sm:text-base hidden sm:block')}
        </div>

        <div className="flex justify-center items-center relative translate-x-7 order-1 md:order-2">
          <motion.div
            className="w-40 sm:w-40 px-2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src={profile_image}
              alt="Profile Picture"
              className="h-full w-full rounded-[50%] sm:rounded border-[0.15rem] border-gray-400"
            />
          </motion.div>
        </div>
      </div>
      <div className="sm:hidden">
        <GenericCard>
          {getAboutMeJsx('pt-2 text-sm sm:text-lg block sm:hidden')}
        </GenericCard>
      </div>
    </section>
  );
};

export default Intro;
