import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { assets } from "@/assets/assets";

const Header = () => {
  return (
    <div id="top" className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      {/* <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "keyframes", stiffness: 100 }}
        className="absolute md:h-[100vh] inset-0 z-0 dark:opacity-60"
      > */}
      <Image
        scale={1}
        src="/mainL.png"
        alt="Background"
        fill
        style={{ objectFit: "cover" }}
        className="hidden dark:block"
      />
      {/* </motion.div> */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="relative z-10"
      >
        <Image src={assets.prof_image} alt="" className="rounded-full w-32 border-2 border-gray-300 dark:border-gray-400" />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-10 flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi there! I'm Gokul Bhoi
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 text-2xl sm:text-6xl lg:text-[66px] font-Ovo tracking-wide bg-gradient-to-r from-rose-600 to-indigo-600 bg-clip-text text-transparent"
      >
        A Frontend Developer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative z-10 max-w-2xl mx-auto mt-4"
      >
        Bridging design and development to craft delightful web experiences—one
        component at a time!
      </motion.p>
      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            href="#contact"
            className="px-10 py-3 rounded-full dark:border dark:border-white bg-black/80 hover:bg-black duration-100 text-white flex items-center gap-2 dark:bg-transparent"
          >
            contact me
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </motion.a>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            href="/GokulBhoi_FrontendDeveloper_resume.pdf"
            download
            className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
          >
            my resume
            <Image src={assets.download_icon} alt="" className="w-4" />
          </motion.a>
        </motion.button>
      </div>
    </div>
  );
};

export default Header;
