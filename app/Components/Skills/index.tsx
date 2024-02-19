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

      <div className=" h-screen grid grid-cols-2 place-items-center  sm:grid-cols-3 gap-8 max-h-60 xl:flex justify-around mx-10">
        <span><FaHtml5 size={50} />Html</span>
        <span><FaCss3 size={50} />css</span>
        <span><IoLogoJavascript size={50} />JavaScript</span>
        <span><SiTailwindcss size={50} />Tailwind</span>
        <span><FaBootstrap size={50} />Bootstrap </span>
        <span><FaReact size={50} />React</span>
        <span><SiNextdotjs size={50} />Next</span>
        <span><SiTypescript size={50} />Typescript</span>
        <span> <FaNodeJs size={50} />Node</span>
        <span> <FaGitAlt size={50} />Git</span>
        <span> <FaGithub size={50} />GitHub</span>
      </div>
    </div>
  );
}
