import { useTranslation } from "react-i18next";

import { useState, useEffect } from "react";

import bakeryHeader from "../assets/img/header.jpg";

export default function Header() {
  const { t, i18n } = useTranslation();

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="relative h-[75vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={bakeryHeader}
        alt="Bakery Header"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div
        className="
          relative
          z-10
          flex
          h-full
          flex-col
          justify-between
          p-8
        "
      >
        {/* Top Buttons */}
        <div className="flex justify-end gap-4">
          <button
            onClick={() => i18n.changeLanguage("en")}
            className="
              rounded-xl
              bg-stone-900/80
              px-4
              py-2
              text-white
              backdrop-blur
              transition
              hover:bg-stone-700
            "
          >
            EN
          </button>

          <button
            onClick={() => i18n.changeLanguage("es")}
            className="
              rounded-xl
              bg-stone-900/80
              px-4
              py-2
              text-white
              backdrop-blur
              transition
              hover:bg-stone-700
            "
          >
            ES
          </button>

          <button
            onClick={() => {
              setDarkMode((prev) => !prev);
            }}
            className="
              rounded-xl
              bg-stone-900/80
              px-4
              py-2
              text-white
              backdrop-blur
              transition
              hover:bg-stone-700
            "
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Hero Text */}
        <div className="max-w-3xl text-white">
          <h1
            className="
              text-5xl
              font-bold
              md:text-7xl
            "
          >
            {t("hero.title")}
          </h1>

          <p
            className="
              mt-6
              text-xl
              text-stone-200
              md:text-2xl
            "
          >
            {t("hero.subtitle")}
          </p>
        </div>
         <div className="mt-8 flex gap-4">
    <a
      href="/FacundoLoto_cv.pdf"
      download
      className="
        rounded-2xl

        bg-white
        px-6
        py-3

        text-lg
        font-semibold

        text-black

        transition
        hover:scale-105
        hover:bg-stone-200
      "
    >
      📄 Download CV
    </a>
  </div>
      </div>
    </header>
  );
}