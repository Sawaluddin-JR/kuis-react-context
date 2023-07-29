import { useContext } from "react";
import { LangContext, langs } from "./App";

const Navbar = () => {
  const { lang } = useContext(LangContext);

  return (
    <nav className="first-letter:fixed w-full left-0 top-0 z-[999] bg-gray-800">
      <div className="text-gray-200 md:block hidden px-7 py-2 font-medium rounded-bl-full">
        <ul className="flex items-center gap-12 py-2 text-semibold">
          <li>{langs[lang].home}</li>
          <li>{langs[lang].about}</li>
          <li>{langs[lang].contact}</li>
          <li>{langs[lang].project}</li>
          <li>
            <button className="border p-4 border-fuchsia-300">
              {langs[lang].login}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
