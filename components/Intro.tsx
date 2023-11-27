"use client";

import Image from "next/image";
import React from "react";
import { IconContext } from "react-icons";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import profile_image from "@/public/profile_pic.jpg";
import { motion } from "framer-motion";

const ICON_SIZE = 22;

const aboutMe =
  "Hello, I am passionate software software engineer and problem solver. I am currently working at @Exabyting as Software Engineer";

const profile_links = [
  {
    link: "https://twitter.com/noyon310197",
    title: "Twitter",
    icon: <FaTwitter size={ICON_SIZE} />,
    color: "#1DA1F2",
  },
  {
    link: "https://github.com/NYN31",
    title: "Github",
    icon: <FaGithub size={ICON_SIZE} />,
    color: "#2b3137",
  },
  {
    link: "https://www.linkedin.com/in/noyon31/",
    title: "LinkedIn",
    icon: <FaLinkedin size={ICON_SIZE} />,
    color: "#0077b5",
  },
  {
    link: "https://stackoverflow.com/users/19215771/md-sajjad-hosen-noyon",
    title: "Stackoverflow",
    icon: <FaStackOverflow size={ICON_SIZE} />,
    color: "#EF8236",
  },
  {
    link: "mailto:noyoncse3101@gmail.com",
    title: "Gmail",
    icon: <IoIosMail size={ICON_SIZE} />,
    color: "#d44638",
  },
];

const Intro = () => {
  return (
    <section className="my-5">
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2 space-y-3">
          <div className="flex justify-between text-lg md:text-2xl font-medium">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Md Sajjad Hosen Noyon
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
            {profile_links.map((link) => {
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

          <motion.p
            className="text-sm sm:text-base hidden sm:block"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            {aboutMe}
          </motion.p>
        </div>
        <div className="justify-center mt-[-1rem] items-start flex relative">
          <motion.div
            className="w-30 md:w-40"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profile_image}
              alt="Profile Picture"
              className="h-42 w-36 rounded border-[0.15rem] border-gray-400"
            />
          </motion.div>
        </div>
      </div>
      <motion.p
        className="pt-2 text-sm sm:text-lg block sm:hidden"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {aboutMe}
      </motion.p>
    </section>
  );
};

export default Intro;
