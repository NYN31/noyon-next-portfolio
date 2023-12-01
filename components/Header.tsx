import React from 'react';
import Link from 'next/link';
import { NAVBAR_LINKS } from '@/constants/HeaderConstants';

const Header = () => {
  return (
    <header className="z-[999] relative">
      <nav className="flex fixed items-center justify-center p-0 top-0 h-22 py-2 left-1/2 -translate-x-1/2 md:top-[1.7rem] md:h-[initial] md:py-0 bg-white border border-gray-200 shadow-lg md:rounded-full w-full md:w-[750px]">
        <ul className="flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 md:w-[initial] md:flex-nowrap md:gap-3">
          {NAVBAR_LINKS.map(link => {
            return (
              <li
                key={link.hash}
                className="flex items-center justify-center relative"
              >
                <Link
                  className="flex w-full items-center justify-center px-3 py-2 md:py-3 text-gray-950 hover:text-gray-500 transition dark:text-gray-500 dark:hover:text-gray-300"
                  href={link.hash}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
