import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import content from "../data/data";

import img1 from "../assets/projects/rectangle.png";
import img2 from "../assets/projects/rectangle-41.png";

const Projects = () => {
 //Aktif dil,projeler ve başlığı alınıyor.
  const { language } = useContext(LanguageContext);
  const projects = content.projects[language].items;
  const title = content.projects[language].title;
  //Görsellere sıra ile indeks vererek sıralama yapıyoruz.
  const images = [img1, img2];

  return (
    <section className="pt-10 pb-24 px-4 sm:px-6 bg-yellow-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 text-center sm:text-left">
          {title}
        </h2>
       {/*Her proje alanına karşılık gelen görsel indeks aracılığıyla eşleştiriliyor.*/}
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row items-center md:items-stretch gap-6"
          >
          
          <div className="w-full md:w-1/2">
              <img
                src={images[index]}
                alt={`Görsel - ${project.subhead}`}
                className="w-full h-full object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
              />
            </div>
             
             <div className="w-full md:w-1/2 p-6 space-y-4 flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400">
                {project.subhead}
              </h3>
              <p className="text-sm sm:text-base">{project.paragraph}</p>

              <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                <span className="bg-blue-600 text-white px-2 py-1 rounded">{project.buttons.react}</span>
                <span className="bg-blue-600 text-white px-2 py-1 rounded">{project.buttons.redux}</span>
                <span className="bg-blue-600 text-white px-2 py-1 rounded">{project.buttons.vercel}</span>
              </div>
              {/*Siteyi Görüntüle ve GitHub linkleri eklendi*/}
              <div className="flex flex-wrap gap-4 text-sm underline text-blue-800 dark:text-blue-300">
                {/*data.js de tanımladığım View Site ve GitHub ı tıkladığımda sayfanın en başına geliyorum*/}
                <a href="#">{project.underlinedtextone}</a>
                <a href="#">{project.underlinedtexttwo}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;