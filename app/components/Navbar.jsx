import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [activeSection, setActiveSection] = useState("top"); // Track active section
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => {
      // Navbar background change
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }

      // Active link highlighting
      if (scrollY === 0) {
        setActiveSection("top");
        return;
      }

      const sections = ["top", "about", "services", "work", "contact"];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is primarily in view (top is near the top of viewport)
          // Adjust 150px offset for better timing
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break; // Found the active one, stop checking
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to determine link styling
  const getLinkClass = (section) =>
    `font-Outfit ${activeSection === section ? "text-rose-600 dark:text-rose-400 font-semibold" : ""}`;


  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="header" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll
          ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme/50 dark:shadow-white/20"
          : ""
          }`}
      >
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_gokul_dark : assets.logo_gokul_white}
            className="w-28 cursor-pointer mr-14"
            alt="logo"
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll
            ? ""
            : "bg-white shadow-lg bg-opacity-50 dark:bg-opacity-50 dark:bg-[#282774]"
            }`}
        >
          <li className="hover:scale-105 duration-300">
            <a className={getLinkClass("top")} href="#top">
              Home
            </a>
          </li>
          <li className="hover:scale-105 duration-300">
            <a className={getLinkClass("about")} href="#about">
              About me
            </a>
          </li>
          <li className="hover:scale-105 duration-300">
            <a className={getLinkClass("services")} href="#services">
              Services
            </a>
          </li>
          <li className="hover:scale-105 duration-300">
            <a className={getLinkClass("work")} href="#work">
              My work
            </a>
          </li>
          <li className="hover:scale-105 duration-300">
            <a className={getLinkClass("contact")} href="#contact">
              Contact me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6"
            />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center hover:scale-105 duration-500 gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
          >
            Contact{" "}
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt="arrow"
            />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>

        {/* ----------- phone-menu ----------- */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          <li className="hover:scale-105 duration-300">
            <a className={getLinkClass("top")} href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="hover:scale-105 duration-300">
            <a className={getLinkClass("about")} href="#about" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li className="hover:scale-105 duration-300">
            <a className={getLinkClass("services")} href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li className="hover:scale-105 duration-300">
            <a className={getLinkClass("work")} href="#work" onClick={closeMenu}>
              My work
            </a>
          </li>
          <li className="hover:scale-105 duration-300">
            <a className={getLinkClass("contact")} href="#contact" onClick={closeMenu}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
