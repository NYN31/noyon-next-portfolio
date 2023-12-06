'use client';

import React from 'react';
import Link from 'next/link';
import { NAVBAR_LINKS } from '@/constants/HeaderConstants';
import { motion } from 'framer-motion';
import { useActiveSectionContext } from '@/context/active-section-context';
import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useTheme } from '@/context/theme-context';

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="z-[999] relative">
      <nav className="flex fixed items-center justify-center p-0 top-0 h-22 py-2 left-1/2 -translate-x-1/2 md:top-[1.7rem] md:h-[initial] md:py-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 shadow-lg md:rounded-full w-full md:w-[750px]">
        <ul className="flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-900 md:w-[initial] md:flex-nowrap md:gap-3">
          {NAVBAR_LINKS.map(link => {
            return (
              <li
                key={link.hash}
                className="flex items-center justify-center relative"
              >
                <Link
                  className={`flex w-full items-center justify-center px-3 py-2 md:py-3 font-semibold hover:text-gray-500 transition dark:text-gray-300 dark:hover:text-gray-500 ${
                    activeSection == link.name
                      ? 'text-gray-900'
                      : 'dark:text-gray-300'
                  }`}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}

                  {link.name === activeSection && (
                    <motion.span
                      className="my-1 md:my-2.5 bg-gray-200 dark:bg-gray-900 rounded-full absolute inset-0 -z-10"
                      layoutId="activeSection"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </li>
            );
          })}
          <button
            name="icon"
            className="ml-4 rounded-full border-opacity-40 flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
            onClick={toggleTheme}
          >
            <IconContext.Provider
              value={{ color: theme === 'light' ? 'gray.900' : 'yellow' }}
            >
              {theme === 'light' ? (
                <FaMoon fontSize="20px" />
              ) : (
                <FaSun fontSize="22px" />
              )}
            </IconContext.Provider>
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
