"use client"
import Image, { StaticImageData } from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

interface CardsProps {
  Title: string;
  img: StaticImageData;
}

export default function Cards({ Title, img }: CardsProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-96 h-5/6 bg-white p-4  bg-slate-50-300 border-x-slate-600 my-10 drop-shadow-2xl " data-aos="fade-right" data-aos-duration="3000">
      <h1 className="text-2xl text-black font-semibold m-3">{Title}</h1>

      <Image src={img} alt="..." className=" w-full h-96 rounded-xl " />
    </div>
  );
}

