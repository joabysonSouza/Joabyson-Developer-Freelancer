"use client";


import Wallpaper from "../../Images/Wallpaper.jpg";
import Image from "next/image";
import "aos/dist/aos.css";
import { Element } from "react-scroll";
import perfil from "../../Images/IMG_20230612_205841_020.jpg";

export default function About() {
  return (
    <Element name="About">
      <div className="w-screen min-h-screen h-auto mb-40 bg-gradient-to-r from-black to-zinc-800 md:mb-0 ">
        <div className="w-full flex justify-center">
          <h1 className="text-4xl mt-20 p-4 text-red-500 font-semibold border-b-4 border-solid border-t-cyan-50">
            Sobre mim
          </h1>
        </div>

        <div className="w-full h-full mt-20 flex flex-col ml-0  justify-start  items-center md:flex-row md:ml-40 ">
          <Image
            src={perfil}
            alt="foto perfil"
            className="w-56 h-56 md:w-1/4 md:h-1/4 rounded-full "
            data-aos="fade-right"
            data-aos-duration="3000"
          />

          <p
            className="p-7 w-96 mb-96 md:mb-0 md:w-1/3 max-h-96  text-2xl"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            Meu nome é Joabyson Souza, sou desenvolvedor e analista de sistemas
            formado pela Universidade Uniasselvi. Desde jovem, alimentei o sonho
            de trabalhar com programação. Minha paixão reside na criação e
            desenvolvimento de websites, com foco especial em sites pessoais,
            landing pages e plataformas para divulgação de produtos e empresas.
            Esta área me cativa profundamente. Por meio do meu trabalho, busco
            incessantemente aprimorar minhas habilidades e contribuir de maneira
            significativa para o avanço da tecnologia.
          </p>
        </div>

        {/* linha do tempo */}

        <div
          className=" flex flex-col w-full mt-0  md:flex-row md:mt-40 "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className=" w-96 h-full flex flex-col  m-5 relative md:ml-20 ">
            <section className="flex w-96">
              <div className="w-5 h-5 bg-red-600 rounded-full absolute -left-3  p-3 "></div>
              <div className="w-2 h-40 bg-red-600 md:h-44 "></div>
              <p className="mx-5 p-2 text-2xl ">
                <span className="text-red-600 font-bold text-3xl">2021</span>{" "}
                Comecando a cursa analise e desenvolvimento de sistemas na
                universidade uniasselvi
              </p>
            </section>

            <section className=" flex w-96">
              <div className="w-5 h-5 bg-red-600 rounded-full absolute -left-3  p-3 "></div>
              <div className="w-2 h-56 bg-red-600 md:h-64 "></div>
              <p className="mx-5 p-2 text-2xl">
                <span className="text-red-600 font-bold text-3xl">2022</span>{" "}
                Estudando o basico da web como html css e javascript logica de
                proganação e algoritimos git e github e bibliotecas como o react
              </p>
            </section>

            <section className=" flex w-96">
              <div className="w-5 h-5 bg-red-600 rounded-full absolute -left-3  p-3 "></div>
              <div className="w-2 h-56 bg-red-600 md:h-96  "></div>
              <p className="mx-5 p-2 text-2xl ">
                <span className="text-red-600 font-bold text-3xl">2023</span> Me
                aprofundando mais no de denvolvimento web com bibliotecas e
                frameworks,como o Next.js com typescript, consumindo apis e
                estudando o básico node para o backend
              </p>
            </section>

            <section className=" flex w-96">
              <div className="w-5 h-5 bg-red-600 rounded-full absolute -left-3  p-3 "></div>
              <div className="w-2 h-56 bg-red-600 md:h-96 "></div>
              <p className="mx-5 p-2 text-2xl ">
                <span className="text-red-600 font-bold text-3xl">2024</span>{" "}
                Formado Em análise e desenvonvilmento de sistemas busco seguir
                carreira na area como desenvolvedor web, atualmente
                freelancer...
              </p>
            </section>
          </div>
          <Image
            alt="Wallpaper"
            src={Wallpaper}
            className="ml-0 w-full md:ml-56 md:w-2/4 h-2/4"
          />
        </div>
      </div>
    </Element>
  );
}
