import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import content from "../data/data";

import twitterIcon from "../assets/footer/at-sign-1.png";
import codePenIcon from "../assets/footer/codepen-1.png";
import envelopeIcon from "../assets/footer/at-sign-1.png";
import instagramIcon from "../assets/footer/instagram-1.png";

const Footer = () => {
  const { language } = useContext(LanguageContext);
  //Aktif dile göre içerik alınıyor.
  const footer = content.footer[language];

  return (
    <footer className="pt-0 pb-10 px-4 sm:px-8 bg-white text-gray-700 transition-colors duration-500">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h3 className="text-2xl font-semibold">{footer.title}</h3>
        <p className="text-base">{footer.explanation}</p>
        <a
          href={`mailto:${footer.underlinedtext}`}
          className="inline-block text-blue-600 underline font-medium"
        >
          {footer.underlinedtext}
        </a>

        <div className="mt-6 flex justify-center flex-wrap gap-5">
          <img src={twitterIcon} alt="Twitter Icon" className="w-6 h-6 opacity-90 hover:scale-110 transition-transform" />
          <img src={codePenIcon} alt="CodePen Icon" className="w-6 h-6 opacity-90 hover:scale-110 transition-transform" />
          <img src={envelopeIcon} alt="Envelope Icon" className="w-6 h-6 opacity-90 hover:scale-110 transition-transform" />
          <img src={instagramIcon} alt="Instagram Icon" className="w-6 h-6 opacity-90 hover:scale-110 transition-transform" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;








