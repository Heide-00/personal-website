import React from "react";
//Dil ve tema  kontrol bileşenleri içe aktarılıyor.
import Controls from "./components/Controls";
//Dil context sağlayıcısı içe aktarılıyor.
import { LanguageProvider } from "./context/LanguageContext";
//Tema context sağlayıcısı içe aktarilıyor.
import { ThemeProvider } from "./context/ThemeContext";
import Hero from "./components/Hero";
import Flows from "./components/Flows";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
//Bildirimler için toast bileşenlerini aktarıyoruz.
import { ToastContainer } from "react-toastify";
//Sahte post  işlemi gerçekleştiriliyor.
import FakePost from "./components/FakePost";

//Ana uygulama fonksiyonu,en dışta tema sağlayıcısı sonra dil sağlayıcısı ve altında ise tüm içerik div kapsayıcısı içerisinde yerleşiyor.
function App() {
return (
  <ThemeProvider>
    <LanguageProvider>
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
         <Controls />
          <Hero />
          <Flows />
          <Profile />
          <Projects />
          <FakePost />
         <ToastContainer />
         <Footer />
      </div>
    </LanguageProvider>
  </ThemeProvider>
);
}

export default App;
