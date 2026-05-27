import Carousel from "./Carousel";

import pasta from "../../data/pasta";

import { useTranslation } from "react-i18next";

export default function PastaCarousel() {
  const { t } = useTranslation();

  return (
    <Carousel
      title={t("gallery.pasta")}
      items={pasta}
    />
  );
}