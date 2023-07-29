import { createContext } from "react";
import { useState } from "react";
import Navbar from "./Navbar";

export const LangContext = createContext({
  lang: null,
  setLang: () => {},
});

export const langs = {
  id: {
    home: "Beranda",
    about: "Tentang",
    contact: "Kontak",
    project: "Proyek",
    login: "Masuk",
    intro: "Halo perkenalkan nama saya Sawaluddin",
  },
  en: {
    home: "Home",
    about: "About",
    contact: "Contact",
    project: "Project",
    login: "Login",
    intro: "Hello, my name is Sawaluddin",
  },
};

function App() {
  const [lang, setLang] = useState("id");

  return (
    <div>
      <LangContext.Provider value={{ lang, setLang }}>
        <Navbar lang={lang} />
        <h3 className="text-2xl m-4">{langs[lang].intro}</h3>
        <div className="m-5 flex gap-8 border-spacing-4 border-yellow-600">
          <button
            className="border border-yellow-800 px-4"
            onClick={() => setLang("id")}
          >
            IND
          </button>
          <button
            className="border border-yellow-800 px-4"
            onClick={() => setLang("en")}
          >
            ENG
          </button>
        </div>
      </LangContext.Provider>
    </div>
  );
}

export default App;
