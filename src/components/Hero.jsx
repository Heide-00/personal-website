import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import content from "../data/data";
import heroRight from "../assets/header/hero-right.png";

const Hero = () => {
    //Aktif dil ayarını LanguageContext üzerinden çekip,ilgili dile ait veriyi data.js den alıyoruz.
  const { language } = useContext(LanguageContext);
  const hero = content.hero[language];

  return (
    <section className="relative w-full min-h-[70vh] text-green-300 dark:text-green-100 overflow-hidden">

      {/*Arka plan ayarı yapıldı*/}
      <div className="absolute inset-0 z-0 flex">
        <div className="w-[70%] bg-blue-600 dark:bg-blue-950" />
        <div className="w-[30%] bg-green-200 dark:bg-neutral-900" />
      </div>
       <div
        className="hidden md:block absolute top-[45%] -translate-y-1/2 z-10 pointer-events-none"
        style={{ left: "calc(70vw - 210px)" }} 
      >
        <img
          src={heroRight}
          alt="Tanıtım görseli"
          className="w-80 sm:w-96 lg:w-[26rem] object-contain drop-shadow-xl"
        />
      </div>

      {/*İçerik ve yazılar ayarlanıyor*/}
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-stretch w-full px-6 sm:px-12 lg:px-16 py-10 gap-y-10">
        
        <div className="w-full md:w-[70%] flex items-center justify-center">
          <div className="max-w-lg w-full text-center md:text-left space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
              {hero.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl">{hero.subhead}</p>
            <p className="text-sm sm:text-base md:text-lg">{hero.explanation}</p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-3 sm:gap-4 lg:gap-6 mt-4">
              {/*Butonlara eklediğim linklere tıklayarak o sayfaya yönleniyorum*/}
              <a
                href="https://github.com"
                className="px-4 py-2 bg-white text-blue-600 font-semibold rounded hover:bg-gray-200 dark:bg-gray-100 dark:text-blue-700 dark:hover:bg-gray-300 transition"
              >
                {hero.buttons.github}
              </a>
              <a
                href="https://linkedin.com"
                className="px-4 py-2 bg-white text-blue-600 font-semibold rounded hover:bg-gray-200 dark:bg-gray-100 dark:text-blue-700 dark:hover:bg-gray-300 transition"
              >
                {hero.buttons.linkedln}
              </a>
            </div>
          </div>
        </div>

        {/* Mobil görsel ayarlama yapıldı */}
        <div className="block md:hidden w-full flex justify-center z-10">
          <img
            src={heroRight}
            alt="Tanıtım görseli"
            className="w-60 sm:w-72 object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
