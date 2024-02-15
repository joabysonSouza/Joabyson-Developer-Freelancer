"use client";
import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";
import styles from "./Header.module.css";
import Link from "next/link";
import { Link as LinkScroll, Element } from "react-scroll";
import Aos from "aos";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Element name="Header">
      <header className="text-white text-xl h-52 w-full">
        <nav className=" flex mx-5 pt-5 ">
          <div
            className="bg-white w-10 h-10 p-4  mr-5  rounded-full flex items-center justify-center 
        hover:scale-110 transform transition duration-300 sm:w-16 sm:h-16"
          >
            <Link
              href="https://www.linkedin.com/in/joabysonsouza/"
              target="_blank"
            >
              <FaLinkedin color="black" size={35} />
            </Link>
          </div>

          <div
            className="bg-white w-10 h-10  p-3  mr-5 cursor-pointer rounded-full flex items-center justify-center
        hover:scale-110 transform transition duration-300 sm:w-16 sm:h-16"
          >
            <Link href="https://github.com/joabysonSouza" target="_blank">
              <FaGithub color="black" size={35} />
            </Link>
          </div>

          <div className="bg-white w-10 h-10 p-3 mr-5 cursor-pointer  rounded-full flex items-center justify-center hover:scale-110 transform transition duration-300 sm:w-16 sm:h-16">
            <Link
              href="mailto:joabyson916@gmail.com?subject=Olá gostatia de um orçamento"
              target="blank"
            >
              <MdEmail color="black" size={35} />
            </Link>
          </div>

          <div className="bg-white w-10 h-10 p-3 mr-8 cursor-pointer  rounded-full flex items-center justify-center hover:scale-110 transform transition duration-300 sm:w-16 sm:h-16">
            <Link
              href="https://api.whatsapp.com/send?phone=75982318123"
              target="_blank"
            >
              <BsFillTelephoneFill color="black" size={35} />
            </Link>
          </div>

          <div
            onClick={() => {
              showMenu;
            }}
            className={`${styles.Menu} ${showMenu ? styles.menuIcon : ""}`}
          >
            <ul className="w-full flex flex-col gap-4 md:flex-row justify-around ">
              <li className="hover:text-red-600 cursor-pointer transition-all duration-300 text-xl xl:text-4xl mx-2 ">
                Home
              </li>

              <LinkScroll smooth={true} to="WhatDoIdo" duration={1500}>
                <li className="hover:text-red-600 cursor-pointer text-xl xl:text-4xl mx-2 ">
                  O que faço
                </li>
              </LinkScroll>

              <LinkScroll smooth={true} to="About" duration={1500}>
                <li className="hover:text-red-600 cursor-pointer text-xl xl:text-4xl">
                  Quem sou eu
                </li>
              </LinkScroll>
            </ul>
          </div>

          <div>
            <CiMenuBurger className={styles.menuIcon} onClick={toggleMenu} />
          </div>
        </nav>
      </header>
    </Element>
  );
}
