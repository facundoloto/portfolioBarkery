import { useTranslation } from "react-i18next";
import profileImage from "../assets/img/header/profile.jpg";

export default function About() {
  const { t } = useTranslation();

return (
  <section className="mx-auto max-w-6xl px-6 py-20">
    <div
      className="
        grid
        gap-10

        rounded-3xl

        bg-white
        text-black

        dark:bg-stone-900
        dark:text-white

        p-10
        shadow-2xl

        transition-colors
        duration-300

        md:grid-cols-2
        md:items-center
      "
    >
      {/* Profile Image */}
  <div className="mx-auto w-full max-w-[400px]">
  <img
    src={profileImage}
    alt="Facundo Loto"
    className="
      aspect-[4/5]
      w-full

      rounded-3xl

      object-cover
      object-center

      shadow-2xl
    "
  />
</div>

      {/* Text */}
      <div>
        <h2 className="text-5xl font-bold">
          {t("about.title")}
        </h2>

        <p className="mt-6 text-lg leading-relaxed">
          {t("about.text1")}
        </p>

        <p
          className="
            mt-4
            text-lg
            leading-relaxed

            text-stone-600

            dark:text-stone-300
          "
        >
          {t("about.text2")}
        </p>

        <p
          className="
            mt-4
            text-lg
            leading-relaxed

            text-stone-600

            dark:text-stone-300
          "
        >
          {t("about.text3")}
        </p>
      </div>
    </div>
  </section>
);
}