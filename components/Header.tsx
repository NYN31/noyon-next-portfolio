'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { NAVBAR_LINKS } from '@/constants/HeaderConstants';

const Header = () => {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-gray-300 border-opacity-40 bg-[#FFFFFF] bg-opacity-100 shadow-xl shadow-black/[0.06] md:top-6 md:h-[3.25rem] md:w-[720px] md:rounded-full"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed p-0 top-[0.15rem] h-12 py-2 left-1/2 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 md:top-[1.7rem] md:h-[initial] md:py-0">
        <ul className="flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 md:w-[initial] md:flex-nowrap md:gap-5">
          {NAVBAR_LINKS.map(link => {
            return (
              <motion.li
                key={link.hash}
                className="h-3/4 flex items-center justify-center relative"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className="flex w-full items-center justify-center px-3 py-3 text-gray-950 hover:text-gray-500 transition dark:text-gray-500 dark:hover:text-gray-300"
                  href={link.hash}
                >
                  {link.name}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
