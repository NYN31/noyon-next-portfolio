'use client';

import Image from 'next/image';
import React from 'react';
import { IconContext } from 'react-icons';
import profile_image from '@/public/profile_pic.jpg';
import { motion } from 'framer-motion';
import { ABOUT_ME, NAME, SOCIAL_PROFILES } from '@/constants/IntroConstants';

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
    <section className="my-5">
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-3 space-y-3">
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
        <div className="justify-center mt-[rem] items-start flex relative">
          <motion.div
            className="w-20 sm:w-40"
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
              className="sm:h-42 sm:w-36 rounded border-[0.15rem] border-gray-400"
            />
          </motion.div>
        </div>
      </div>

      {getAboutMeJsx('pt-2 text-sm sm:text-lg block sm:hidden')}
    </section>
  );
};

export default Intro;
