import { createContext, useState, useEffect } from "react";
//Tema bilgisini paylaşmak için context oluşturuldu.
export const ThemeContext = createContext();
//Alt bileşenlre tema bilgisi sağlandı.
export const ThemeProvider = ({ children }) => {
//karanlık mod kontrolü yapan state tanımlandı.
//useState ile ilk değer LocalStoragedeki tema bilgisine göre  belirleniyor.
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
//dark state her değiştiğinde burası çalışacak.
  useEffect(() => {
    //Kullanıcı teması kaydediliyor.
    localStorage.setItem("theme", dark ? "dark" : "light");
    //Karanlık modu aktive etmek için html root(document.documentElement) elementine dark sınıfını ekleyip veya çıkarıyoruz.
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
//Provider ile context(dark,setDark) değerlerini tüm alt bileşenlere sağlıyoruz.
  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
