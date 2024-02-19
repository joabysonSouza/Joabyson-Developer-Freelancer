import Image from "next/image";
import React from "react";
import perfil from "../../Images/perfil.jpg";

export default function Profile() {
  return (
    <main className="p-10 w-full flex flex-col justify-around md:flex-row">
      <div className="w-96">
        <h1 className="text-red-700 text-3xl font-bold">CITAÇÃO</h1>
        <p className="mt-2 mr-5 text-2xl p-5 animate-fade-down">
          <span>&quot;</span> Não tenha medo de desistir do bom para perseguir o ótimo.<span>&quot;</span> <br />
          <span className="text-red-700 text-2xl p-6 font-bold  md:p-2">
            - John D. Rockefeller
          </span>
        </p>
      </div>

      <div>
        <Image
          src={perfil}
          width={300}
          height={300}
          alt="foto de perfil"
          className="rounded-full my-5 animate-fade-up animate-delay-500 "
        />
      </div>

      <div className="text-3xl w-96">
        <h1 className="text-red-700 text-3xl mb-3 font-bold">Olá</h1>
        <p className="mr-12 p-4 text-2xl md:mr-0 md:p-4 animate-fade-down ">
          Meu nome é Joabyson Souza, sou desenvolvedor e analista de sistemas
          formado pela Universidade Uniasselvi.
        </p>
      </div>
    </main>
  );
}
