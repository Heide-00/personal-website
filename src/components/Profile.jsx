import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import content from "../data/data";
import profileImg from "../assets/profile/image-2.png";

const Profile = () => {
//Seçilen dil context'ten alınıyor.İlgili dile ait profil içeriği oluşturuluyor.
  const { language } = useContext(LanguageContext);
  const profile = content.profile[language];

  return (
    <section className="py-16 px-4 sm:px-6 bg-blue-600 text-white dark:bg-blue-950 dark:text-gray-100 transition-colors duration-500">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 items-center text-center md:text-left">

        <div>
          <h2 className="text-lg font-semibold text-green-300 mb-2 tracking-wide">
            {profile.leftText.title}
          </h2>
          <h3 className="text-2xl font-bold mb-4">
            {profile.leftText.subheading}
          </h3>
          <ul className="space-y-3 text-base sm:text-lg">
            <li>
              <strong className="text-green-300">Doğum Tarihi:</strong> {profile.leftText.birthdate}
            </li>
            <li>
              <strong className="text-green-300">Şehir:</strong> {profile.leftText.cityresidence}
            </li>
            <li>
              <strong className="text-green-300">Eğitim:</strong> {profile.leftText.education}
            </li>
            <li>
              <strong className="text-green-300">Tercih Ettiği Rol:</strong> {profile.leftText.preference}
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={profileImg}
            alt="Profil"
            className="w-80 sm:w-96 md:w-[450px] lg:w-[520px] h-auto object-contain rounded-none shadow-none transform transition-transform duration-500 hover:scale-105"
          />
        </div>

         <div>
          <h3 className="text-2xl font-bold mb-4">
            {profile.rightText.title}
          </h3>
          <p className="mb-4 leading-relaxed text-sm sm:text-base">
            {profile.rightText.paragraphone}
          </p>
          <p className="leading-relaxed text-sm sm:text-base">
            {profile.rightText.paragraphtwo}
          </p>
        </div>

      </div>
    </section>
  );
};

export default Profile;
