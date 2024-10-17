"use client";
import Cards from "../Cards";
import page from "../../Assets/landing page design.jpg";
import coffe from "../../Assets/Coffee Landing page.jpg";
import siteProfile from "../../Assets/Elon Musk User Profile.jpg";
import Finace from "../../Assets/Finance Landing Page.jpg";
import Coding from "../../Assets/Coding.jpg";
import Pricing from "../../Assets/Pricing cards.jpg";
import { Element } from "react-scroll";

export default function WhatDoIDo() {
  return (
    <Element name="WhatDoIdo">
      <div className="w-auto h-auto border-solid  border-4 border-b-red-600  bg-white">
        <div className=" flex justify-center flex-col items-center pt-10 ">
          <h1 className="text-red-600 text-5xl">O que eu faço</h1>
          <p className="text-2xl text-black">Serviços e soluções</p>
        </div>

        {/* Cards e imagens */}

        <div className="w-full h-full flex flex-col justify-center items-center  md:grid grid-cols-2  place-items-center
        xl:grid-cols-3">
          <Cards Title="Sites para divagação de produtos físicos" img={page} />
          <Cards Title="landing page" img={coffe} />
          <Cards Title="sites pessoais" img={siteProfile} />
          <Cards Title="sites para produtos digitais" img={Finace} />
          <Cards Title="Soluções para erros e bugs" img={Coding} />
          <Cards Title="Mudanças e alterações no layout do seu site" img={Pricing} />
        </div>
      </div>
    </Element>
  );
}


