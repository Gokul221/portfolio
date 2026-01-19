import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="relative mt-20">
      <Image
        src="/l3.svg"
        alt="Background"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "144%", objectFit: "cover", objectPosition: "bottom" }}
        className="opacity-50 dark:opacity-60 absolute top-0 left-0"
      />

      <div className="relative z-10 text-center">
        <Image
          src={isDarkMode ? assets.logo_gokul_dark : assets.logo_gokul_white}
          alt="logo"
          className="w-36 flex mx-auto mb-2"
        />
        <div className="flex w-max items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="logo"
            className="w-6"
          />
          gokulb0702@gmail.com
        </div>
      </div>
      <div className="relative z-10 text-center flex flex-col sm:flex-row sm:items-center sm:justify-between md:flex-col lg:flex-row lg:items-center lg:justify-between border-gray-400 mx-[10%] transform translate-y-16 py-10">
        <p className="sm:order-1">&copy; 2025 Gokul Bhoi. All rights reserved.</p>
        <ul className="flex flex-col sm:flex-row items-center gap-2 sm:gap-10 justify-center mt-4 sm:mt-0 md:mt-4 lg:mt-0 sm:order-2">
          <li className="hover:scale-105 lg:hover:text-white duration-500">
            <a target="_blank" href="https://www.github.com/Gokul221">
              GitHub
            </a>
          </li>
          <li className="hover:scale-105 lg:hover:text-white duration-500">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/gokul-bhoi-3b8b39188"
            >
              LinkedIn
            </a>
          </li>
          <li className="hover:scale-105 lg:hover:text-white duration-500">
            <a target="_blank" href="https://www.instagram.com/gokulbhoi_">
              Instagram
            </a>
          </li>
          <li className="hover:scale-105 lg:hover:text-white duration-500">
            <a
              target="_blank"
              href="https://www.hackerrank.com/profile/gokulbhoi"
            >
              HackerRank
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
