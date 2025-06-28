import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();
//LaguageProvider bileşeni context apiyi kullanrak uygulamadaki tüm çocuk bileşenlere  dil bilgisini paylaşıyor.
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() =>
    localStorage.getItem("language") || "en"
  );
//language state'i her değiştiğinde localStorage'a yeni değeri yazıyoruz.
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);
//LanguageContext.Provider ile language ve setLanguage(contextteki değerleri) tüm alt bileşenlere sağlıyoruz.
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};




