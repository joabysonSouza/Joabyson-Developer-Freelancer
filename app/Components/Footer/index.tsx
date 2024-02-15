"use client";
import Link from "next/link";
import React from "react";
import { Link as LinkScroll } from "react-scroll";

export default function Footer() {
  return (
    <footer className="w-screen h-screen bg-slate-200 text-black md:h-full">
      <div className="w-full p-6 m-10 border-b-4 border-b-rose-600 border-solid">
        <h1 className="text-4xl">Joabyson Souza</h1>
        <span className="text-4xl">Freelancer developer</span>
      </div>

      <section className="w-full  flex justify-around">
        <nav>
          <h3 className="text-red-700 text-4xl mb-5 ">Menu</h3>
          <ul className="text-2xl w-full flex flex-col  gap-4 cursor-pointer font-bold">
            <li>
              <LinkScroll to="Header" smooth={true} duration={1500}>
                Home
              </LinkScroll>
            </li>
            <li>
              <LinkScroll to="About" smooth={true} duration={1500}>
                Quem sou eu
              </LinkScroll>
            </li>
            <li>
              <LinkScroll to="WhatDoIdo" smooth={true} duration={2000}>
                O que eu faço
              </LinkScroll>
            </li>
          </ul>
        </nav>

        <nav>
          <h3 className="text-red-700 text-4xl mb-5 ">Contatos</h3>
          <ul className="text-2xl w-full flex flex-col gap-4 font-bold">
            <li>
              <Link
                href="https://www.linkedin.com/in/joabysonsouza/"
                target="blank"
              >
                Linkedin
              </Link>
            </li>
            <li>
              <Link href="mailto:joabyson916@gmail.com" target="blank">
                E-mail{" "}
              </Link>
            </li>
            <li>
              <Link
                href="https://api.whatsapp.com/send?phone=75982318123"
                target="blank"
              >
                WhatsApp{" "}
              </Link>
            </li>
          </ul>  
          
        </nav> 
      </section>
      <div className="h-56 w-full flex justify-start items-center"><span className= "text-black text-2xl m-5 mb-10 md:m-5">Copyright &copy; 2024 Joabyson Souza  </span></div>
   
    </footer>
  );
}
