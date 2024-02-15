import React from "react";
import {
  FaCss3,
  FaHtml5,
  FaBootstrap,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript,SiNextdotjs } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5"

export default function Skills() {
  return (
    <div className=" w-screen h-screen mb-48 md:h-96">
      <div className="w-full text-4xl flex justify-center">
        <h1 className="text-red-600 p-9 mb-7 border-solid border-b-4 border-b-white ">Minhas Skills</h1>
      </div>

      <div className=" h-screen grid grid-cols-3 place-items-center md:flex justify-center gap-8 max-h-60 ">
        <span><FaHtml5 size={60} />Html</span>
        <span><FaCss3 size={60} />css</span>
        <span><IoLogoJavascript size={60} />JavaScript</span>
        <span><SiTailwindcss size={60} />Tailwind</span>
        <span><FaBootstrap size={60} />Bootstrap </span>
        <span><FaReact size={60} />React</span>
        <span><SiNextdotjs size={60} />Next</span>
        <span><SiTypescript size={60} />Typescript</span>
        <span> <FaNodeJs size={60} />Node</span>
        <span> <FaGitAlt size={60} />Git</span>
        <span> <FaGithub size={60} />GitHub</span>
      </div>
    </div>
  );
}
