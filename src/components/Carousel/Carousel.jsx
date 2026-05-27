import { useState } from "react";

import { useTranslation } from "react-i18next";

export default function Carousel({ title, items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [imageIndex, setImageIndex] = useState(0);

  const { t, i18n } = useTranslation();

  const language = i18n.language;

  function nextSlide() {
    setCurrentIndex((prev) =>
      prev === items.length - 1 ? 0 : prev + 1
    );

    setImageIndex(0);
  }

  function previousSlide() {
    setCurrentIndex((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );

    setImageIndex(0);
  }

  return (
    <section
      className="
        mx-auto
        max-w-6xl
        px-6
        py-16
      "
    >
      {/* Section Title */}
      <h2
        className="
          mb-10
          text-center
          text-5xl
          font-bold
        "
      >
        {title}
      </h2>

      {/* Main Card */}
      <div
        className="
          overflow-hidden
          rounded-3xl

          bg-white
          text-black

          dark:bg-stone-900
          dark:text-white

          shadow-2xl

          transition-colors
          duration-300
        "
      >
        {/* Main Image */}
        <div className="relative">
          <img
            src={
              items[currentIndex].images[imageIndex]
            }
            alt={
              items[currentIndex].title[language]
            }
            className="
              h-[550px]
              w-full
              object-cover
            "
          />

          {/* Overlay */}
          <div
            className="
              absolute
              inset-0

              bg-gradient-to-t
              from-black/70
              to-transparent
            "
          />

          {/* Text Over Image */}
          <div
            className="
              absolute
              bottom-0
              left-0

              p-8
              text-white
            "
          >
            <h3 className="text-4xl font-bold">
              {
                items[currentIndex].title[
                  language
                ]
              }
            </h3>

            <p
              className="
                mt-3
                max-w-2xl
                text-lg
                text-stone-200
              "
            >
              {
                items[currentIndex]
                  .description[language]
              }
            </p>
          </div>
        </div>

        {/* Thumbnails */}
        <div
          className="
            flex
            gap-4
            overflow-x-auto

            p-6
          "
        >
          {items[currentIndex].images.map(
            (image, index) => (
              <button
                key={index}
                onClick={() =>
                  setImageIndex(index)
                }
                className={`
                  relative

                  h-24
                  w-24

                  overflow-hidden
                  rounded-2xl

                  border-4

                  transition-all
                  duration-300

                  ${
                    imageIndex === index
                      ? "border-stone-900 dark:border-white scale-105"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }
                `}
              >
                <img
                  src={image}
                  alt=""
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />
              </button>
            )
          )}
        </div>

        {/* Bottom Navigation */}
        <div
          className="
            flex
            items-center
            justify-between

            p-6
          "
        >
          <button
            onClick={previousSlide}
            className="
              rounded-2xl

              bg-stone-900
              px-6
              py-3

              text-white

              transition
              hover:scale-105

              dark:bg-stone-700
            "
          >
            {t("buttons.previous")}
          </button>

          {/* Counter */}
          <div
            className="
              text-lg
              font-semibold
            "
          >
            {currentIndex + 1} / {items.length}
          </div>

          <button
            onClick={nextSlide}
            className="
              rounded-2xl

              bg-stone-900
              px-6
              py-3

              text-white

              transition
              hover:scale-105

              dark:bg-stone-700
            "
          >
            {t("buttons.next")}
          </button>
        </div>
      </div>
    </section>
  );
}