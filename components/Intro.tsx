'use client';

import Image from 'next/image';
import React from 'react';
import profile_image from '@/public/profile_pic.jpg';
import { ABOUT_ME, NAME, SOCIAL_PROFILES } from '@/constants/IntroConstants';
import SectionHeading from './SectionHeading';
import GenericCard from './cards/GenericCard';
import { useSectionInView } from '@/hooks/useSectionInView';

const Intro = () => {
  const { ref } = useSectionInView('Intro');

  const getAboutMeJsx = (style: string) => {
    return (
      <div className={style}>
        <div dangerouslySetInnerHTML={{ __html: ABOUT_ME }} />
      </div>
    );
  };

  const getNameJsx = () => {
    return (
      <div className="flex justify-between text-lg md:text-2xl font-medium">
        <h1>{NAME}</h1>
      </div>
    );
  };

  const getSocialMediaIconJsx = () => {
    return (
      <div className="flex space-x-6 items-center">
        {SOCIAL_PROFILES.map(link => {
          return (
            <a
              key={link.title}
              href={link.link}
              area-aria-level={link.title}
              target="_blank"
              className="hover:scale-110 transition-all ease-out size-100"
            >
              {link.icon}
            </a>
          );
        })}
      </div>
    );
  };

  const getProfileImageJsx = () => {
    return (
      <div className="w-40 sm:w-40 px-2">
        <Image
          src={profile_image}
          alt="Profile Picture"
          className="h-full w-full rounded-[50%] md:rounded border-[0.15rem] border-gray-400"
        />
      </div>
    );
  };

  return (
    <section ref={ref} id="intro" className="scroll-mt-32">
      <GenericCard>
        <div className="flex flex-col gap-8">
          <SectionHeading>Intro</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="col-span-4 md:col-span-3 gap-3 flex flex-col items-center md:items-start order-2 md:order-1">
              {getNameJsx()}

              {getSocialMediaIconJsx()}

              {getAboutMeJsx(
                'text-lg sm:text-base text-slate-700 hidden md:block dark:text-gray-400 text-justify	'
              )}
            </div>

            <div className="flex justify-center items-center relative translate-x-7 md:translate-x-0 order-1 md:order-2">
              {getProfileImageJsx()}
            </div>
          </div>
          <div className="md:hidden">
            <GenericCard>
              {getAboutMeJsx(
                'pt-2 text-sm sm:text-md block md:hidden text-justify'
              )}
            </GenericCard>
          </div>
        </div>
      </GenericCard>
    </section>
  );
};

export default Intro;
