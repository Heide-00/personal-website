import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import content from "../data/data";

// Vite'da görsel dosyasının yolunu çözümleyen yardımcı fonksiyon oluşturuldu.
const getIcon = (filename) =>
  new URL(`../assets/skills/${filename}`, import.meta.url).href;

const Flows = () => {
//İlgili dile karşılık gelen başlık ve item'lar alınıyor.
  const { language } = useContext(LanguageContext);
  const { title, items } = content.flows[language];
//item listesi ikiye  bölünüyor.
  const half = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, half);
  const rightItems = items.slice(half);

  return (
    <section className="pt-10 pb-16 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
      <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left px-4 sm:px-8 mb-10 text-indigo-600">
        {title}
      </h2>
      <div className="flex flex-col lg:flex-row justify-center gap-12 sm:gap-16 px-4 sm:px-8">
        {[leftItems, rightItems].map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-6 w-full lg:w-1/2">
            {/*Her bir yetenek için sadece bir görsel ve ona karşılık gelen başlık render ediliyor.*/}
            {column.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 pl-24 sm:pl-44"
              >
                <img
                  src={getIcon(item.icon)}
                  alt={item.alt}
                  className="w-30 h-30 sm:w-24 sm:h-24 object-contain shrink-0 -mt-2 sm:-mt-4"
                />
                <span className="text-lg sm:text-xl font-medium">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Flows;