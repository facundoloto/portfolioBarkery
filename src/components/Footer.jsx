import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      className="
        mt-20

        bg-stone-900

        px-6
        py-14

        text-white

        dark:bg-black

        transition-colors
        duration-300
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-6xl

          flex-col
          items-center
          justify-between

          gap-8

          md:flex-row
        "
      >
        {/* Left */}
        <div>
          <h2 className="text-3xl font-bold">
            {t("footer.title")}
          </h2>

          <p className="mt-3 text-stone-400">
            Facundo Loto © 2026
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-3 text-lg">
          <a
            href="mailto:tuemail@gmail.com"
            className="
              transition
              hover:text-stone-300
            "
          >
            📧 lotofacundo6@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}