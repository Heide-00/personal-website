import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";

const Controls = () => {
//LanguageContext üzerinden aktif dil ve dil değiştirme fonksiyonunu alıyoruz.
  const { language, setLanguage } = useContext(LanguageContext);
//ThemeContext üzerinden dark mode değerini ve değiştirme fonksiyonunu alıyoruz.
  const { dark, setDark } = useContext(ThemeContext);

//Aktif dili html de html lang alanına yerleştiriyoruz.
  useEffect(() => {
  document.documentElement.lang = language;
}, [language]);

 /* useEffect(() => {
    console.log("Aktif Dil:", language);
  }, [language]);*/

//Dili değiştirip localStorage'a kaydediyoruz.
  const handleToggleLanguage = () => {
    const nextLang = language === "tr" ? "en" : "tr";
    setLanguage(nextLang);
    localStorage.setItem("language", nextLang);
  };
//Temayı değiştiriyoruz.
  const handleThemeToggle = () => {
    setDark(dark ? false : true); // Sağda → açık mod, Solda → dark mod
  };

  return (
    <div className="fixed top-4 right-4 flex items-center gap-6 z-50">
      {/*Dil değiştirici buton */}
      <button
        onClick={handleToggleLanguage}
        className="px-3 py-1 rounded-md text-sm font-medium 
                   bg-transparent 
                   text-blue-700 dark:text-yellow-300 
                   border-none outline-none focus:outline-none 
                   transition-colors"
      >
        {language === "tr" ? "ENGLISH'E GEÇ" : "TÜRKÇE'YE GEÇ"}
      </button>
      
      <div className="flex items-center gap-3">
        {/* Tema geçişi butonu kaydırmalı*/}
        <button
          onClick={handleThemeToggle}
          className="relative w-[64px] h-[32px] rounded-full 
                     bg-purple-600 transition-colors duration-300 
                     border-none outline-none focus:outline-none"
          aria-label="Tema Geçişi"
        >
        <div
            className={`absolute top-1/2 transform -translate-y-1/2 
                        ${!dark ? "right-2" : "left-2"} 
                        w-5 h-5 bg-yellow-300 rounded-full transition-all duration-300`}
          >
           <div className="absolute right-0 top-1/2 -translate-y-1/2 
                            w-1.5 h-1.5 bg-red-500 rounded-full" />
          </div>
        </button>
       <span className="text-sky-600 text-sm sm:text-base font-semibold uppercase select-none tracking-wide">
          DARK MODE
        </span>
      </div>
    </div>
  );
};

export default Controls;