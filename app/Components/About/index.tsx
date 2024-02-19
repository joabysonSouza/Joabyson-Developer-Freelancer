"use client";

import Wallpaper from "../../Images/Wallpaper.jpg";
import Image from "next/image";
import "aos/dist/aos.css";
import { Element } from "react-scroll";
import perfil from "../../Images/IMG_20230612_205841_020.jpg";

export default function About() {
  return (
    <Element name="About">
      <div className="w-screen min-h-screen  mb-40 bg-gradient-to-r  to-zinc-800 md:mb-20 ">
        <div className="w-full flex justify-center">
          <h1 className="text-4xl mt-20 p-4 text-red-500 font-semibold border-b-4 border-solid border-t-cyan-50">
            Sobre mim
          </h1>
        </div>

        <div className="w-full h-full mt-20 flex  ml-0  justify-start items-center xl:flex-row sm:justify-center flex-col ">
          <Image
            src={perfil}
            alt="foto perfil"
            className="w-56 ml-7 rounded-full h-56 sm:w-2/4 sm:h-2/4 xl:w-1/4 xl:h-1/4   "
            data-aos="fade-right"
            data-aos-duration="3000"
          />

          <p
            className="p-7 w-full md:mb-0 sm:w-auto sm:p-10 text-2xl "
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            Meu nome é Joabyson Souza, sou desenvolvedor e analista de sistemas
            formado pela Universidade Uniasselvi. Sou um desenvolvedor
            freelancer com experiência em design web e otimização de páginas
            para uma melhor experiência do usuário. Estou comprometido em
            entregar resultados de alta qualidade que atendam às necessidades e
            expectativas dos meus clientes. Fico à disposição para discutir mais
            detalhes sobre o projeto e para responder a quaisquer dúvidas que
            possa ter. Estou ansioso para a possibilidade de trabalhar juntos e
            elevar o design e a funcionalidade da sua página web.
          </p>
        </div>

        {/* linha do tempo */}

        <div
          className=" flex flex-col w-full min-h-screen h-auto mt-0  xl:flex-row md:mt-40 "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className=" w-96 h-full flex flex-col  m-5 relative md:ml-20 ">
            <section className="flex w-96">
              <div className="w-5 h-5 bg-red-600 rounded-full absolute -left-3   "></div>
              <div className="w-2 h-40 bg-red-600 md:h-44 "></div>
              <p className="mx-5 p-2 text-xl ">
                <span className="text-red-600 font-bold text-2xl">2021</span>{" "}
                Comecando a cursa analise e desenvolvimento de sistemas na
                universidade uniasselvi
              </p>
            </section>

            <section className=" flex w-96">
              <div className="w-5 h-5 bg-red-600 rounded-full absolute -left-3  p-3 "></div>
              <div className="w-2 h-56 bg-red-600 md:h-52 "></div>
              <p className="mx-5 p-4 text-xl">
                <span className="text-red-600 font-bold text-2xl">2022</span>{" "}
                Estudando o basico da web como html css e javascript logica de
                proganação e algoritimos git e github e bibliotecas como o react
              </p>
            </section>

            <section className=" flex w-96">
              <div className="w-5 h-5 bg-red-600 rounded-full absolute -left-3  p-3 "></div>
              <div className="w-2 h-64 bg-red-600 md:h-52 "></div>
              <p className="mx-5 p-4 text-xl ">
                <span className="text-red-600 font-bold text-2xl">2023</span> Me
                aprofundando mais no de denvolvimento web com bibliotecas e
                frameworks,como o Next.js com typescript, consumindo apis e
                estudando o básico node para o backend
              </p>
            </section>

            <section className=" flex w-96">
              <div className="w-5 h-5 bg-red-600 rounded-full absolute -left-3  p-3 "></div>
              <div className="w-2 h-56 bg-red-600 md:h-72 "></div>
              <p className="mx-5 p-4 mr-4 text-xl ">
                <span className="text-red-600 font-bold text-2xl">2024</span>{" "}
                Formado Em análise e desenvonvilmento de sistemas busco seguir
                carreira na area como desenvolvedor web, atualmente
                freelancer...
              </p>
            </section>
          </div>
          <Image
            alt="Wallpaper"
            src={Wallpaper}
            className="ml-0 w-full  md:w-full h-2/4"
          />
        </div>
      </div>
    </Element>
  );
}
