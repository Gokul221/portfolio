import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { assets, infoList, toolsData } from "@/assets/assets";

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-5 sm:px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Introduction
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo tracking-wide"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-16"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.new_user_image}
            alt="user"
            className="w-full rounded-3xl mt-0 lg:-mt-32 shadow-black dark:shadow-white"
          />
        </motion.div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="mb-10 max-w-2xl -mt-2 leading-relaxed tracking-wide">
            A frontend developer with expertise in React.js and Next.js with
            good grasp of MERN stack. Experienced to work in agile,
            collaborative environments. Always on the lookout for the latest
            tech trends, because learning never stops!
          </p>

          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => {
              const isLastItem = index === infoList.length - 1;

              const handleClick = () => {
                if (isLastItem) {
                  document
                    .getElementById("work")
                    .scrollIntoView({ behavior: "smooth" });
                }
              };

              return (
                <motion.li
                  className="border border-gray-400 rounded-xl p-6 bg-lightHover duration-300 shadow-black dark:border-white dark:shadow-white dark:bg-darkHover/50"
                  whileHover={{ scale: 1.05 }}
                  key={index}
                  onClick={handleClick}
                >
                  <Image
                    src={isDarkMode ? iconDark : icon}
                    alt={title}
                    className="w-7 mt-3"
                  />
                  <h3 className="font-semibold text-gray-700 dark:text-white">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm dark:text-white/80">
                    {description}
                  </p>
                </motion.li>
              );
            })}
          </motion.ul>

          <motion.h4
            className="my-6 text-gray-700 font-Ovo dark:text-white/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            Tools I use
          </motion.h4>
          <motion.ul
            className="flex items-center justify-center gap-3 sm:gap-5 mt-10 max-w-2xl mx-auto flex-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            {toolsData.map((tool, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3 sm:gap-5 border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
